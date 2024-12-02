import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ResultOnpage = () => {
  //
  const [data, setData] = useState([])
  const { id } = useParams()
  const [question, setQuestion] = useState([])
  const [answer, setAnswer] = useState([])
  const [userAnswer, setUserAnswer] = useState([])
  const [tongCauHoi, setTongCauHoi] = useState([])

  const formatDate = (dateS) => {
    const date = new Date(dateS)
    return date.toLocaleString('vi-VN')
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `http://localhost:2000/api/userquiz/result/list/${id}` //id user quiz
        )
        const userQuizData = res.data
        setData(userQuizData)
        const quizId = userQuizData.length > 0 ? userQuizData[0].quiz_id : null
        if (!quizId) {
          console.error('quizId is undefined or empty')
          return
        }

        const res2 = await axios.get(
          `http://localhost:2000/api/useranswer/list/${id}` //id user quiz
        )
        setUserAnswer(res2.data)

        const res3 = await axios.get(
          `http://localhost:2000/api/question/list/userquiz/${id}/quiz/${quizId}` //id quiz
        )
        const questions = res3.data
        const uniqueQuestions = Array.from(
          new Map(questions.map((item) => [item.question_id, item])).values()
        )

        setQuestion(uniqueQuestions)

        const questionId = questions.map((q) => q.question_id)
        setTongCauHoi(uniqueQuestions.length)

        const answers = await Promise.all(
          questionId.map((question_id) =>
            axios
              .get(`http://localhost:2000/api/answeroption/list/${question_id}`)
              .then((res) => res.data)
          )
        )
        const uniqueAnswers = Array.from(
          new Map(
            answers.flat().map((answer) => [answer.option_id, answer])
          ).values()
        )

        setAnswer(uniqueAnswers)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [id])

  return (
    <div>
      <div className="bg-gray-50 flex flex-col md:flex-row p-6 gap-2">
        {/* Cột trái: Timeline */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6 md:mb-0 md:w-3/12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Timeline hoạt động
          </h2>
        </div>

        {/* Cột phải: Kết quả thi */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Kết quả thi
            </h2>

            {data.map((item, index) => (
              <div key={index} className="mb-6 border-t border-gray-200 pt-6">
                {/* Thông tin kết quả */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                  <div className="mb-6 space-y-2">
                    <h3 className="text-lg font-semibold text-blue-600 mb-2">
                      Thông tin học viên
                    </h3>
                    <p className="text-sm text-gray-600 flex flex-col">
                      <span className="font-semibold text-sm">Họ và tên:</span>
                      <span className="font-semibold text-xl text-black">
                        {item.name}
                      </span>
                    </p>
                    <p className="text-sm text-gray-600 flex flex-col">
                      <span className="font-semibold text-sm">Email:</span>
                      <span className="font-semibold text-xl text-black">
                        {item.email}
                      </span>
                    </p>
                  </div>
                  <div className="text-center mb-4 md:mb-0">
                    <p className="text-sm text-black">Điểm số</p>
                    <div className="flex justify-center items-center">
                      <div className="w-20 h-20 rounded-full border-4 border-gray-300 flex items-center justify-center">
                        <p className="text-2xl font-semibold text-red-500">
                          {item.score}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Xếp loại</p>
                    <p className="text-lg font-semibold text-white bg-red-600 rounded-full py-2 px-6">
                      {item.rating}
                    </p>
                  </div>
                </div>
                <hr className="p-2" />
                {/* Thời gian làm bài và các thống kê */}
                <div className="mb-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex gap-2 items-center mb-3">
                      <p className="text-lg text-black ">Thời gian làm</p>
                      <p className="text-lg font-semibold text-green-600">
                        {item.time_taken}
                      </p>
                    </div>
                    <div className="flex gap-2 items-center mb-3">
                      <p className="text-lg text-black">Thời gian kết thúc</p>
                      <p className="text-lg font-semibold text-gray-800">
                        {formatDate(item.date_taken)}
                      </p>
                    </div>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                    <div
                      className="bg-green-500 h-2.5 rounded-full"
                      style={{ width: '100%' }}
                    ></div>
                  </div>
                  {/* Thống kê */}
                  <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                    <div className="flex flex-col gap-2 items-center">
                      <p className="text-lg text-black">Hoàn thành</p>
                      <p className="text-lg font-semibold text-gray-800">
                        100%
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                      <p className="text-lg text-black">Số câu đúng</p>
                      <p className="text-lg font-semibold text-gray-800">
                        {item.total_correct}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                      <p className="text-lg text-black">Số câu sai</p>
                      <p className="text-lg font-semibold text-gray-800">
                        {tongCauHoi - item.total_correct}
                      </p>
                    </div>
                  </div>
                  <hr className="mt-3" />
                </div>
              </div>
            ))}
          </div>
          {/* Question Section */}
          <div className="w-[100%] flex justify-center">
            <div className="w-full bg-white p-4">
              <ul className="space-y-3">
                {question.map((q, i) => {
                  const options = answer.filter(
                    (a) => a.question_id === q.question_id
                  )

                  const userSelected = userAnswer.filter(
                    (ua) => ua.question_id === q.question_id
                  )

                  return (
                    <div key={i} className="bg-white">
                      <h3 className="mb-5 font-semibold text-xl">
                        Câu {i + 1}: {q.question_text}
                      </h3>
                      {q.question_img ? (
                        <div>
                          <img
                            src={
                              'http://localhost:2000/uploads/' + q.question_img
                            }
                            alt="question"
                          />
                        </div>
                      ) : null}
                      <ul className="space-y-2 lg:ml-10">
                        {options.map((option) => {
                          const isUserSelected = userSelected.some(
                            (ua) => ua.selected_option_id === option.option_id
                          )

                          return (
                            <li
                              key={option.option_id}
                              className={`p-2 rounded ${
                                isUserSelected
                                  ? option.is_correct === 1
                                    ? 'bg-green-200' // Người dùng chọn đúng
                                    : 'bg-red-200' // Người dùng chọn sai
                                  : option.is_correct === 1
                                  ? 'bg-blue-200' // Đáp án đúng
                                  : 'bg-gray-100'
                              }`}
                            >
                              {option.option_text}
                              {isUserSelected && (
                                <span className="ml-2 text-yellow-600">
                                  (Đã chọn)
                                </span>
                              )}
                              {option.is_correct === 1 && (
                                <span className="ml-2 text-green-600">
                                  (Đáp án đúng)
                                </span>
                              )}
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  )
                })}
              </ul>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  )
}

export default ResultOnpage

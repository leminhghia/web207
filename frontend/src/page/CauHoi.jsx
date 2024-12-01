import axios from 'axios'
import { useContext, useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Abc from '../components/abc'
import { QuizContext } from '../context/QuizContext'
const CauHoi = () => {
  const [showModal, setShowModal] = useState(false)
  const [showModalSubmit, setShowModalSubmid] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const hancleBack = () => {
    setShowModal(false)
    setShowModalSubmid(false)
  }
  const { id } = useParams()
  const [question, setQuestion] = useState([])
  const [answer, setAnswer] = useState([])
  const [data, setData] = useState([])
  const [color, setColor] = useState({})
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set())
  const { visible, userQuizId, setVisible } = useContext(QuizContext)
  const questionRefs = useRef([])
  const handleNavigateToQuestion = (index) => {
    // setCurrentQuestionIndex(index)
    if (questionRefs.current[index]) {
      questionRefs.current[index].scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const res1 = await axios.get(
          `http://localhost:2000/api/question/list/${id}`
        )
        const questions = res1.data
        setQuestion(questions)

        const questionId = questions.map((q) => q.question_id)

        const answers = await Promise.all(
          questionId.map((question_id) =>
            axios
              .get(`http://localhost:2000/api/answeroption/list/${question_id}`)
              .then((res) => res.data)
          )
        )
        setAnswer(answers.flat())
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [id])

  const handleAdd = (question_id, option_id, isChecked) => {
    if (!question_id || !option_id) {
      return
    }

    const filter = answer.filter((a) => a.question_id === question_id)

    const correct = filter.filter((a) => a.is_correct === 1).length

    const updatedData = [...data]

    if (correct >= 2) {
      if (isChecked) {
        const newData = {
          user_quiz_id: userQuizId,
          question_id,
          option_id,
        }
        setData([...updatedData, newData])
      } else {
        const check = updatedData.findIndex(
          (item) =>
            item.question_id === question_id &&
            item.option_id === item.option_id
        )
        console.log(check)

        if (check !== -1) {
          updatedData.splice(check, 1)
        }
        setData(updatedData)
      }
    } else {
      setColor({ ...color, [question_id]: option_id })

      const check = data.findIndex((item) => item.question_id === question_id)

      if (check !== -1) {
        const updatedData = [...data]
        updatedData[check].option_id = option_id
        setData(updatedData)
      } else {
        const newData = {
          user_quiz_id: userQuizId,
          question_id,
          option_id,
        }
        setData([...data, newData])
      }
    }
    setAnsweredQuestions((prevAnsweredQuestions) => {
      const updated = new Set(prevAnsweredQuestions)
      updated.add(question_id)
      return updated
    })
  }

  const handleSubmit = async (userQuiz) => {
    if (!userQuiz) {
      toast.error('Có lỗi khi nộp bài, vui lòng thử lại')
      return
    }
    try {
      const res = await axios.post(`http://localhost:2000/api/useranswer/add`, {
        answer: data,
        user_quiz_id: userQuizId,
      })
      await axios.put(`http://localhost:2000/api/userquiz/update`, {
        total_correct: res.data.correctCount,
        score: res.data.score,
        user_quiz_id: userQuizId,
        quiz_id: id,
      })
      toast.success(res.data.message)
      // navigate("/resultonpage", { state: { userQuizId } });
    } catch (error) {
      console.error(error)
    }
  }

  const chitiet = () => {}

  return (
    <div className="bg-[#f2f3f5]">
      {visible == false ? (
        <Abc />
      ) : (
        <div className="flex flex-col md:flex-row justify-center gap-5 p-5">
          {/* Sidebar */}

          <div className="w-full md:w-1/4 bg-gray-50 sticky top-[64px] max-h-[80vh] overflow-auto border-r border-gray-200">
            <div className="bg-white shadow-lg rounded-lg p-4">
              <div className="space-y-4">
                <h1 className="text-xl font-bold text-gray-800">Quiz 1</h1>
                <p className="text-sm text-gray-500">Chế độ: Thi thử</p>
                <hr className="border-gray-300" />
              </div>
              <div className="flex flex-col space-y-4 mt-4">
                <div className="text-gray-700 flex flex-col space-y-2">
                  <span className="text-sm font-medium">
                    Thời gian còn lại:
                  </span>
                  <span className="font-bold text-red-500 text-lg">--:--</span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button
                    onClick={() => setShowModal(true)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md shadow-lg transition w-full sm:w-auto"
                  >
                    Trở về
                  </button>

                  {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                      <div className="bg-white rounded-lg p-6 shadow-xl w-11/12 md:w-1/3">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">
                          Bạn có muốn trở về?
                        </h2>
                        <div className="flex justify-end gap-4">
                          <button
                            onClick={() => setVisible(false)}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
                          >
                            Trở về
                          </button>
                          <button
                            onClick={hancleBack}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md transition"
                          >
                            Đóng
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => setShowModalSubmid(true)}
                    className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md shadow-lg transition w-full sm:w-auto"
                  >
                    Nộp bài thi
                  </button>

                  {showModalSubmit && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                      <div className="bg-white rounded-lg p-6 shadow-xl w-11/12 md:w-1/3">
                        {!isSubmitted ? (
                          <>
                            <h2 className="text-lg font-semibold text-gray-800 mb-4">
                              Bạn có muốn nộp bài không?
                            </h2>
                            <div className="flex justify-end gap-4">
                              <button
                                onClick={() => {
                                  handleSubmit(userQuizId)
                                  setIsSubmitted(true)
                                }}
                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow transition"
                              >
                                Xác nhận nộp
                              </button>
                              <button
                                onClick={hancleBack}
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md transition"
                              >
                                Đóng
                              </button>
                            </div>
                          </>
                        ) : (
                          <>
                            <h3 className="text-lg font-semibold text-center mb-4">
                              Chọn hành động
                            </h3>
                            <div className="flex justify-between">
                              <button
                                onClick={hancleBack}
                                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md shadow transition"
                              >
                                Quay lại
                              </button>
                              <Link
                                to={`/resultonpage/${userQuizId}`}
                                onClick={chitiet}
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow transition"
                              >
                                Xem chi tiết
                              </Link>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white mt-6 shadow-lg rounded-lg p-4">
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                Danh sách phần thi
              </h2>
              <ul className="space-y-3">
                {['Phần 1', 'Phần 2', 'Phần 3'].map((part, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center bg-gray-50 hover:bg-gray-100 p-3 rounded-lg cursor-pointer shadow-sm transition"
                  >
                    <span className="flex flex-col text-sm">
                      {part}
                      <span className="text-xs text-gray-500">Tiến độ</span>
                    </span>
                    <span className="text-sm text-gray-600">
                      0/{[47, 51, 26][index]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Question Section */}
          <div className="w-full md:w-2/4 bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-lg">
            <ul className="space-y-6">
              {question.map((q, i) => {
                const filter = answer.filter(
                  (a) => a.question_id === q.question_id
                )
                const iscorret = filter.filter((a) => a.is_correct === 1).length

                return (
                  <div
                    key={i}
                    ref={(el) => (questionRefs.current[i] = el)}
                    className="bg-white p-4 rounded-lg shadow hover:shadow-xl transition-shadow duration-300"
                  >
                    <h3 className="text-lg font-semibold text-blue-700 mb-5">
                      Câu {i + 1}:&nbsp;{q.question_text}
                    </h3>
                    {q.question_img ? (
                      <div className="mb-4">
                        <img
                          src={
                            'http://localhost:2000/uploads/' + q.question_img
                          }
                          alt=""
                          className="w-48 h-36 object-cover rounded-lg border-2 border-blue-300 shadow-md"
                        />
                      </div>
                    ) : null}
                    <ul className="space-y-2">
                      {filter.map((a) => (
                        <li
                          key={a.option_id}
                          className="p-2 rounded-lg cursor-pointer transition-all"
                        >
                          {iscorret > 1 ? (
                            <div className="flex items-center space-x-3">
                              <input
                                type="checkbox"
                                id={`checkbox-${a.option_id}`}
                                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-400 focus:ring-offset-2"
                                onChange={(e) =>
                                  handleAdd(
                                    q.question_id,
                                    a.option_id,
                                    e.target.checked
                                  )
                                }
                              />
                              <label
                                htmlFor={`checkbox-${a.option_id}`}
                                className="text-left text-gray-700"
                              >
                                {a.option_text}
                              </label>
                            </div>
                          ) : (
                            <button
                              className={`w-full text-left px-4 py-2 rounded-lg border transition-all duration-300 ${
                                color[q.question_id] === a.option_id
                                  ? 'bg-blue-500 text-white border-blue-500'
                                  : 'bg-white hover:bg-blue-100 focus:bg-blue-600 focus:text-white'
                              }`}
                              onClick={() =>
                                handleAdd(q.question_id, a.option_id)
                              }
                            >
                              {a.option_text}
                            </button>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </ul>
          </div>

          {/*  */}
          <div
            className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-md mb-4 md:mb-0 sticky top-[64px] max-h-[80vh] overflow-auto z-0 "
            // style={{ top: '64px', maxHeight: '80vh', overflow: 'auto' }}
          >
            <h3 className="text-lg font-bold mb-5">Mục lục câu hỏi</h3>
            <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-6 gap-2">
              {question.map((q, index) => (
                <button
                  key={q.question_id}
                  className={`border rounded p-2 text-center ${
                    answeredQuestions.has(q.question_id)
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 hover:bg-blue-100'
                  }`}
                  onClick={() => handleNavigateToQuestion(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CauHoi

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
console.log(question);

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

  const chitiet = () => { }

  return (
    <div className="bg-[#f2f3f5]">
      {visible == false ? (
        <Abc />
      ) : (
        <div className="flex flex-col md:flex-row justify-center gap-5 p-5">
          {/* Sidebar */}

          <div
            className="w-full md:w-1/4 bg-gray-100 sticky top-[64px] max-h-[80vh] overflow-auto"
          // style={{ top: '64px', maxHeight: '80vh', overflow: 'auto' }}
          >
            <div className="bg-white shadow-md rounded-lg p-3">
              <div className="space-y-3">
                <h1 className="text-lg font-bold">quiz 1</h1>
                <p className="text-sm text-gray-500">Chế độ: Thi thử</p>
                <hr />
              </div>
              <div className="flex flex-col space-y-3">
                <div className="text-gray-700 flex flex-col space-y-2 mt-2">
                  <span className="mr-2">Thời gian còn lại:</span>
                  <span className="font-bold text-red-500"></span>
                </div>
                <hr />
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <div className="w-1/5">
                    <button
                      onClick={() => setShowModal(true)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md shadow w-full sm:w-auto"
                    >
                      Trở về
                    </button>

                    {showModal && (
                      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                        <div className="bg-white rounded-lg p-6 shadow-lg w-11/12 md:w-1/3">
                          <h2 className="text-lg font-semibold mb-4">
                            Bạn có muốn trở về?
                          </h2>
                          <div className="flex justify-end gap-4">
                            <button
                              onClick={() => setVisible(false)}
                              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                            >
                              Trở về
                            </button>
                            <button
                              onClick={hancleBack}
                              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
                            >
                              Đóng
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="w-3/5">
                    <button
                      onClick={() => setShowModalSubmid(true)}
                      className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md shadow w-full sm:w-4/6"
                    >
                      Nộp bài thi
                    </button>

                    {showModalSubmit && (
                      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                        <div className="bg-white rounded-lg p-6 shadow-lg w-11/12 md:w-1/3">
                          {!isSubmitted ? (
                            <>
                              <h2 className="text-lg font-semibold mb-4">
                                Bạn có muốn nộp bài không?
                              </h2>
                              <div className="flex justify-end gap-4">
                                <button
                                  onClick={() => {
                                    handleSubmit(userQuizId)
                                    setIsSubmitted(true)
                                  }}
                                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow"
                                >
                                  Xác nhận nộp
                                </button>
                                <button
                                  onClick={hancleBack}
                                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
                                >
                                  Đóng
                                </button>
                              </div>
                            </>
                          ) : (
                            <>
                              <h3 className="text-lg font-semibold mb-4 text-center">
                                Chọn hành động
                              </h3>
                              <div className="flex justify-between">
                                <button
                                  onClick={hancleBack}
                                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
                                >
                                  Quay lại
                                </button>
                                <Link
                                  to={`/resultonpage/${userQuizId}`}
                                  onClick={chitiet}
                                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
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
            </div>
            {/*  */}
            <div className="bg-white mt-9 shadow-md rounded-lg p-3">
              <h2 className="text-lg font-bold mb-4">Danh sách phần thi</h2>
              <ul className="space-y-2">
                <li className="flex justify-between items-center hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                  <span className="flex flex-col">
                    Phần 1<p className="text-[10px]">Tiến độ</p>
                  </span>
                  <span className="text-gray-500">0/47</span>
                </li>
                <li className="flex justify-between items-center hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                  <span className="flex flex-col">
                    Phần 2<p className="text-[10px]">Tiến độ</p>
                  </span>
                  <span className="text-gray-500">0/51</span>
                </li>
                <li className="flex justify-between items-center hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                  <span className="flex flex-col">
                    Phần 3<p className="text-[10px]">Tiến độ</p>
                  </span>
                  <span className="text-gray-500">0/26</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Question Section */}
          <div className="w-full md:w-2/4 bg-white p-4 rounded-lg shadow">
            <ul className="space-y-3">
              {question.map((q, i) => {
                const filter = answer.filter(
                  (a) => a.question_id === q.question_id
                )

                const iscorret = filter.filter((a) => a.is_correct === 1).length

                return (
                  <div
                    key={i}
                    ref={(el) => (questionRefs.current[i] = el)}
                    className="bg-white"
                  >
                   
              
                    <h3 className="mb-5">
                      {/*&nbsp tạo khoảng trắng */}
                      Câu {i + 1}:&nbsp;{q.question_text}
                    </h3>
                    {
                      q.question_img ? <div>
                        <img src={'http://localhost:2000/uploads/' + q.question_img} alt="" />
                      </div> : <div>a</div>
                    }
                    <ul>
                      {filter.map((a) => (
                        <li
                          key={a.option_id}
                          className="p-2 rounded cursor-pointer"
                        >
                          {iscorret > 1 ? (
                            <div className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id={`checkbox-${a.option_id}`}
                                className="w-4 h-4"
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
                                className="text-left"
                              >
                                {a.option_text}
                              </label>
                            </div>
                          ) : (
                            <button
                              className={`w-full text-left border px-4 py-2 rounded-lg transition-all ${color[q.question_id] === a.option_id
                                  ? 'bg-blue-500 text-white'
                                  : 'bg-white hover:bg-blue-100 focus:bg-blue-600'
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
                  className={`border rounded p-2 text-center ${answeredQuestions.has(q.question_id)
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

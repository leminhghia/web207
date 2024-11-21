import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const CauHoi = () => {
	const [selectedAnswers, setSelectedAnswers] = useState({})
	//
  const { id } = useParams()
  const [question, setQuestion] = useState([])
  const [answer, setAnswer] = useState([])
  const [visible, setVisible] = useState(false)
  const [userQuizId, setUserQuizId] = useState(null)
  const [userAnswer, setUserAnswer] = useState([])
  console.table(userAnswer)
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

  const handlePostData = async () => {
    setVisible(true)
    try {
      const res = await axios.post(`http://localhost:2000/api/userquiz/add`, {
        quiz_id: id,
      })
      setUserQuizId(res.data.user_quiz_id)
    } catch (error) {
      console.error('Error posting data:', error)
    }
  }

  const handleAnswerSelect = async (question_id, option_id) => {
    if (!userQuizId) {
      console.error('Không tìm thấy user_quiz_id')
      return
    }

    try {
      await axios.post(`http://localhost:2000/api/useranswer/add-Update`, {
        user_quiz_id: userQuizId,
        question_id: question_id,
        selected_option_id: option_id,
      })

      const res2 = await axios.get(
        `http://localhost:2000/api/useranswer/list/${userQuizId}`
      )

      setUserAnswer(res2.data)
    } catch (error) {
      console.error('Error adding or updating answer:', error)
    }
  }

  const handleUpdate = async (userquiz) => {
    if (!userquiz) {
      console.error('Không tìm thấy user_quiz_id')
      return
    }
    try {
      await axios.put(`http://localhost:2000/api/userquiz/update`, {
        score: scorePercentage,
        user_quiz_id: userquiz,
        quiz_id: id,
      })
    } catch (error) {
      console.error(error)
    }
  }

  const clacScore = userAnswer.filter((item) => item.is_correct === 1).length

  const totalQuestions = userAnswer.length

  const scorePercentage = (clacScore / totalQuestions) * 10

  return (
    <div>
      {visible == false ? (
        <div>
          <button onClick={handlePostData}>bat dau bai thi</button>{' '}
        </div>
      ) : (
        <div className="flex justify-center gap-5 p-5">
          {/* Sidebar */}
          <div className="w-full md:w-1/4 bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-5">Chương 2 Triết học</h2>
            <p className="mb-3">Chế độ: Ôn thi</p>
            <p className="mb-3">
              Thời gian làm bài thi:{' '}
              <span className="text-blue-600">00 : 00 : 21</span>
            </p>
            <div className="mb-5">
              <label htmlFor="auto-switch" className="block mb-1">
                Tự động chuyển câu:
              </label>
              <select
                id="auto-switch"
                className="border border-gray-300 rounded-md w-full p-2"
              >
                <option value="2s">2s</option>
                <option value="5s">5s</option>
                <option value="10s">10s</option>
              </select>
            </div>
            <div>
              <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                Trở về
              </button>
              <button>Nộp bài</button>
            </div>
          </div>

          {/* Question Section */}
          <div className="w-full md:w-2/4 bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-3">Câu hỏi</h3>
            <ul className="space-y-3">
              {question.map((q, i) => (
                <div key={i} className="bg-gray-100">
                  <h3 className="mb-5">{q.question_text}</h3>
                  <ul>
                    {answer
                      .filter((a) => a.question_id === q.question_id)
                      .map((a) => (
                        <li key={a.option_id} className="mb-2 ">
                          <button
                            className="border border-gray-300 bg-white rounded-lg px-4 py-2 w-full text-left hover:bg-blue-100"
                            onClick={() =>
                              handleAnswerSelect(q.question_id, a.option_id)
                            }
                          >
                            {a.option_text}
                          </button>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </ul>
            <button
              onClick={() => handleUpdate(userQuizId)}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4"
            >
              Nộp bài
            </button>
          </div>

          {/* Question Navigation */}
          <div className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-5">Mục lục câu hỏi</h3>
            <div className="grid grid-cols-6 gap-2">
              {Array.from({ length: 48 }).map((_, index) => (
                <button
                  key={index}
                  className={`border rounded p-2 text-center ${
                    index === 0
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 hover:bg-blue-100'
                  }`}
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

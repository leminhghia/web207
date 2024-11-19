import { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { QuizContext } from '../context/QuizContext'

const Quiz = () => {
  const { Id } = useParams()
  const [data, setData] = useState([])
  const {
    ADAV,
    ADTE,
    ADBS,
    ADUI,
    ASNE,
    CLCO,
    DBAV,
    DBBS,
    GAME,
    HTCS,
    INMA,
    JAAV,
    JABS,
    JSPR,
    LAYO,
    MOWE,
    PHPP,
    PMAG,
    VBPR,
    WEBU,
    subjects,
  } = useContext(QuizContext)

  const questionSets = {
    ADAV,
    ADTE,
    ADBS,
    ADUI,
    ASNE,
    CLCO,
    DBAV,
    DBBS,
    GAME,
    HTCS,
    INMA,
    JAAV,
    JABS,
    JSPR,
    LAYO,
    MOWE,
    PHPP,
    PMAG,
    VBPR,
    WEBU,
  }

  const [selectedProduct, setSelectedProduct] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userAnswers, setUserAnswers] = useState({})
  const [score, setScore] = useState(null)
  const [submissionTime, setSubmissionTime] = useState(null)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [timerActive, setTimerActive] = useState(true)
  useEffect(() => {
    if (questionSets[Id]) {
      const randomQuestions = questionSets[Id].sort(
        () => Math.random() - 0.5
      ).slice(0, 10)
      setSelectedProduct(randomQuestions)
    }
  }, [Id])

  useEffect(() => {
    const proData = subjects.find((subject) => subject.Id === Id)
    setData(proData.Name)
  }, [Id, subjects])

  useEffect(() => {
    let timer
    if (timerActive) {
      timer = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1)
      }, 1000)
    } else {
      clearInterval(timer)
    }

    return () => clearInterval(timer)
  }, [timerActive])

  const selectAnswer = (questionId, answerId) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: answerId,
    })
  }

  const nextQuestion = () => {
    if (currentQuestion < selectedProduct.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const submitQuiz = () => {
    let totalScore = 0
    selectedProduct.forEach((question) => {
      if (userAnswers[question.Id] === question.AnswerId) {
        totalScore += question.Marks
      }
    })
    setScore(totalScore)

    localStorage.setItem(
      Id,
      JSON.stringify({
        quizName: data,
        score: totalScore,
        date: new Date().toLocaleString(),
        time: formatTime(elapsedTime),
      })
    )

    const now = new Date()
    const formattedTime = now.toLocaleString()
    setSubmissionTime(formattedTime)

    setTimerActive(false)
  }

  const currentQuestionData = selectedProduct[currentQuestion]
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
  }

  return (
    <div className="quiz-container max-w-4xl mx-auto p-4 pb-64 relative">
      <div className="text-end">
        <p>Thời gian làm bài: {formatTime(elapsedTime)}</p>
      </div>
      {score === null ? (
        <>
          {selectedProduct.length > 0 ? (
            <>
              <h2 className="text-2xl font-bold mb-4">
                Câu hỏi {currentQuestion + 1}
              </h2>
              <p className="text-lg mb-6">{currentQuestionData.Text}</p>

              <ul className="space-y-4">
                {currentQuestionData.Answers.map((answer) => (
                  <li key={answer.Id} className="flex items-center">
                    <button
                      onClick={() =>
                        selectAnswer(currentQuestionData.Id, answer.Id)
                      }
                      className={`w-full p-3 text-left rounded-lg ${
                        userAnswers[currentQuestionData.Id] === answer.Id
                          ? 'bg-blue-500 text-white'
                          : 'bg-white border border-gray-300 hover:bg-gray-100'
                      }`}
                    >
                      {answer.Text}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="absolute top-[450px]">
                <button
                  onClick={previousQuestion}
                  disabled={currentQuestion === 0}
                  className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 disabled:opacity-50"
                >
                  Trước
                </button>
              </div>
              <div className="absolute top-[450px] right-0">
                {currentQuestion < selectedProduct.length - 1 ? (
                  <button
                    onClick={nextQuestion}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    Tiếp theo
                  </button>
                ) : (
                  <button
                    onClick={submitQuiz}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                  >
                    Nộp bài
                  </button>
                )}
              </div>
            </>
          ) : (
            <p>Không tìm thấy dữ liệu cho bài quiz này.</p>
          )}
        </>
      ) : (
        <>
          <h2 className="text-3xl font-semibold mb-6">
            Điểm của bạn: {score} /{' '}
            {selectedProduct.reduce(
              (total, question) => total + question.Marks,
              0
            )}
          </h2>
          {submissionTime && <p>Thời gian nộp bài: {submissionTime}</p>}
        </>
      )}
    </div>
  )
}

export default Quiz

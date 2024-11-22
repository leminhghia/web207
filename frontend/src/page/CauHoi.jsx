import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IoIosTime } from 'react-icons/io'
import { BiLike } from 'react-icons/bi'
import { BiSolidLike } from 'react-icons/bi'
import { GoHeart } from 'react-icons/go'
import { FcLike } from 'react-icons/fc'
const CauHoi = () => {
  const [activeTab, setActiveTab] = useState('content')
  const [liked, setLiked] = useState(false)
  const [hearted, setHearted] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const hancleBack = () => {
    setShowModal(false)
  }
  const questions = [
    {
      id: 1,
      title: 'Câu 1: (Một đáp án)',
      question: 'Quá trình nào sau đây thuộc quá trình sản xuất?',
      options: [
        'Quá trình tạo phôi',
        'Quá trình gia công cắt gọt',
        'Quá trình lắp ráp',
        'Tất cả các quá trình trên',
      ],
    },
  ]

  const tabs = [
    { id: 'content', label: 'Nội dung đề thi' },
    { id: 'results', label: 'Kết quả ôn tập' },
    { id: 'statistics', label: 'Thống kê ôn tập' },
  ]
  const [selectedAnswers, setSelectedAnswers] = useState({})

  const handleOptionClick = (question_id, option_id) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [question_id]: option_id,
    }))
  }

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
    <div className="bg-[#f2f3f5]">
      {visible == false ? (
        <div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center justify-between">
              {/* Left Side */}
              <div className="grid grid-cols-2 gap-3 items-center">
                <div className="space-y-4">
                  <p className="font-medium text-black">Thông tin đề thi</p>
                  <div className="overflow-hidden w-[300px] h-[150px] rounded-lg shadow-sm">
                    <img
                      src="https://via.placeholder.com/300x150"
                      alt="Hình minh họa đề thi"
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                  </div>
                </div>
                {/* Thông tin */}
                <div className="space-y-4">
                  <h1 className="text-xl font-bold text-gray-700">
                    Công nghệ chế tạo máy
                  </h1>
                  <p className="text-sm text-black flex items-center gap-2 font-medium">
                    <img
                      src="path_to_avatar_image.jpg"
                      alt="Avatar"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    Hải Nguyễn
                  </p>
                  <p className="text-sm text-black flex items-center gap-1 font-medium">
                    <IoIosTime size={20} style={{ color: 'black' }} />
                    12/11/2024
                  </p>
                  {/* like */}
                  <div className="flex space-x-3">
                    <div
                      onClick={() => setLiked(!liked)}
                      className={`cursor-pointer ${
                        liked ? 'text-blue-500' : 'text-black'
                      }`}
                    >
                      {liked ? <BiSolidLike /> : <BiLike />}
                    </div>
                    <div
                      onClick={() => setHearted(!hearted)}
                      className={`cursor-pointer`}
                    >
                      {hearted ? <FcLike /> : <GoHeart />}
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div>
                <div className="flex flex-col space-y-4">
                  <p>Chia sẻ đề thi</p>
                  <div className="flex gap-3">
                    <img
                      src="path_to_avatar_image.jpg"
                      alt="Avatar"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <img
                      src="path_to_avatar_image.jpg"
                      alt="Avatar"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <img
                      src="path_to_avatar_image.jpg"
                      alt="Avatar"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-col items-center space-x-2">
                  <div className="flex items-center text-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="mx-4 font-semibold text-gray-600">
                      hoặc
                    </span>
                    <div className="flex-grow border-t border-gray-400"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="bg-blue-500 text-white text-sm px-3 py-1 rounded-lg">
                      Sao chép link
                    </button>
                    <button className="bg-purple-500 text-white text-sm px-3 py-1 rounded-lg">
                      Quét mã QRCode
                    </button>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>

            {/* Nút hành động */}
            <div className="mt-4 grid grid-cols-3 space-x-4">
              <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg">
                Thẻ ghi nhớ
              </button>
              <button
                className="bg-purple-600 text-white px-4 py-2 rounded-lg"
                // onClick={() => setIsModalOpen(true)}
                onClick={handlePostData}
              >
                Bắt đầu ôn thi
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
                Tải về
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-6 bg-white shadow-md rounded-lg">
            <div className="flex border-b">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`flex-1 text-center py-2 ${
                    activeTab === tab.id
                      ? 'border-b-2 border-indigo-500 text-indigo-600 font-bold'
                      : 'text-gray-600'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            {/*  */}
            <div className="p-6">
              {activeTab === 'content' && (
                <div>
                  <h2 className="text-lg font-semibold mb-4">Phần thi</h2>
                  {questions.map((question) => (
                    <div key={question.id}>
                      <h3 className="text-md font-bold">{question.title}</h3>
                      <p>{question.question}</p>
                      <ul className="list-disc pl-5 space-y-1">
                        {question.options.map((option, index) => (
                          <li key={index}>{option}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center gap-5 p-5">
          {/* Sidebar */}
          <div className="w-1/4 bg-gray-100">
            <div className="bg-white	h-auto] shadow-md rounded-lg p-3">
              <div className="space-y-3">
                <h1 className="text-lg font-bold">Công nghệ chế tạo máy</h1>
                <p className="text-sm text-gray-500">Chế độ: Thi thử</p>
                <hr />
              </div>
              <div className="flex flex-col space-y-3">
                <div className="text-gray-700 flex flex-col space-y-2 mt-2">
                  <span className="mr-2">Thời gian còn lại:</span>
                  <span className="font-bold text-red-500">59:36</span>
                </div>
                <hr />
                <div className="flex items-center gap-3">
                  <div>
                    <button
                      // onClick={() => setVisible(false)}
                      onClick={() => setShowModal(true)}
                      className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md 1/6"
                    >
                      Trở về
                    </button>

                    {showModal && (
                      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                        <div className="bg-white rounded-lg p-6 shadow-lg w-1/3">
                          <h2 className="text-lg font-semibold mb-4">
                            Bạn có muốn trở về?
                          </h2>
                          <div className="flex justify-end gap-4">
                            {/* Nút Trở về */}
                            <button
                              onClick={() => setVisible(false)}
                              className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                            >
                              Trở về
                            </button>
                            {/* Nút Đóng */}
                            <button
                              onClick={hancleBack}
                              className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-md"
                            >
                              Đóng
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {/*  */}
                  <button
                    onClick={() => handleUpdate(userQuizId)}
                    className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md shadow-md w-4/6"
                  >
                    Nộp bài thi
                  </button>
                </div>
              </div>
            </div>
            {/*  */}
            <div className=" bg-white mt-9 h-auto] shadow-md rounded-lg p-3">
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
              {question.map((q, i) => (
                <div key={i} className="bg-white">
                  <h3 className="mb-5">{q.question_text}</h3>
                  <ul>
                    {answer
                      .filter((a) => a.question_id === q.question_id)
                      .map((a) => (
                        <li
                          key={a.option_id}
                          className=" p-2 rounded cursor-pointer"
                        >
                          <button
                            className={`w-full text-left border px-4 py-2 rounded-lg transition-all ${
                              selectedAnswers[q.question_id] === a.question_id
                                ? 'bg-blue-500 text-white'
                                : 'bg-white hover:bg-blue-100 focus:bg-blue-600'
                            }`}
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
            {/* <button
              onClick={() => handleUpdate(userQuizId)}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4"
            >
              Nộp bài
            </button> */}
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

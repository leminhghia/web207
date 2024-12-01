import axios from 'axios'
import { useState, useEffect } from 'react'
import { FaCirclePlay } from 'react-icons/fa6'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { QuizContext } from '../context/QuizContext'

const EduQuiz = () => {
  const [data, setData] = useState([])
  const [user, setUser] = useState([])
  const [isSidebarOpen, setIsSidebarOpen] = useState(false) // Trạng thái sidebar
  const { setVisible } = useContext(QuizContext)
  useEffect(() => {
    async function fetchData() {
      try {
        setVisible(false)
        await axios.get('http://localhost:2000/api/auth/list')
          .then(res => setUser(res.data.user_id))


      } catch (error) {
        console.error(error);

      }
    }
    fetchData()
  }, [setVisible])

  useEffect(() => {
    axios
      .get('http://localhost:2000/api/quizzes/list')
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error('Error fetching quizzes:', err)
      })

  }, [])

  const formatDate = (dateS) => {
    const date = new Date(dateS)
    return date.toLocaleDateString('vi-VN')
  }


  const [isNam, setIsNam] = useState(true)
  const [isNganh, setIsNganh] = useState(true)

  const toggleNam = () => setIsNam(!isNam)
  const toggleNganh = () => setIsNganh(!isNganh)
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <div className="p-4 bg-[#f2f3f5]">
      <p className="text-xl font-medium p-2">Tìm kiếm đề thi</p>

      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Sidebar */}
        <button
          className="md:hidden mb-4 bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          onClick={toggleSidebar}
        >
          <FiMenu /> Menu
        </button>
        <aside
          className={`bg-white p-4 rounded-lg shadow flex flex-col space-y-4 w-full md:w-1/5 ${isSidebarOpen ? 'block' : 'hidden'
            } md:block`}
        >
          <button
            onClick={toggleNam}
            className="font-medium flex justify-between items-center w-full text-left"
          >
            Năm học
            <span>
              {isNam ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </span>
          </button>
          {isNam && (
            <div className="flex flex-col space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> 2024 (7002)
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> 2023 (5325)
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> 2022 (2200)
              </label>
            </div>
          )}
          <div className="flex flex-col space-y-2">
            <button
              onClick={toggleNganh}
              className="font-medium flex justify-between items-center w-full text-left"
            >
              Chuyên ngành
              <span>
                {isNganh ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              </span>
            </button>
            {isNganh && (
              <div className="flex flex-col space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Công nghệ thông tin
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Ngôn ngữ anh
                </label>
              </div>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <div className="bg-[#ffffff] rounded-lg shadow-lg flex-1">
          <header className="flex flex-col sm:flex-row items-center justify-between mb-4 p-4">
            <input
              type="text"
              placeholder="Nhập từ khóa tìm kiếm..."
              className="border rounded-lg px-4 py-2 w-full sm:w-64 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 hover:shadow-sm hover:shadow-[#eadaff]"
            />
            <p className="mt-2 sm:mt-0">
              <span className="text-blue-600">
              </span>{' '}
              kết quả
            </p>
          </header>
          <hr />


          <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {!user ? (
              <div className="col-span-4 text-center">Vui lòng đăng nhập</div>
            ) : (
              data.map((item, index) => (
                <Link to={`${item.quiz_id}`}
                  key={index}
                  className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col justify-between"
                >
                  <div className="flex flex-col space-y-2">
                    <img
                    src={`http://localhost:2000/uploads/${item.quiz_image}`}
                    className="w-full h-32 object-cover rounded"
                    />
                    <h3 className="font-bold text-lg min-h-[3rem]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{formatDate(item.created_at)}</p>
                    {/* <p className="text-sm">
                      <strong>{item.questions}</strong> câu hỏi,{' '}
                      <strong>{item.submissions}</strong> lượt nộp
                    </p> */}
                    <p className="text-sm text-gray-600">
                      Tác giả: {item.name}
                    </p>
                  </div>
                  <div>
                    <hr className="my-2" />
                    <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 flex items-center justify-center gap-2 mr-3">
                      <FaCirclePlay />
                      Vào ôn thi
                    </button>
                  </div>
                </Link>
              ))
            )}
          </main>


        </div>
      </div>
    </div>
  )
}

export default EduQuiz

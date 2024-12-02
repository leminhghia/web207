import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { FaCirclePlay } from 'react-icons/fa6'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { QuizContext } from '../context/QuizContext'
import { assets } from '../assets/assets'
import { CiSearch } from 'react-icons/ci'

const EduQuiz = () => {
  const [data, setData] = useState([])
  const [user, setUser] = useState([])
  const [isSidebarOpen, setIsSidebarOpen] = useState(false) // Trạng thái sidebar
  const { setVisible } = useContext(QuizContext)

  // Trạng thái cho bộ lọc
  const [selectedLevel, setSelectedLevel] = useState([])
  const [selectedSubject, setSelectedSubject] = useState([])
  const [selectedMajor, setSelectedMajor] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        setVisible(false)
        await axios
          .get('http://localhost:2000/api/auth/list')
          .then((res) => setUser(res.data.user_id))
      } catch (error) {
        console.error(error)
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
  const [isMon, setIsMon] = useState(true)
  const toggleMon = () => setIsMon(!isMon)
  const toggleNam = () => setIsNam(!isNam)
  const toggleNganh = () => setIsNganh(!isNganh)
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  const [search, setSearch] = useState('')

  // Bộ lọc quiz dựa trên các thuộc tính
  const filterQuiz = data.filter((item) => {
    // Kiểm tra tiêu chí tìm kiếm
    const matchesSearch =
      (item.title && item.title.toLowerCase().includes(search.toLowerCase())) ||
      formatDate(item.created_at)
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      (item.name && item.name.toLowerCase().includes(search.toLowerCase()))

    // Kiểm tra các điều kiện lọc
    const matchesLevel =
      selectedLevel.length === 0 || selectedLevel.includes(item.level_name)
    const matchesSubject =
      selectedSubject.length === 0 ||
      selectedSubject.includes(item.subject_name)
    const matchesMajor =
      selectedMajor.length === 0 || selectedMajor.includes(item.major_name)

    return matchesSearch && matchesLevel && matchesSubject && matchesMajor
  })

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
          className={`bg-white p-4 rounded-lg shadow w-full md:w-1/5 ${
            isSidebarOpen ? 'block' : 'hidden'
          } md:block`}
          style={{ height: '100vh', position: 'sticky', top: 0 }}
        >
          {/*Trường */}
          <div>
            <button
              onClick={toggleNam}
              className="font-medium flex justify-between items-center w-full text-left"
            >
              Trường
              <span>
                {isNam ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              </span>
            </button>
            {isNam && (
              <div className="h-40 overflow-y-auto flex flex-col space-y-2">
                <label className="flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={selectedLevel.includes('Đại học')}
                    onChange={(e) => {
                      const newLevel = e.target.checked
                        ? [...selectedLevel, 'Đại học']
                        : selectedLevel.filter((level) => level !== 'Đại học')
                      setSelectedLevel(newLevel)
                    }}
                    className="mr-2"
                  />
                  Đại học
                </label>
                <label className="flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={selectedLevel.includes(' Trung học phổ thông')}
                    onChange={(e) => {
                      const newLevel = e.target.checked
                        ? [...selectedLevel, ' Trung học phổ thông']
                        : selectedLevel.filter(
                            (level) => level !== ' Trung học phổ thông'
                          )
                      setSelectedLevel(newLevel)
                    }}
                    className="mr-2"
                  />
                  Trung học phổ thông
                </label>
                <label className="flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={selectedLevel.includes('Cao đẳng')}
                    onChange={(e) => {
                      const newLevel = e.target.checked
                        ? [...selectedLevel, 'Cao đẳng']
                        : selectedLevel.filter((level) => level !== 'Cao đẳng')
                      setSelectedLevel(newLevel)
                    }}
                    className="mr-2"
                  />
                  Cao đẳng
                </label>
                <label className="flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={selectedLevel.includes('Trung học cơ sở')}
                    onChange={(e) => {
                      const newLevel = e.target.checked
                        ? [...selectedLevel, 'Trung học cơ sở']
                        : selectedLevel.filter(
                            (level) => level !== 'Trung học cơ sở'
                          )
                      setSelectedLevel(newLevel)
                    }}
                    className="mr-2"
                  />
                  Trung học cơ sở
                </label>
                <label className="flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={selectedLevel.includes('Cao học')}
                    onChange={(e) => {
                      const newLevel = e.target.checked
                        ? [...selectedLevel, 'Cao học']
                        : selectedLevel.filter((level) => level !== 'Cao học')
                      setSelectedLevel(newLevel)
                    }}
                    className="mr-2"
                  />
                  Cao học
                </label>
                <label className="flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={selectedLevel.includes('Doanh nghiệp')}
                    onChange={(e) => {
                      const newLevel = e.target.checked
                        ? [...selectedLevel, 'Doanh nghiệp']
                        : selectedLevel.filter(
                            (level) => level !== 'Doanh nghiệp'
                          )
                      setSelectedLevel(newLevel)
                    }}
                    className="mr-2"
                  />
                  Doanh nghiệp
                </label>
                <label className="flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={selectedLevel.includes('Trung tâm đào tạo')}
                    onChange={(e) => {
                      const newLevel = e.target.checked
                        ? [...selectedLevel, 'Trung tâm đào tạo']
                        : selectedLevel.filter(
                            (level) => level !== 'Trung tâm đào tạo'
                          )
                      setSelectedLevel(newLevel)
                    }}
                    className="mr-2"
                  />
                  Trung tâm đào tạo
                </label>
                <label className="flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={selectedLevel.includes('Tiểu học')}
                    onChange={(e) => {
                      const newLevel = e.target.checked
                        ? [...selectedLevel, 'Tiểu học']
                        : selectedLevel.filter((level) => level !== 'Tiểu học')
                      setSelectedLevel(newLevel)
                    }}
                    className="mr-2"
                  />
                  Tiểu học
                </label>
              </div>
            )}
          </div>

          {/* ngành */}
          <div>
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
              <div className="h-40 overflow-y-auto flex flex-col space-y-2">
                <label className="flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={selectedMajor.includes('Công nghệ thông tin')}
                    onChange={(e) => {
                      const newMajor = e.target.checked
                        ? [...selectedMajor, 'Công nghệ thông tin']
                        : selectedMajor.filter(
                            (major) => major !== 'Công nghệ thông tin'
                          )
                      setSelectedMajor(newMajor)
                    }}
                    className="mr-2"
                  />
                  Công nghệ thông tin
                </label>
                <label className="flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={selectedMajor.includes('Y Dược')}
                    onChange={(e) => {
                      const newMajor = e.target.checked
                        ? [...selectedMajor, 'Y Dược']
                        : selectedMajor.filter((major) => major !== 'Y Dược')
                      setSelectedMajor(newMajor)
                    }}
                    className="mr-2"
                  />
                  Y Dược
                </label>
                <label className="flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={selectedMajor.includes('Đại cương')}
                    onChange={(e) => {
                      const newMajor = e.target.checked
                        ? [...selectedMajor, 'Đại cương']
                        : selectedMajor.filter((major) => major !== 'Đại cương')
                      setSelectedMajor(newMajor)
                    }}
                    className="mr-2"
                  />
                  Đại cương
                </label>
                <label className="flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={selectedMajor.includes('Luật')}
                    onChange={(e) => {
                      const newMajor = e.target.checked
                        ? [...selectedMajor, 'Luật']
                        : selectedMajor.filter((major) => major !== 'Luật')
                      setSelectedMajor(newMajor)
                    }}
                    className="mr-2"
                  />
                  Luật
                </label>
                <label className="flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={selectedMajor.includes('Kế toán')}
                    onChange={(e) => {
                      const newMajor = e.target.checked
                        ? [...selectedMajor, 'Kế toán']
                        : selectedMajor.filter((major) => major !== 'Kế toán')
                      setSelectedMajor(newMajor)
                    }}
                    className="mr-2"
                  />
                  Kế toán
                </label>
                <label className="flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={selectedMajor.includes('Thương mại')}
                    onChange={(e) => {
                      const newMajor = e.target.checked
                        ? [...selectedMajor, 'Thương mại']
                        : selectedMajor.filter(
                            (major) => major !== 'Thương mại'
                          )
                      setSelectedMajor(newMajor)
                    }}
                    className="mr-2"
                  />
                  Thương mại
                </label>
                <label className="flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={selectedMajor.includes('Du lịch')}
                    onChange={(e) => {
                      const newMajor = e.target.checked
                        ? [...selectedMajor, 'Du lịch']
                        : selectedMajor.filter((major) => major !== 'Du lịch')
                      setSelectedMajor(newMajor)
                    }}
                    className="mr-2"
                  />
                  Du lịch
                </label>
                <label className="flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={selectedMajor.includes('Quản trị kinh doanh')}
                    onChange={(e) => {
                      const newMajor = e.target.checked
                        ? [...selectedMajor, 'Quản trị kinh doanh']
                        : selectedMajor.filter(
                            (major) => major !== 'Quản trị kinh doanh'
                          )
                      setSelectedMajor(newMajor)
                    }}
                    className="mr-2"
                  />
                  Quản trị kinh doanh
                </label>

                {/*  */}
              </div>
            )}
          </div>

          {/*Môn học */}
          <div>
            <button
              onClick={toggleMon}
              className="font-medium flex justify-between items-center w-full text-left"
            >
              Môn học
              <span>
                {isMon ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              </span>
            </button>
            {isMon && (
              <div className="h-40 overflow-y-auto flex flex-col space-y-2">
                <label className="flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={selectedSubject.includes('Toán')}
                    onChange={(e) => {
                      const newSubject = e.target.checked
                        ? [...selectedSubject, 'Toán']
                        : selectedSubject.filter(
                            (subject) => subject !== 'Toán'
                          )
                      setSelectedSubject(newSubject)
                    }}
                    className="mr-2"
                  />
                  Toán
                </label>
                <label className="flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={selectedSubject.includes('Văn')}
                    onChange={(e) => {
                      const newSubject = e.target.checked
                        ? [...selectedSubject, 'Văn']
                        : selectedSubject.filter((subject) => subject !== 'Văn')
                      setSelectedSubject(newSubject)
                    }}
                    className="mr-2"
                  />
                  Văn
                </label>
                <label className="flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={selectedSubject.includes('Hóa')}
                    onChange={(e) => {
                      const newSubject = e.target.checked
                        ? [...selectedSubject, 'Hóa']
                        : selectedSubject.filter((subject) => subject !== 'Hóa')
                      setSelectedSubject(newSubject)
                    }}
                    className="mr-2"
                  />
                  Hóa
                </label>
                <label className="flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={selectedSubject.includes('Lí')}
                    onChange={(e) => {
                      const newSubject = e.target.checked
                        ? [...selectedSubject, 'Lí']
                        : selectedSubject.filter((subject) => subject !== 'Lí')
                      setSelectedSubject(newSubject)
                    }}
                    className="mr-2"
                  />
                  Lí
                </label>
                <label className="flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={selectedSubject.includes('Công nghệ')}
                    onChange={(e) => {
                      const newSubject = e.target.checked
                        ? [...selectedSubject, 'Công nghệ']
                        : selectedSubject.filter(
                            (subject) => subject !== 'Công nghệ'
                          )
                      setSelectedSubject(newSubject)
                    }}
                    className="mr-2"
                  />
                  Công nghệ
                </label>
                <label className="flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={selectedSubject.includes('Triết học')}
                    onChange={(e) => {
                      const newSubject = e.target.checked
                        ? [...selectedSubject, 'Triết học']
                        : selectedSubject.filter(
                            (subject) => subject !== 'Triết học'
                          )
                      setSelectedSubject(newSubject)
                    }}
                    className="mr-2"
                  />
                  Triết học
                </label>
                <label className="flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={selectedSubject.includes('GDCD')}
                    onChange={(e) => {
                      const newSubject = e.target.checked
                        ? [...selectedSubject, 'GDCD']
                        : selectedSubject.filter(
                            (subject) => subject !== 'GDCD'
                          )
                      setSelectedSubject(newSubject)
                    }}
                    className="mr-2"
                  />
                  GDCD
                </label>
                <label className="flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={selectedSubject.includes('Tiếng Anh')}
                    onChange={(e) => {
                      const newSubject = e.target.checked
                        ? [...selectedSubject, 'Tiếng Anh']
                        : selectedSubject.filter(
                            (subject) => subject !== 'Tiếng Anh'
                          )
                      setSelectedSubject(newSubject)
                    }}
                    className="mr-2"
                  />
                  Tiếng Anh
                </label>
              </div>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <div className="bg-[#ffffff] rounded-lg shadow-lg flex-1">
          <header className="flex flex-col sm:flex-row items-center justify-between mb-4 p-4">
            <div className="flex items-center relative">
              <CiSearch className="absolute right-4 z-10 text-gray-500" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="tìm kiếm..."
                className="border rounded-lg px-4 py-2 w-full sm:w-64 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 hover:shadow-sm hover:shadow-[#eadaff]"
              />
            </div>

            <p className="mt-2 sm:mt-0">
              <span className="text-blue-600">{filterQuiz.length} </span>
              kết quả
            </p>
          </header>
          <hr />

          <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {!user ? (
              <div className="col-span-4 text-center">Vui lòng đăng nhập</div>
            ) : filterQuiz.length === 0 ? (
              <div className="col-span-4 text-center">
                Không có kết quả tìm kiếm
              </div>
            ) : (
              filterQuiz.map((item, index) => (
                <Link
                  to={`${item.quiz_id}`}
                  key={index}
                  className="p-4 bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:-translate-y-2"
                >
                  <div className="flex flex-col space-y-2">
                    <img
                      src={
                        item.quiz_image
                          ? `http://localhost:2000/uploads/${item.quiz_image}`
                          : assets.MACDINH
                      }
                      alt={item.title}
                      className="w-full h-32 object-cover rounded"
                    />
                    {/* Tên quiz */}
                    <h3 className="font-bold text-lg min-h-[3rem]">
                      {item.title}
                    </h3>
                    {/* ngày tạo */}
                    <p className="text-sm text-gray-600">
                      {formatDate(item.created_at)}
                    </p>
                    {/* tên tác giả */}
                    <p className="text-sm text-gray-600">
                      Tác giả: {item.name}
                    </p>
                    {/* Trường */}
                    <p className="">{item.level_name}</p>
                    {/* Môn */}
                    <p className="">{item.subject_name}</p>
                    {/* Ngành */}
                    <p className="">{item.major_name}</p>
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

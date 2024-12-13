import { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'

const IntroductionPage = () => {
  const [blogs, setBlogs] = useState([])
  const [users, setUsers] = useState({})
  const [selected, setSelected] = useState('Tất cả')

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:2000/api/blog/list'),
      axios.get('http://localhost:2000/api/auth/list'),
    ])

      .then(([blogRes, userRes]) => {
        setBlogs(blogRes.data)
        setUsers(userRes.data)
      })
      .catch((err) => console.error('Error fetching data:', err))
  }, [])

  const categories = [
    'Tất cả',
    'Bài viết mới nhất',
    'Cẩm nang ôn thi THPTQG',
    'Công cụ học tập',
    'Hoạt động cộng đồng',
    'Kinh nghiệm ôn thi',
    'Tổng hợp đề thi',
  ]
  return (
    <div className="flex flex-col items-center w-full py-6 bg-white">
      {/* Main Wrapper */}
      <div className="w-11/12 md:w-5/6 bg-gray-100 rounded-2xl overflow-hidden p-4 sm:p-6 relative shadow-md">
        {/* Gradient Border */}
        <div className="absolute inset-0 p-[2px] rounded-2xl bg-gradient-to-r from-blue-500 to-pink-500">
          <div className="w-full h-full bg-white rounded-2xl"></div>
        </div>

        <div className="relative">
          {/* Header */}
          <div className="flex justify-center">
            <div className="flex justify-center bg-white py-4 rounded-full shadow-md px-2 sm:px-4">
              <ul className="flex flex-wrap space-x-2 sm:space-x-3 text-xs sm:text-sm font-medium text-gray-500">
                {categories.map((item, index) => (
                  <li
                    key={index}
                    className={`${
                      selected === item
                        ? 'text-transparent bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text'
                        : ''
                    } hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 hover:bg-clip-text`}
                  >
                    <Link
                      to="#"
                      onClick={() => setSelected(item)} // Cập nhật mục được chọn khi click
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-purple-50 rounded-xl p-4 sm:p-6 mx-auto mt-8 shadow-lg flex flex-col md:flex-row gap-6">
            {/* Left Section */}
            <div className="w-full md:w-2/3">
              <img
                src={assets.BANNERBLOG}
                alt="Student"
                className="w-full h-auto rounded-lg shadow"
              />
            </div>

            {/* Right Section */}
            <div className="bg-white p-4 rounded-lg shadow-md w-full md:w-1/3 h-">
              <span className="text-lg text-gray-800 bg-blue-50 py-2 px-3 rounded-3xl">
                Báo chí nói về chúng tôi
              </span>
              <h3 className="mt-2 text-gray-800 font-semibold text-xl">
                7 cách ôn thi trắc nghiệm hiệu quả, điểm cao
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                Hình thức thi trắc nghiệm ngày càng được áp dụng rộng rãi trong
                các kỳ thi quan trọng...
              </p>
              <button className="mt-4 bg-gradient-to-r from-blue-500 to-pink-500 text-white py-2 px-4 rounded-3xl hover:shadow-lg transition-all duration-200 ease-in-out active:scale-95 active:opacity-80">
                <NavLink to="/docThemBlog"> Đọc thêm</NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="w-11/12 md:w-5/6 mt-8">
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg sm:text-xl font-semibold">Bài viết mới nhất</p>
          <Link to="#" className="text-blue-600 text-sm sm:text-base">
            Xem thêm
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {blogs.length === 0 ? (
            <p>Không có bài viết nào</p>
          ) : (
            blogs.map((item, index) => (
              <div
                key={index}
                className="bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-xl hover:bg-gray-300 transition-all duration-300"
              >
                <img
                  src={
                    item.image
                      ? `http://localhost:2000/uploads/${item.image}`
                      : assets.MACDINH
                  }
                  alt={item.title}
                  className="w-full h-36 sm:h-40 object-cover rounded-lg transition-transform transform hover:scale-105 cursor-pointer"
                />
                <h3 className="mt-2 text-sm sm:text-lg font-semibold transition-color">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-gray-600">
                  {item.description}
                </p>
                <button className="mt-4 bg-gradient-to-r from-blue-500 to-pink-500 text-white py-2 px-3 sm:px-4 rounded-3xl hover:shadow-lg text-xs sm:text-sm transition-all duration-200 ease-in-out active:scale-95 active:opacity-80 hover:scale-105 ">
                  Đọc thêm
                </button>
                <button
                  className={`${
                    users?.role == 'student' ||
                    users?.role == 'teacher' ||
                    users?.role == undefined
                      ? 'hidden'
                      : 'block'
                  }`}
                >
                  Edit
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default IntroductionPage

import axios from 'axios'
import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const BlogNew = () => {
  const [blogs, setBlogs] = useState([])
  const [users, setUsers] = useState({})
  //
  useEffect(() => {
    async function fetchData() {
      try {
        const res1 = await axios.get('http://localhost:2000/api/blog/list')
        setBlogs(res1.data)
        console.log(blogs)

        const res2 = await axios.get('http://localhost:2000/api/auth/list')
        setUsers(res2.data)
        console.log(users)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="flex justify-center">
      {' '}
      <div className="w-11/12 md:w-5/6 mt-8">
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg sm:text-xl font-semibold">Bài viết mới nhất</p>
          {/* <Link to="/newblog" className="text-blue-600 text-sm sm:text-base">
            Xem thêm
          </Link> */}
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
                {/*  */}
                <div className="flex justify-between">
                  <button className="mt-4 bg-gradient-to-r from-blue-500 to-pink-500 text-white py-2 px-3 sm:px-4 rounded-3xl hover:shadow-lg text-xs sm:text-sm transition-all duration-200 ease-in-out active:scale-95 active:opacity-80 hover:scale-105 ">
                    Đọc thêm
                  </button>
                  <button
                    to={`/updateBlog/${item.id}`}
                    className={`mt-4 bg-red-600 text-white py-2 px-3 sm:px-4 rounded-3xl hover:shadow-lg text-xs sm:text-sm transition-all duration-200 ease-in-out active:scale-95 active:opacity-80 hover:scale-105${
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
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default BlogNew

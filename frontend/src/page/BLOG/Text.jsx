import axios from 'axios'
import { useEffect, useState } from 'react'

const Text = () => {
  const [oldImage, setOldImage] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:2000/api/blog/list')
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => console.log('Error', err))
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Danh sách bài viết
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.image || `https://via.placeholder.com/400 ${oldImage}`}
              alt={item.title || 'Blog Thumbnail'}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title || 'Tiêu đề bài viết'}
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                {item.description || 'Mô tả ngắn của bài viết.'}
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
                Xem chi tiết
              </button>
            </div>
          </div>
        ))}
      </div>

      {/*  */}
      <form className="mt-8 bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Quản lý bài viết
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Tiêu đề"
            className="border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
          />
          <input
            type="text"
            placeholder="Mô tả"
            className="border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
          />
          <input
            type="text"
            placeholder="URL hình ảnh"
            className="border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mt-4 flex gap-4">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300"
          >
            Thêm bài viết
          </button>
          <button
            type="button"
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors duration-300"
          >
            Cập nhật
          </button>
          <button
            type="button"
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300"
          >
            Xóa
          </button>
        </div>
      </form>
    </div>
  )
}

export default Text

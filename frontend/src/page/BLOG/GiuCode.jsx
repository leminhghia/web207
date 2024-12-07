import axios from 'axios'
import { useEffect, useState } from 'react'

const AddBlog = () => {
  const [data, setData] = useState([])
  const [title, setTitle] = useState('')
  const [tag, setTag] = useState('')
  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [formData, setFormData] = useState({
    image: '',
    tag: '',
    title: '',
    description: '',
  })

  // Add blog
  const handleAddBlog = (e) => {
    e.preventDefault()

    const newBlog = {
      title,
      tag,
      description,
      image: imageUrl,
    }

    axios
      .post('http://localhost:2000/api/blog/list/add', newBlog)
      .then((res) => {
        alert('Thêm bài viết thành công!')
        setData((prevData) => [...prevData, res.data]) // cập nhật danh sách bài viết
        setTitle('')
        setTag('')
        setDescription('')
        setImageUrl('')
        setFormData({
          image: '',
          tag: '',
          title: '',
          description: '',
        })
      })
      .catch((err) => {
        console.error('Error', err)
        alert('Có lỗi xảy ra, vui lòng thử lại!')
      })
  }

  // Fetch dữ liệu blog
  useEffect(() => {
    axios
      .get('http://localhost:2000/api/blog/list')
      .then((res) => setData(res.data))
      .catch((err) => console.error('Error', err))
  }, [])

  // Hàm xử lý thay đổi form
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setFormData({ ...formData, image: imageUrl })
      setImageUrl(imageUrl) // Store image URL separately for POST request
    }
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-start bg-gray-100 p-6 gap-6">
      {/* Form Add Blog */}
      <form
        className="w-full lg:w-1/2 bg-white shadow-md rounded-lg p-6"
        onSubmit={handleAddBlog} // Ensure form submits correctly
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Add Blog</h1>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="image">
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="w-full p-2 border rounded-md"
            onChange={handleImageChange}
          />
        </div>

        {/* Tag */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="tag">
            Tag
          </label>
          <input
            type="text"
            id="tag"
            name="tag"
            value={formData.tag}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter a tag (e.g., Tech, Lifestyle)"
          />
        </div>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter blog title"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter blog description"
            rows="5"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Add Blog
          </button>
        </div>
      </form>

      {/* Preview Blog */}
      <div className="w-full lg:w-1/2 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Preview</h2>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {/* Image */}
          {formData.image && (
            <img
              src={formData.image}
              alt="Preview"
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-4">
            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {formData.title || 'Title Preview'}
            </h2>

            {/* Tag */}
            <p className="text-sm font-medium text-blue-500 mb-2">
              {formData.tag || 'Tag Preview'}
            </p>

            {/* Description */}
            <p className="text-gray-600 text-sm">
              {formData.description || 'Description Preview'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddBlog






import { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'

const IntroductionPage = () => {
  const [data, setData] = useState([])
  const [selected, setSelected] = useState('Tất cả')
  useEffect(() => {
    axios
      .get('http://localhost:2000/api/blog/list')
      .then((res) => setData(res.data))
      .catch((err) => console.error('Error', err))
  })
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
          {data.map((item, index) => (
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
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default IntroductionPage

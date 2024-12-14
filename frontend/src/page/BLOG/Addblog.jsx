import axios from 'axios'
import { useEffect, useState } from 'react'

const AddBlog = () => {
  const [data, setData] = useState([])
  const [formData, setFormData] = useState({
    tag: '',
    title: '',
    description: '',
    image: '',
  })

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

  // Hàm xử lý thay đổi ảnh
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData({ ...formData, image: file })
    }
  }

  // Hàm xử lý khi gửi form
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.tag || !formData.title || !formData.description) {
      alert('Vui lòng nhập đầy đủ thông tin')
      return
    }

    const data = new FormData()
    data.append('tag', formData.tag)
    data.append('title', formData.title)
    data.append('description', formData.description)
    data.append('image', formData.image)

    try {
      const res = await axios.post('http://localhost:2000/api/blog/add', data)
      console.log(res.data.message)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-start bg-gray-100 p-6 gap-6">
      {/* Form Add Blog */}
      <form
        className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Add Blog</h1>

        {/* Image Upload */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="image"
          >
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="w-full p-2 border rounded-md transition-all duration-300 ease-in-out hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
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
            className="w-full p-2 border rounded-md transition-all duration-300 ease-in-out hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter a tag (e.g., Tech, Lifestyle)"
          />
        </div>

        {/* Title */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded-md transition-all duration-300 ease-in-out hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter blog title"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded-md transition-all duration-300 ease-in-out hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter blog description"
            rows="5"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Add Blog
          </button>
        </div>
      </form>

      {/* Preview Blog */}
      <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Preview</h2>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {/* Image */}
          {formData.image && formData.image.name && (
            <img
              src={URL.createObjectURL(formData.image)}
              alt="Preview"
              className="w-full h-48 object-cover transition-all duration-300 ease-in-out transform hover:scale-105"
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

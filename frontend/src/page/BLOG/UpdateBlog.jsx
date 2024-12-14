import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateBlog = () => {
  const { id } = useParams()
  const [tag, setTag] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)
  // const [data, setData] = useState([])
  // const [formData, setFormData] = useState({
  //   tag: '',
  //   title: '',
  //   description: '',
  //   image: null,
  // })
  useEffect(() => {
    axios
      .get(`http://localhost:2000/api/blog/list/ ${id}`)
      .then((res) => {
        const blog = res.data[0]
        setTag(blog.tag)
        setTitle(blog.title)
        setDescription(blog.description)
      })
      .catch((err) => console.error('Error', err))
  }, [id])
  //
  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   })
  // }

  // const handleImageChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     image: e.target.files[0],
  //   })
  // }
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('tag', tag)
    formData.append('title', title)
    formData.append('description', description)
    formData.append('image', file)

    formData.forEach((value, key) => {
      console.log(`${key}, ${value}`)
    })

    try {
      const res = await axios.put(
        `http://localhost:2000/api/blog/update/${id}`,
        formData
      )
      console.log(res.data.message)
      navigate('/')
    } catch (error) {
      console.error('Error', error)
    }
  }

  // console.log(formData)
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Update Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter blog title"
          />
        </div>

        <div>
          <label
            htmlFor="tag"
            className="block text-sm font-medium text-gray-700"
          >
            Tag
          </label>
          <input
            type="text"
            id="tag"
            name="tag"
            value={tag}
            onChange={(event) => setTag(event.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter blog tag"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter blog description"
          />
        </div>

        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={(event) => setFile(event.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          Update Blog
        </button>
      </form>
    </div>
  )
}

export default UpdateBlog

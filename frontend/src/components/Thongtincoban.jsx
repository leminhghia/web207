import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { QuizContext } from '../context/QuizContext'
import { useNavigate, useParams } from 'react-router-dom'

const Thongtincoban = () => {
  const [formData, setFormData] = useState({
    title: '',
    level_id: '',
    level_name: '',
    subject_id: '',
    major_id: '',
    quiz_image: null,
  })

  const [levels, setLevels] = useState([])
  const [subjects, setSubjects] = useState([])
  const [majors, setMajors] = useState([])
  const { id } = useParams()
  const { setTab, setIdthemquiz } = useContext(QuizContext)
  const [oldImage, setOldImage] = useState('')
  const [file, setFile] = useState(null)

  const navigate = useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res1 = await axios.get('http://localhost:2000/api/quizzes/levels')
        setLevels(res1.data)

        const res2 = await axios.get(
          'http://localhost:2000/api/quizzes/subjects'
        )
        setSubjects(res2.data)

        const res3 = await axios.get('http://localhost:2000/api/quizzes/majors')
        setMajors(res3.data)

        const res4 = await axios.get(
          `http://localhost:2000/api/quizzes/list/${id}`
        )
        setFormData({
          title: res4.data.title,
          level_id: res4.data.level_id,
          subject_id: res4.data.subject_id,
          major_id: res4.data.major_id,
        })
        setOldImage(res4.data.quiz_image)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [id])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  //add
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append('title', formData.title)
    data.append('level_id', formData.level_id)
    if (formData.subject_id) data.append('subject_id', formData.subject_id)
    if (formData.major_id) data.append('major_id', formData.major_id)
    if (file) data.append('image', file)

    try {
      const res = await axios.post(
        'http://localhost:2000/api/quizzes/add',
        data
      )
      toast.success(res.data.message)
      setIdthemquiz(res.data.quiz_id)
      navigate(`${res.data.quiz_id}`)
      setTab(2)
    } catch (error) {
      console.error('Error:', error)
    }
  }
	
  const handleUpdate = async (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append('quiz_id', id)
    data.append('title', formData.title)
    data.append('level_id', formData.level_id)
    if (formData.subject_id) data.append('subject_id', formData.subject_id)
    if (formData.major_id) data.append('major_id', formData.major_id)
    if (file) data.append('image', file)

    try {
      const res = await axios.put(
        'http://localhost:2000/api/quizzes/update',
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data', // Quan trọng
          },
        }
      )
      toast.success(res.data.message)
      setTab(2)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <form
      className="grid grid-cols-1 md:grid-cols-[2fr_4fr] gap-6 p-6 bg-gradient-to-r from-pink-50 via-white to-purple-50 shadow-lg rounded-lg"
      onSubmit={id ? handleUpdate : handleSubmit}
    >
      {/* Phần upload ảnh */}
      <div className="border border-gray-300 rounded-md p-6 bg-white shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
        <div className="flex flex-col items-start space-y-4">
          <p className="text-lg font-semibold text-purple-700">📸 Ảnh đề thi</p>
          <input
            type="file"
            name="image"
            onChange={(e) => setFile(e.target.files[0])}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0 file:text-sm file:font-semibold
                   file:bg-gradient-to-r file:from-green-400 file:to-blue-500 file:text-white
                   hover:file:bg-gradient-to-l hover:file:from-blue-500 hover:file:to-green-400"
          />
          {oldImage && (
            <div className="mt-4 w-full">
              <img
                src={`http://localhost:2000/uploads/${oldImage}`}
                alt="Old Image"
                className="w-full h-auto rounded-md shadow-lg transition-transform duration-300 hover:scale-110"
              />
            </div>
          )}
        </div>
      </div>

      {/* Phần thông tin chi tiết */}
      <div className="border border-gray-300 rounded-md p-6 bg-white shadow-md space-y-6 hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
        {/* Tên đề thi */}
        <div>
          <p className="text-lg font-semibold text-blue-700">
            ✍️ Tên đề thi <span className="text-red-600">*</span>
          </p>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md text-gray-800 shadow-sm
                  focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all"
            placeholder="Nhập tên đề thi"
            required
          />
        </div>

        {/* Trình độ */}
        <div>
          <p className="text-lg font-semibold text-green-700">
            📚 Trình độ <span className="text-red-600">*</span>
          </p>
          <select
            name="level_id"
            value={formData.level_id}
            onChange={handleInputChange}
            className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md bg-gradient-to-r from-yellow-200 to-yellow-100 text-gray-800 shadow-sm
                  focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 hover:bg-yellow-300 transition-all"
            required
          >
            <option value="">Chọn trình độ</option>
            {levels.map((level) => (
              <option key={level.level_id} value={level.level_id}>
                {level.level_name}
              </option>
            ))}
          </select>
        </div>

        {/* Môn học và chuyên ngành */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Môn học */}
          <div>
            <p className="text-lg font-semibold text-purple-700">📘 Môn học</p>
            <select
              name="subject_id"
              value={formData.subject_id}
              onChange={handleInputChange}
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md bg-gradient-to-r from-blue-100 to-blue-50 text-gray-800 shadow-sm
                    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 hover:bg-blue-200 transition-all"
            >
              <option value="">Chọn môn học</option>
              {subjects.map((subject) => (
                <option key={subject.subject_id} value={subject.subject_id}>
                  {subject.subject_name}
                </option>
              ))}
            </select>
          </div>

          {/* Chuyên ngành */}
          <div>
            <p className="text-lg font-semibold text-red-700">
              🎓 Chuyên ngành
            </p>
            <select
              name="major_id"
              value={formData.major_id}
              onChange={handleInputChange}
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md bg-gradient-to-r from-pink-100 to-pink-50 text-gray-800 shadow-sm
                    focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 hover:bg-pink-200 transition-all"
            >
              <option value="">Chọn chuyên ngành</option>
              {majors.map((major) => (
                <option key={major.major_id} value={major.major_id}>
                  {major.major_name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Nút submit */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold py-3 rounded-md
                 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-l"
        >
          {id ? '✨ Cập nhật' : '✨ Thêm'}
        </button>
      </div>
    </form>
  )
}

export default Thongtincoban

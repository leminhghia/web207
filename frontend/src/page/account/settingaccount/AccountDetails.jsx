import { useState, useEffect } from 'react'
import { FaCamera, FaEdit } from 'react-icons/fa'
import axios from 'axios'
import { toast } from 'react-toastify'

const AccountDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [oldImage, setOldImage] = useState('')
  const [file, setFile] = useState(null)

  const [formData, setFormData] = useState({
    name: '',
    phonenumber: '',
    email: '',
    gender: '',
    birthday: '',
  })

  useEffect(() => {
    axios
      .get('http://localhost:2000/api/auth/list')
      .then((res) => {
        setFormData({
          name: res.data.name,
          phonenumber: res.data.phonenumber,
          email: res.data.email,
          gender: res.data.gender,
          birthday: res.data.birthday
            ? new Date(res.data.birthday).toISOString().split('T')[0]
            : '',
        })
        setOldImage(res.data.user_image)
      })
      .catch((err) => console.log(err))

    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isModalOpen])

  const handleSave = async (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append('name', formData.name)
    data.append('email', formData.email)
    data.append('phonenumber', formData.phonenumber)
    data.append('gender', formData.gender)
    data.append('birthday', formData.birthday)
    if (file) data.append('image', file)

    try {
      const res = await axios.put(
        'http://localhost:2000/api/auth/update',
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data', // Quan trọng
          },
          withCredentials: true,
        }
      )
      toast.success(res.data.message)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="max-w-3xl p-6 bg-white shadow-lg rounded-lg border border-gray-300">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="flex flex-col md:flex-row items-center space-x-4 mb-4 md:mb-0">
          <div className="relative">
            <img
              src={`http://localhost:2000/uploads/${oldImage}`}
              alt="Avatar"
              className="w-15 h-15 md:w-16 md:h-16 rounded-full border-2 border-gray-300"
            />
            <input
              type="file"
              id="file-input"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
              className="hidden"
            />

            <label
              htmlFor="file-input"
              className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full cursor-pointer"
            >
              <FaCamera className="text-white" />
            </label>
          </div>
          <h1 className="text-xl md:text-2xl font-bold">{formData.name}</h1>
        </div>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
          onClick={() => {
            setIsModalOpen(true)
          }}
        >
          <FaEdit />
          Edit Profile
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p>Họ tên</p>
          <div className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            {formData.name}
          </div>
        </div>
        <div>
          <p>Số điện thoại</p>
          <div className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            {formData.phonenumber}
          </div>
        </div>
        <div>
          <p>Email</p>
          <div className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            {formData.email}
          </div>
        </div>
        <div>
          <p>Giới tính</p>
          <div className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            {formData.gender}
          </div>
        </div>
        <div>
          <p>Ngày sinh</p>
          <div className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            {formData.birthday}
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
          <div className="bg-white p-6 md:p-8 rounded-lg w-11/12 md:w-96 max-h-[90vh] overflow-auto">
            <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>

            <div className="mb-4">
              <p>Họ Tên</p>
              <input
                type="text"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                value={formData.name}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <p>Số điện thoại</p>
              <input
                type="number"
                value={formData.phonenumber}
                onChange={(e) =>
                  setFormData({ ...formData, phonenumber: e.target.value })
                }
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <p>Giới tính</p>
              <select
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
                value={formData.gender}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option disabled>- Chọn Giới Tính</option>
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
              </select>
            </div>

            <div className="mb-4">
              <p>Ngày Sinh</p>
              <input
                value={formData.birthday}
                type="date"
                onChange={(e) =>
                  setFormData({ ...formData, birthday: e.target.value })
                }
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AccountDetails

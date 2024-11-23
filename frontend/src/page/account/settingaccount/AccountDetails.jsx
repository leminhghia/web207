import { useState, useEffect } from 'react'
import { FaCamera, FaEdit } from 'react-icons/fa'
import axios from 'axios'
import { toast } from 'react-toastify'

const AccountDetails = () => {
  const [avatar, setAvatar] = useState('https://via.placeholder.com/150')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [user, setUser] = useState({})
  const [name, setName] = useState('')
  const [phonenumber, setPhoneNumber] = useState('')
  const [gender, setGender] = useState('')
  const [birthday, setBirthday] = useState('')

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setAvatar(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  useEffect(() => {
    axios
      .get('http://localhost:2000/api/auth/list')
      .then((res) => {
        setUser(res.data)
        setName(res.data.name)
        setPhoneNumber(res.data.phonenumber)
        setGender(res.data.gender)
        const formattedBirthday = res.data.birthday
          ? new Date(res.data.birthday).toISOString().split('T')[0]
          : ''

        setBirthday(formattedBirthday)
        if (res.data.avatar) {
          setAvatar(res.data.avatar)
        }
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

  const handleSave = () => {
    axios
      .put(
        'http://localhost:2000/api/auth/update',
        {
          name,
          phonenumber,
          gender,
          birthday,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        toast.success(res.data.message)
        setIsModalOpen(false)
      })
      .catch((err) => {
        toast.error(err.data.Error)
      })
  }

  return (
    <div className="max-w-3xl p-6 bg-white shadow-lg rounded-lg border border-gray-300">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="flex flex-col md:flex-row items-center space-x-4 mb-4 md:mb-0">
          <div className="relative">
            <img
              src={avatar}
              alt="Avatar"
              className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-gray-300"
            />
            <input
              type="file"
              id="file-input"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <label
              htmlFor="file-input"
              className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full cursor-pointer"
            >
              <FaCamera className="text-white" />
            </label>
          </div>
          <h1 className="text-xl md:text-2xl font-bold">{user.name}</h1>
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
            {user.name}
          </div>
        </div>
        <div>
          <p>Số điện thoại</p>
          <div className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            {user.phonenumber}
          </div>
        </div>
        <div>
          <p>Email</p>
          <div className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            {user.email}
          </div>
        </div>
        <div>
          <p>Giới tính</p>
          <div className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            {user.gender}
          </div>
        </div>
        <div>
          <p>Ngày sinh</p>
          <div className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            {birthday}
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
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <p>Số điện thoại</p>
              <input
                type="number"
                value={phonenumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <p>Giới tính</p>
              <select
                onChange={(e) => setGender(e.target.value)}
                value={gender}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option disabled>
                  - Chọn Giới Tính
                </option>
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
              </select>
            </div>

            <div className="mb-4">
              <p>Ngày Sinh</p>
              <input
                value={birthday}
                type="date"
                onChange={(e) => setBirthday(e.target.value)}
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

import { useState, useEffect } from 'react'
import { FaCamera, FaEdit } from 'react-icons/fa'
import Axios from 'axios'

const AccountDetails = () => {
  const [avatar, setAvatar] = useState('https://via.placeholder.com/150')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [user, setUser] = useState({})
  const [formData, setFormData] = useState({
    surName: '',
    name: '',
    phoneNumber: '',
    email: '',
    lop: '',
  })

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

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData({
      ...formData,
      [id]: value,
    })
  }
	

  useEffect(() => {
    Axios.get('http://localhost:2000/user')
      .then((res) => {
        setUser(res.data)
        setFormData({
          surName: res.data.surName || '',
          name: res.data.name || '',
          phoneNumber: res.data.phoneNumber || '',
          email: res.data.email || '',
          lop: res.data.lop || '',
        })
        if (res.data.avatar) {
          setAvatar(res.data.avatar)
        }
      })
      .catch((err) => console.log(err))
  }, [])


  if (!user) {
    return <div>loading...</div>
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src={avatar}
              alt="Avatar"
              className="w-20 h-20 rounded-full border-2 border-gray-300"
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
          <h1 className="text-2xl font-bold mb-4">{user.surName}</h1>
        </div>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
          onClick={() => setIsModalOpen(true)}
        >
          <FaEdit />
          Edit Profile
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            disabled
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="surName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="surName"
            value={formData.surName}
            onChange={handleChange}
            disabled
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            disabled
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            disabled
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="col-span-2">
          <label
            htmlFor="lop"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <input
            type="text"
            id="lop"
            value={formData.lop}
            onChange={handleChange}
            disabled
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
            {Object.keys(formData).map((field) => (
              <div className="mb-4" key={field}>
                <label
                  htmlFor={field}
                  className="block text-sm font-medium text-gray-700"
                >
                  {field
                    .replace(/([A-Z])/g, ' $1')
                    .replace(/^./, (str) => str.toUpperCase())}
                </label>
                <input
                  type="text"
                  id={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            ))}
            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={() => setIsModalOpen(false)}
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

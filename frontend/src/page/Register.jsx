// src/pages/Register.jsx
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'http://localhost:2000/api/auth/register',
        { name, email, password }
      )
      if (response.data.Status === 'success') {
        navigate('/login') // Chuyển hướng sau khi đăng ký thành công
      } else {
        setError(response.data.Error)
      }
    } catch (err) {
      setError('Có lỗi xảy ra, vui lòng thử lại!')
    }
  }

  return (
    <div className="flex items-center min-h-screen bg-gray-100">
      <div>
        <img
          src={assets.BANNERLOGIN}
          alt=""
          className="w-[942px] h-[702px] object-cover"
        />
      </div>
      {/*  */}
      <div className="bg-white p-8 shadow-lg w-full max-w-xl ml-auto h-screen flex items-center">
        <div className="w-full space-y-3">
          <h2 className="text-2xl font-bold mb-6 text-center">Đăng Ký</h2>
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Họ Tên
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 hover:shadow-lg focus:shadow-xl"
                placeholder="Nhập tên tài khoản"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 hover:shadow-lg focus:shadow-xl"
                placeholder="Nhập email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Mật khẩu
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 hover:shadow-lg focus:shadow-xl"
                placeholder="Mật khẩu"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#4864fc] to-[#d03cfc] text-white rounded-md hover:bg-blue-600 hover:scale-105 transition-all duration-200"
            >
              Đăng Ký
            </button>
          </form>
          {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
        </div>
      </div>
    </div>
  )
}

export default Register

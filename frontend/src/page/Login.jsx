// src/pages/Login.jsx
import { useContext, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { QuizContext } from '../context/QuizContext'
// import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { assets } from '../assets/assets'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { reload, setReload } = useContext(QuizContext)

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'http://localhost:2000/api/auth/login',
        { email, password }
      )

      if (response.data.Status === 'success') {
        setReload(true)
        navigate('/') // Chuyển hướng sau khi đăng nhập thành công
      } else {
        setError(response.data.Error)
      }
    } catch (err) {
      setError('Có lỗi xảy ra, vui lòng thử lại!')
    }
  }

  // const [showPassword, setShowPassword] = useState(false)

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword)
  // }
  return (
    <div className="flex items-center min-h-screen bg-gray-100">
      {/* Banner Image */}
      <div>
        <img
          src={assets.BANNERLOGIN}
          alt=""
          className="w-[942px] h-[702px] object-cover"
        />
      </div>
      {/* Login Form */}
      <div className="bg-white p-8 shadow-lg w-full max-w-xl ml-auto h-screen flex items-center">
        <div className="w-full space-y-3">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-center">Đăng Nhập</h2>
              <button
                type=""
                className="w-full py-3 text-white rounded-md bg-gradient-to-r from-[#4864fc] to-[#d03cfc] hover:bg-blue-600 hover:scale-105 transition-all duration-200"
              >
                Google
              </button>
            </div>
            <div className="flex items-center text-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="mx-4 font-semibold text-gray-600">
                Hoặc tiếp tục với
              </span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
          </div>
          <form
            onSubmit={handleLogin}
            className="flex flex-col items-center justify-center"
          >
            <div className="mb-4 w-full">
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
                placeholder="Nhập tài khoảng hoặc Email"
                required
              />
            </div>
            <div className="mb-6 w-full relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Mật khẩu
              </label>
              <div className="flex items-center">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 hover:shadow-lg focus:shadow-xl"
                  placeholder="Nhập mật khẩu của bạn"
                  required
                />
                {/* <button
								type="button"
								onClick={togglePasswordVisibility}
								className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 mt-4 "
							>
								{showPassword ? <FaEyeSlash /> : <FaEye />}
							</button> */}
              </div>
            </div>
            <p className="ml-auto text-lg text-blue-500 hover:underline mb-4 hover:bg-[#f7f9ff]">
              <Link>Quên mật khẩu</Link>
            </p>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#4864fc] to-[#d03cfc] text-white rounded-md hover:bg-blue-600 hover:scale-105 transition-all duration-200"
            >
              Đăng Nhập
            </button>
          </form>
          {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
          <p className="mt-6 text-sm text-center text-gray-600">
            Chưa có tài khoản?{' '}
            <Link to="/register" className="text-blue-500 hover:underline">
              Đăng ký ngay
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login

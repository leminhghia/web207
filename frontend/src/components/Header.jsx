import { assets } from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState([])
  const [menuOpen, setMenuOpen] = useState(false)

  axios.defaults.withCredentials = true

  useEffect(() => {
    axios
      .get(`http://localhost:2000/user`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err))
  }, [])

  const handleDelete = () => {
    axios
      .get('http://localhost:2000/logout')
      .then((res) => {
        window.location.reload(true)
      })
      .catch((err) => console.log(err))
  }

  const handleMenuItemClick = () => {
    // Đóng menu khi click vào một mục
    setMenuOpen(false)
  }

  return (
    <div className="w-full bg-gray-50 z-50 border border-gray-200">
      <div className="flex items-center justify-between gap-4 h-14 p-3 border border-gray-50">
        {/* Logo */}
        <a href="#">
          <img src={assets.LOGO} alt="" width="40" height="40" />
        </a>

        {/* Navigation Links and Account (on the same row) */}
        <div className="flex items-center ml-auto">
          <ul className="flex gap-6 hidden lg:flex">
            <NavLink to="/" onClick={handleMenuItemClick}>
              <p>DRX Quiz</p>
            </NavLink>
            <NavLink to="/gioi-thieu" onClick={handleMenuItemClick}>
              <p>Giới thiệu</p>
            </NavLink>
            <NavLink to="/lien-he" onClick={handleMenuItemClick}>
              <p>Liên hệ</p>
            </NavLink>
            <NavLink to="/gop-y" onClick={handleMenuItemClick}>
              <p>Góp ý</p>
            </NavLink>
            <NavLink to="/hoi-dap" onClick={handleMenuItemClick}>
              <p>Hỏi đáp</p>
            </NavLink>
          </ul>

          {/* Tài khoản dropdown */}
          <div
            onClick={() => setLogin(!login)}
            className={`flex items-center justify-between cursor-pointer relative transition-all ${
              login ? 'text-blue-500' : ''
            } ml-6 hidden lg:flex`}
          >
            <p>Tài Khoản</p>
            {login ? <assets.FaAngleUp /> : <assets.FaAngleDown />}
            <div
              className={`absolute text-black top-[35px] right-[-14px] shadow-md bottom-0 overflow-hidden bg-white h-[180px] ${
                login ? 'w-[170%] border-2' : 'w-0 border-0'
              }`}
            >
              <div className="flex flex-col gap-1">
                {user.useId ? (
                  <div>
                    <p className="text-center"> {user.name}</p>
                    <Link
                      className="hover:bg-gray-300 transition-all w-full text-center"
                      to="/account"
                      onClick={handleMenuItemClick}
                    >
                      <p>Thông tin tài khoản</p>
                    </Link>
                  </div>
                ) : (
                  <div>
                    <Link
                      className="hover:bg-gray-300 transition-all w-full text-center"
                      to="/register"
                      onClick={handleMenuItemClick}
                    >
                      <p>Đăng kí</p>
                    </Link>
                    <Link
                      className="hover:bg-gray-300 transition-all w-full text-center"
                      to="/login"
                      onClick={handleMenuItemClick}
                    >
                      <p>Đăng nhập</p>
                    </Link>
                  </div>
                )}
                <Link
                  className="hover:bg-gray-300 transition-all w-full text-center"
                  to="/"
                  onClick={handleMenuItemClick}
                >
                  <p>Quên mật khẩu</p>
                </Link>
                <hr className="w-[full] border-none h-[1.5px] bg-gray-300 " />
                <button
                  className="hover:bg-gray-300"
                  onClick={() => {
                    handleDelete()
                    window.location.reload(true)
                  }}
                >
                  Đăng xuất
                </button>
                <Link
                  className="hover:bg-gray-300 transition-all w-full text-center"
                  to="/"
                  onClick={handleMenuItemClick}
                >
                  <p>Đổi mật khẩu</p>
                </Link>
                <Link
                  className="hover:bg-gray-300 transition-all w-full text-center"
                  to="/"
                  onClick={handleMenuItemClick}
                >
                  <p>Cập nhật tài khoản</p>
                </Link>
                <Link
                  className="hover:bg-gray-300 transition-all w-full text-center"
                  to="/quizlog"
                  onClick={handleMenuItemClick}
                >
                  <p>Lịch sử làm bài</p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Menu icon for smaller screens */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col bg-white shadow-md w-full">
          <NavLink
            to=""
            className="p-3 hover:bg-gray-300"
            onClick={() => {
              handleMenuItemClick()
            }}
          >
            <p>DRX Quiz</p>
          </NavLink>
          <NavLink
            to="/gioi-thieu"
            className="p-3 hover:bg-gray-300"
            onClick={() => {
              handleMenuItemClick()
            }}
          >
            <p>Giới thiệu</p>
          </NavLink>
          <NavLink
            to="/lien-he"
            className="p-3 hover:bg-gray-300"
            onClick={() => {
              handleMenuItemClick()
            }}
          >
            <p>Liên hệ</p>
          </NavLink>
          <NavLink
            to="/gop-y"
            className="p-3 hover:bg-gray-300"
            onClick={() => {
              handleMenuItemClick()
            }}
          >
            <p>Góp ý</p>
          </NavLink>
          <NavLink
            to="/hoi-dap"
            className="p-3 hover:bg-gray-300"
            onClick={() => {
              handleMenuItemClick()
            }}
          >
            <p>Hỏi đáp</p>
          </NavLink>

          {/* Tài khoản dropdown cho mobile */}
          <div
            onClick={() => setLogin(!login)}
            className={`flex items-center justify-between cursor-pointer relative transition-all ${
              login ? 'text-blue-500' : ''
            } p-3 hover:bg-gray-300`}
          >
            <p>Tài Khoản</p>
            {login ? <assets.FaAngleUp /> : <assets.FaAngleDown />}
            <div
              className={`absolute text-black top-[35px] right-[-14px] shadow-md bottom-0 overflow-hidden bg-white h-[180px] ${
                login ? 'w-[170%] border-2' : 'w-0 border-0'
              }`}
            >
              <div className="flex flex-col gap-1">
                {user.useId ? (
                  <div>
                    <p className="text-center"> {user.name}</p>
                    <Link
                      className="hover:bg-gray-300 transition-all w-full text-center"
                      to="/account"
                      onClick={() => {
                        handleMenuItemClick()
                      }}
                    >
                      <p>Thông tin tài khoản</p>
                    </Link>
                  </div>
                ) : (
                  <div>
                    <Link
                      className="hover:bg-gray-300 transition-all w-full text-center"
                      to="/register"
                      onClick={() => {
                        handleMenuItemClick()
                      }}
                    >
                      <p>Đăng kí</p>
                    </Link>
                    <Link
                      className="hover:bg-gray-300 transition-all w-full text-center"
                      to="/login"
                      onClick={() => {
                        handleMenuItemClick()
                      }}
                    >
                      <p>Đăng nhập</p>
                    </Link>
                  </div>
                )}
                <Link
                  className="hover:bg-gray-300 transition-all w-full text-center"
                  to="/"
                  onClick={() => {
                    handleMenuItemClick()
                  }}
                >
                  <p>Quên mật khẩu</p>
                </Link>
                <hr className="w-[full] border-none h-[1.5px] bg-gray-300 " />
                <button
                  className="hover:bg-gray-300"
                  onClick={() => {
                    handleDelete()
                    window.location.reload(true)
                  }}
                >
                  Đăng xuất
                </button>
                <Link
                  className="hover:bg-gray-300 transition-all w-full text-center"
                  to="/"
                  onClick={() => {
                    handleMenuItemClick()
                  }}
                >
                  <p>Đổi mật khẩu</p>
                </Link>
                <Link
                  className="hover:bg-gray-300 transition-all w-full text-center"
                  to="/"
                  onClick={() => {
                    handleMenuItemClick()
                  }}
                >
                  <p>Cập nhật tài khoản</p>
                </Link>
                <Link
                  className="hover:bg-gray-300 transition-all w-full text-center"
                  to="/quizlog"
                  onClick={() => {
                    handleMenuItemClick()
                  }}
                >
                  <p>Lịch sử làm bài</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header

import { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'
import axios from 'axios'
import { FaBars, FaTimes, FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { BiSolidUserRectangle } from 'react-icons/bi'
import { IoFolderOpen } from 'react-icons/io5'
const Navbar = () => {
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState([])
  const [menuOpen, setMenuOpen] = useState(false)

  axios.defaults.withCredentials = true

  useEffect(() => {
    axios
      .get(`http://localhost:2000/api/auth/list`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err))
  }, [])

  const handleDelete = () => {
    axios
      .get(`http://localhost:2000/api/auth/logout`)
      .then(() => {
        location.reload(true)
      })
      .catch((err) => console.log(err))
  }

  const handleMenuItemClick = () => {
    setMenuOpen(false) // Đóng menu khi click vào một mục
  }

  return (
    <div className="w-full bg-gray-50 z-100  border border-gray-200 sticky top-0">
      <div className="flex items-center justify-between gap-4 h-14 p-3 border border-gray-50">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 font-bold text-[30px]"
        >
          <img src={assets.LOGO} alt="Logo" width="50" height="50" />
          <p>
            <span className="text-blue-600">D</span>
            <span className="text-orange-500">r</span>
            <span className="text-blue-600">x</span> Quiz
          </p>
        </NavLink>

        {/* Navigation Links and Account (on the same row) */}
        <div className="flex items-center ml-auto">
          <ul className="flex gap-6 hidden lg:flex">
            <NavLink to="/Quiz" onClick={handleMenuItemClick}>
              <p>DrxQuiz</p>
            </NavLink>
            <NavLink to="/gioi-thieu" onClick={handleMenuItemClick}>
              <p>Giới Thiệu</p>
            </NavLink>
            <NavLink to="/lien-he" onClick={handleMenuItemClick}>
              <p>Liên Hệ</p>
            </NavLink>
            <NavLink to="/gop-y" onClick={handleMenuItemClick}>
              <p>Góp Ý</p>
            </NavLink>
            <NavLink to="/hoi-dap" onClick={handleMenuItemClick}>
              <p>Hỏi Đáp</p>
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
            {login ? <FaAngleUp /> : <FaAngleDown />}
            <div
              className={`absolute text-black top-[35px] right-[-14px] shadow-md bottom-0 overflow-hidden bg-white h-[180px] ${
                login ? 'w-[170%] border-2' : 'w-0 border-0'
              }`}
            >
              <div className="flex flex-col gap-1">
                {user.user_id ? (
                  <div>
                    {/* <p className="text-center"> {user.name}</p> */}
                    <div className="flex flex-col space-y-1 p-1">
                      <Link
                        className="hover:bg-gray-300 transition-all w-full text-start flex items-center gap-1"
                        to="/account"
                        onClick={handleMenuItemClick}
                      >
                        <BiSolidUserRectangle />
                        <p>Hồ sơ</p>
                      </Link>
                      <Link
                        className="hover:bg-gray-300 transition-all w-full text-start flex items-center"
                        to="/ThuVien"
                        onClick={handleMenuItemClick}
                      >
                        <IoFolderOpen />
                        <p>Thư viện của tôi</p>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="mt-1">
                    <Link
                      className="hover:bg-gray-300 transition-all w-full text-start"
                      to="/register"
                      onClick={handleMenuItemClick}
                    >
                      <p>Đăng kí</p>
                    </Link>
                    <Link
                      className="hover:bg-gray-300 transition-all w-full text-start"
                      to="/login"
                      onClick={handleMenuItemClick}
                    >
                      <p>Đăng nhập</p>
                    </Link>
                  </div>
                )}
                {/* <Link
                  className="hover:bg-gray-300 transition-all w-full text-center"
                  to="/"
                  onClick={handleMenuItemClick}
                >
                  <p>Quên mật khẩu</p>
                </Link> */}
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
                {/* <Link
                  className="hover:bg-gray-300 transition-all w-full text-center"
                  to="/"
                  onClick={handleMenuItemClick}
                >
                  <p>Đổi mật khẩu</p>
                </Link> */}
                {/* <Link
                  className="hover:bg-gray-300 transition-all w-full text-center"
                  to="/"
                  onClick={handleMenuItemClick}
                >
                  <p>Cập nhật tài khoản</p>
                </Link> */}
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
            to="/Quiz"
            className="p-3 hover:bg-gray-300"
            onClick={handleMenuItemClick}
          >
            <p>DrxQuiz</p>
          </NavLink>
          <NavLink
            to="/gioi-thieu"
            className="p-3 hover:bg-gray-300"
            onClick={handleMenuItemClick}
          >
            <p>Giới Thiệu</p>
          </NavLink>
          <NavLink
            to="/lien-he"
            className="p-3 hover:bg-gray-300"
            onClick={handleMenuItemClick}
          >
            <p>Liên Hệ</p>
          </NavLink>
          <NavLink
            to="/gop-y"
            className="p-3 hover:bg-gray-300"
            onClick={handleMenuItemClick}
          >
            <p>Góp Ý</p>
          </NavLink>
          <NavLink
            to="/hoi-dap"
            className="p-3 hover:bg-gray-300"
            onClick={handleMenuItemClick}
          >
            <p>Hỏi Đáp</p>
          </NavLink>

          {/* Tài khoản dropdown cho mobile */}
          <div
            onClick={() => setLogin(!login)}
            className={`flex items-center justify-between cursor-pointer relative transition-all ${
              login ? 'text-blue-500' : ''
            } p-3 hover:bg-gray-300`}
          >
            <p>Tài Khoản</p>
            {login ? <FaAngleUp /> : <FaAngleDown />}
            <div
              className={`absolute text-black top-[35px] right-[-14px] shadow-md bottom-0 overflow-hidden bg-white h-[180px] ${
                login ? 'w-[170%] border-2' : 'w-0 border-0'
              }`}
            >
              <div className="flex flex-col gap-1">
                {user.user_id ? (
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
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar

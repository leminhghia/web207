import { useState, useEffect, useContext } from 'react'
import { assets } from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'
import axios from 'axios'
import { FaBars, FaTimes, FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { BiSolidUserRectangle } from 'react-icons/bi'
import { IoFolderOpen } from 'react-icons/io5'
import { QuizContext } from '../context/QuizContext'

const Navbar = () => {
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState([])
  const [menuOpen, setMenuOpen] = useState(false)
  const { reload, setReload } = useContext(QuizContext)

  axios.defaults.withCredentials = true

  useEffect(() => {
    axios
      .get(`http://localhost:2000/api/auth/list`)
      .then((res) => {
        setUser(res.data)
      })

      .catch((err) => console.log(err))
  }, [])
  // reload lại trang khi đăng nhập thành công
  if (reload === true) {
    setReload(false)
    window.location.reload(true)
  }

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

        <div className="flex items-center ml-auto">
          <ul className="flex gap-6 hidden lg:flex">
          {
              user.role !== 'student' ?
              <NavLink to="/quizadd" onClick={handleMenuItemClick}>
              <p>Tạo quiz</p>
            </NavLink>
            :
            <div></div>
            }
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
            onClick={() => {
              if (!user.user_id) {
                window.location.href = '/login' // Điều hướng đến trang đăng nhập
              } else {
                setLogin(!login) // Toggle menu khi đã đăng nhập
              }
            }}
            className={`flex items-center justify-between cursor-pointer relative transition-all ${
              login ? 'text-blue-500' : ''
            } ml-6 hidden lg:flex`}
          >
            <p className="">{user.user_id ? user.name : 'Đăng nhập'}</p>
            {user.user_id && (login ? <FaAngleUp /> : <FaAngleDown />)}
            {user.user_id && (
              <div
                className={`absolute text-black top-[35px] right-[-14px] shadow-md bottom-0 overflow-hidden bg-white h-[180px] ${
                  login ? 'w-[170%] border-2' : 'w-0 border-0'
                }`}
              >
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="flex flex-col space-y-1 p-1">
                      <Link
                        to="/account"
                        onClick={handleMenuItemClick}
                        className="hover:bg-gray-300 transition-all w-full text-start flex items-center gap-1"
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
                      <hr className="w-[full] border-none h-[1.5px] bg-gray-300 " />
                      <button
                        className="hover:bg-gray-300"
                        onClick={() => {
                          handleDelete()
                          window.location.reload(true) // Reload trang khi đăng xuất
                        }}
                      >
                        Đăng xuất
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
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

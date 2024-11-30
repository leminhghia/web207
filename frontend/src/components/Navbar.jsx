import { useState, useEffect, useContext } from 'react'
import { assets } from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'
import axios from 'axios'
import { FaBars, FaTimes, FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { BiSolidUserRectangle } from 'react-icons/bi'
import { IoFolderOpen } from 'react-icons/io5'
import { QuizContext } from '../context/QuizContext'
import { FaUserCircle } from 'react-icons/fa'
import { IoExitOutline } from 'react-icons/io5'
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
    <div className="w-full h-[70px] bg-gray-50 z-10  border border-gray-200 sticky top-0 items-center">
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

        <div className="flex items-center ml-auto mr-4">
          <ul className="flex gap-6 hidden lg:flex">
            <NavLink
              to="/quizadd"
              onClick={handleMenuItemClick}
              className={`relative p-3 group ${user.role == 'student' || user.role == undefined
                ? 'hidden'
                : 'block'
                }`}
            >
              <p className="group-hover:text-transparent group-hover bg-clip-text bg-gradient-to-r from-[#4864fc] to-[#d03cfc] font-medium">
                Tạo quiz
              </p>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#4864fc] to-[#d03cfc] transition-all group-hover:w-full"></span>
            </NavLink>

            <NavLink
              to="/Quiz"
              onClick={handleMenuItemClick}
              className="relative p-3 group"
            >
              <p className="group-hover:text-transparent group-hover bg-clip-text bg-gradient-to-r from-[#4864fc] to-[#d03cfc] font-medium">
                DrxQuiz
              </p>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#4864fc] to-[#d03cfc] transition-all group-hover:w-full"></span>
            </NavLink>
            <NavLink
              to="/gioi-thieu"
              onClick={handleMenuItemClick}
              className="relative p-3 group"
            >
              <p className="group-hover:text-transparent group-hover bg-clip-text bg-gradient-to-r from-[#4864fc] to-[#d03cfc] font-medium">
                Giới Thiệu
              </p>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#4864fc] to-[#d03cfc] transition-all group-hover:w-full"></span>
            </NavLink>
            <NavLink
              to="/lien-he"
              onClick={handleMenuItemClick}
              className="relative p-3 group"
            >
              <p className="group-hover:text-transparent group-hover bg-clip-text bg-gradient-to-r from-[#4864fc] to-[#d03cfc] font-medium">
                Liên Hệ
              </p>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#4864fc] to-[#d03cfc] transition-all group-hover:w-full"></span>
            </NavLink>
            <NavLink
              to="/gop-y"
              onClick={handleMenuItemClick}
              className="relative p-3 group"
            >
              <p className="group-hover:text-transparent group-hover bg-clip-text bg-gradient-to-r from-[#4864fc] to-[#d03cfc] font-medium">
                Góp Ý
              </p>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#4864fc] to-[#d03cfc] transition-all group-hover:w-full"></span>
            </NavLink>
            <NavLink
              to="/hoi-dap"
              onClick={handleMenuItemClick}
              className="relative p-3 group"
            >
              <p className="group-hover:text-transparent group-hover bg-clip-text bg-gradient-to-r from-[#4864fc] to-[#d03cfc] font-medium">
                Hỏi Đáp
              </p>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#4864fc] to-[#d03cfc] transition-all group-hover:w-full"></span>
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
            className={`flex items-center justify-center cursor-pointer relative transition-all hover:bg-[#f4f4f5] w-[200px] h-[55px]${login ? 'text-blue-500' : ''
              } ml-6 hidden lg:flex`}
          >
            <div className="flex items-center gap-1">
              {
                user.user_image ? <div> <img  className='rounded-full w-[50px] border-black border' src={`http://localhost:2000/uploads/${user.user_image}`} alt="" /> </div> : <FaUserCircle size={35} />
              }
              <p>{user.user_id ? user.name : 'Đăng nhập'}</p>
            </div>

            {/* Dropdown menu */}
            {user.user_id && (
              <div
                className={`absolute top-[40px] right-0 shadow-md bg-white w-full overflow-hidden transition-all duration-300 ease-in-out ${login
                  ? 'max-h-[300px] translate-y-[0%] border-2'
                  : 'max-h-0 border-0 translate-y-[20%]'
                  }`}
              >
                <div className="flex flex-col gap-2 p-1 ">
                  {/* Profile Link */}
                  <Link
                    to="/account"
                    onClick={handleMenuItemClick}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition-colors w-full text-start"
                  >
                    <BiSolidUserRectangle />
                    <p>Hồ sơ</p>
                  </Link>

                  {/* Library Link */}
                  <Link
                    to="/ThuVien"
                    onClick={handleMenuItemClick}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition-colors w-full text-start"
                  >
                    <IoFolderOpen />
                    <p>Thư viện của tôi</p>
                  </Link>

                  <hr className="w-full border-none h-[1.5px] bg-gray-300" />

                  {/* Logout Button */}
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors flex items-center gap-2"
                    onClick={() => {
                      handleDelete()
                      window.location.reload(true) // Reload trang khi đăng xuất
                    }}
                  >
                    <IoExitOutline style={{ color: 'red' }} />
                    Đăng xuất
                  </button>
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
            className={`flex items-center justify-between cursor-pointer relative transition-all ${login ? 'text-blue-500' : ''
              } p-3 hover:bg-gray-300`}
          >
            <p>Tài Khoản</p>
            {login ? <FaAngleUp /> : <FaAngleDown />}
            <div
              className={`absolute text-black top-[35px] right-[-14px] shadow-md bottom-0 overflow-hidden bg-white h-[180px] ${login ? 'w-[170%] border-2' : 'w-0 border-0'
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

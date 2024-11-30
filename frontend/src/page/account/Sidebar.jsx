import { useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { LuBookOpenCheck } from 'react-icons/lu'
import { FaRegUserCircle } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { GoTriangleDown } from 'react-icons/go'
import { BsFillMortarboardFill } from 'react-icons/bs'
import axios from 'axios'

export default function Sidebar({ onSelectSection }) {
  const [active, setActive] = useState('account')
  const [isOpen, setIsOpen] = useState(true)
  const [isOpen2, setIsOpen2] = useState(true)
  const [user, setUser] = useState([])
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  const toggleMenu2 = () => {
    setIsOpen2(!isOpen2)
  }

  const handleSelect = (section) => {
    setActive(section)
    onSelectSection(section)
  }

  useEffect(() => {
    axios.get(`http://localhost:2000/api/auth/list`)
      .then((res) => {
        setUser(res.data)


      })

      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="bg-white text-black h-full w-64 p-6 shadow-lg border border-gray-300 rounded-lg lg:mt-3">
      {/* Profile Section */}
      <div className="flex items-center mb-6 w-full gap-2">

        {
          user.user_image ? <div> <img className='rounded-full w-[50px] border-black border' src={`http://localhost:2000/uploads/${user.user_image}`} alt="" /> </div> 
          : 
          <img
            src="https://via.placeholder.com/50"
            alt="Profile"
            className="rounded-full w-12 h-12 mr-4"
          />
        }
        <div>
          <p className="text-lg font-bold">{user.name}</p>
          <p className="text-gray-500 text-sm">Hello 👋</p>
        </div>
      </div>

      {/* Navigation Section */}
      <button
        className="w-full h-[50px] text-start material-icons mr-3 flex items-center gap-3 justify-between rounded-lg hover:bg-gray-50"
        onClick={toggleMenu}
      >
        <span className="flex items-center gap-1 text-gray-600 font-medium">
          <FaUser />
          Cá nhân
        </span>

        <span
          className={`inline ml-2 text-lg transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'
            }`}
        >
          {isOpen ? <GoTriangleDown /> : <GoTriangleDown />}
        </span>
      </button>

      <div
        className={`transition-all duration-[3s] ease-in-out overflow-hidden ${isOpen ? 'h-auto' : 'h-0'
          }`}
      >
        <button
          onClick={() => handleSelect('account')}
          className={`flex items-center p-3 my-2 rounded-lg text-left w-full ${active === 'account'
            ? 'bg-blue-100 text-blue-500 font-semibold'
            : 'text-gray-600 hover:bg-blue-100 hover:text-blue-500 focus:bg-blue-100 focus:text-blue-500'
            }`}
        >
          <span className="material-icons mr-3 flex items-center gap-3">
            <FaRegUserCircle />
            Hồ Sơ
          </span>
        </button>

        <button
          onClick={() => handleSelect('tests')}
          className={`flex items-center p-3 my-2 rounded-lg text-left w-full ${active === 'tests'
            ? 'bg-blue-100 text-blue-500 font-semibold'
            : 'text-gray-600 hover:bg-blue-100 hover:text-blue-500 focus:bg-blue-100 focus:text-blue-500'
            }`}
        >
          <span className="material-icons mr-3 flex items-center gap-3">
            <LuBookOpenCheck />
            Bài kiểm tra đã làm
          </span>
        </button>
      </div>
      <button
        className="w-full h-[50px] text-start material-icons mr-3 flex items-center gap-3 justify-between rounded-lg hover:bg-gray-50"
        onClick={toggleMenu2}
      >
        <span className="flex items-center gap-1 text-gray-600 font-medium">
          <BsFillMortarboardFill />
          Quản lý
        </span>

        <span
          className={`inline ml-2 text-lg transition-transform duration-300 ${isOpen2 ? 'rotate-180' : 'rotate-0'
            }`}
        >
          {isOpen2 ? <GoTriangleDown /> : <GoTriangleDown />}
        </span>
      </button>

      <div
        className={`transition-all duration-[3s] ease-in-out overflow-hidden ${isOpen2 ? 'h-auto' : 'h-0'
          }`}
      >
        <button
          onClick={() => handleSelect('examquestion')}
          className={`flex items-center p-3 my-2 rounded-lg text-left w-full ${active === 'examquestion'
            ? 'bg-blue-100 text-blue-500 font-semibold'
            : 'text-gray-600 hover:bg-blue-100 hover:text-blue-500 focus:bg-blue-100 focus:text-blue-500'
            }`}
        >
          <span className="material-icons mr-3 flex items-center gap-3">
            <FaRegUserCircle />
            Đề thi
          </span>
        </button>

        <button
          onClick={() => handleSelect('khoahoc')}
          className={`flex items-center p-3 my-2 rounded-lg text-left w-full ${active === 'khoahoc'
            ? 'bg-blue-100 text-blue-500 font-semibold'
            : 'text-gray-600 hover:bg-blue-100 hover:text-blue-500 focus:bg-blue-100 focus:text-blue-500'
            }`}
        >
          <span className="material-icons mr-3 flex items-center gap-3">
            <LuBookOpenCheck />
            Khóa học đăng ký
          </span>
        </button>

        <button
          onClick={() => handleSelect('settings')}
          className={`flex items-center p-3 my-2 rounded-lg text-left w-full ${active === 'settings'
            ? 'bg-blue-100 text-blue-500 font-semibold'
            : 'text-gray-600 hover:bg-blue-100 hover:text-blue-500 focus:bg-blue-100 focus:text-blue-500'
            }`}
        >
          <span className="material-icons mr-3 flex items-center gap-3">
            <IoMdSettings />
            Cài đặt tài khoản
          </span>
        </button>
      </div>
    </div>
  )
}

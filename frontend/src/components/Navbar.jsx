import { useState, useEffect, useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'
import { QuizContext } from '../context/QuizContext'
const Navbar = () => {
  const { url } = useContext(QuizContext)
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState([])
  axios.defaults.withCredentials = true

  useEffect(() => {
    axios
      .get(`${url}/auth/list`)
      .then((res) => setUser(res.data))

      .catch((err) => console.log(err));
  }, []);

  const handleDelete = () => {
    axios.get(`${url}/auth/logout`)
      .then(res => { location.reload(true) })
      .catch(err => console.log(err)
      )
  }


  return (
    <div >

<div className={` ${user.role !== 'student' ? 'hidden' : 'flex'}`}>
</div>

{user.role !== 'student' ?<div>hien</div> : <div> an</div>}

      <img src={assets.banner} className='w-full' alt="" />
      <div className='flex justify-between items-center p-3 border border-gray-300 bg-gray-100'>
        <ul className='flex gap-x-6'>
          <NavLink to='/'>
            <p>FPT Polytechnic</p>
          </NavLink>
          <NavLink to='/gioi-thieu'>
            <p>Giới Thiệu</p>
          </NavLink>
          <NavLink to='/lien-he'>
            <p>Liên Hệ</p>
          </NavLink>
          <NavLink to='/gop-y'>
            <p>Góp Ý</p>
          </NavLink>
          <NavLink to='/hoi-dap'>
            <p>Hỏi Đáp</p>
          </NavLink>
        </ul>
        <div onClick={() => setLogin(!login)} className={`flex items-center justify-between cursor-pointer  relative transition-all ${login ? 'text-blue-500' : ''}`}>
          <p>Tài Khoản</p>
          {login ? <assets.FaAngleUp /> : <assets.FaAngleDown />}
          <div className={`absolute text-black top-[35px] right-[-14px] shadow-md bottom-0 overflow-hidden bg-white h-[200px]  ${login ? 'w-[170%] border-2' : 'w-0 border-0'}`}>
            <div className='flex flex-col  gap-1'>
              {user.user_id ? <div>
                <p className='text-center'> {user.name}</p>
                <Link className='hover:bg-gray-300 transition-all w-full text-center' to='/account'><p>Thông tin tài khoản</p></Link>
              </div> :
                <div>  <Link className='hover:bg-gray-300 transition-all w-full text-center' to='/register'><p>Đăng kí</p></Link>
                  <Link className='hover:bg-gray-300 transition-all w-full text-center' to='/login'><p>Đăng nhập</p></Link></div>
              }
              <Link className='hover:bg-gray-300 transition-all w-full text-center' to='/'><p>Quên mật khẩu</p></Link>
              <hr className="w-[full]  border-none h-[1.5px] bg-gray-300 " />
              <button className='hover:bg-gray-300' onClick={handleDelete}>Đăng xuất</button>
              <Link className='hover:bg-gray-300 transition-all w-full text-center' to='/'><p>Đổi mật khẩu</p></Link>
              <Link className='hover:bg-gray-300 transition-all w-full text-center' to='/'><p>Cập nhật tài khoản</p></Link>
              <Link className='hover:bg-gray-300 transition-all w-full text-center' to='/quizlog'><p>Lịch sử làm bài</p></Link>

            </div>
          </div>
        </div>
      </div>

    </div >
  )
}

export default Navbar

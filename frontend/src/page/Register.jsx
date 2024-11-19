import { useState,useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { QuizContext } from '../context/QuizContext';
const Register = () => {
    const {url} = useContext(QuizContext)
    const [values, setValues] = useState({
        surName: '',
        name: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        axios.post('url/auth/register', values)
            .then(res => {
                if (res.data.Status === "success") {
                    navigate('/login')
                } else {
                    alert("error")
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
            <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                <p className='prata-regular text-3xl'>Đăng kí</p>
                <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
            </div>
            <input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Họ' required onChange={e => setValues({ ...values, surName: e.target.value })} />
            <input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Tên' required onChange={e => setValues({ ...values, name: e.target.value })} />
            <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required onChange={e => setValues({ ...values, email: e.target.value })} />
            <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Mật khẩu' required onChange={e => setValues({ ...values, password: e.target.value })} />
            <div className='w-full flex justify-between text-sm mt-[-8px]'>
                <p className='cursor-pointer'>Quên mật khẩu ?</p>
                <Link to='/login' className='cursor-pointer'>Đăng nhập</Link>
            </div>
            <button className='bg-black text-white font-light px-8 py-2 mt-4'>
                Đăng kí
            </button>
        </form>
    );
};

export default Register;

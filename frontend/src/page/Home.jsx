import { useState, useEffect, useContext } from 'react';
import { assets } from '../assets/assets';
import { QuizContext } from '../context/QuizContext';
import ProductItem from '../components/ProductItem';
import { useNavigate  } from 'react-router-dom';
import axios from 'axios'
const Home = () => {
    const { subjects,reload,setReload } = useContext(QuizContext)
    const [data, setData] = useState([])
    const [user,setUser] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate()
    const itemsPerPage = 4;

    useEffect(() => {

        if (!reload ) {
            setTimeout(() => {
                setReload(true)
                window.location.reload();
            }, 1000);
        }
    }, []); 

    useEffect(() => {
        setData(subjects);
    
        
    }, [ subjects]);

    useEffect(() => {
        axios
          .get(`http://localhost:2000/user`)
          .then((res) => setUser(res.data.useId))
    
          .catch((err) => console.log(err));
    
    
      }, []);

    const LastIndex = currentPage * itemsPerPage;
    const FirstIndex = LastIndex - itemsPerPage;
    const currentItems = data.slice(FirstIndex, LastIndex);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const handleAuth = () => {
        if (!user) {
            window.confirm('Vui lòng đăng nhập')
            navigate('/')
        }
    }

    return (
        <div className="container mx-auto p-4 gap-4  flex">
            <div className='w-[80%]'>
                <div className="grid grid-cols-1 sm:grid-cols-2   gap-4">
                    {currentItems.map((item, index) => (
                        <div onClick={handleAuth} key={index}>
                            <ProductItem Id={item.Id} Logo={item.Logo} Name={item.Name} />
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-6 space-x-3">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-gray-300 rounded-md text-gray-700 cursor-pointer disabled:bg-gray-400"
                    >
                        Trước
                    </button>

                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`px-4 py-2 rounded-md text-lg font-semibold 
              ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-100'}`}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-gray-300 rounded-md text-gray-700 cursor-pointer disabled:bg-gray-400"
                    >
                        Sau
                    </button>
                </div>
            </div>
            <div className='w-[20%] flex flex-col gap-2 border rounded'>
                <div className='flex gap-2 items-center justify-start bg-gray-200 '>
                    <div className='pl-2'> <assets.BiCategory /></div>
                    <p>DANH MỤC MÔN HỌC</p>
                </div>
                <div className='flex flex-col'>
                    {data.map((item, index) => (
                        <div className='pl-2 pt-1 cursor-pointer hover:bg-gray-200 transition-all border' key={index}>{item.Name}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;

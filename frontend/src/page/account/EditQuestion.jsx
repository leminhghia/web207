import { BsFillQuestionSquareFill } from 'react-icons/bs'
import { HiChartSquareBar } from 'react-icons/hi'
import { PiExamFill } from 'react-icons/pi'
import { MdQueue } from 'react-icons/md'
import { IoMdShare } from 'react-icons/io'
import { IoMdSettings } from 'react-icons/io'
import { MdOutlineHistory } from 'react-icons/md'
import { BsJournalText } from 'react-icons/bs'
import { FaRegEdit } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const EditQuestion = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`http://localhost:2000/api/quizzes/GetByUser`)
        setData(res.data)
      } catch (error) {
        console.error(error);

      }
    }
    fetchData()
  }, [])

  const formatDate = (dateS) => {
    const date = new Date(dateS);
    return date.toLocaleString("vi-VN");
  };

  const handleDelete = async (quiz_id) => {
    const isConfirmed = window.confirm('bạn có muốn xóa ?')
    if (isConfirmed) {
      try {
        await axios.delete(`http://localhost:2000/api/quizzes/delete/${quiz_id}`);
        toast.success('xóa thành công')
        navigate(0)
      } catch (error) {
        console.error("lỗi khi xóa câu hỏi:", error)
      }
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold">Danh sách đề thi</h1>
          <div className="flex gap-2 items-center">
            <span className="font-medium text-gray-600">2 Đề thi</span>
            <input
              type="text"
              placeholder="Nhập từ khóa tìm kiếm..."
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              <i className="fas fa-filter"></i>
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">




          {
            data.map((item, index) => (
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:-translate-y-2" key={index} >
                {/* Image */}
                <div className="h-40 bg-blue-100 flex items-center justify-center">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Exam"
                    className="object-cover h-full w-full"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h2 className="font-semibold text-sm">
                    {item.title}
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">{formatDate(item.created_at)}</p>
                  <div className="flex items-center gap-3 text-gray-600 mt-2">
                    <div className="flex items-center text-sm gap-1 relative group">
                      <BsFillQuestionSquareFill
                        style={{ color: '#ff9800' }}
                        size={20}
                      />
                      <span className="absolute top-full mt-2 w-max bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        câu hỏi
                      </span>
                      <span className="ml-1">0</span>
                    </div>
                    <div className="flex items-center text-sm relative group">
                      <HiChartSquareBar style={{ color: '#2563eb' }} size={20} />
                      <span className="absolute top-full mt-2 w-max bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        Lượt truy cập
                      </span>
                      <span className="ml-1">0</span>
                    </div>
                    <div className="flex items-center text-sm relative group">
                      <PiExamFill style={{ color: '#2e7d32' }} size={20} />
                      <span className="absolute top-full mt-2 w-max bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        Số lần thi
                      </span>
                      <span className="ml-1">0</span>
                    </div>
                  </div>
                </div>
                {/* tác vụ */}
                <hr />
                <div className="grid grid-cols-5 p-3 items-center space-y-2 gap-2 gap-y-7">
                  {/*  */}
                  <div className="relative  flex flex-col items-center">
                    <IoMdShare
                      size={25}
                      className="cursor-pointer text-[#0288d1] "
                    />
                    <span className="absolute top-full mt-2 w-max bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      Chia sẽ
                    </span>
                  </div>
                  {/*  */}
                  <div className="relative group flex flex-col items-center">
                    <MdQueue
                      className="text-orange-500 cursor-pointer"
                      size={25}
                    />
                    <span className="absolute top-full mt-2 w-max bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      Soạn câu hỏi
                    </span>
                  </div>
                  {/*  */}
                  <div className="relative group flex flex-col items-center">
                    <IoMdSettings className="text-[#ed6c02]" size={25} />
                    <span className="absolute top-full mt-2 w-max bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      Cài đặt
                    </span>
                  </div>
                  {/*  */}
                  <div className="relative group flex flex-col items-center">
                    <MdOutlineHistory size={25} className="text-[#e91e63]" />
                    <span className="absolute top-full mt-2 w-max bg-gray-700 text-white text-sm px-2 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      lịch sử
                    </span>
                  </div>
                  {/*  */}
                  <div className="relative group flex flex-col items-center">
                    <BsJournalText size={25} className="text-[#2e7d32]" />
                    <span className="absolute top-full mt-2 w-max bg-gray-700 text-white text-sm px-2 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      Kết quả thi
                    </span>
                  </div>
                  {/*  */}
                  <div className="relative group flex flex-col items-center">
                    <HiChartSquareBar className="text-[#2563eb]" size={25} />
                    <span className="absolute top-full mt-2 w-max bg-gray-700 text-white text-sm px-2 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      Thống kê
                    </span>
                  </div>
                  {/*  */}
                  <Link to={`/quizadd/${item.quiz_id}`} className="relative group flex flex-col items-center">
                    <FaRegEdit className="text-[#3e65fe]" size={25} />
                    <span className="absolute top-full mt-2 w-max bg-gray-700 text-white text-sm px-2 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      Chỉnh sửa
                    </span>
                  </Link>
                  {/*  */}
                  <button className="relative group flex flex-col items-center" onClick={() => handleDelete(item.quiz_id)}>
                    <RiDeleteBin6Line size={25} className="text-[#d32f2f]" />
                    <span className="absolute top-full mt-2 w-max bg-gray-700 text-white text-sm px-2 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      Xóa
                    </span>
                  </button>
                </div>

                {/* Actions */}
                <div className="flex justify-between p-4 mt-4">
                  <Link to={`/Quiz/${item.quiz_id}`} className="px-2 py-2 bg-gradient-to-r from-[#4663fe] to-[#cd3dff] text-white rounded-md hover:shadow-md">
                    Vào ôn thi
                  </Link>
                </div>
              </div>
            ))
          }


        </div>


      </div>
    </div>

  )
}

export default EditQuestion

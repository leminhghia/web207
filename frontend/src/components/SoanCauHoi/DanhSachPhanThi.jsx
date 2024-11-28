import { TfiPencilAlt } from 'react-icons/tfi'
import { IoIosAdd } from 'react-icons/io'
import { MdDelete } from 'react-icons/md'
import { LuCalendarRange } from 'react-icons/lu'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { QuizContext } from '../../context/QuizContext'

const DanhSachPhanThi = () => {
  const { id } = useParams()//id quiz
  const [data, setData] = useState([])
  const { setCheckId, checkId } = useContext(QuizContext)
  const navigate = useNavigate()

  const rest = () => {
    navigate(0)
  }

  useEffect(() => {
    if (!id) {
      console.error('ID không hợp lệ!')
      return
    }
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:2000/api/question/get/${id}`
        )
        setData(res.data)
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu:', error)
      }
    }
    fetchData()
  }, [id])

  const handleDelete = async () => {
    if (!checkId) {
      alert("Vui lòng chọn câu hỏi cần xóa!");
      return;
    }
    try {
      await axios.delete(`http://localhost:2000/api/question/delete/quiz/${id}/question/${checkId}`);
      alert("Câu hỏi đã được xóa thành công!");

      navigate(0)
    } catch (error) {
      console.error("lỗi khi xóa câu hỏi:", error)}
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <p className="font-medium">Phần 1</p>
      <button className="text-blue-500 hover:underline mb-3">Sửa</button>
      <hr className="my-3 border-gray-300" />
      <p className="font-medium">Danh mục câu hỏi</p>
      <div className="flex justify-start gap-2 mt-4">
        <button
          className="border border-gray-300 px-4 py-2 rounded hover:bg-green-500 flex items-center gap-2 justify-center bg-green-400"
          onClick={rest}
        >
          <IoIosAdd />
          Thêm câu hỏi
        </button>
        {/* <button className="border border-gray-300 px-4 py-2 rounded hover:bg-[#01579b] flex items-center gap-2 justify-center bg-[#0288d1]">
          <TfiPencilAlt />
          Thêm bằng văn bản
        </button>
      </div>
      <div className="flex flex-col justify-start items-start mt-4 space-y-4">
        <button className="border border-gray-300 px-4 py-2 rounded hover:bg-[#01579b] flex items-center gap-2 justify-center bg-[#0288d1]">
          <LuCalendarRange />
          Sắp xếp câu hỏi
        </button> */}
        <button onClick={handleDelete} className="border border-gray-300 px-4 py-2 rounded hover:bg-[#01579b]mt-4 flex items-center gap-2 justify-center bg-red-400 hover:bg-red-500 ">
          <MdDelete />
          Xóa câu hỏi
        </button>
      </div>
      <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-6 gap-2 mt-4">
        {data.map((item, index) => (
          <div
            key={item.question_id}
            className={`border-2 rounded p-2 text-center cursor-pointer transition-all  ${item.question_id == checkId ? 'bg-blue-600 text-white' : ''
              }`}
            onClick={() => setCheckId(item.question_id)}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  )
}

export default DanhSachPhanThi

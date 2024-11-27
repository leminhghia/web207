import { TfiPencilAlt } from 'react-icons/tfi'
import { IoIosAdd } from 'react-icons/io'
import { MdDelete } from 'react-icons/md'
import { LuCalendarRange } from 'react-icons/lu'
const DanhSachPhanThi = () => {
  return (
    <div className="bg-gray-100 p-4 rounded shadow">
      <div className="mx-2 flex justify-between items-center mb-4">
        <p className="font-semibold text-lg">Danh sách phần thi</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Thêm mới
        </button>
      </div>
      <p className="font-medium">Phần 1</p>
      <button className="text-blue-500 hover:underline mb-3">Sửa</button>
      <hr className="my-3 border-gray-300" />
      <p className="font-medium">Danh mục câu hỏi</p>
      <div className="flex justify-start gap-2 mt-4">
        <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-200 flex items-center gap-2 justify-center">
          <IoIosAdd />
          Thêm câu hỏi
        </button>
        <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-200 flex items-center gap-2 justify-center">
          <TfiPencilAlt />
          Thêm bằng văn bản
        </button>
      </div>
      <div className="flex flex-col justify-start items-start mt-4">
        <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-200 flex items-center gap-2 justify-center">
          <LuCalendarRange />
          Sắp xếp câu hỏi
        </button>
        <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-200 mt-4 flex items-center gap-2 justify-center">
          <MdDelete />
          Xóa câu hỏi
        </button>
      </div>
    </div>
  )
}

export default DanhSachPhanThi

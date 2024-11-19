import axios from 'axios'
import { useState, useEffect } from 'react'
import { FaCirclePlay } from 'react-icons/fa6'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { MdKeyboardArrowUp } from 'react-icons/md'
const EduQuiz = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:2000/api/quizzes/list')
      .then((res) => setData(res.data))
      .catch((err) => console.err('Error updating user:', err))
  })
  console.table(data)
  console.log(data.title)
  const [isNam, setIsNam] = useState(true)
  const [isNganh, setIsNganh] = useState(true)

  const toggleNam = () => setIsNam(!isNam)
  const toggleNganh = () => setIsNganh(!isNganh)
  return (
    <div className="p-4 bg-[#f2f3f5]">
      <p className="text-xl font-medium p-2">Tìm kiếm đề thi</p>
      <div className="flex space-x-8">
        <aside className="w-1/5 bg-white p-4 rounded-lg shadow flex flex-col space-y-4">
          <button
            onClick={toggleNam}
            className="font-medium flex justify-between items-center w-full text-left"
          >
            Năm học
            <span>
              {isNam ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </span>
          </button>
          {isNam && (
            <div className="flex flex-col space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> 2024 (7002)
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> 2023 (5325)
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> 2022 (2200)
              </label>
            </div>
          )}
          <div className="flex flex-col space-y-2">
            <button
              onClick={toggleNganh}
              className="font-medium flex justify-between items-center w-full text-left"
            >
              Chuyên ngành
              <span>
                {isNganh ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              </span>
            </button>
            {isNganh && (
              <div className="flex flex-col space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Công nghệ thông tin
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Ngôn ngữ anh
                </label>
              </div>
            )}
          </div>
        </aside>

        {/*  */}
        <div className="bg-[#ffffff] rounded-lg shadow-lg flex-1">
          <header className="flex items-center justify-between mb-4 p-1">
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Nhập từ khóa tìm kiếm..."
                className="border rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 hover:shadow-sm hover:shadow-[#eadaff]"
              />
            </div>

            <p>
              <span className="text-blue-600">17442</span> kết quả
            </p>
          </header>
          <hr />
          <main className="grid grid-cols-4 gap-4 p-4">
            {data.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col justify-between"
              >
                {/* Căn chỉnh thẳng lối bằng min-h */}
                <div className="flex flex-col space-y-2">
                  <img
                    src="https://via.placeholder.com/150"
                    alt={item.title}
                    className="w-full h-32 object-cover rounded"
                  />
                  <h3 className="font-bold text-lg min-h-[3rem]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.date}</p>
                  <p className="text-sm">
                    <strong>{item.questions}</strong> câu hỏi,{' '}
                    <strong>{item.submissions}</strong> lượt nộp
                  </p>
                  <p className="text-sm text-gray-600">
                    Tác giả: {item.author}
                  </p>
                </div>
                {/* Nút "Vào ôn thi" cố định ở dưới */}
                <div>
                  <hr className="my-2" />
                  <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 flex items-center justify-center gap-2 mr-3">
                    <FaCirclePlay />
                    Vào ôn thi
                  </button>
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
    </div>
  )
}

export default EduQuiz

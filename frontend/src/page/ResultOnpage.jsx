import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ResultOnpage = () => {
  //
  const [data, setData] = useState([])
  const { id } = useParams()
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `http://localhost:2000/api/userquiz/result/list/${id}`
        )
        setData(res.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [id])
  console.table(data)

  return (
    <div className="min-h-screen bg-gray-50 flex p-6">
      {/* Cột trái: Timeline */}
      <div className=" bg-white shadow-md rounded-lg p-6 mr-6 w-3/12">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Timeline hoạt động
        </h2>
      </div>

      {/* Cột phải: Kết quả thi */}
      <div className="flex-1 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Kết quả thi
        </h2>

        {data.map((item, index) => (
          <div key={index} className="mb-6 border-t border-gray-200 pt-6">
            {/* Thông tin kết quả */}
            <div className="flex justify-between items-center mb-6">
              <div className="mb-6 space-y-2	">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">
                  Thông tin học viên
                </h3>
                <p className="text-sm text-gray-600 flex flex-col">
                  <span className="font-semibold text-sm">Họ và tên:</span>
                  <span className="font-semibold text-xl text-black">
                    {item.name}
                  </span>
                </p>
                <p className="text-sm text-gray-600 flex flex-col">
                  <span className="font-semibold text-sm">Email:</span>{' '}
                  <span className="font-semibold text-xl text-black">
                    {item.email}
                  </span>
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-black">Điểm số</p>
                <div className="flex justify-center items-center">
                  <div className="w-20 h-20 rounded-full border-4 border-gray-300 flex items-center justify-center">
                    <p className="text-2xl font-semibold text-red-500">
                      {item.score}
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Xếp loại</p>
                <p className="text-lg font-semibold text-white bg-red-600 rounded-full py-2 px-6">
                  {item.rating}
                </p>
              </div>
            </div>
            <hr className="p-2" />
            {/* Thời gian làm bài và các thống kê */}
            <div className="mb-6">
              <div className="flex gap-4">
                <div className="flex gap-2 items-center mb-3">
                  <p className="text-lg text-black ">Thời gian làm</p>
                  <p className="text-lg font-semibold text-green-600">
                    00:02:07
                  </p>
                </div>
                <div className="flex gap-2 items-center mb-3">
                  <p className="text-lg text-black">Thời gian kết thúc</p>
                  <p className="text-lg font-semibold text-gray-800">
                    04:04 30/11/2024
                  </p>
                </div>
              </div>
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{ width: '100%' }}
                ></div>
              </div>
              {/*  */}
              <div className="flex justify-between items-center gap-5">
                <div className="flex flex-col gap-2 items-center ">
                  <p className="text-lg text-black">Hoàn thành</p>
                  <p className="text-lg font-semibold text-gray-800">100%</p>
                </div>
                <div className="flex flex-col gap-2 items-center ">
                  <p className="text-lg text-black">Số câu đúng</p>
                  <p className="text-lg font-semibold text-gray-800">14</p>
                </div>
                <div className="flex flex-col gap-2 items-center ">
                  <p className="text-lg text-black">Số câu sai</p>
                  <p className="text-lg font-semibold text-gray-800">75</p>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <p className="text-lg text-black">Số câu bỏ trống</p>
                  <p className="text-lg font-semibold text-gray-800">0</p>
                </div>
              </div>
              {/*  */}
              <hr className="mt-3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResultOnpage

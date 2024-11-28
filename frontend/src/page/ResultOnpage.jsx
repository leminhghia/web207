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
    <div>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-3xl p-6 bg-white border border-gray-300 rounded-lg shadow-md"
          >
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Kết quả thi
            </h2>
            <div className="mb-6">
              <p className="text-black">
                <span className="font-semibold">Họ và tên: </span>
                {item.name}
              </p>
              <p className="text-black">
                <span className="font-semibold">Email: </span>
                {item.email}
              </p>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-black">Điểm số</p>
                <p className="text-2xl font-semibold text-red-500">
                  {item.score}
                </p>
              </div>
              <div>
                <p className="text-xl text-black">Xếp loại</p>
                <br />
                <p className="text-xl font-semibold text-white rounded-lg text-center bg-[#db270b] px-1 py-1">
                  {item.rating}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default ResultOnpage

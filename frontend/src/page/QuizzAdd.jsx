import { useContext } from 'react'
import Thongtincoban from '../components/Thongtincoban'
import { QuizContext } from '../context/QuizContext'

const QuizzAdd = () => {
  const { tab, setTab, idthemquiz } = useContext(QuizContext)
  console.log(idthemquiz)



  return (
    <div className="mx-8 bg-[#f5f5f5] p-6">
      <h1 className="text-2xl font-semibold mb-4">Chỉnh sửa đề thi</h1>
      {/* Tab */}
      <div className="flex gap-4 items-center shadow h-[50px] p-2">
        <div
          onClick={() => setTab(1)}
          className={`${
            tab === 1
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-700'
          } cursor-pointer hover:text-blue-600 transition-all duration-200`}
        >
          Thông tin cơ bản
        </div>
      </div>
      {/* Nội dung Tab */}
      <div className="mt-6">{tab === 1 && <Thongtincoban />}</div>
    </div>
  )
}

export default QuizzAdd

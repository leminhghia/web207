import { useContext } from 'react'
import Thongtincoban from '../components/Thongtincoban'
import { QuizContext } from '../context/QuizContext'

const QuizzAdd = () => {
  const { tab, setTab, idthemquiz } = useContext(QuizContext)
  console.log(idthemquiz)

  return (
    <div className="mx-8 bg-[#f5f5f5]">
      Chỉnh sửa đề thi
      {/* tab */}
      <div className="flex gap-2">
        <div
          onClick={() => setTab(1)}
          className={`${tab === 1 ? 'text-blue-600' : ''} cursor-pointer`}
        >
          Thông tin cơ bản
        </div>
      </div>
      <div>{<Thongtincoban />}</div>
    </div>
  )
}

export default QuizzAdd

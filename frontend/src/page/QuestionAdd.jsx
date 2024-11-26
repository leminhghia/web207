import { useContext, useState } from 'react'
import Soancauhoi from '../components/Soancauhoi'
import Thongtincoban from '../components/Thongtincoban'
import { QuizContext } from '../context/QuizContext'
import { useParams } from 'react-router-dom'

const QuestionAdd = () => {
  const { tab, setTab, idthemquiz } = useContext(QuizContext)
const {id}  = useParams()
console.log(id);
 
  return (
    <div className='mx-8'>
      Chỉnh sửa đề thi
      {/* tab */}
      <div className='flex gap-2'>
        <div onClick={() => setTab(1)} className={`${tab === 1 ? 'text-blue-600' : ''} cursor-pointer`}>Thông tin cơ bản</div>
        <div onClick={() => setTab(2)} className={`${tab === 2 ? 'text-blue-600' : ''} cursor-pointer`}>Soạn câu hỏi</div>
      </div>
      <div>
        {tab === 1  ? (
          <Thongtincoban />
        ) : tab === 2 && idthemquiz !== undefined ? (
          <Soancauhoi />
        ) : (
          <div>SAD</div>
        )}
      </div>
    </div>
  )
}

export default QuestionAdd

import  { useState } from 'react'
import Soancauhoi from '../components/Soancauhoi'
import Thongtincoban from '../components/Thongtincoban'
const QuizzAdd = () => {
  const [visible, setVisible] = useState(1)
  return (
    <div className='mx-8'>
      Chỉnh sửa đề thi
      {/* tab */}
      <div className='flex gap-2'>
        <div onClick={() => setVisible(1)} className={`${visible === 1 ? 'text-blue-600':''} cursor-pointer`}>Thông tin cơ bản</div>
        <div onClick={() => setVisible(2)} className={`${visible === 2 ? 'text-blue-600':''} cursor-pointer`}>Soạn câu hỏi</div>
      </div>
      <div>
        {visible === 1 ? (
          <Thongtincoban />
        ) : visible === 2 ? (
          <Soancauhoi />
        ) : (
          <div>SAD</div>
        )}
      </div>
    </div>
  )
}

export default QuizzAdd

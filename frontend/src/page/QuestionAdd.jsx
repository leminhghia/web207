import { useContext, useEffect } from 'react'
import Soancauhoi from '../components/SoanCauHoi/Soancauhoi'
import Thongtincoban from '../components/Thongtincoban'
import { QuizContext } from '../context/QuizContext'

const QuestionAdd = () => {
  const { tab, setTab, idthemquiz } = useContext(QuizContext)

  
  useEffect(() => {
    const savedTab = localStorage.getItem('currentTab');
    if (savedTab) {
      setTab(parseInt(savedTab, 10));
    }
  }, [setTab]);

  // Lưu trạng thái tab vào localStorage khi nó thay đổi
  const handleTabChange = (tabNumber) => {
    setTab(tabNumber);
    localStorage.setItem('currentTab', tabNumber); 
  };

  return (
    <div className="mx-8">
      Chỉnh sửa đề thi
      {/* tab */}
      <div className="flex gap-2">
        <div
          onClick={() => handleTabChange(1)}
          className={`${tab === 1 ? 'text-blue-600' : ''} cursor-pointer`}
        >
          Thông tin cơ bản
        </div>
        <div
          onClick={() => handleTabChange(2)}
          className={`${tab === 2 ? 'text-blue-600' : ''} cursor-pointer`}
        >
          Soạn câu hỏi
        </div>
      </div>
      <div>
        {tab === 1 ? (
          <Thongtincoban />
        ) : tab === 2 && idthemquiz !== undefined ? (
          <Soancauhoi />
        ) : (
          <Thongtincoban />
          
        )}
      </div>
    </div>
  )
}

export default QuestionAdd

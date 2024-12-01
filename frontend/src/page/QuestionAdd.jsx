import { useContext, useEffect, useState } from 'react'
import Soancauhoi from '../components/SoanCauHoi/Soancauhoi'
import Thongtincoban from '../components/Thongtincoban'
import { QuizContext } from '../context/QuizContext'
import Setting from '../components/Setting'

const QuestionAdd = () => {
  const { tab, setTab, idthemquiz } = useContext(QuizContext)
  const [tabWidth, setTabWidth] = useState(0)
  const [tabPosition, setTabPosition] = useState(0)

  useEffect(() => {
    const savedTab = localStorage.getItem('currentTab')
    if (savedTab) {
      setTab(parseInt(savedTab, 10))
    }
  }, [setTab])

  // Lưu trạng thái tab vào localStorage khi nó thay đổi
  const handleTabChange = (tabNumber) => {
    setTab(tabNumber)
    localStorage.setItem('currentTab', tabNumber)
  }

  // Cập nhật vị trí và chiều rộng của tab hiện tại
  useEffect(() => {
    const currentTabElement = document.getElementById(`tab-${tab}`)
    if (currentTabElement) {
      setTabWidth(currentTabElement.offsetWidth)
      setTabPosition(currentTabElement.offsetLeft)
    }
  }, [tab])

  return (
    <div className="mx-8 bg-[#f5f5f5]">
      <h2 className="text-xl font-semibold mb-4">Chỉnh sửa đề thi</h2>
      {/* Tab */}
      <div className="relative flex items-center gap-4 mb-6 mx-8 h-[54px] bg-white shadow p-2">
        <div
          onClick={() => handleTabChange(1)}
          id="tab-1"
          className={`${
            tab === 1 ? 'text-blue-600' : 'text-gray-600'
          } cursor-pointer hover:text-blue-600 transition-all duration-300`}
        >
          Thông tin cơ bản
        </div>
        <div
          onClick={() => handleTabChange(3)}
          id="tab-3"
          className={`${
            tab === 3 ? 'text-blue-600' : 'text-gray-600'
          } cursor-pointer hover:text-blue-600 transition-all duration-300`}
        >
          Setting
        </div>
        <div
          onClick={() => handleTabChange(2)}
          id="tab-2"
          className={`${
            tab === 2 ? 'text-blue-600' : 'text-gray-600'
          } cursor-pointer hover:text-blue-600 transition-all duration-300`}
        >
          Soạn câu hỏi
        </div>

        {/* Đường gạch chân */}
        <div
          className="absolute bottom-0 left-0 h-[3px] bg-blue-600 transition-all duration-300"
          style={{
            width: `${tabWidth}px`,
            transform: `translateX(${tabPosition}px)`,
          }}
        />
      </div>

      {/* Hiển thị nội dung của tab đã chọn */}
      <div>
        {tab === 1 ? (
          <Thongtincoban />
        ) : tab === 2 && idthemquiz !== undefined ? (
          <Soancauhoi />
        ) : tab === 3 ? (
          <Setting />
        ) : (
          <Thongtincoban />
        )}
      </div>
    </div>
  )
}

export default QuestionAdd

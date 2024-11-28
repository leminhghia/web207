import { useState } from 'react'
import Sidebar from './Sidebar'
// import AccountDetails from './settingaccount/AccountDetails'
import MainAccountDetails from './settingaccount/mainAccountDetails'
import TestHistory from './TestHistory'
import Settings from './Settings'
import { FaBars } from 'react-icons/fa'
import EditQuestion from './EditQuestion'
import KhoaHoc from './KhoaHoc'

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState('account') // Quản lý tab đang hiển thị
  const [isSidebarOpen, setIsSidebarOpen] = useState(false) // Quản lý trạng thái Sidebar

  return (
    <div className="flex h-auto bg-gray-100">
      {/* Nút ||| để mở Sidebar trên thiết bị nhỏ */}
      <button
        className="lg:hidden p-4 fixed top-0 left-0 z-20"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <FaBars size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 lg:relative lg:translate-x-0 w-64`}
      >
        <Sidebar
          onSelectSection={(section) => {
            setActiveTab(section) // Đặt tab đang chọn
            setIsSidebarOpen(false) // Đóng Sidebar sau khi chọn tab
          }}
        />
      </div>

      {/* Nội dung chính */}
      <div className="flex-1 p-8">
        {activeTab === 'account' && <MainAccountDetails />}
        {activeTab === 'tests' && <TestHistory />}
        {activeTab === 'settings' && <Settings />}
        {activeTab === 'examquestion' && <EditQuestion />}
        {activeTab === 'khoahoc' && <KhoaHoc />}
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  )
}

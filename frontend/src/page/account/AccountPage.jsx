import { useState } from 'react'
import Sidebar from './Sidebar'
import AccountDetails from './AccountDetails'
import TestHistory from './TestHistory'
import Settings from './Settings'
import { FaBars } from 'react-icons/fa'
import ExamQuestion from './ExamQuestion'
import KhoaHoc from './KhoaHoc'

export default function AccountPage() {
  const [section, setSection] = useState('account')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const renderSection = () => {
    switch (section) {
      case 'account':
        return <AccountDetails />
      case 'tests':
        return <TestHistory />
      case 'settings':
        return <Settings />
      case 'examquestion':
        return <ExamQuestion />
      case 'khoahoc':
        return <KhoaHoc />
      default:
        return <AccountDetails />
    }
  }

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
            setSection(section)
            setIsSidebarOpen(false)
          }}
        />
      </div>

      {/* Nội dung chính */}
      <div className="flex-1 p-8">{renderSection()}</div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  )
}

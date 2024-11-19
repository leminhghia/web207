import { useState } from 'react'

const SilderBarDetails = ({ setActiveTab }) => {
  const [active, setActive] = useState('personal')

  const handleTabClick = (tab) => {
    setActive(tab)
    setActiveTab(tab)
  }

  return (
    <div className="w-1/4 bg-white shadow-lg h-60">
      <div className="py-4 px-6">
        <button
          className={`w-full text-left py-2 px-4 rounded-lg
            ${
              active === 'personal'
                ? 'bg-[#f0f3ff] text-[#212121] hover:bg-[#e8ecff] hover:text-[#212121]'
                : 'hover:bg-[#f5f5f5] hover:text-[#212121]'
            }
            ${active !== 'personal' ? 'focus:outline-none' : ''}`}
          onClick={() => handleTabClick('personal')}
        >
          Thông tin tài khoản
        </button>
        <button
          className={`w-full text-left py-2 px-4 mt-2 rounded-lg
            ${
              active === 'password'
                ? 'bg-[#f0f3ff] text-[#212121] hover:bg-[#e8ecff] hover:text-[#212121]'
                : 'hover:bg-[#f5f5f5] hover:text-[#212121]'
            }
            ${active !== 'password' ? 'focus:outline-none' : ''}`}
          onClick={() => handleTabClick('password')}
        >
          Đổi mật khẩu
        </button>
      </div>
    </div>
  )
}

export default SilderBarDetails

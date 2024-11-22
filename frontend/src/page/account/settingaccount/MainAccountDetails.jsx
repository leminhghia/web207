import SilderBarDetails from './SilderBarDetails'
import BaoMat from './BaoMat'
import { useState } from 'react'
import AccountDetails from './AccountDetails'

const MainAccountDetails = () => {
  const [activeTab, setActiveTab] = useState('personal')

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100 gap-3">
      {/* Sidebar */}
      <div className="lg:w-1/4 bg-white">
        <SilderBarDetails setActiveTab={setActiveTab} />
      </div>

      <div className="flex-grow p-4">
        {activeTab === 'password' && <BaoMat />}
        {activeTab === 'personal' && <AccountDetails />}
      </div>
    </div>
  )
}

export default MainAccountDetails

import SilderBarDetails from './SilderBarDetails'
import BaoMat from './BaoMat'
import { useState } from 'react'
import AccountDetails from './AccountDetails'
const MainAccountDetails = () => {
  const [activeTab, setActiveTab] = useState('personal')

  return (
    <div className="flex h-screen bg-gray-100">
      <SilderBarDetails setActiveTab={setActiveTab} />
      <div className="flex-grow ">
        {activeTab === 'password' && <BaoMat />}
        {activeTab === 'personal' && <AccountDetails />}
      </div>
    </div>
  )
}

export default MainAccountDetails

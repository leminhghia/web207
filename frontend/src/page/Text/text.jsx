import React, { useState } from 'react'

const PersonalDataPage = () => {
  const [activeMenu, setActiveMenu] = useState('Personal Data')

  const handleMenuClick = (menu) => {
    setActiveMenu(menu)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 border-b">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-gray-300"></div>
            <div className="ml-3">
              <p className="font-semibold">Jimmy Smith</p>
            </div>
          </div>
        </div>
        <ul className="mt-4 space-y-2">
          <li
            className={`pl-4 py-2 border-l-4 ${
              activeMenu === 'Personal Data'
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent hover:bg-gray-100'
            }`}
            onClick={() => handleMenuClick('Personal Data')}
          >
            Personal Data
          </li>
          <li
            className={`pl-4 py-2 border-l-4 ${
              activeMenu === 'Payment & Instalments'
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent hover:bg-gray-100'
            }`}
            onClick={() => handleMenuClick('Payment & Instalments')}
          >
            Payment & Instalments
          </li>
          <li
            className={`pl-4 py-2 border-l-4 ${
              activeMenu === 'Orders'
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent hover:bg-gray-100'
            }`}
            onClick={() => handleMenuClick('Orders')}
          >
            Orders
          </li>
          <li
            className={`pl-4 py-2 border-l-4 ${
              activeMenu === 'Wish list'
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent hover:bg-gray-100'
            }`}
            onClick={() => handleMenuClick('Wish list')}
          >
            Wish list
          </li>
          <li
            className={`pl-4 py-2 border-l-4 ${
              activeMenu === 'Discounts'
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent hover:bg-gray-100'
            }`}
            onClick={() => handleMenuClick('Discounts')}
          >
            Discounts
          </li>
          <li
            className={`pl-4 py-2 border-l-4 ${
              activeMenu === 'Security & access'
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent hover:bg-gray-100'
            }`}
            onClick={() => handleMenuClick('Security & access')}
          >
            Security & access
          </li>
          <li
            className={`pl-4 py-2 border-l-4 ${
              activeMenu === 'Notification'
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent hover:bg-gray-100'
            }`}
            onClick={() => handleMenuClick('Notification')}
          >
            Notification
          </li>
          <li
            className={`pl-4 py-2 border-l-4 ${
              activeMenu === 'Contact us'
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent hover:bg-gray-100'
            }`}
            onClick={() => handleMenuClick('Contact us')}
          >
            Contact us
          </li>
          <li
            className="pl-4 py-2 text-red-500 hover:bg-gray-100"
            onClick={() => handleMenuClick('Log out')}
          >
            Log out
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-6">
          Home &gt; Account &gt;{' '}
          <span className="text-blue-500">{activeMenu}</span>
        </div>

        {/* Content */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-6">{activeMenu}</h2>
          <p className="text-sm text-gray-600 mb-8">
            {activeMenu === 'Personal Data'
              ? 'Verify your identity'
              : `Welcome to the ${activeMenu} section`}
          </p>

          {/* Conditional rendering for specific sections */}
          {activeMenu === 'Personal Data' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Full name
                </label>
                <div className="flex items-center border rounded-md p-2">
                  <span className="material-icons text-gray-500">person</span>
                  <input
                    type="text"
                    value="Jimmy Smith"
                    className="ml-2 flex-1 bg-transparent outline-none"
                    readOnly
                  />
                  <button className="text-blue-500">✏️</button>
                </div>
              </div>
              {/* ... thêm các input khác nếu cần */}
            </div>
          )}
          {/* Các phần khác có thể được thêm tại đây */}
        </div>
      </div>
    </div>
  )
}

export default PersonalDataPage

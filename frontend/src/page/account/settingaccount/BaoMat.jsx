const BaoMat = () => {
  return (
    <div className="flex-grow bg-gray-100 p-6">
      <form className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Mật khẩu hiện tại
          </label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#eadaff]"
            placeholder="Nhập mật khẩu hiện tại"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Mật khẩu mới
          </label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#eadaff]"
            placeholder="Nhập mật khẩu mới"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Xác nhận mật khẩu mới
          </label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#eadaff]"
            placeholder="Nhập lại mật khẩu mới để xác nhận"
          />
        </div>

        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg hover:opacity-90">
          Thay đổi Mật khẩu
        </button>
      </form>
    </div>
  )
}

export default BaoMat

const Settings = () => {
  const handleLogout = () => {
    // Xử lý đăng xuất, có thể xóa token, điều hướng trang, v.v.
    console.log('Đã đăng xuất')
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Cài đặt tài khoản</h1>
      <button className="bg-red-500 text-white px-4 py-2 rounded mb-4">
        Đổi mật khẩu
      </button>
      <button
        onClick={handleLogout}
        className="bg-gray-500 text-white px-4 py-2 rounded"
      >
        Đăng xuất
      </button>
    </div>
  )
}
export default Settings

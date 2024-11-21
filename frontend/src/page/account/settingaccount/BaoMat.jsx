/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import {toast} from 'react-toastify'
const BaoMat = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error("Mật khẩu mới và xác nhận mật khẩu không khớp.");
      return;
    }

    try {
      const res = await axios.put(
        "http://localhost:2000/api/auth/update/pass",
        { currentPassword, newPassword },
        { withCredentials: true }
      );
      toast.success(res.data.message);
    } catch (error) {
      toast.error(
        "Sai mật khẩu, vui lòng thử lại!"
      );
    }
  };

  return (
    <div className="flex-grow bg-gray-100 p-6">
       
      <form onSubmit={handleChangePassword} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Mật khẩu hiện tại
          </label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#eadaff]"
            placeholder="Nhập mật khẩu hiện tại"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Mật khẩu mới
          </label>
          <input
             type="password"
             value={newPassword}
             onChange={(e) => setNewPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#eadaff]"
            placeholder="Nhập mật khẩu mới"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Xác nhận mật khẩu mới
          </label>
          <input
             type="password"
             value={confirmPassword}
             onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#eadaff]"
            placeholder="Nhập lại mật khẩu mới để xác nhận"
            required
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

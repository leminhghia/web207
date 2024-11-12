import { useEffect, useState } from 'react'
import axios from 'axios'
import { GoLog } from 'react-icons/go'
const LichSuThi = () => {
  const [trangHienTai, setTrangHienTai] = useState(1)
  const [soHangMoiTrang] = useState(10)
  const [lichSu, setLichSu] = useState([])
  const [loi, setLoi] = useState(null)

  useEffect(() => {
    // Gọi API để lấy dữ liệu từ server
    axios
      .get('http://localhost:5173/account')
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          setLichSu(response.data)
        } else {
          console.error('Dữ liệu phản hồi không đúng định dạng')
        }
      })
      .catch((error) => {
        console.error('Lỗi khi lấy dữ liệu lịch sử thi:', error)
        setLoi('Có lỗi xảy ra khi tải lịch sử làm bài.')
      })
  }, [])

  // Tính tổng số trang dựa trên số dữ liệu và số hàng mỗi trang
  const tongSoTrang = Math.ceil(lichSu.length / soHangMoiTrang)

  // Chuyển trang khi người dùng nhấn vào nút trang
  const thayDoiTrang = (trang) => {
    setTrangHienTai(trang)
  }

  // Hiển thị các nút trang với điều kiện rút gọn
  const renderPageNumbers = () => {
    const buttons = []

    if (tongSoTrang <= 5) {
      // Hiển thị tất cả trang nếu tổng số trang <= 5
      for (let i = 1; i <= tongSoTrang; i++) {
        buttons.push(
          <button
            key={i}
            onClick={() => thayDoiTrang(i)}
            className={`px-2 py-1 mx-1 ${
              trangHienTai === i ? 'bg-blue-500 text-white' : 'text-gray-600'
            }`}
          >
            {i}
          </button>
        )
      }
    } else {
      // Rút gọn hiển thị trang nếu tổng số trang > 5
      buttons.push(
        <button
          key={1}
          onClick={() => thayDoiTrang(1)}
          className={`px-2 py-1 mx-1 ${
            trangHienTai === 1 ? 'bg-blue-500 text-white' : 'text-gray-600'
          }`}
        >
          1
        </button>
      )

      if (trangHienTai > 3) {
        buttons.push(
          <span key="dots1" className="px-2 py-1 text-gray-600">
            ...
          </span>
        )
      }

      const startPage = Math.max(2, trangHienTai - 1)
      const endPage = Math.min(tongSoTrang - 1, trangHienTai + 1)

      for (let i = startPage; i <= endPage; i++) {
        buttons.push(
          <button
            key={i}
            onClick={() => thayDoiTrang(i)}
            className={`px-2 py-1 mx-1 ${
              trangHienTai === i ? 'bg-blue-500 text-white' : 'text-gray-600'
            }`}
          >
            {i}
          </button>
        )
      }

      if (trangHienTai < tongSoTrang - 2) {
        buttons.push(
          <span key="dots2" className="px-2 py-1 text-gray-600">
            ...
          </span>
        )
      }

      buttons.push(
        <button
          key={tongSoTrang}
          onClick={() => thayDoiTrang(tongSoTrang)}
          className={`px-2 py-1 mx-1 ${
            trangHienTai === tongSoTrang
              ? 'bg-blue-500 text-white'
              : 'text-gray-600'
          }`}
        >
          {tongSoTrang}
        </button>
      )
    }

    return buttons
  }

  return (
    <div className="p-4 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <GoLog style={{ color: 'blue' }} />
          Kết quả thi
        </h2>
        <div className="flex items-center mb-4">
          <label className="mr-2 text-gray-700">Thời gian kết thúc:</label>
          <input
            type="date"
            className="border border-gray-300 rounded px-2 py-1 hover:border-purple-500 hover:shadow-md hover:shadow-purple-200 focus:outline-none"
            placeholder="DD/MM/YYYY"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-sm">
                <th className="border px-4 py-2">Môn học</th>
                <th className="border px-4 py-2">Điểm số</th>
                <th className="border px-4 py-2">Xếp loại</th>
                <th className="border px-4 py-2">Thời gian làm bài</th>
                <th className="border px-4 py-2">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {lichSu.length > 0 ? (
                lichSu
                  .slice(
                    (trangHienTai - 1) * soHangMoiTrang,
                    trangHienTai * soHangMoiTrang
                  )
                  .map((item, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">{item.monHoc}</td>
                      <td className="border px-4 py-2">{item.diem}</td>
                      <td className="border px-4 py-2">{item.xepLoai}</td>
                      <td className="border px-4 py-2">{item.thoiGian}</td>
                      <td className="border px-4 py-2">
                        <button className="text-blue-500">Chi tiết</button>
                      </td>
                    </tr>
                  ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-gray-500">
                    Không tìm thấy dữ liệu nào!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {loi && <p className="text-red-500 text-center mt-4">{loi}</p>}

        <div className="flex items-center justify-center mt-4">
          <button
            onClick={() => thayDoiTrang(trangHienTai - 1)}
            className="px-2 py-1 border rounded-l border-gray-300 text-gray-600"
            disabled={trangHienTai === 1}
          >
            {'<'}
          </button>
          {renderPageNumbers()}
          <button
            onClick={() => thayDoiTrang(trangHienTai + 1)}
            className="px-2 py-1 border rounded-r border-gray-300 text-gray-600"
            disabled={trangHienTai === tongSoTrang}
          >
            {'>'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default LichSuThi

import { useState } from 'react'
import { IoIosTime } from 'react-icons/io'
import { BiLike } from 'react-icons/bi'
import { BiSolidLike } from 'react-icons/bi'
import { GoHeart } from 'react-icons/go'
import { FcLike } from 'react-icons/fc'

const ExamInfo = () => {
  const [activeTab, setActiveTab] = useState('content')
  const [liked, setLiked] = useState(false)
  const [hearted, setHearted] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [mode, setMode] = useState('Thi thử')
  const questions = [
    {
      id: 1,
      title: 'Câu 1: (Một đáp án)',
      question: 'Quá trình nào sau đây thuộc quá trình sản xuất?',
      options: [
        'Quá trình tạo phôi',
        'Quá trình gia công cắt gọt',
        'Quá trình lắp ráp',
        'Tất cả các quá trình trên',
      ],
    },
  ]

  const tabs = [
    { id: 'content', label: 'Nội dung đề thi' },
    { id: 'results', label: 'Kết quả ôn tập' },
    { id: 'statistics', label: 'Thống kê ôn tập' },
  ]

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      {/* Nội dung chính */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center justify-between">
          {/* Left Side */}
          <div className="grid grid-cols-2 gap-3 items-center">
            <div className="space-y-4">
              <p className="">Thông tin đề thi</p>
              <div className="overflow-hidden w-[300px] h-[150px] rounded-lg shadow-sm">
                <img
                  src="https://via.placeholder.com/300x150"
                  alt="Hình minh họa đề thi"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
            </div>
            {/* Thông tin */}
            <div className="space-y-4">
              <h1 className="text-xl font-bold text-gray-700">
                Công nghệ chế tạo máy
              </h1>
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <img
                  src="path_to_avatar_image.jpg"
                  alt="Avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />
                Hải Nguyễn
              </p>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <IoIosTime size={20} style={{ color: 'black' }} />
                12/11/2024
              </p>
              {/* like */}
              <div className="flex space-x-3">
                <div
                  onClick={() => setLiked(!liked)}
                  className={`cursor-pointer ${
                    liked ? 'text-blue-500' : 'text-black'
                  }`}
                >
                  {liked ? <BiSolidLike /> : <BiLike />}
                </div>
                <div
                  onClick={() => setHearted(!hearted)}
                  className={`cursor-pointer`}
                >
                  {hearted ? <FcLike /> : <GoHeart />}
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div>
            <div className="flex flex-col space-y-4">
              <p>Chia sẻ đề thi</p>
              <div className="flex gap-3">
                <img
                  src="path_to_avatar_image.jpg"
                  alt="Avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <img
                  src="path_to_avatar_image.jpg"
                  alt="Avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <img
                  src="path_to_avatar_image.jpg"
                  alt="Avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>
            </div>
            <div className="flex-col items-center space-x-2">
              <div className="flex items-center text-center">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="mx-4 font-semibold text-gray-600">hoặc</span>
                <div className="flex-grow border-t border-gray-400"></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-blue-500 text-white text-sm px-3 py-1 rounded-lg">
                  Sao chép link
                </button>
                <button className="bg-purple-500 text-white text-sm px-3 py-1 rounded-lg">
                  Quét mã QRCode
                </button>
              </div>
            </div>
          </div>
          {/*  */}
        </div>

        {/* Nút hành động */}
        <div className="mt-4 grid grid-cols-3 space-x-4">
          <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg">
            Thẻ ghi nhớ
          </button>
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded-lg"
            onClick={() => setIsModalOpen(true)} // Mở bảng nổi
          >
            Bắt đầu ôn thi
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
            Tải về
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-6 bg-white shadow-md rounded-lg">
        <div className="flex border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex-1 text-center py-2 ${
                activeTab === tab.id
                  ? 'border-b-2 border-indigo-500 text-indigo-600 font-bold'
                  : 'text-gray-600'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="p-6">
          {activeTab === 'content' && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Phần thi</h2>
              {questions.map((question) => (
                <div key={question.id}>
                  <h3 className="text-md font-bold">{question.title}</h3>
                  <p>{question.question}</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {question.options.map((option, index) => (
                      <li key={index}>{option}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bảng nổi */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[550px] p-6 relative">
            <h2 className="text-xl font-semibold mb-2 text-center">
              Chọn chế độ luyện thi
            </h2>

            {/* Chọn chế độ */}
            <div className="space-y-2 mb-6 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="mode"
                    value="Ôn thi"
                    className="form-radio"
                    checked={mode === 'Ôn thi'}
                    onChange={(e) => setMode(e.target.value)}
                  />
                  Ôn thi
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="mode"
                    value="Thi thử"
                    className="form-radio"
                    checked={mode === 'Thi thử'}
                    onChange={(e) => setMode(e.target.value)}
                  />
                  Thi thử
                </label>
              </div>

              {/* Chuyển trang */}
              {mode === 'Ôn thi' ? (
                <div className="space-y-1">
                  <p className="flex items-center gap-2">
                    ✅ Không giới hạn thời gian
                  </p>
                  <p className="flex items-center gap-2">
                    ✅ Hiển thị ngay đáp án khi làm xong
                  </p>
                  <p className="flex items-center gap-2">
                    ✅ Được phép làm lại nhiều lần
                  </p>
                </div>
              ) : (
                <div className="space-y-1">
                  <p className="flex items-center gap-2">
                    ✅ Giới hạn thời gian làm đề thi
                  </p>
                  <p className="flex items-center gap-2">
                    ✅ Không hiển thị ngay đáp án
                  </p>
                  <p className="flex items-center gap-2">
                    ✅ Kết quả sẽ được hiển thị ngay sau khi bạn nộp bài kiểm
                    tra
                  </p>
                </div>
              )}
            </div>

            {/* Cài đặt đề thi */}
            <div className="mb-6">
              <h3 className="text-md font-semibold mb-2">Cài đặt đề thi</h3>
              <div className="flex flex-col space-y-3">
                <label className="flex justify-between items-center">
                  Thời gian làm bài thi
                  <select className="border rounded-lg px-3 py-2 w-36">
                    <option>30 phút</option>
                    <option>60 phút</option>
                    <option>90 phút</option>
                  </select>
                </label>
                <div>
                  <h4 className="font-semibold mb-2">
                    Số câu hỏi lấy ra ngẫu nhiên từ đề thi
                  </h4>
                  <div className="space-y-2">
                    <label className="flex justify-between items-center">
                      <p className="flex flex-col">
                        Phần 1{' '}
                        <span className="text-[10px]">Tối đa 47 câu</span>
                      </p>
                      <input
                        type="number"
                        className="border rounded-lg w-16 px-2 py-1"
                        value="47"
                      />
                    </label>
                    <label className="flex justify-between items-center">
                      <p className="flex flex-col">
                        Phần 2{' '}
                        <span className="text-[10px]">Tối đa 51 câu</span>
                      </p>
                      <input
                        type="number"
                        className="border rounded-lg w-16 px-2 py-1"
                      />
                    </label>
                    <label className="flex justify-between items-center">
                      <p className="flex flex-col">
                        Phần 3{' '}
                        <span className="text-[10px]">Tối đa 26 câu</span>
                      </p>
                      <input
                        type="number"
                        className="border rounded-lg w-16 px-2 py-1"
                        value="26"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Đảo câu hỏi và đáp án */}
            <div className="flex gap-4 mb-6">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" /> Đảo câu hỏi
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" /> Đảo đáp án
              </label>
            </div>
            {/*  */}
            <div className="flex justify-between">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
                onClick={() => setIsModalOpen(false)}
              >
                Đóng
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Xác nhận vào thi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ExamInfo

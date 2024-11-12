const IntroductionPage = () => {
  return (
    <div className="h-auto flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl h-auto bg-white shadow-lg rounded-xl overflow-hidden p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-4 text-gray-500">
            <span className="text-purple-500 font-semibold">Tất cả</span>
            <span>Bài viết mới nhất</span>
            <span>Cẩm nang ôn thi THPTQG</span>
            <span>Công cụ học tập</span>
            <span>Hoạt động cộng đồng</span>
            <span>Kinh nghiệm ôn thi</span>
            <span>Tổng hợp đề thi</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative flex flex-col md:flex-row items-center gap-8 bg-blue-100 p-6 rounded-lg">
          {/* Left Side */}
          <div className="flex-1 text-left space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/path/to/logo.png"
                alt="EduQuiz Logo"
                className="h-8 w-8"
              />{' '}
              {/* Thay đường dẫn logo nếu có */}
              <h1 className="text-lg font-bold text-blue-800">EDUQUIZ</h1>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 leading-snug">
              Hành trình trở thành công cụ ôn thi đắc lực
            </h2>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex items-center justify-center relative">
            <img
              src="/path/to/student-image.png" // Thay đường dẫn hình ảnh học sinh nếu có
              alt="Student"
              className="w-full max-w-xs rounded-lg"
            />
            <div className="absolute bottom-4 right-4 flex gap-2">
              <span className="text-blue-500 font-semibold">▶️▶️▶️</span>
            </div>
          </div>

          {/* Information Box */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-lg p-4 w-64">
            <h3 className="text-sm font-semibold text-gray-700">
              Báo chí nói về chúng tôi
            </h3>
            <h4 className="text-lg font-bold text-gray-900 mt-2">
              7 cách ôn thi trắc nghiệm hiệu quả, điểm cao
            </h4>
            <p className="text-gray-600 text-sm mt-1">
              Hình thức thi trắc nghiệm ngày càng được áp dụng rộng rãi trong
              các kỳ thi quan trọng như THPT Quốc gia,...
            </p>
            <button className="mt-4 px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg">
              Đọc thêm
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroductionPage

import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const IntroductionPage = () => {
  const posts = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      tag: '13 ỨNG DỤNG',
      title: 'TRÍ TUỆ NHÂN TẠO AI TRONG Y TẾ',
      description:
        'Trí tuệ nhân tạo AI trong y tế đã mang lại nhiều đột phá và cải tiến quan trọng...',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      tag: 'TÌM HIỂU',
      title: 'ROBOT TRONG GIÁO DỤC LÀ GÌ?',
      description:
        'Robot trong giáo dục là các thiết bị tự động được thiết kế để hỗ trợ quá trình giảng dạy...',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/150',
      tag: 'TÌM HIỂU',
      title: 'TẠI SAO GIÁO DỤC LẠI QUAN TRỌNG',
      description:
        'Giáo dục không chỉ là chìa khóa mở ra cánh cổng tri thức, mà còn là nền tảng...',
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/150',
      tag: 'TÌM HIỂU',
      title: '8 PHƯƠNG PHÁP GIÁO DỤC HIỆN ĐẠI',
      description:
        'Trong bối cảnh giáo dục không ngừng phát triển, giáo viên và phụ huynh...',
    },
  ]

  return (
    <div className="flex flex-col items-center w-full py-6 bg-white">
      {/* Main Wrapper */}
      <div className="w-11/12 md:w-5/6 bg-gray-100 rounded-2xl overflow-hidden p-4 sm:p-6 relative shadow-md">
        {/* Gradient Border */}
        <div className="absolute inset-0 p-[2px] rounded-2xl bg-gradient-to-r from-blue-500 to-pink-500">
          <div className="w-full h-full bg-white rounded-2xl"></div>
        </div>

        <div className="relative">
          {/* Header */}
          <div className="flex justify-center">
            <div className="flex justify-center bg-white py-4 rounded-full shadow-md px-2 sm:px-4">
              <ul className="flex flex-wrap space-x-2 sm:space-x-3 text-xs sm:text-sm font-medium text-gray-500">
                {[
                  'Tất cả',
                  'Bài viết mới nhất',
                  'Cẩm nang ôn thi THPTQG',
                  'Công cụ học tập',
                  'Hoạt động cộng đồng',
                  'Kinh nghiệm ôn thi',
                  'Tổng hợp đề thi',
                ].map((item, index) => (
                  <li
                    key={index}
                    className="hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 hover:bg-clip-text"
                  >
                    <Link to="#">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-purple-50 rounded-xl p-4 sm:p-6 mx-auto mt-8 shadow-lg flex flex-col md:flex-row gap-6">
            {/* Left Section */}
            <div className="w-full md:w-2/3">
              <img
                src={assets.BANNERBLOG}
                alt="Student"
                className="w-full h-auto rounded-lg shadow"
              />
            </div>

            {/* Right Section */}
            <div className="bg-white p-4 rounded-lg shadow-md w-full md:w-1/3 h-">
              <span className="text-lg text-gray-800 bg-blue-50 py-2 px-3 rounded-3xl">
                Báo chí nói về chúng tôi
              </span>
              <h3 className="mt-2 text-gray-800 font-semibold text-xl">
                7 cách ôn thi trắc nghiệm hiệu quả, điểm cao
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                Hình thức thi trắc nghiệm ngày càng được áp dụng rộng rãi trong
                các kỳ thi quan trọng...
              </p>
              <button className="mt-4 bg-gradient-to-r from-blue-500 to-pink-500 text-white py-2 px-4 rounded-3xl hover:shadow-lg">
                Đọc thêm
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="w-11/12 md:w-5/6 mt-8">
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg sm:text-xl font-semibold">Bài viết mới nhất</p>
          <Link to="#" className="text-blue-600 text-sm sm:text-base">
            Xem thêm
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-gray-200 p-4 rounded-lg shadow-md">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-36 sm:h-40 object-cover rounded-lg"
              />
              <h3 className="mt-2 text-sm sm:text-lg font-semibold">
                {post.title}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-gray-600">
                {post.description}
              </p>
              <button className="mt-4 bg-gradient-to-r from-blue-500 to-pink-500 text-white py-2 px-3 sm:px-4 rounded-3xl hover:shadow-lg text-xs sm:text-sm">
                Đọc thêm
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default IntroductionPage

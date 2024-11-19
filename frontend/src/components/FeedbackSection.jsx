import { useState, useEffect } from 'react'
import { useSwipeable } from 'react-swipeable'
const FeedbackSection = () => {
  const feedbacks = [
    {
      name: 'Trịnh Văn Hoàng',
      role: 'Sinh viên HaUI',
      feedback:
        'Có EduQuiz em học nhàn hẳn. Em tạo đề rất nhanh bằng AI. Em cũng thích tính năng tạo đề, ôn và cả hình ảnh.',
    },
    {
      name: 'Trương Thị Linh',
      role: 'Sinh viên NEU',
      feedback:
        'Con cá heo của EduQuiz làm em ấn tượng và càng ấn tượng hơn với các tính năng tạo đề, ôn tập và thi thử.',
    },
    {
      name: 'Nguyễn Thị Nga',
      role: 'Giảng viên HUST',
      feedback:
        'Tôi là giáo viên, tôi thường xuyên dùng EduQuiz để tạo đề thi cho học sinh của mình. EduQuiz dễ sử dụng, các bạn admin hỗ trợ tôi cũng rất nhiệt tình.',
    },
    {
      name: 'Hoàng Văn Dũng',
      role: 'Sinh viên BK',
      feedback:
        'EduQuiz giúp em tiết kiệm rất nhiều thời gian ôn luyện. Giao diện đẹp và dễ sử dụng!',
    },
    {
      name: 'Phạm Thị Mai',
      role: 'Giảng viên ĐHSP',
      feedback:
        'Tôi rất hài lòng khi sử dụng EduQuiz. Nền tảng thông minh và rất tiện lợi!',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: true,
  })

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1
    )
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide() // Automatically move to the next slide
    }, 3000) // Change every 3 seconds (3000ms)

    return () => clearInterval(interval) // Clean up on component unmount
  }, [])


  return (
    <div
      className="flex flex-col items-center bg-blue-50 py-10 w-full"
      {...handlers}
    >
      <h2 className="text-center text-2xl font-bold text-purple-600 mb-6">
        Phản hồi của khách hàng
      </h2>
      <div className="relative w-full max-w-5xl overflow-hidden">
        {/* Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / 3)}%)`, // Display 3 comments at once
          }}
        >
          {feedbacks.concat(feedbacks).map((item, index) => (
            <div
              key={index}
              className="w-[33.3333%] px-4 flex-shrink-0" // Each comment takes up 1/3 of the container width
              style={{ userSelect: 'none', pointerEvents: 'none' }}
            >
              <div
                className="bg-white shadow-md rounded-lg p-6 text-center"
                style={{
                  borderImage: 'linear-gradient(to right, #007BFF, #FF1493)', // Gradient border from blue to pink
                  borderImageSlice: 1, // Ensures the gradient covers the entire border
                  borderWidth: '4px', // Set the border width
                }}
              >
                <img
                  src="https://via.placeholder.com/60"
                  alt={item.name}
                  className="w-14 h-14 rounded-full mx-auto mb-4"
                  style={{ pointerEvents: 'none' }}
                />
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.role}</p>
                <p className="mt-4 text-gray-600">{item.feedback}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Buttons */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={prevSlide}
          className="px-4 py-2 rounded-md text-white bg-purple-600 hover:bg-purple-800"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="px-4 py-2 rounded-md text-white bg-purple-600 hover:bg-purple-800"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default FeedbackSection

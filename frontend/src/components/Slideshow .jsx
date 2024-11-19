import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'

const LogoSlideshow = () => {
  const logos = [
    'https://via.placeholder.com/150/FF5733', // Logo 1
    'https://via.placeholder.com/150/33FF57', // Logo 2
    'https://via.placeholder.com/150/5733FF', // Logo 3
    'https://via.placeholder.com/150/FFFF33', // Logo 4
    'https://via.placeholder.com/150/33FFFF', // Logo 5
    'https://via.placeholder.com/150/FF33FF', // Logo 6
    'https://via.placeholder.com/150/3333FF', // Logo 7
    'https://via.placeholder.com/150/FF5733', // Logo 8
    'https://via.placeholder.com/150/33FF57', // Logo 9
    'https://via.placeholder.com/150/5733FF', // Logo 10
    'https://via.placeholder.com/150/FFFF33', // Logo 11
    'https://via.placeholder.com/150/33FFFF', // Logo 12
    'https://via.placeholder.com/150/FF33FF', // Logo 13
    'https://via.placeholder.com/150/3333FF', // Logo 14,
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  // Số logo hiển thị cùng lúc
  const visibleLogos = 10

  // Hàm chuyển sang slide trước
  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  // Hàm chuyển sang slide sau
  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, logos.length - visibleLogos))
  }

  // Xử lý vuốt (cảm ứng và chuột)
  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: true, // Cho phép vuốt bằng chuột
  })

  return (
    <div className="w-full">
      {/* Container chính của slider */}
      <div
        className="overflow-hidden relative"
        {...handlers} // Kích hoạt swipeable
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleLogos)}%)`,
          }}
        >
          {logos.map((logo, index) => (
            <div key={index} className="w-1/10 flex-shrink-0 px-2">
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Nút điều hướng */}
      <div className="flex justify-between mt-4">
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`px-4 py-2 bg-gray-200 rounded ${
            currentIndex === 0 && 'opacity-50 cursor-not-allowed'
          }`}
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          disabled={currentIndex === logos.length - visibleLogos}
          className={`px-4 py-2 bg-gray-200 rounded ${
            currentIndex === logos.length - visibleLogos &&
            'opacity-50 cursor-not-allowed'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default LogoSlideshow

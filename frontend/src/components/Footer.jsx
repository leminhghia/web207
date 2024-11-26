import { GrFacebookOption } from 'react-icons/gr'
import { IoLogoTiktok } from 'react-icons/io5'
import { FaYoutube } from 'react-icons/fa'
import { assets } from '../assets/assets'
import { TfiCheck } from 'react-icons/tfi'

const Footer = () => {
  return (
    <footer className="relative bg-[#333333] text-gray-300 pt-16 pb-10 mt-72 z-[-1]">
      {/* Phần bo tròn dè lên trên */}
      <div className="absolute -top-60 left-1/2 transform -translate-x-1/2 h-[300px] md:h-[400px] bg-gradient-to-r from-[#d03cfc] to-[#4864fc] rounded-xl w-11/12 md:w-4/5">
        <div className="p-6 sm:p-8 md:p-14">
          <p className="text-[#ffffff] font-medium text-xl sm:text-2xl md:text-4xl leading-6 sm:leading-8 md:leading-10">
            Tạo nhanh <span className="text-[#aff8c8]">đề thi</span> trắc
            <br className="hidden md:block" /> nghiệm với tính năng hoàn
            <br className="hidden md:block" /> hảo
          </p>
          <button className="bg-[#2e7d32] shadow-md hover:bg-[#1b5e20] text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 mt-4 sm:mt-6 md:mt-8">
            Bắt đầu ngay
          </button>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-7 mt-4 sm:mt-6 md:mt-8">
            <span className="flex items-center gap-2">
              <div className="rounded-full w-[30px] h-[30px] flex items-center justify-center bg-[rgba(70,60,90,0.5)] backdrop-blur-md">
                <TfiCheck className="text-white" />
              </div>
              <p className="text-[#ffffff] text-sm sm:text-base md:text-lg">
                Tạo đề thi nhanh
              </p>
            </span>

            <span className="flex items-center gap-2">
              <div className="rounded-full w-[30px] h-[30px] flex items-center justify-center bg-[rgba(70,60,90,0.5)] backdrop-blur-md">
                <TfiCheck className="text-white" />
              </div>
              <p className="text-[#ffffff] text-sm sm:text-base md:text-lg">
                AI thông minh, linh hoạt
              </p>
            </span>
          </div>
        </div>
      </div>

      {/* Nội dung chính */}
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-36">
        {/* Logo và mạng xã hội */}
        <div>
          <h2 className="text-2xl font-bold text-white">DrxQuiz</h2>
          <p className="mt-2">
            Nền tảng thi trắc nghiệm
            <br /> online tốt nhất
          </p>
          <div className="flex gap-4 items-center p-3">
            <GrFacebookOption style={{ color: '#ffffff' }} size={20} />
            <IoLogoTiktok style={{ color: '#ffffff' }} size={20} />
            <FaYoutube style={{ color: '#ffffff' }} size={20} />
          </div>
          <hr className="mt-2 border border-[#433753]" />
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-10">
            <div className="mt-3">
              <p>Thanh toán</p>
              <img
                src={assets.PAY}
                alt="Payment Methods"
                width={200}
                height={30}
              />
            </div>
            <div>
              <p>Tải xuống</p>
              <div className="flex gap-3">
                <img
                  src={assets.APPSTORE}
                  alt="App Store"
                  width={100}
                  height={30}
                />
                <img
                  src={assets.GOOGLEPLAY}
                  alt="Google Play"
                  width={100}
                  height={30}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Các phần khác */}
        <div>
          <h3 className="text-lg font-semibold text-white">Khám phá</h3>
          <ul className="mt-4 space-y-2">
            <li>Dành cho sinh viên</li>
            <li>Dành cho trung tâm, trường học</li>
            <li>Dành cho doanh nghiệp</li>
            <li>Ứng dụng di động</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Tài nguyên</h3>
          <ul className="mt-4 space-y-2">
            <li>Tin tức</li>
            <li>Báo chí nói về chúng tôi</li>
            <li>Hướng dẫn</li>
            <li>Câu hỏi thường gặp</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Chính sách</h3>
          <ul className="mt-4 space-y-2">
            <li>Điều khoản sử dụng</li>
            <li>Chính sách bảo mật</li>
            <li>Chính sách sử dụng</li>
            <li>Chính sách hoàn tiền</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-4 text-center text-gray-500">
        <div className="flex justify-center mb-6">
          <hr className="border border-[#433753] w-4/5" />
        </div>
        <p>Copyright © 2022-2024 PTCorp Software</p>
      </div>
    </footer>
  )
}

export default Footer

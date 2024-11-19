import { GrFacebookOption } from 'react-icons/gr'
import { IoLogoTiktok } from 'react-icons/io5'
import { FaYoutube } from 'react-icons/fa'
import { assets } from '../assets/assets'
import { TfiCheck } from 'react-icons/tfi'
const Footer = () => {
  return (
    <footer className="relative bg-[#333333] text-gray-300 pt-16 pb-10 mt-72">
      {/* Phần bo tròn dè lên trên */}
      <div className="absolute -top-60 left-1/2 transform -translate-x-1/2 h-[400px] bg-gradient-to-r from-[#d03cfc] to-[#4864fc] rounded-xl w-4/5">
        <div className="p-14">
          <p className="text-[#ffffff] font-medium text-4xl">
            Tạo nhanh <span className="text-[#aff8c8]">đề thi</span> trắc
            <br /> nghiệm với tính năng hoàn
            <br /> hảo
          </p>
          <button className="bg-[#2e7d32] shadow-md hover:bg-[#1b5e20] text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 mt-8">
            Bắt đầu ngay
          </button>
          <div className="flex items-center gap-7 mt-8">
            <span className="flex items-center gap-2">
              <div className="rounded-full w-[30px] h-[30px] flex items-center justify-center bg-[rgba(70,60,90,0.5)] backdrop-blur-md">
                <TfiCheck className="text-white" />
              </div>
              <p className="text-[#ffffff]">Tạo đề thi nhanh</p>
            </span>

            <span className="flex items-center gap-2">
              <div className="rounded-full w-[30px] h-[30px] flex items-center justify-center bg-[rgba(70,60,90,0.5)] backdrop-blur-md">
                <TfiCheck className="text-white" />
              </div>
              <p className="text-[#ffffff]">AI thông minh, linh hoạt</p>
            </span>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="container mx-auto px-5 flex justify-center md:grid-cols-4 gap-8 mt-36">
        {/* Logo và mạng xã hội */}
        <div className="w-2/6">
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
          <hr className=" mt-2 border border-[#433753]" />
          <div className="flex justify-center items-center gap-10">
            <div className="mt-3 flex-col">
              <p>Thanh toán</p>
              <img src={assets.PAY} alt="" width={200} height={30} />
            </div>
            <div className="flex-col">
              <p>Tải xuống</p>
              <div className="flex gap-3">
                <img src={assets.APPSTORE} alt="" width={100} height={30} />
                <img src={assets.GOOGLEPLAY} alt="" width={100} height={30} />
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

      <div className=" mt-8 pt-4 text-center text-gray-500">
        <div className="flex justify-center mb-6">
          <hr className="border border-[#433753] w-4/5" />
        </div>
        <p>Copyright © 2022-2024 PTCorp Software</p>
      </div>
    </footer>
  )
}
export default Footer

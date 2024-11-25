import { ReactTyped } from 'react-typed'
import { assets } from '../assets/assets'
import { TbPencilHeart } from 'react-icons/tb'
import { GoSearch } from 'react-icons/go'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { TbUserSquare } from 'react-icons/tb'
import { IoHomeOutline } from 'react-icons/io5'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { MdOutlineAirplay } from 'react-icons/md'
import LogoSlideshow from '../components/Slideshow '
import FeedbackSection from '../components/FeedbackSection'
const PagesHome = () => {
  return (
    <div className="flex-col w-full">
      {/* 1 */}
      <div className="flex flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-purple-50 to-white py-12 px-4 lg:px-8">
        {/* Nội dung chính */}
        <div className="text-center max-w-3xl mt-10">
          {/* Header Tagline */}
          <div className="inline-block border border-transparent bg-gradient-to-r from-[#4864fc] to-[#d03cfc] p-[1px] rounded-full">
            <div className="bg-white rounded-full px-4 py-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4864fc] to-[#d03cfc] font-semibold">
                #1 Nền tảng thi trắc nghiệm online tốt nhất
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2 flex flex-col leading-relaxed text-start ml-4 lg:ml-16">
            Có một cách đơn giản hơn để{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4864fc] to-[#d03cfc] h-auto min-h-[40px] pb-1 text-4xl lg:text-5xl mb-3 mt-3 p-1">
              <ReactTyped
                strings={[
                  'tự động tạo câu hỏi',
                  'tạo nhanh đề thi',
                  'học tập ôn thi',
                  'tổ chức kỳ thi',
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </span>
            trắc nghiệm online
          </h1>
          <hr className="w-[125px] ml-4 lg:ml-16 mb-4 h-[2px] bg-gradient-to-r from-[#4864fc] to-[#d03cfc] border-0 rounded-full" />

          {/* Subtitle */}
          <p className="text-lg text-gray-600 mb-6 text-start ml-4 lg:ml-16 w-full sm:w-[80%] lg:w-[500px] mx-auto">
            Tạo câu hỏi và đề thi nhanh với những giải pháp thông minh. DRXQuiz
            tận dụng sức mạnh công nghệ để nâng cao trình độ học tập của bạn.
          </p>

          {/* Rating and Customers */}
          <div className="flex items-center space-x-4 ml-4 lg:ml-16">
            {/* Profile Images */}
            <div className="flex-col">
              <div className="flex -space-x-2">
                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="/path/to/image1.jpg"
                  alt="Customer 1"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="/path/to/image2.jpg"
                  alt="Customer 2"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="/path/to/image3.jpg"
                  alt="Customer 3"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="/path/to/image4.jpg"
                  alt="Customer 4"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="/path/to/image5.jpg"
                  alt="Customer 5"
                />
              </div>
              <div className="flex space-x-1 mt-1">
                <span className="text-yellow-400 text-xl">★</span>
                <span className="text-yellow-400 text-xl">★</span>
                <span className="text-yellow-400 text-xl">★</span>
                <span className="text-yellow-400 text-xl">★</span>
                <span className="text-yellow-400 text-xl">★</span>
              </div>
            </div>
            {/* Text */}
            <div>
              <p className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#4864fc] to-[#d03cfc]">
                Hơn 200.000+ khách hàng đã yêu thích sử dụng
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-12 ml-4 lg:ml-16 mt-3">
            <button className="bg-gradient-to-r from-[#4864fc] to-[#d03cfc] text-white py-2 px-4 rounded-3xl flex items-center gap-2">
              <TbPencilHeart /> Tạo đề thi ngay
            </button>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-3xl flex items-center gap-2">
              <GoSearch /> Tìm kiếm đề thi
            </button>
          </div>
        </div>

        {/* Banner */}
        <div className="mt-8 lg:mt-0">
          <img
            src={assets.BANNERHOME}
            alt="Banner"
            className="max-w-full lg:w-[700px] mx-auto"
          />
        </div>
      </div>

      {/* Section for Community Trust */}
      <div className="flex justify-center space-y-6 w-full mt-10">
        <div className="flex-col space-y-5 w-full px-6">
          <p className="flex justify-center text-3xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#4864fc] to-[#d03cfc] w-full text-left pb-1">
            Được cộng đồng sinh viên, trường đại học và doanh nghiệp trên cả
            nước tin cậy
          </p>
          <div className="w-full flex justify-center p-3 relative z-[-10]">
            <LogoSlideshow />
          </div>

          {/* Customer Sections */}
          <div className="flex justify-center items-center w-full flex-wrap gap-6">
            <div className="w-full sm:w-1/3 lg:w-1/4 text-center">
              <p className="text-left font-medium text-lg flex items-center gap-2 justify-center">
                <HiOutlineUserCircle style={{ color: '#8F82FC' }} />
                Sinh viên
              </p>
              <p className="text-left mt-3">
                Nền tảng trao đổi đề thi, tài liệu học tập. Thông qua việc tự
                tạo đề, sinh viên có thể tự học với bộ tài liệu phù hợp đồng
                thời chia sẻ cho nhóm học tập.
              </p>
              <button className="mt-3 bg-clip-text text-transparent bg-gradient-to-r from-[#4864fc] to-[#d03cfc] flex items-center gap-1">
                <MdKeyboardArrowRight style={{ color: '#8F82FC' }} size={20} />
              </button>
            </div>

            <div className="w-full sm:w-1/3 lg:w-1/4 text-center">
              <p className="text-left font-medium text-lg flex items-center gap-2 justify-center">
                <TbUserSquare style={{ color: '#8F82FC' }} />
                Giảng viên
              </p>
              <p className="text-left mt-3">
                Thao tác tạo đề đơn giản, chính xác cùng phương pháp đánh giá
                hiệu quả, giúp giảng viên dễ dàng quản lý bài giảng và chất
                lượng giảng dạy.
              </p>
              <button className="mt-3 bg-clip-text text-transparent bg-gradient-to-r from-[#4864fc] to-[#d03cfc] flex items-center gap-1">
                Bắt đầu
                <MdKeyboardArrowRight style={{ color: '#8F82FC' }} size={20} />
              </button>
            </div>

            <div className="w-full sm:w-1/3 lg:w-1/4 text-center">
              <p className="text-left font-medium text-lg flex items-center gap-2 justify-center">
                <IoHomeOutline style={{ color: '#8F82FC' }} />
                Trung tâm đào tạo
              </p>
              <p className="text-left mt-3">
                Nền tảng hỗ trợ chi tiết về kỹ thuật giúp các doanh nghiệp nhanh
                chóng tổ chức và sắp xếp các nội dung đào tạo cho cán bộ công
                nhân viên.
              </p>
              <div className="flex justify-start">
                <button className="mt-3 bg-clip-text text-transparent bg-gradient-to-r from-[#4864fc] to-[#d03cfc] flex items-center gap-1">
                  Bắt đầu
                  <MdKeyboardArrowRight
                    style={{ color: '#8F82FC' }}
                    size={20}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="w-full mt-8 bg-[#F6F8FF] p-7">
        <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 w-full justify-center items-center">
          {/* Nội dung text */}
          <div className="lg:w-1/2 flex justify-center">
            <div>
              <button className="w-[78px] mb-4 text-[13px] font-medium text-white text-transparent bg-gradient-to-r from-[#4864fc] to-[#d03cfc] rounded-md p-1">
                NHANH
              </button>
              <p className="text-3xl font-medium">
                <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#4864fc] to-[#d03cfc]">
                  Tự động
                </span>{' '}
                tạo câu hỏi và <br />
                đề thi trắc nghiệm
              </p>
              <p className="mt-6 flex items-start gap-2 lg:w-80 w-full">
                <MdOutlineAirplay style={{ color: '#8F82FC' }} size={50} />
                Tạo đề nhanh với vài cú nhấp chuột. Bằng cách nhập file tài liệu
                định dạng WORD hoặc PDF, AI sẽ giúp bạn tạo đề chính xác 100%
                trong vài phút.
              </p>
              <p className="mt-6 flex items-start gap-2 lg:w-80 w-full">
                <MdOutlineAirplay style={{ color: '#8F82FC' }} size={50} />
                Tối ưu trải nghiệm, tiết kiệm thời gian, công sức, đảm bảo tính
                khách quan và có thêm thời gian nghiên cứu, học tập.
              </p>
              <button className="mt-4 w-[110px] h-10 text-[13px] font-medium text-white text-transparent bg-gradient-to-r from-[#4864fc] to-[#d03cfc] rounded-3xl p-1">
                Bắt đầu ngay
              </button>
            </div>
          </div>

          {/* Banner */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="mr-5 lg:mr-0">
              <img
                src={assets.AIBANNER}
                alt=""
                className="w-full max-w-[300px] lg:max-w-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="w-full mt-8 bg-[#F6F8FF] p-7">
        <div className="flex flex-col lg:flex-row w-full justify-center items-center space-y-5 lg:space-y-0">
          {/* Banner */}
          <div className="lg:w-1/2 flex justify-center order-2 lg:order-1">
            <div className="mr-0 lg:mr-5">
              <img
                src={assets.TOIUU}
                alt=""
                className="w-full max-w-[300px] lg:max-w-none"
              />
            </div>
          </div>

          {/* Nội dung văn bản */}
          <div className="lg:w-1/2 flex justify-center order-1 lg:order-2">
            <div>
              <button className="w-[78px] mb-4 text-[13px] font-medium text-white text-transparent bg-gradient-to-r from-[#4864fc] to-[#d03cfc] rounded-md p-1">
                TỐI ƯU
              </button>
              <p className="text-3xl font-medium">
                <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#4864fc] to-[#d03cfc]">
                  Thân thiện dễ sử dụng,
                  <br /> cá nhân hóa
                </span>{' '}
                việc học tập
              </p>
              <p className="mt-6 flex items-start gap-2 w-full lg:w-80">
                <MdOutlineAirplay style={{ color: '#8F82FC' }} size={50} />
                Tạo đề nhanh với vài cú nhấp chuột. Bằng cách nhập file tài liệu
                định dạng WORD hoặc PDF, AI sẽ giúp bạn tạo đề chính xác 100%
                trong vài phút.
              </p>
              <p className="mt-6 flex items-start gap-2 w-full lg:w-80">
                <MdOutlineAirplay style={{ color: '#8F82FC' }} size={50} />
                Tối ưu trải nghiệm, tiết kiệm thời gian, công sức, đảm bảo tính
                khách quan và có thêm thời gian nghiên cứu, học tập.
              </p>
              <button className="mt-4 w-[110px] h-10 text-[13px] font-medium text-white text-transparent bg-gradient-to-r from-[#4864fc] to-[#d03cfc] rounded-3xl p-1">
                Bắt đầu ngay
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3 */}
      <div className="w-full mt-8 bg-[#F6F8FF] p-7">
        <div className="flex flex-col lg:flex-row w-full justify-center items-center lg:items-start space-y-5 lg:space-y-0">
          {/* Nội dung văn bản */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2">
            <div>
              <button className="w-[78px] mb-4 text-[13px] font-medium text-white text-transparent bg-gradient-to-r from-[#4864fc] to-[#d03cfc] rounded-md p-1">
                HIỆU QUẢ
              </button>
              <p className="text-3xl font-medium">
                <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#4864fc] to-[#d03cfc]">
                  Phòng thi ảo
                </span>{' '}
                trực tuyến
              </p>
              <p className="mt-6 flex items-start gap-2 w-full lg:w-80">
                <MdOutlineAirplay style={{ color: '#8F82FC' }} size={50} />
                Tạo đề nhanh với vài cú nhấp chuột. Bằng cách nhập file tài liệu
                định dạng WORD hoặc PDF, AI sẽ giúp bạn tạo đề chính xác 100%
                trong vài phút.
              </p>
              <p className="mt-6 flex items-start gap-2 w-full lg:w-80">
                <MdOutlineAirplay style={{ color: '#8F82FC' }} size={50} />
                Tối ưu trải nghiệm, tiết kiệm thời gian, công sức, đảm bảo tính
                khách quan và có thêm thời gian nghiên cứu, học tập.
              </p>
              <button className="mt-4 w-[110px] h-10 text-[13px] font-medium text-white text-transparent bg-gradient-to-r from-[#4864fc] to-[#d03cfc] rounded-3xl p-1">
                Bắt đầu ngay
              </button>
            </div>
          </div>

          {/* Hình ảnh */}
          <div className="lg:w-1/2 flex justify-center order-2 lg:order-1">
            <div className="lg:ml-5">
              <img
                src={assets.AIBANNER}
                alt="Phòng thi ảo trực tuyến"
                className="w-full max-w-[300px] lg:max-w-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 4 */}
      <div className="w-full mt-8 bg-[#F6F8FF] p-7">
        <div className="flex flex-col lg:flex-row w-full justify-center items-center lg:items-start space-y-5 lg:space-y-0">
          {/* Hình ảnh */}
          <div className="lg:w-1/2 flex justify-center order-2 lg:order-1">
            <div className="lg:mr-5">
              <img
                src={assets.HIEUQUA}
                alt="Thân thiện dễ sử dụng"
                className="w-full max-w-[300px] lg:max-w-none"
              />
            </div>
          </div>

          {/* Nội dung văn bản */}
          <div className="lg:w-1/2 flex justify-center order-1 lg:order-2">
            <div>
              <button className="w-[78px] mb-4 text-[13px] font-medium text-white text-transparent bg-gradient-to-r from-[#4864fc] to-[#d03cfc] rounded-md p-1">
                LINH HOẠT
              </button>
              <p className="text-3xl font-medium">
                <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#4864fc] to-[#d03cfc]">
                  Thân thiện dễ sử dụng,
                  <br /> cá nhân hóa
                </span>{' '}
                việc học tập
              </p>
              <p className="mt-6 flex items-start gap-2 w-full lg:w-80">
                <MdOutlineAirplay style={{ color: '#8F82FC' }} size={50} />
                Tạo đề nhanh với vài cú nhấp chuột. Bằng cách nhập file tài liệu
                định dạng WORD hoặc PDF, AI sẽ giúp bạn tạo đề chính xác 100%
                trong vài phút.
              </p>
              <p className="mt-6 flex items-start gap-2 w-full lg:w-80">
                <MdOutlineAirplay style={{ color: '#8F82FC' }} size={50} />
                Tối ưu trải nghiệm, tiết kiệm thời gian, công sức, đảm bảo tính
                khách quan và có thêm thời gian nghiên cứu, học tập.
              </p>
              <button className="mt-4 w-[110px] h-10 text-[13px] font-medium text-white text-transparent bg-gradient-to-r from-[#4864fc] to-[#d03cfc] rounded-3xl p-1">
                Bắt đầu ngay
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="flex justify-center mt-8 px-4 sm:px-6 md:px-8 lg:px-12">
        <FeedbackSection />
      </div>
    </div>
  )
}

export default PagesHome

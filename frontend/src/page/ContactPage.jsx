import { LiaFacebookSquare } from 'react-icons/lia'
import { AiFillTikTok } from 'react-icons/ai'
import { FaYoutube } from 'react-icons/fa'
const ContactPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl mt-0 bg-white shadow-lg rounded-lg p-8 md:p-12 md:mt-4">
        <h1 className="text-3xl font-bold text-center text-purple-600">
          Liên hệ với chúng tôi
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Việc liên lạc với FptQuiz chưa bao giờ dễ dàng hơn thế.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <p className="text-gray-600">
              Chúng tôi đang giúp cho 100000+ khách hàng và đối tác tổ chức các
              kỳ thi đánh giá năng lực, nâng cao chất lượng đào tạo nhân sự và
              học viên.
            </p>
            <p className="mt-2 text-purple-500 font-semibold">
              Hãy để chúng tôi tư vấn giải pháp cho bạn
            </p>
            <hr className="mt-5 mb-5" />
            <div className="mt-6 space-y-2">
              <div className="flex gap-3">
                <p>
                  <span className=" text-gray-500">Số điện thoại</span>{' '}
                  0969682900
                </p>
                <p>
                  <span className="text-gray-500">Email</span>{' '}
                  fpyPolytecnich@dongnai.vn
                </p>
              </div>
              <p>
                <span className="text-gray-500 flex flex-col">Văn phòng</span>{' '}
                Tầng 5, số 33, TP Biên Hòa - Đồng Nai
              </p>
              <div>
                <span className="text-gray-500">Cộng đồng</span>
                <div className="flex gap-2 mt-2">
                  <LiaFacebookSquare size={30} style={{ color: 'blue' }} />
                  <AiFillTikTok size={30} style={{ color: 'blue' }} />
                  <FaYoutube size={30} style={{ color: 'blue' }} />
                </div>
              </div>
            </div>

            <div className="mt-4 flex space-x-3">
              <a href="#" className="text-blue-600">
                <i className="fab fa-facebook-square text-2xl"></i>
              </a>
              <a href="#" className="text-purple-500">
                <i className="fab fa-tiktok text-2xl"></i>
              </a>
              <a href="#" className="text-blue-600">
                <i className="fab fa-youtube text-2xl"></i>
              </a>
            </div>

            <div className="mt-6">
              <img
                src="https://via.placeholder.com/150"
                alt="Customer support"
                className="rounded-md shadow-lg"
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <form className="space-y-4">
              <div>
                <label className="block text-gray-600">Họ và tên</label>
                <input
                  type="text"
                  placeholder="Nhập tên của bạn"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-gray-600">Email</label>
                <input
                  type="email"
                  placeholder="Nhập email của bạn"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-gray-600">Số điện thoại</label>
                <input
                  type="text"
                  placeholder="Nhập số điện thoại của bạn"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-gray-600">
                  Nhập mong muốn cần tư vấn
                </label>
                <textarea
                  placeholder="Nhập mong muốn cần tư vấn"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-md hover:from-purple-600 hover:to-blue-600 focus:outline-none"
              >
                Gửi liên hệ
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage

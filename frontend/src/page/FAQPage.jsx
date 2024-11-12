import { useState } from 'react'

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const faqs = [
    {
      question: 'Làm thế nào để đăng ký tài khoản?',
      answer:
        "Để đăng ký tài khoản, bạn chỉ cần nhấp vào nút 'Đăng ký' trên trang chủ, sau đó điền thông tin cá nhân và hoàn tất quá trình đăng ký.",
    },
    {
      question: 'Tôi có thể thay đổi thông tin cá nhân của mình không?',
      answer:
        "Có, bạn có thể thay đổi thông tin cá nhân của mình bằng cách truy cập vào trang 'Tài khoản' và chỉnh sửa thông tin.",
    },
    {
      question: 'Làm sao để khôi phục mật khẩu?',
      answer:
        "Nếu bạn quên mật khẩu, bạn có thể nhấp vào 'Quên mật khẩu' trên trang đăng nhập và làm theo hướng dẫn để khôi phục mật khẩu.",
    },
    {
      question: 'Có thể tham gia bài kiểm tra mà không cần đăng nhập không?',
      answer: 'Không, bạn cần đăng nhập vào hệ thống để tham gia bài kiểm tra.',
    },
    {
      question:
        'Tôi sẽ nhận được kết quả ngay lập tức sau khi hoàn thành bài kiểm tra?',
      answer:
        'Đúng vậy, bạn sẽ nhận được điểm số và phản hồi ngay lập tức sau khi hoàn thành bài kiểm tra.',
    },
  ]

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Hỏi Đáp
        </h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <div
                className="text-xl font-semibold text-gray-800 cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                {faq.question}
              </div>
              {activeIndex === index && (
                <p className="text-gray-700 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQPage

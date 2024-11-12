import { useState } from 'react'
const FeedbackPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [feedback, setFeedback] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // Xử lý gửi thông tin phản hồi (giả sử gửi tới API hoặc lưu trữ)
    console.log('Tên:', name)
    console.log('Email:', email)
    console.log('Phản hồi:', feedback)

    // Hiển thị thông báo gửi thành công
    setMessage('Cảm ơn bạn đã gửi góp ý!')

    // Reset form sau khi gửi
    setName('')
    setEmail('')
    setFeedback('')
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-xl w-full">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Gửi Góp Ý
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700"
            >
              Họ Tên
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập họ tên của bạn"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập email của bạn"
              required
            />
          </div>

          <div>
            <label
              htmlFor="feedback"
              className="block text-lg font-medium text-gray-700"
            >
              Phản Hồi
            </label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
              placeholder="Chia sẻ góp ý của bạn"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Gửi Góp Ý
            </button>
          </div>
        </form>

        {message && (
          <p className="mt-6 text-center text-green-600">{message}</p>
        )}
      </div>
    </div>
  )
}

export default FeedbackPage

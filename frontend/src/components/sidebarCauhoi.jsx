import  { useContext,useState } from 'react'
import { QuizContext } from '../context/QuizContext';
import axios from 'axios';
import { toast } from 'react-toastify';
const SidebarCauhoi = () => {
    const [showModal, setShowModal] = useState(false);
    const {setVisible,userQuizId} = useContext(QuizContext)
    const hancleBack = () => {
      setShowModal(false);
    };
    const handleSubmit = async (userQuiz) => {
        if (!userQuiz) {
          toast.error("Có lỗi khi nộp bài, vui lòng thử lại");
          return;
        }
        try {
          const res = await axios.post(`http://localhost:2000/api/useranswer/add`, {
            answer: data, user_quiz_id: userQuizId
          })
          toast.success(res.data.message)
    
          // toast.success(res.data.message);
        } catch (error) {
          console.error(error);
        }
      };
    
  return (
    <div>
        <div className="w-full md:w-1/4 bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-3">
              <div className="space-y-3">
                <h1 className="text-lg font-bold">Công nghệ chế tạo máy</h1>
                <p className="text-sm text-gray-500">Chế độ: Thi thử</p>
                <hr />
              </div>
              <div className="flex flex-col space-y-3">
                <div className="text-gray-700 flex flex-col space-y-2 mt-2">
                  <span className="mr-2">Thời gian còn lại:</span>
                  <span className="font-bold text-red-500">59:36</span>
                </div>
                <hr />
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <div>
                    <button
                      onClick={() => setShowModal(true)}
                      className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md w-full sm:w-auto"
                    >
                      Trở về
                    </button>

                    {showModal && (
                      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                        <div className="bg-white rounded-lg p-6 shadow-lg w-11/12 md:w-1/3">
                          <h2 className="text-lg font-semibold mb-4">
                            Bạn có muốn trở về?
                          </h2>
                          <div className="flex justify-end gap-4">
                            {/* Nút Trở về */}
                            <button
                              onClick={() => setVisible(false)}
                              className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                            >
                              Trở về
                            </button>
                            {/* Nút Đóng */}
                            <button
                              onClick={hancleBack}
                              className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-md"
                            >
                              Đóng
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => handleSubmit(userQuizId)}
                    className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md shadow-md w-full sm:w-4/6"
                  >
                    Nộp bài thi
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white mt-9 shadow-md rounded-lg p-3">
              <h2 className="text-lg font-bold mb-4">Danh sách phần thi</h2>
              <ul className="space-y-2">
                <li className="flex justify-between items-center hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                  <span className="flex flex-col">
                    Phần 1<p className="text-[10px]">Tiến độ</p>
                  </span>
                  <span className="text-gray-500">0/47</span>
                </li>
                <li className="flex justify-between items-center hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                  <span className="flex flex-col">
                    Phần 2<p className="text-[10px]">Tiến độ</p>
                  </span>
                  <span className="text-gray-500">0/51</span>
                </li>
                <li className="flex justify-between items-center hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                  <span className="flex flex-col">
                    Phần 3<p className="text-[10px]">Tiến độ</p>
                  </span>
                  <span className="text-gray-500">0/26</span>
                </li>
              </ul>
            </div>
          </div>
    </div>
  )
}

export default SidebarCauhoi

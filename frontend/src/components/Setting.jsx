import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
const Setting = () => {
  const [shuffleQuestions, setShuffleQuestions] = useState(false)
  const [shuffleAnswers, setShuffleAnswers] = useState(false)
  const [examTime, setExamTime] = useState(0)
  const { id } = useParams()



  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await axios.get(`http://localhost:2000/api/question/shuffle/${id}` );
          setShuffleQuestions(!!res.data[0].shuffle_questions); 
          setShuffleAnswers(!!res.data[0].shuffle_options); 
          setExamTime(res.data[0].time_limit || 0);   
      } catch (error) {
        console.error( error);
      }
    };

    fetchSettings();
  }, [id]);

  const handleUpdateSettings = async () => {
    try {
      const res = await axios.put("http://localhost:2000/api/question/update/shuffle", {
        id,
        shuffleQuestions,
        shuffleOptions: shuffleAnswers,
        timeLimit: examTime,
      });
      toast.success(res.data.message); 
    } catch (error) {
      console.error(error);
 
    }
  };


  return (
    <div className="max-w-lg mx-auto p-8 bg-gradient-to-br from-blue-50 to-blue-100 shadow-2xl rounded-lg border border-gray-200 transform transition-all duration-500 hover:scale-105 hover:shadow-3xl">
      <h3 className="text-2xl font-semibold text-gray-800 mb-8 border-b pb-4 text-center relative">
        <span className="after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-16 after:h-1 after:bg-blue-600"></span>
        Cài đặt bài thi
      </h3>

      {/* Đảo câu hỏi */}
      <div className="mb-6 group">
        <label className="flex items-center gap-4 cursor-pointer">
          <input
            type="checkbox"
            className="w-6 h-6 text-blue-600 border-gray-300 rounded focus:ring-blue-500 transform transition-transform duration-300 group-hover:scale-110"
            checked={shuffleQuestions}
            onChange={(e) => setShuffleQuestions(e.target.checked)}
          />
          <span className="text-gray-700 text-lg font-medium group-hover:text-blue-600 transition-all duration-300">
            Đảo câu hỏi
          </span>
        </label>
      </div>

      {/* Đảo đáp án */}
      <div className="mb-6 group">
        <label className="flex items-center gap-4 cursor-pointer">
          <input
            type="checkbox"
            className="w-6 h-6 text-blue-600 border-gray-300 rounded focus:ring-blue-500 transform transition-transform duration-300 group-hover:scale-110"
            checked={shuffleAnswers}
            onChange={(e) => setShuffleAnswers(e.target.checked)}
          />
          <span className="text-gray-700 text-lg font-medium group-hover:text-blue-600 transition-all duration-300">
            Đảo đáp án
          </span>
        </label>
      </div>

      {/* Thời gian làm bài */}
      <div className="mb-6">
        <label className="block text-gray-700 text-lg font-medium mb-2">
          Thời gian làm bài (phút):
        </label>
        <input
          type="number"
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm text-lg focus:ring-blue-500 focus:border-blue-500 transform transition-transform duration-300 hover:scale-105"
          placeholder="Nhập số phút"
          value={examTime}
          onChange={(e) => setExamTime(e.target.value)}
        />
      </div>

  
      <div className="flex justify-end">
        <button onClick={handleUpdateSettings} className="bg-blue-600 text-white text-lg px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:scale-95">
          Lưu cài đặt
        </button>
      </div>
    </div>
  )
}

export default Setting

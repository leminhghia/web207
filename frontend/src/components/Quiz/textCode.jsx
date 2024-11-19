import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const QuizDashboard = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get("http://localhost:2000/api/quizzes/list");
        setQuizzes(response.data);
      } catch (err) {
        console.error("Không thể tải quiz", err);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Thanh tiêu đề */}
      <div className="bg-white p-4 shadow-md flex justify-between items-center">
        <div>
          <h1 className="text-lg font-bold">Công nghệ chế tạo máy</h1>
          <p className="text-sm text-gray-500">Chế độ: Thi thử</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-gray-700">
            <span className="mr-2">Thời gian còn lại:</span>
            <span className="font-bold text-red-500">59:36</span>
          </div>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md">
            Nộp bài thi
          </button>
        </div>
      </div>

      {/* Nội dung chính */}
      <div className="flex flex-1 p-6 space-x-6">
        {/* Danh sách phần thi */}
        <div className="w-1/4 bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-lg font-bold mb-4">Danh sách phần thi</h2>
          <ul className="space-y-2">
            <li className="flex justify-between items-center bg-gray-100 p-2 rounded-lg">
              <span>Phần 1</span>
              <span className="text-gray-500">0/47</span>
            </li>
            <li className="flex justify-between items-center bg-gray-100 p-2 rounded-lg">
              <span>Phần 2</span>
              <span className="text-gray-500">0/51</span>
            </li>
            <li className="flex justify-between items-center bg-gray-100 p-2 rounded-lg">
              <span>Phần 3</span>
              <span className="text-gray-500">0/26</span>
            </li>
          </ul>
        </div>

        {/* Danh sách quiz */}
        <div className="flex-1 bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-lg font-bold mb-4">Danh sách Quiz</h2>
          <div className="space-y-4">
            {quizzes.map((quiz) => (
              <div
                key={quiz.quiz_id}
                className="p-4 bg-gray-100 shadow-sm rounded-lg border"
              >
                <h3 className="text-base font-semibold">{quiz.title}</h3>
                <Link
                  to={`/quiz/${quiz.quiz_id}`}
                  className="text-blue-500 mt-2 inline-block"
                >
                  Thực hiện Quiz
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Mục lục câu hỏi */}
        <div className="w-1/4 bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-lg font-bold mb-4">Mục lục câu hỏi</h2>
          <div className="grid grid-cols-5 gap-2">
            {[...Array(47)].map((_, index) => (
              <button
                key={index}
                className="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center"
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizDashboard;

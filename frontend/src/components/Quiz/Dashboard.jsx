// src/pages/QuizDashboard.jsx
import  { useEffect, useState } from "react";
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
console.table(quizzes);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center">Danh Sách Quiz</h2>
      <div className="space-y-4">
        {quizzes.map((quiz) => (
          <div key={quiz.quiz_id} className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">{quiz.title}</h3>
            <Link to={`/quiz/${quiz.quiz_id}`} className="text-blue-500">Thực hiện Quiz</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizDashboard;

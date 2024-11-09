import { useEffect, useState } from 'react';

const QuizLog = () => {
    const [quizHistory, setQuizHistory] = useState([]);

    useEffect(() => {
        const history = [];
        Object.keys(localStorage).forEach((key) => {
            if (key !== 'hasReloaded') {
                const quizData = localStorage.getItem(key);
                const parsedData = JSON.parse(quizData);
                history.push({ ...parsedData, id: key });
            }

        });

        setQuizHistory(history);
    }, []);

    return (
        <div className="quiz-log">
            <h2 className="text-2xl font-bold mb-4">Lịch sử làm bài quiz</h2>
            {quizHistory.length > 0 ? (
                <ul>
                    {quizHistory.slice().map((item, index) => (
                        <li key={index} className="mb-4 p-4 border rounded">
                            <h3 className="text-xl font-semibold">Bài quiz: {item.quizName}</h3>
                            <p><strong>Điểm:</strong> {item.score}</p>
                            <p><strong>Thời gian làm bài:</strong> {item.time}</p>
                            <p><strong>Thời gian nộp bài:</strong> {item.date}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Chưa có lịch sử quiz nào.</p>
            )}
        </div>
    );
};

export default QuizLog;

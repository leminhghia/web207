import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Ba() {
    const { subId } = useParams();
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:2000/quiz/${subId}`, { withCredentials: true })
            .then(res => setQuestions(res.data))
            .catch(err => console.log(err));
    }, [subId]);

    const handleAnswerChange = (queId, ansId) => {
        setAnswers(prev => ({ ...prev, [queId]: ansId }));
    };

    const handleSubmit = () => {
        axios.post("http://localhost:2000/quiz/submit", { answers, subId }, { withCredentials: true })
            .then(res => {
                setScore(res.data.score);
                alert(res.data.message);  
            })
            .catch(err => console.log(err));
    };
    console.log(questions);
    console.log(answers);
    

    return (
        <div>
            <h2>Quiz</h2>
            {questions.map(q => (
                <div key={q.queId}>
                    <p>{q.question}</p>
                    {q.answers.map(a => (
                        <label key={a.ansId}>
                            <input
                                type="radio"
                                name={`question-${q.queId}`}
                                onChange={() => handleAnswerChange(q.queId, a.ansId)}
                            />
                            {a.answer}
                        </label>
                    ))}
                </div>
            ))}
            <button onClick={handleSubmit}>Submit Quiz</button>
            {score !== null && <p>Your Score: {score}</p>}
        </div>
    );
}

export default Ba;

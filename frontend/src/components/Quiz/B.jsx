import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function Ba() {
    const { subId } = useParams();
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    // const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:2000/quiz/${subId}`, { withCredentials: true })
            .then(res => setQuestions(res.data))
            .catch(err => console.log(err));
    }, [subId]);

    const handleAnswerChange = (queId, ansId) => {
        setAnswers(prev => ({ ...prev, [queId]: ansId }));
    };

    // const handleSubmit = () => {
    //     const answerList = Object.keys(answers).map(queId => ({
    //         queId: parseInt(queId),
    //         ansId: answers[queId]
    //     }));
    //     // axios.post(`http://localhost:2000/submit-quiz`, { answers: answerList, subId }, { withCredentials: true })
    //     //     .then(res => navigate('/result', { state: { score: res.data.score } }))
    //     //     .catch(err => console.log(err));
    // };
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
            <button >Submit Quiz</button>
        </div>
    );
}

export default Ba;

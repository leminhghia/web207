import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Soancauhoi = () => {
    const { id } = useParams();

    const [question, setQuestion] = useState("");
    const [answers, setAnswers] = useState([
        { answer_text: "", is_correct: 0 },
        { answer_text: "", is_correct: 0 },
        { answer_text: "", is_correct: 0 },
        { answer_text: "", is_correct: 0 },
    ]);
    const [data, setData] = useState('')
 

    // Hàm cập nhật câu trả lời khi người dùng thay đổi
    const handleAnswerChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index].answer_text = value;
        setAnswers(newAnswers);
    };

    // Hàm đánh dấu câu trả lời đúng
    const handleIsCorrectChange = (index) => {
        const newAnswers = [...answers];
        newAnswers.forEach((answer, idx) => {
            if (idx === index) {
                answer.is_correct = 1;
            } else {
                answer.is_correct = 0;
            }
        });
        setAnswers(newAnswers);
    };

    // Xử lý submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!question.trim()) return;

        const correctAnswer = answers.some(answer => answer.is_correct);
        if (!correctAnswer) return;

        const allAnswersFilled = answers.every(answer => answer.answer_text.trim());
        if (!allAnswersFilled) return;


        axios.post(`http://localhost:2000/api/question/add`, { quiz_id: id, question: question, answers: answers, })
            .then(res => {
                setData(res.data.question_id); 
                toast.success(res.data.message); 
            })
            .catch(err => console.error(err))
    };
    console.log(data);

    // lay du lieu tu quesiton
    useEffect(() => {
        if (!data) return;

        async function fetchData() {
            try {
                const res = await axios.get(`http://localhost:2000/api/question/get`, {
                    params: { quiz_id: id, question_id: data },
                });
                console.log(res.data);
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
            }
        }
        fetchData();
    }, [data, id]);

    return (
        <div className="grid grid-cols-[2fr_4fr] gap-4 mt-10 mx-4">
            <form >
                <div className="mx-2 flex justify-between">
                    <p>Danh sách phần thi</p>
                    <button>Thêm mới</button>
                </div>
                <p>Phần 1</p>
                <button>sua</button>
                <hr className="my-3" />
                <p>danh mục câu hỏi</p>
                <div className="flex justify-start gap-2 mt-4">
                    <button className="outline">Thêm câu hỏi</button>
                    <button className="outline">Thêm bằng văn bản</button>
                </div>
                <div className="flex flex-col justify-start items-start mt-4">
                    <button className="outline">Sắp xếp câu hỏi</button>
                    <button className="outline mt-4">Xóa câu hỏi</button>
                </div>
            </form>

            {/* Form chỉnh sửa câu hỏi */}
            <form onSubmit={handleSubmit} className="outline px-2 flex flex-col justify-start items-start">
                <p>Chỉnh sửa câu hỏi</p>
                <p>Loại câu hỏi</p>
                <select name="" id="">
                    <option value="">Một đáp án</option>
                    <option value="">Nhiều đáp án</option>
                    <option value="">Đúng / Sai</option>
                </select>

                <p>Soạn câu hỏi</p>
                <input className="outline"
                    type="text"
                    onChange={(e) => setQuestion(e.target.value)}
                />

                <p>Câu trả lời</p>
                {answers.map((answer, index) => (
                    <div key={index}>
                        <div className="flex justify-start items-center mt-4 gap-2">
                            <input
                                type="radio"
                                name="answer"
                                checked={answer.is_correct}
                                onChange={() => handleIsCorrectChange(index)}
                            />
                            <p>Đáp án</p>
                        </div>
                        <hr className="w-[20%]" />
                        <input className="outline"
                            type="text"
                            value={answer.answer_text}
                            onChange={(e) => handleAnswerChange(index, e.target.value)}
                        />

                    </div>
                ))}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Soancauhoi;

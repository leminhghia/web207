import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import DanhSachPhanThi from './DanhSachPhanThi';
import { QuizContext } from "../../context/QuizContext";
import { useNavigate } from "react-router-dom";
const Soancauhoi = () => {
  const { id } = useParams();
  const naviagte = useNavigate()
  const { checkId } = useContext(QuizContext)

  const [answers, setAnswers] = useState([
    {
      text: '',
      style: {
        fontSize: 'normal',
        fontWeight: 'normal',
        fontStyle: 'normal',
        textDecoration: 'none',
      },
    },
    {
      text: '',
      style: {
        fontSize: 'normal',
        fontWeight: 'normal',
        fontStyle: 'normal',
        textDecoration: 'none',
      },
    },
    {
      text: '',
      style: {
        fontSize: 'normal',
        fontWeight: 'normal',
        fontStyle: 'normal',
        textDecoration: 'none',
      },
    },
    {
      text: '',
      style: {
        fontSize: 'normal',
        fontWeight: 'normal',
        fontStyle: 'normal',
        textDecoration: 'none',
      },
    },
  ]);


  const [data, setData] = useState([]);
  const [question, setQuestion] = useState('');
  const [userAnswers, setUserAnswers] = useState([
    { option_id: null, answer_text: '', is_correct: 0 },
    { option_id: null, answer_text: '', is_correct: 0 },
    { option_id: null, answer_text: '', is_correct: 0 },
    { option_id: null, answer_text: '', is_correct: 0 },
  ]);

  useEffect(() => {
    if (!checkId) {
      console.error("ID không hợp lệ!");
      return;
    }

    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:2000/api/question/getid/${checkId}`);
        setData(res.data);

        // Cập nhật câu hỏi
        setQuestion(res.data.question_text);

        const answers = res.data.options.map(option => ({
          option_id: option.option_id,
          answer_text: option.option_text,
          is_correct: option.is_correct
        }));

        setUserAnswers(answers);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu:', error);
      }
    };

    fetchData();
  }, [checkId]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    const correctAnswer = userAnswers.some(answer => answer.is_correct);
    if (!correctAnswer) return;

    const allAnswersFilled = userAnswers.every(answer => answer.answer_text.trim());
    if (!allAnswersFilled) return;

    try {
      const res = await axios.post(`http://localhost:2000/api/question/add`, {
        quiz_id: id,
        question,
        answers: userAnswers,
      });
      toast.success(res.data.message);

      naviagte(0)
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    const correctAnswer = userAnswers.some(answer => answer.is_correct);
    if (!correctAnswer) return;

    const allAnswersFilled = userAnswers.every(answer => answer.answer_text.trim() && answer.option_id !== null);
    if (!allAnswersFilled) return;

    try {
      const res = await axios.put(`http://localhost:2000/api/question/update`, {
        question_id:checkId,
        question,
        answers: userAnswers,
      });
      toast.success(res.data.message);

      naviagte(0)
    } catch (err) {
      console.error(err);
    }
  };
  
  const handleAddAnswer = () => {
    setAnswers([
      ...answers,
      {
        text: '',
        style: {
          fontSize: 'normal',
          fontWeight: 'normal',
          fontStyle: 'normal',
          textDecoration: 'none',
        },
      },
    ]);
    setUserAnswers([
      ...userAnswers,
      { option_id: null, answer_text: '', is_correct: 0 },
    ]);
  };

  const handleDeleteAnswer = (index) => {
    setAnswers(answers.filter((_, i) => i !== index));
    setUserAnswers(userAnswers.filter((_, i) => i !== index));
  };

  const handleFontSizeChange = (index, e) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index].style.fontSize = e.target.value;
    setAnswers(updatedAnswers);
  };

  const handleFontWeightChange = (index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index].style.fontWeight =
      updatedAnswers[index].style.fontWeight === 'bold' ? 'normal' : 'bold';
    setAnswers(updatedAnswers);
  };

  const handleFontStyleChange = (index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index].style.fontStyle =
      updatedAnswers[index].style.fontStyle === 'italic' ? 'normal' : 'italic';
    setAnswers(updatedAnswers);
  };

  const handleTextDecorationChange = (index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index].style.textDecoration =
      updatedAnswers[index].style.textDecoration === 'underline' ? 'none' : 'underline';
    setAnswers(updatedAnswers);
  };

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...userAnswers];
    newAnswers[index].answer_text = value;
    setUserAnswers(newAnswers);
  };

  const handleIsCorrectChange = (index) => {
    const newAnswers = [...userAnswers];
    newAnswers.forEach((answer, idx) => {
      answer.is_correct = idx === index ? 1 : 0;
    });
    setUserAnswers(newAnswers);
  };


  return (
    <div className="grid grid-cols-[2fr_4fr] gap-4 mt-10 mx-4">
      <div className="sticky top-[64px] overflow-auto max-h-[80vh]">
        <DanhSachPhanThi />
      </div>

      <form onSubmit={checkId && data ? handleUpdate : handleSubmit} className="bg-gray-100 p-4 rounded shadow flex flex-col">
        <p className="font-semibold text-lg mb-4">Chỉnh sửa câu hỏi</p>
        <p className="font-medium mb-2">Loại câu hỏi</p>
        <select className="border border-gray-300 rounded px-2 py-1 mb-4">
          <option value="">Một đáp án</option>
          <option value="">Nhiều đáp án</option>
          <option value="">Đúng / Sai</option>
        </select>
        <p className="font-medium mb-2">Soạn câu hỏi</p>
        <input
          className="outline"
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <div>
          <p className="font-medium mb-2">Câu trả lời</p>
          {answers.map((answer, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between">
                <div className="flex items-center gap-3 mb-2">
                  <input
                    type="radio"
                    name="answer"
                    checked={userAnswers[index]?.is_correct}
                    onChange={() => handleIsCorrectChange(index)}
                  />
                  <p>{`Đáp án ${index + 1}`}</p>
                </div>
                <button
                  onClick={() => handleDeleteAnswer(index)}
                  className="text-red-500 hover:underline"
                >
                  Xóa đáp án
                </button>
              </div>
              <div>
                <div className="border border-gray-300 rounded-t-xl flex items-center p-2 gap-2 bg-gray-50">
                  <select
                    className="border border-gray-300 rounded px-2 py-1 text-sm"
                    onChange={(e) => handleFontSizeChange(index, e)}
                    value={answer.style.fontSize}
                  >
                    <option value="normal">Normal</option>
                    <option value="heading1">Heading 1</option>
                    <option value="heading2">Heading 2</option>
                  </select>
                  <button
                    type="button"
                    onClick={() => handleFontWeightChange(index)}
                    className="px-2 py-1 text-black hover:text-blue-600"
                  >
                    <b>B</b>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleFontStyleChange(index)}
                    className="px-2 py-1 text-black hover:text-blue-600"
                  >
                    <i>I</i>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleTextDecorationChange(index)}
                    className="px-2 py-1 text-black hover:text-blue-600"
                  >
                    <u>U</u>
                  </button>
                </div>
                <textarea
                  className="border border-gray-300 rounded-b-xl w-full h-32 p-2 mb-2"
                  placeholder="Nhập nội dung đáp án"
                  value={userAnswers[index]?.answer_text}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                  style={{
                    fontSize:
                      answer.style.fontSize === 'normal'
                        ? '16px'
                        : answer.style.fontSize === 'heading1'
                          ? '24px'
                          : '20px',
                    fontWeight: answer.style.fontWeight,
                    fontStyle: answer.style.fontStyle,
                    textDecoration: answer.style.textDecoration,
                  }}
                ></textarea>
              </div>
            </div>
          ))}
          <button
            onClick={handleAddAnswer}
            type="button"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Thêm đáp án
          </button>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
        >
          {checkId && data ?
            'Cập nhật câu hỏi' : 'lưu câu hỏi và tiếp tục tạo mới'
          }
        </button>
      </form>
    </div>
  );
};

export default Soancauhoi;

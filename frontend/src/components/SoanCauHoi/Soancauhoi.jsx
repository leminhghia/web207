import axios from 'axios'
import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import DanhSachPhanThi from './DanhSachPhanThi'
import { QuizContext } from '../../context/QuizContext'
import { useNavigate } from 'react-router-dom'
import { IoIosAdd } from 'react-icons/io'
const Soancauhoi = () => {
  const { id } = useParams()
  const naviagte = useNavigate()
  const { checkId } = useContext(QuizContext)
  const [selectedOption, setSelectedOption] = useState('single')

  // const [answersCauhoi, setAnswersCauhoi] = useState([
  //   {
  //     text: '',
  //     style: {
  //       fontSize: 'normal',
  //       fontWeight: 'normal',
  //       fontStyle: 'normal',
  //       textDecoration: 'none',
  //     },
  //   },
  // ])
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
  ])

  const [data, setData] = useState([])
  const [question, setQuestion] = useState('')
  const [userAnswers, setUserAnswers] = useState([
    { option_id: null, answer_text: '', is_correct: 0 },
    { option_id: null, answer_text: '', is_correct: 0 },
    { option_id: null, answer_text: '', is_correct: 0 },
    { option_id: null, answer_text: '', is_correct: 0 },
  ])

  useEffect(() => {
    if (!checkId) {
      console.error('ID không hợp lệ!')
      return
    }

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:2000/api/question/getid/${checkId}`
        )
        setData(res.data)


        // Cập nhật câu hỏi
        setQuestion(res.data.question_text)
        setSelectedOption(res.data.question_type)
        const answers = res.data.options.map((option) => ({
          option_id: option.option_id,
          answer_text: option.option_text,
          is_correct: option.is_correct,
        }))

        setUserAnswers(answers)
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu:', error)
      }
    }

    fetchData()
  }, [checkId])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!question.trim()) return

    const correctAnswer = userAnswers.some((answer) => answer.is_correct)
    if (!correctAnswer) return

    const allAnswersFilled = userAnswers.every((answer) =>
      answer.answer_text.trim()
    )
    if (!allAnswersFilled) return

    try {
      const res = await axios.post(`http://localhost:2000/api/question/add`, {
        quiz_id: id,
        question,
        question_type: selectedOption,
        answers: userAnswers,
      })
      toast.success(res.data.message)

      naviagte(0)
    } catch (err) {
      console.error(err)
    }
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    if (!question.trim()) return

    const correctAnswer = userAnswers.some((answer) => answer.is_correct)
    if (!correctAnswer) return

    const allAnswersFilled = userAnswers.every(
      (answer) => answer.answer_text.trim() && answer.option_id !== null
    )
    if (!allAnswersFilled) return

    try {
      const res = await axios.put(`http://localhost:2000/api/question/update`, {
        question_id: checkId,
        question,
        question_type: selectedOption,
        answers: userAnswers,
      })
      toast.success(res.data.message)

      naviagte(0)
    } catch (err) {
      console.error(err)
    }
  }

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
    ])
    setUserAnswers([
      ...userAnswers,
      { option_id: null, answer_text: '', is_correct: 0 },
    ])
  }

  const handleDeleteAnswer = (index) => {
    setAnswers(answers.filter((_, i) => i !== index))
    setUserAnswers(userAnswers.filter((_, i) => i !== index))
  }

  const handleFontSizeChange = (index, e) => {
    const updatedAnswers = [...answers]
    updatedAnswers[index].style.fontSize = e.target.value
    setAnswers(updatedAnswers)
  }

  const handleFontWeightChange = (index) => {
    const updatedAnswers = [...answers]
    updatedAnswers[index].style.fontWeight =
      updatedAnswers[index].style.fontWeight === 'bold' ? 'normal' : 'bold'
    setAnswers(updatedAnswers)
  }

  const handleFontStyleChange = (index) => {
    const updatedAnswers = [...answers]
    updatedAnswers[index].style.fontStyle =
      updatedAnswers[index].style.fontStyle === 'italic' ? 'normal' : 'italic'
    setAnswers(updatedAnswers)
  }

  const handleTextDecorationChange = (index) => {
    const updatedAnswers = [...answers]
    updatedAnswers[index].style.textDecoration =
      updatedAnswers[index].style.textDecoration === 'underline'
        ? 'none'
        : 'underline'
    setAnswers(updatedAnswers)
  }

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...userAnswers]
    newAnswers[index].answer_text = value
    setUserAnswers(newAnswers)
  }

  const handleOptionChange = (e) => {
    const newType = e.target.value;
    setSelectedOption(newType);

    const resetAnswers = userAnswers.map((answer) => ({
      ...answer,
      is_correct: 0,
    }));

    setUserAnswers(resetAnswers);
  };

  const handleIsCorrectChange = (index) => {
    const updatedAnswers = [...userAnswers];

    if (selectedOption === "multiple") {
      // Checkbox
      updatedAnswers[index].is_correct =
        updatedAnswers[index].is_correct === 1 ? 0 : 1;
    } else {
      // Radio
      updatedAnswers.forEach((answer, i) => {
        updatedAnswers[i].is_correct = i === index ? 1 : 0;
      });
    }

    setUserAnswers(updatedAnswers);
  };


  //
  const [questionStyle, setQuestionStyle] = useState({
    fontSize: 'normal',
    fontWeight: 'normal',
    fontStyle: 'normal',
    textDecoration: 'none',
  })
  const handleQuestionFontSizeChange = (e) => {
    setQuestionStyle({ ...questionStyle, fontSize: e.target.value })
  }

  const handleQuestionFontWeightChange = () => {
    setQuestionStyle({
      ...questionStyle,
      fontWeight: questionStyle.fontWeight === 'bold' ? 'normal' : 'bold',
    })
  }

  const handleQuestionFontStyleChange = () => {
    setQuestionStyle({
      ...questionStyle,
      fontStyle: questionStyle.fontStyle === 'italic' ? 'normal' : 'italic',
    })
  }

  const handleQuestionTextDecorationChange = () => {
    setQuestionStyle({
      ...questionStyle,
      textDecoration:
        questionStyle.textDecoration === 'underline' ? 'none' : 'underline',
    })
  }
  //update image
  const [uploadedImage, setUploadedImage] = useState(null)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setUploadedImage(reader.result) // Lưu đường dẫn hình ảnh vào state
      }
      reader.readAsDataURL(file)
    }
  }
  return (
    <div className="grid grid-cols-[2fr_4fr] gap-4 mt-10 mx-4 bg-gray-100 p-4">
      <div className="sticky top-[64px] overflow-auto max-h-[50vh] ">
        <DanhSachPhanThi />
      </div>
      <form
        onSubmit={checkId && data ? handleUpdate : handleSubmit}
        className="bg-white p-4 rounded shadow-md flex flex-col"
      >
        <p className="font-semibold text-lg mb-4">Chỉnh sửa câu hỏi</p>
        <div>
          <p className="font-medium mb-2">Loại câu hỏi</p>
          <select value={selectedOption} onChange={handleOptionChange} className="w-3/12 border border-gray-300 rounded px-2 py-1 mb-4 focus:outline-none hover:shadow-sm hover:shadow-purple-400 hover:border-blue-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            <option value="single">Một đáp án</option>
            <option value="multiple">Nhiều đáp án</option>
          </select>
        </div>
        {/* Soạn câu hỏi */}
        <p className="font-medium mb-2">Soạn câu hỏi</p>
        <div>
          <div className="border border-gray-300 rounded-t-xl flex items-center p-2 gap-2 bg-gray-50">
            <select
              className="border border-gray-300 rounded px-2 py-1 text-sm"
              onChange={handleQuestionFontSizeChange}
              value={questionStyle.fontSize}
            >
              <option value="normal">Normal</option>
              <option value="heading1">Heading 1</option>
              <option value="heading2">Heading 2</option>
            </select>
            <button
              type="button"
              onClick={handleQuestionFontWeightChange}
              className="px-2 py-1 text-black hover:text-blue-600"
            >
              <b>B</b>
            </button>
            <button
              type="button"
              onClick={handleQuestionFontStyleChange}
              className="px-2 py-1 text-black hover:text-blue-600"
            >
              <i>I</i>
            </button>
            <button
              type="button"
              onClick={handleQuestionTextDecorationChange}
              className="px-2 py-1 text-black hover:text-blue-600"
            >
              <u>U</u>
            </button>
            <label
              htmlFor="upload-image"
              className="px-2 py-1 text-black hover:text-blue-600 cursor-pointer"
            >
              📷
            </label>
            <input
              id="upload-image"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>
          <textarea
            className="border border-gray-300 rounded-b-xl w-full h-32 p-2 mb-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none"
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            style={{
              fontSize:
                questionStyle.fontSize === 'normal'
                  ? '16px'
                  : questionStyle.fontSize === 'heading1'
                    ? '24px'
                    : '20px',
              fontWeight: questionStyle.fontWeight,
              fontStyle: questionStyle.fontStyle,
              textDecoration: questionStyle.textDecoration,
            }}
            placeholder="Nhập câu hỏi"
          />
          {uploadedImage && (
            <div className="mt-2">
              <img
                src={uploadedImage}
                alt="Uploaded"
                className="max-w-full max-h-64 border rounded"
              />
            </div>
          )}
        </div>
        {/* đáp án */}
        <div>
          <p className="font-medium mb-2">Câu trả lời</p>
          {answers.map((answer, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between">
                <div className="flex items-center gap-3 mb-2">
                  <input
                    type={selectedOption === "multiple" ? "checkbox" : "radio"}
                    name={selectedOption === "multiple" ? `answer-${index}` : "answer"}
                    checked={userAnswers[index]?.is_correct}
                    onChange={() => handleIsCorrectChange(index)}
                    className="w-3 h-3 transform scale-150"
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
                  className="border border-gray-300 rounded-b-xl w-full h-32 p-2 mb-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none"
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
            className="relative group bg-gradient-to-r from-[#ff80cb] to-[#fc9470] text-white px-4 py-2 rounded-md flex items-center justify-center hover:shadow-md"
          >
            <IoIosAdd className="mr-1" />
            Thêm đáp án
            <div className="absolute mt-2 top-full bg-gray-700 text-white text-[12px] rounded-md px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-400 shadow-md">
              Thêm một đáp án mới
            </div>
          </button>
        </div>
        <div className=" flex justify-center">
          <button
            type="submit"
            className="w-1/2  bg-gradient-to-r from-[#4864fc] to-[#d03cfc] text-white px-4 py-2 rounded mt-4 transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
          >
            {checkId && data
              ? 'Cập nhật câu hỏi'
              : 'Lưu câu hỏi và tiếp tục tạo mới'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Soancauhoi

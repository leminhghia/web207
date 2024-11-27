import { useState } from 'react'
import DanhSachPhanThi from './DanhSachPhanThi'

const Soancauhoi = () => {
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

  const handleAddAnswer = () => {
    setAnswers([
      ...answers,
      {
        text: ``,
        style: {
          fontSize: 'normal',
          fontWeight: 'normal',
          fontStyle: 'normal',
          textDecoration: 'none',
        },
      },
    ])
  }
  // Delete đáp án
  const handleDeleteAnswer = (index) => {
    setAnswers(answers.filter((_, i) => i !== index))
    console.log(index)
  }

  // Cập nhật fornt cho từng dắp án
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

  return (
    <div className="grid grid-cols-[2fr_4fr] gap-6 mt-10 mx-4 ">
      {/* Form Danh sách phần thi */}
      <div className="sticky top-[64px] overflow-auto max-h-[80vh]">
        <DanhSachPhanThi />
      </div>

      {/* Form Chỉnh sửa câu hỏi */}
      <div className="bg-gray-100 p-4 rounded shadow flex flex-col">
        <p className="font-semibold text-lg mb-4">Chỉnh sửa câu hỏi</p>
        <p className="font-medium mb-2">Loại câu hỏi</p>
        <select className="border border-gray-300 rounded px-2 py-1 mb-4">
          <option value="">Một đáp án</option>
          <option value="">Nhiều đáp án</option>
          <option value="">Đúng / Sai</option>
        </select>
        <p className="font-medium mb-2">Soạn câu hỏi</p>
        <textarea className="border border-gray-300 rounded w-full h-20 p-2 mb-4"></textarea>

        {/* Các đáp án */}
        <div>
          <p className="font-medium mb-2">Câu trả lời</p>
          {answers.map((answer, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between">
                <div className="flex items-center gap-3 mb-2">
                  <input type="radio" name="answer" />
                  {/* Đáp án */}
                  <p>{`Đáp án ${index + 1}`}</p>
                </div>
                <button
                  onClick={() => handleDeleteAnswer(index)}
                  className="text-red-500 hover:underline"
                >
                  Xóa đáp án
                </button>
              </div>
              {/* Textarea */}
              <div>
                {/* Thanh công cụ */}
                <div className="border border-gray-300 rounded-t-xl flex items-center p-2 gap-2 bg-gray-50">
                  {/* Kích cỡ chữ */}
                  <select
                    className="border border-gray-300 rounded px-2 py-1 text-sm"
                    onChange={(e) => handleFontSizeChange(index, e)}
                    value={answer.style.fontSize}
                  >
                    <option value="normal">Normal</option>
                    <option value="heading1">Heading 1</option>
                    <option value="heading2">Heading 2</option>
                  </select>
                  {/* Kiểu chữ */}
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
                  value={answer.text}
                  onChange={(e) => {
                    const updatedAnswers = [...answers]
                    updatedAnswers[index].text = e.target.value
                    setAnswers(updatedAnswers)
                  }}
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

        {/*  */}
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 mt-4">
          Submit
        </button>
      </div>
    </div>
  )
}

export default Soancauhoi

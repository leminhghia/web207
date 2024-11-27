import { useState } from 'react'

import DanhSachPhanThi from './DanhSachPhanThi'
const Soancauhoi = () => {
  const [answers, setAnswers] = useState([
    {
      text: 'Đáp án 1',
      style: {
        fontSize: 'normal',
        fontWeight: 'normal',
        fontStyle: 'normal',
        textDecoration: 'none',
      },
    },
    {
      text: 'Đáp án 2',
      style: {
        fontSize: 'normal',
        fontWeight: 'normal',
        fontStyle: 'normal',
        textDecoration: 'none',
      },
    },
    {
      text: 'Đáp án 3',
      style: {
        fontSize: 'normal',
        fontWeight: 'normal',
        fontStyle: 'normal',
        textDecoration: 'none',
      },
    },
    {
      text: 'Đáp án 4',
      style: {
        fontSize: 'normal',
        fontWeight: 'normal',
        fontStyle: 'normal',
        textDecoration: 'none',
      },
    },
  ])
  //
  const handleAddAnswer = () => {
    setAnswers([
      ...answers,
      {
        text: `Đáp ám ${answers.length + 1}`,
        style: {
          fontSize: 'normal',
          fontWeight: 'normal',
          fontStyle: 'normal',
          textDecoration: 'none',
        },
      },
    ])
  }
  //
  const handleDeleteAnswer = (index) => {
    setAnswers(answers.filter((_, i) => i !== index))
  }
  //
  const handleFontSizeChange = (index, e) => {
    const updatedAnswers = [...answers]
    updatedAnswers[index].style.fontSize = e.target.value
    setAnswers(updatedAnswers)
  }
	const handleFontWeightChange = (index) => {
  const updatedAnswers = [...answers];
  updatedAnswers[index].style.fontWeight = updatedAnswers[index].style.fontWeight === 'bold' ? 'normal' : 'bold';
  setAnswers(updatedAnswers);
};
  return (
    <div className="grid grid-cols-[2fr_4fr] gap-6 mt-10 mx-4 ">
      {/* Form Danh sách phần thi */}
      <DanhSachPhanThi />
      {/* Form Chỉnh sửa câu hỏi */}
      <form className="bg-gray-100 p-4 rounded shadow flex flex-col">
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
                  <p>{answer}</p>
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
                  {/* kích cở chữ */}
                  <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                    <option>Normal</option>
                    <option>Heading 1</option>
                    <option>Heading 2</option>
                  </select>
                  {/* kiểu chữ  */}
                  <button className="px-2 py-1 text-black hover:text-blue-600">
                    <b>B</b>
                  </button>
                  <button className="px-2 py-1 text-black hover:text-blue-600">
                    <i>I</i>
                  </button>
                  <button className="px-2 py-1 text-black hover:text-blue-600">
                    <u>U</u>
                  </button>
                  <button className="px-2 py-1 text-black ">
                    <u>A</u>
                  </button>
                </div>
                <textarea
                  className="border border-gray-300 rounded-b-xl w-full h-32 p-2 mb-2"
                  placeholder="Nhập nội dung đáp án"
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
      </form>
    </div>
  )
}

export default Soancauhoi

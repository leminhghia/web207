import { useState, useEffect } from 'react'
import axios from 'axios'

const QuizzAdd = () => {
  const [values, setValues] = useState({
    subject_id: '',
    duration_minutes: '',
    total_questions: '',
    title: '',
  })
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:2000/api/quizzes/subject')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  })
  console.log(data)

  const handleSumit = async (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:2000/api/quizzes/add', values)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => console.log(err))
  }
  console.table(values)

  return (
    <div className="w-full p-2 h-auto flex justify-center items-center bg-[#f5f5f5]">
      <form
        onSubmit={handleSumit}
        className="w-3/5 border border-black flex flex-col gap-4 p-4"
      >
        {/* Title */}
        <input
          type="text"
          placeholder="title"
          required
          className="border border-gray-300 p-2 rounded-lg"
          onChange={(e) => setValues({ ...values, title: e.target.value })}
        />

        {/* Select Subject */}
        <select
          required
          className="border border-gray-300 p-2 rounded-lg"
          onChange={(e) =>
            setValues({
              ...values,
              subject_id: e.target.value,
              subject_name: e.target.options[e.target.selectedIndex].text,
            })
          }
        >
          <option value="" disabled selected>
            Select Subject
          </option>

          {data.map((item, index) => (
            <option key={index} value={item.subject_id}>
              {item.name}
            </option>
          ))}
        </select>

        {/* Total Questions */}
        <select
          required
          className="border border-gray-300 p-2 rounded-lg"
          onChange={(e) =>
            setValues({ ...values, total_questions: e.target.value })
          }
        >
          <option value="" disabled selected>
            Số câu hỏi
          </option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
        </select>

        {/* Duration */}
        <select
          className="border border-gray-300 p-2 rounded-lg"
          required
          onChange={(e) =>
            setValues({ ...values, duration_minutes: e.target.value })
          }
        >
          <option value="" disabled selected>
            Thời gian làm bài
          </option>
          <option value="30">30</option>
          <option value="45">45</option>
          <option value="60">60</option>
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default QuizzAdd

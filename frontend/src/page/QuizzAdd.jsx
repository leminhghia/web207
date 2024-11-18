import { useState, useEffect } from 'react'
import axios from 'axios'
const QuizzAdd = () => {
  const [values, setValues] = useState({
    subject_id: '1',
    duration_minutes: '',
    total_questions: '',
    title: '',
  })


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
    <form onSubmit={handleSumit} className="">
      {/* title */}
      <input
        type="text"
        placeholder="title"
        required
        onChange={(e) => setValues({ ...values, title: e.target.value })}
      />

      {/* <select
        required
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
        {subjects.map((subject) => (
          <option key={subject.id} value={1}></option>
        ))}
      </select> */}

      <select
        required
        onChange={(e) =>
          setValues({ ...values, total_questions: e.target.value })
        }
      >
        <option value="" disabled selected>
          Select Total Questions
        </option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="30">40</option>
      </select>
      {/*  */}
      <select
        required
        onChange={(e) =>
          setValues({ ...values, duration_minutes: e.target.value })
        }
      >
        <option value="" disabled selected>
          Select Duration (minutes)
        </option>
        <option value="30">30</option>
        <option value="45">45</option>
        <option value="60">60</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  )
}

export default QuizzAdd

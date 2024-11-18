import axios from 'axios'
import { useState, useEffect } from 'react'

const QuizPages = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:2000/api/quizzes/list')
      .then((res) => setData(res.data))
      .catch((err) => console.err('Error updating user:', err))
  })
	

  console.table(data)
  console.log(data.title)

  return (
    <div className="">
      <div>
        {data.map((item, index) => (
          <div key={index}> {item.quiz_id}</div>
        ))}
      </div>
    </div>
  )
}
export default QuizPages

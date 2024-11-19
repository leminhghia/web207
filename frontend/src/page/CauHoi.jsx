import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const CauHoi = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState([])
  const [answer, setAnswer] = useState([])
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        const res1 = await axios.get(`http://localhost:2000/api/question/list/${id}`)
        const questions = res1.data
        setQuestion(questions)

        const questionId = questions.map((q) => q.question_id)

        const answers = await Promise.all(
          questionId.map((question_id) =>
            axios.get(`http://localhost:2000/api/answeroption/list/${question_id}`)
              .then((res) => res.data)
          )
        )
        setAnswer(answers.flat())

      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [id])



  const handlePostData = async () => {
    setVisible(true)
    try {
      await axios.post(`http://localhost:2000/api/userquiz/add`, {
        quiz_id: id,
      });
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  console.log(question);
  console.log(answer);


  return (
    <div>
      {
        visible == false ?
          <div><button onClick={handlePostData}>bat dau bai thi
          </button> </div>
          :
          <div>
            <h1>Quiz {id}</h1>
            <div>
              {question.map((q, i) => (
                <div key={i}>
                  <h3 className='mb-5'>{q.question_text}</h3>
                  <ul>
                    {
                      answer.filter((a) => a.question_id === q.question_id)
                        .map((a) => (
                          <li key={a.option_id}>
                            {a.option_text}
                          </li>
                        ))
                    }
                  </ul>
                </div>
              ))
              }
            </div>

          </div>
          
      }
    </div>
  )
}

export default CauHoi

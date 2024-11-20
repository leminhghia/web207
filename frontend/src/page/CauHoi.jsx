import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const CauHoi = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState([])
  const [answer, setAnswer] = useState([])
  const [visible, setVisible] = useState(false)
  const [userQuizId, setUserQuizId] = useState(null);
  const [userAnswer, setUserAnswer] = useState([])
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
      const res = await axios.post(`http://localhost:2000/api/userquiz/add`, {
        quiz_id: id,
      });
      setUserQuizId(res.data.user_quiz_id);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  const handleAnswerSelect = async (question_id, option_id) => {
    if (!userQuizId) {
      console.error("Không tìm thấy user_quiz_id");
      return;
    }

    try {
      await axios.post(`http://localhost:2000/api/useranswer/add-Update`, {
        user_quiz_id: userQuizId,
        question_id: question_id,
        selected_option_id: option_id,
      });

      const res2 = await axios.get(`http://localhost:2000/api/useranswer/list/${userQuizId}`)

      setUserAnswer(res2.data);
    } catch (error) {
      console.error("Error adding or updating answer:", error);
    }
  };

  const handleUpdate = async (userquiz) => {
    if (!userquiz) {
      console.error("Không tìm thấy user_quiz_id");
      return;
    }
    try {

      await axios.put(`http://localhost:2000/api/userquiz/update`, {
        score: scorePercentage,
        user_quiz_id: userquiz,
        quiz_id: id
      })
    } catch (error) {
      console.error(error);

    }
  }

  const clacScore = userAnswer.filter(item => item.is_correct === 1).length;

  const totalQuestions = userAnswer.length

  const scorePercentage = (clacScore / totalQuestions) * 10;


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
                            <button onClick={() => handleAnswerSelect(q.question_id, a.option_id)}>
                              {a.option_text}

                            </button>

                          </li>
                        ))
                    }
                  </ul>
                </div>
              ))
              }
            </div>
            <button onClick={() => handleUpdate(userQuizId)}>Nop bai</button>
          </div>

      }
    </div>
  )
}

export default CauHoi


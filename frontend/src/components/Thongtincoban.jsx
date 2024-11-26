import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { QuizContext } from '../context/QuizContext';
import { useNavigate, useParams } from 'react-router-dom';

const Thongtincoban = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { id } = useParams();
  const { setTab, setIdthemquiz } = useContext(QuizContext);

  const [subject_id, setSubject_id] = useState('');
  const [title, setTitle] = useState('');
  const [duration_minutes, setDuration_minutes] = useState('');
  const [total_questions, setTotal_questions] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const res1 = await axios.get(`http://localhost:2000/api/quizzes/list/${id}`);
        setSubject_id(res1.data.subject_id);
        setTitle(res1.data.title);
        setDuration_minutes(res1.data.duration_minutes);
        setTotal_questions(res1.data.total_questions);

        const res2 = await axios.get('http://localhost:2000/api/quizzes/subject');
        setData(res2.data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, [id]);

  const handleSumit = async (e) => {
    e.preventDefault();

    
    axios
      .post('http://localhost:2000/api/quizzes/add',  { subject_id, title, duration_minutes, total_questions })
      .then((res) => {
        toast.success(res.data.message);
        setIdthemquiz(res.data.quiz_id);
        navigate(`${res.data.quiz_id}`);
        setTab(2);
      })
      .catch((err) => toast.error(err));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:2000/api/quizzes/update`,  { quiz_id:id ,subject_id, title, duration_minutes, total_questions })
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => toast.error(err));
  };

  return (
    <div className="w-full p-2 h-auto flex justify-center items-center bg-[#f5f5f5]">
      <form onSubmit={id ? handleUpdate  : handleSumit} className="w-3/5 border border-black flex flex-col gap-4 p-4">
        {/* Title */}
        <input
          type="text"
          placeholder="title"
          required
          className="border border-gray-300 p-2 rounded-lg"
          value={title || ''}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Select Subject */}
        <select
          required
          className="border border-gray-300 p-2 rounded-lg"
          value={subject_id || ''}
          onChange={(e) => setSubject_id(e.target.value)}
        >
          <option disabled>Select Subject</option>
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
          value={total_questions || ''}
          onChange={(e) => setTotal_questions(e.target.value)}
        >
          <option disabled>Số câu hỏi</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
        </select>

        {/* Duration */}
        <select
          className="border border-gray-300 p-2 rounded-lg"
          required
          value={duration_minutes || ''}
          onChange={(e) => setDuration_minutes(e.target.value)}
        >
          <option disabled>Thời gian làm bài</option>
          <option value="30">30</option>
          <option value="45">45</option>
          <option value="60">60</option>
        </select>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
          {id ? 'Update' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default Thongtincoban;

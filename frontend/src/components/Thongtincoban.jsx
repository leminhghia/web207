import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { QuizContext } from '../context/QuizContext';
import {  useNavigate, useParams } from 'react-router-dom';

const Thongtincoban = () => {
  const [formData, setFormData] = useState({
    title: '',
    level_id: '',
    level_name: '',
    subject_id: '',
    major_id: '',
    quiz_image: null,
  });

  const [levels, setLevels] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [majors, setMajors] = useState([]);
  const { id } = useParams()
  const { setTab, setIdthemquiz } = useContext(QuizContext)
  const [oldImage, setOldImage] = useState("")
  const [file, setFile] = useState(null);

  const navigate = useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res1 = await axios.get('http://localhost:2000/api/quizzes/levels');
        setLevels(res1.data);

        const res2 = await axios.get('http://localhost:2000/api/quizzes/subjects');
        setSubjects(res2.data);

        const res3 = await axios.get('http://localhost:2000/api/quizzes/majors');
        setMajors(res3.data);

        const res4 = await axios.get(`http://localhost:2000/api/quizzes/list/${id}`)
        setFormData({
          title: res4.data.title,
          level_id: res4.data.level_id,
          subject_id: res4.data.subject_id,
          major_id: res4.data.major_id
        })
        setOldImage(res4.data.quiz_image)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', formData.title);
    data.append('level_id', formData.level_id);
    if (formData.subject_id) data.append('subject_id', formData.subject_id);
    if (formData.major_id) data.append('major_id', formData.major_id);
    if (file) data.append('image', file);

    try {
      const res = await axios.post('http://localhost:2000/api/quizzes/add', data);
      toast.success(res.data.message)
      setIdthemquiz(res.data.quiz_id)
      navigate(`${res.data.quiz_id}`)
      setTab(2)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('quiz_id', id)
    data.append('title', formData.title);
    data.append('level_id', formData.level_id);
    if (formData.subject_id) data.append('subject_id', formData.subject_id);
    if (formData.major_id) data.append('major_id', formData.major_id);
    if (file) data.append('image', file);

    try {
      const res = await axios.put('http://localhost:2000/api/quizzes/update', data , {
        headers: {
          'Content-Type': 'multipart/form-data',  // Quan trọng
        },
      });
      toast.success(res.data.message)
      setTab(2)
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <form className="grid grid-cols-[2fr_4fr] gap-2" onSubmit={ id ? handleUpdate : handleSubmit}>
      <div className='outline px-2'>
        <div className='flex flex-col'>
          <p>Ảnh đề thi</p>
          <input type="file" name="image"  onChange={(e) => setFile(e.target.files[0])} />
          {oldImage && (
            <div>
              <img src={`http://localhost:2000/uploads/${oldImage}`} alt="Old Image" />
            </div>
          )}
        </div>
      </div>

      <div className='outline px-2'>
        <p>Tên đề thi <span className='text-red-600'>*</span></p>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className='outline'
          required
        />

        <p>Trình độ  <span className='text-red-600'>*</span></p>
        <select
          name="level_id"
          value={formData.level_id}
          onChange={handleInputChange}
          className='outline'
          required
        >
          <option value="">Chọn trình độ</option>
          {levels.map((level) => (
            <option className='text-black' key={level.level_id} value={level.level_id}>
              {level.level_name}
            </option>
          ))}
        </select>


        <div className='grid grid-cols-2 gap-2'>
          <div className='flex flex-col'>
            <p>Môn học</p>
            <select
              name="subject_id"
              value={formData.subject_id}
              onChange={handleInputChange}
              className='outline'
            >
              <option value="">Chọn môn học</option>
              {subjects.map((subject) => (
                <option key={subject.subject_id} value={subject.subject_id}>
                  {subject.subject_name}
                </option>
              ))}
            </select>
          </div>

          <div className='flex flex-col'>
            <p>Chuyên ngành</p>
            <select
              name="major_id"
              value={formData.major_id}
              onChange={handleInputChange}
              className='outline'
            >
              <option value="">Chọn chuyên ngành</option>
              {majors.map((major) => (
                <option key={major.major_id} value={major.major_id}>
                  {major.major_name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          {id ? 'Cập nhật' : 'Thêm'}
        </button>
      </div>
    </form>
  );
}

export default Thongtincoban;

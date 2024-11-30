import { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { QuizContext } from '../context/QuizContext'

const Quiz = () => {
  const { Id } = useParams()
  const [data, setData] = useState([])
  const {
    ADAV,
    ADTE,
    ADBS,
    ADUI,
    ASNE,
    CLCO,
    DBAV,
    DBBS,
    GAME,
    HTCS,
    INMA,
    JAAV,
    JABS,
    JSPR,
    LAYO,
    MOWE,
    PHPP,
    PMAG,
    VBPR,
    WEBU,
    subjects,
  } = useContext(QuizContext)

  const questionSets = {
    ADAV,
    ADTE,
    ADBS,
    ADUI,
    ASNE,
    CLCO,
    DBAV,
    DBBS,
    GAME,
    HTCS,
    INMA,
    JAAV,
    JABS,
    JSPR,
    LAYO,
    MOWE,
    PHPP,
    PMAG,
    VBPR,
    WEBU,
  }

  const [selectedProduct, setSelectedProduct] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userAnswers, setUserAnswers] = useState({})
  const [score, setScore] = useState(null)
  const [submissionTime, setSubmissionTime] = useState(null)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [timerActive, setTimerActive] = useState(true)
  useEffect(() => {
    if (questionSets[Id]) {
      const randomQuestions = questionSets[Id].sort(
        () => Math.random() - 0.5
      ).slice(0, 10)
      setSelectedProduct(randomQuestions)
    }
  }, [Id])

  useEffect(() => {
    const proData = subjects.find((subject) => subject.Id === Id)
    setData(proData.Name)
  }, [Id, subjects])

  useEffect(() => {
    let timer
    if (timerActive) {
      timer = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1)
      }, 1000)
    } else {
      clearInterval(timer)
    }

    return () => clearInterval(timer)
  }, [timerActive])

  const selectAnswer = (questionId, answerId) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: answerId,
    })
  }

  const nextQuestion = () => {
    if (currentQuestion < selectedProduct.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const submitQuiz = () => {
    let totalScore = 0
    selectedProduct.forEach((question) => {
      if (userAnswers[question.Id] === question.AnswerId) {
        totalScore += question.Marks
      }
    })
    setScore(totalScore)

    localStorage.setItem(
      Id,
      JSON.stringify({
        quizName: data,
        score: totalScore,
        date: new Date().toLocaleString(),
        time: formatTime(elapsedTime),
      })
    )

    const now = new Date()
    const formattedTime = now.toLocaleString()
    setSubmissionTime(formattedTime)

    setTimerActive(false)
  }

  const currentQuestionData = selectedProduct[currentQuestion]
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
  }

  return (
    <div className="quiz-container max-w-4xl mx-auto p-4 pb-64 relative">
      <div className="text-end">
        <p>Thời gian làm bài: {formatTime(elapsedTime)}</p>
      </div>
      {score === null ? (
        <>
          {selectedProduct.length > 0 ? (
            <>
              <h2 className="text-2xl font-bold mb-4">
                Câu hỏi {currentQuestion + 1}
              </h2>
              <p className="text-lg mb-6">{currentQuestionData.Text}</p>

              <ul className="space-y-4">
                {currentQuestionData.Answers.map((answer) => (
                  <li key={answer.Id} className="flex items-center">
                    <button
                      onClick={() =>
                        selectAnswer(currentQuestionData.Id, answer.Id)
                      }
                      className={`w-full p-3 text-left rounded-lg ${
                        userAnswers[currentQuestionData.Id] === answer.Id
                          ? 'bg-blue-500 text-white'
                          : 'bg-white border border-gray-300 hover:bg-gray-100'
                      }`}
                    >
                      {answer.Text}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="absolute top-[450px]">
                <button
                  onClick={previousQuestion}
                  disabled={currentQuestion === 0}
                  className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 disabled:opacity-50"
                >
                  Trước
                </button>
              </div>
              <div className="absolute top-[450px] right-0">
                {currentQuestion < selectedProduct.length - 1 ? (
                  <button
                    onClick={nextQuestion}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    Tiếp theo
                  </button>
                ) : (
                  <button
                    onClick={submitQuiz}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                  >
                    Nộp bài
                  </button>
                )}
              </div>
            </>
          ) : (
            <p>Không tìm thấy dữ liệu cho bài quiz này.</p>
          )}
        </>
      ) : (
        <>
          <h2 className="text-3xl font-semibold mb-6">
            Điểm của bạn: {score} /{' '}
            {selectedProduct.reduce(
              (total, question) => total + question.Marks,
              0
            )}
          </h2>
          {submissionTime && <p>Thời gian nộp bài: {submissionTime}</p>}
        </>
      )}
    </div>
  )
}

export default Quiz






import { useEffect, useState } from 'react';

const QuizLog = () => {
    const [quizHistory, setQuizHistory] = useState([]);

    useEffect(() => {
        const history = [];
        Object.keys(localStorage).forEach((key) => {
            if (key !== 'hasReloaded') {
                const quizData = localStorage.getItem(key);
                const parsedData = JSON.parse(quizData);
                history.push({ ...parsedData, id: key });
            }

        });

        setQuizHistory(history);
    }, []);

    return (
        <div className="quiz-log">
            <h2 className="text-2xl font-bold mb-4">Lịch sử làm bài quiz</h2>
            {quizHistory.length > 0 ? (
                <ul>
                    {quizHistory.slice().map((item, index) => (
                        <li key={index} className="mb-4 p-4 border rounded">
                            <h3 className="text-xl font-semibold">Bài quiz: {item.quizName}</h3>
                            <p><strong>Điểm:</strong> {item.score}</p>
                            <p><strong>Thời gian làm bài:</strong> {item.time}</p>
                            <p><strong>Thời gian nộp bài:</strong> {item.date}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Chưa có lịch sử quiz nào.</p>
            )}
        </div>
    );
};

export default QuizLog;



import { useState, useEffect, useContext } from 'react';
import { assets } from '../assets/assets';
import { QuizContext } from '../context/QuizContext';
import ProductItem from '../components/ProductItem';
import { useNavigate  } from 'react-router-dom';
import axios from 'axios'
const Home = () => {
    const { subjects,reload,setReload } = useContext(QuizContext)
    const [data, setData] = useState([])
    const [user,setUser] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate()
    const itemsPerPage = 4;

    useEffect(() => {

        if (!reload ) {
            setTimeout(() => {
                setReload(true)
                window.location.reload();
            }, 1000);
        }
    }, []); 

    useEffect(() => {
        setData(subjects);
    
        
    }, [ subjects]);

    useEffect(() => {
        axios
          .get(`http://localhost:2000/user`)
          .then((res) => setUser(res.data.user_id))
    
          .catch((err) => console.log(err));
    
    
      }, []);

    const LastIndex = currentPage * itemsPerPage;
    const FirstIndex = LastIndex - itemsPerPage;
    const currentItems = data.slice(FirstIndex, LastIndex);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const handleAuth = () => {
        if (!user) {
            window.confirm('Vui lòng đăng nhập')
            navigate('/')
        }
    }

    return (
        <div className="container mx-auto p-4 gap-4  flex">
            <div className='w-[80%]'>
                <div className="grid grid-cols-1 sm:grid-cols-2   gap-4">
                    {currentItems.map((item, index) => (
                        <div onClick={handleAuth} key={index}>
                            <ProductItem Id={item.Id} Logo={item.Logo} Name={item.Name} />
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-6 space-x-3">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-gray-300 rounded-md text-gray-700 cursor-pointer disabled:bg-gray-400"
                    >
                        Trước
                    </button>

                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`px-4 py-2 rounded-md text-lg font-semibold 
              ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-100'}`}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-gray-300 rounded-md text-gray-700 cursor-pointer disabled:bg-gray-400"
                    >
                        Sau
                    </button>
                </div>
            </div>
            <div className='w-[20%] flex flex-col gap-2 border rounded'>
                <div className='flex gap-2 items-center justify-start bg-gray-200 '>
                    <div className='pl-2'> <assets.BiCategory /></div>
                    <p>DANH MỤC MÔN HỌC</p>
                </div>
                <div className='flex flex-col'>
                    {data.map((item, index) => (
                        <div className='pl-2 pt-1 cursor-pointer hover:bg-gray-200 transition-all border' key={index}>{item.Name}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;

import { useState,useContext } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { QuizContext } from '../context/QuizContext';
const Login = () => {

    const {setReload,url} = useContext(QuizContext)
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    axios.defaults.withCredentials = true
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        axios.post(`${url}/auth/login`, values)
            .then(res => {
                if (res.data.Status === "success") {
                    setReload(false)
                    navigate('/')
                } else {
                    alert(res.data.error)
                }
            })
            .catch(err => console.log(err))
    }
   
    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
            <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                <p className='prata-regular text-3xl'>Đăng Nhập</p>
                <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
            </div>
            <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required  onChange={e => setValues({ ...values, email: e.target.value })}  />
            <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Mật khẩu' required  onChange={e => setValues({ ...values, password: e.target.value })}/>
            <div className='w-full flex justify-between text-sm mt-[-8px]'>
                <p className='cursor-pointer'>Quên mật khẩu ?</p>
                <Link to='/register' className='cursor-pointer'>Đăng kí</Link>
            </div>
            <button className='bg-black text-white font0light px-8 py-2 mt-4'>

                Đăng nhập
            </button>
          
        </form>
    )
}

export default Login

import { useState,useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { QuizContext } from '../context/QuizContext';
const Register = () => {
    const {url} = useContext(QuizContext)
    const [values, setValues] = useState({
        surName: '',
        name: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        axios.post('url/auth/register', values)
            .then(res => {
                if (res.data.Status === "success") {
                    navigate('/login')
                } else {
                    alert("error")
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
            <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                <p className='prata-regular text-3xl'>Đăng kí</p>
                <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
            </div>
            <input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Họ' required onChange={e => setValues({ ...values, surName: e.target.value })} />
            <input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Tên' required onChange={e => setValues({ ...values, name: e.target.value })} />
            <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required onChange={e => setValues({ ...values, email: e.target.value })} />
            <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Mật khẩu' required onChange={e => setValues({ ...values, password: e.target.value })} />
            <div className='w-full flex justify-between text-sm mt-[-8px]'>
                <p className='cursor-pointer'>Quên mật khẩu ?</p>
                <Link to='/login' className='cursor-pointer'>Đăng nhập</Link>
            </div>
            <button className='bg-black text-white font-light px-8 py-2 mt-4'>
                Đăng kí
            </button>
        </form>
    );
};

export default Register;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductItem from '../ProductItem';
import { Link } from 'react-router-dom';

function SelectSubjects() {
    const [subjects, setSubjects] = useState([]);
    const [selectSub, setSelectSub] = useState([]);
    const [userSubjects, setUserSubjects] = useState([]); // To store the subjects the user has already registered for


    useEffect(() => {
        axios.get('http://localhost:2000/subjects')
            .then(res => setSubjects(res.data))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        axios.get('http://localhost:2000/checkSubRes')
            .then(res => setUserSubjects(res.data)) // Store the data in state
            .catch(err => console.log(err));
    }, []);

    const isSubjectRegistered = (subId) => {
        return userSubjects.some(subject => subject.subId === subId);
    };

    const confirmAndSelect = (subId) => {
        const confirmation = window.confirm("Bạn muốn đăng ký môn học này?");
        if (confirmation) {
            axios.post('http://localhost:2000/registerSubject', { subId })
                .then(res => {
                   res.data;
                    setUserSubjects(prev => [...prev, { subId }]);
                    setSelectSub(subId); 
                })
                .catch(err => console.log(err));
        } else {
            console.log("Đăng ký bị hủy.");
        }
    };
console.log(userSubjects);

    return (
        <div>
            <h2 className='my-4'>Select Subjects for Quiz</h2>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>

           {
         userSubjects ?   
         subjects.map((item, index) => (
              <div key={index}>
                  {isSubjectRegistered(item.subId) ? (
                      <Link to={`/quiz/${item.subId}`} >
                          <ProductItem Id={item.subId} Name={item.name} />
                      </Link>
                  ) :
                  
                  (
                      <div onClick={() => confirmAndSelect(item.subId)} >
                          <ProductItem Id={item.subId} Name={item.name} />
                      </div>
                  )
                  
                  }
              </div>
          )):
          <div> </div>
            
            
            }

           </div>
        </div>
    );
}

export default SelectSubjects;



import  { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Ba() {
    const { subId } = useParams();
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:2000/quiz/${subId}`, { withCredentials: true })
            .then(res => setQuestions(res.data))
            .catch(err => console.log(err));
    }, [subId]);
r
    const handleAnswerChange = (queId, ansId) => {
        setAnswers(prev => ({ ...prev, [queId]: ansId }));
    };

    const handleSubmit = () => {
        axios.post("http://localhost:2000/quiz/submit", { answers, subId }, { withCredentials: true })
            .then(res => {
                setScore(res.data.score);
                alert(res.data.message);  
            })
            .catch(err => console.log(err));
    };
    
    return (
        <div>
            <h2>Quiz</h2>
            {questions.map(q => (
                <div key={q.queId}>
                    <p>{q.question}</p>
                    {q.answers.map(a => (
                        <label key={a.ansId}>
                            <input
                                type="radio"
                                name={`question-${q.queId}`}
                                onChange={() => handleAnswerChange(q.queId, a.ansId)}
                            />
                            {a.answer}
                        </label>
                    ))}
                </div>
            ))}
            <button onClick={handleSubmit}>Submit Quiz</button>
            {score !== null && <p>Your Score: {score}</p>}
        </div>
    );
}

export default Ba;


import { useEffect, useState } from 'react'
import axios from 'axios';
const Result = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:2000/result')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [])
  console.log(data);

  return (
    <div>

    </div>
  )
}a

export default Result

// src/pages/QuizDashboard.jsx
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const QuizDashboard = () => {
  const [quizzes, setQuizzes] = useState([])

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get(
          'http://localhost:2000/api/quizzes/list'
        )

        setQuizzes(response.data)
      } catch (err) {
        console.error('Không thể tải quiz', err)
      }
    }

    fetchQuizzes()
  }, [])
  console.table(quizzes)

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center">Danh Sách Quiz</h2>
      <div className="space-y-4">
        {quizzes.map((quiz) => (
          <div key={quiz.quiz_id} className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">{quiz.title}</h3>
            <Link to={`/quiz/${quiz.quiz_id}`} className="text-blue-500">
              Thực hiện Quiz
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuizDashboard

import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const QuizDashboard = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get("http://localhost:2000/api/quizzes/list");
        setQuizzes(response.data);
      } catch (err) {
        console.error("Không thể tải quiz", err);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Thanh tiêu đề */}
      <div className="bg-white p-4 shadow-md flex justify-between items-center">
        <div>
          <h1 className="text-lg font-bold">Công nghệ chế tạo máy</h1>
          <p className="text-sm text-gray-500">Chế độ: Thi thử</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-gray-700">
            <span className="mr-2">Thời gian còn lại:</span>
            <span className="font-bold text-red-500">59:36</span>
          </div>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md">
            Nộp bài thi
          </button>
        </div>
      </div>

      {/* Nội dung chính */}
      <div className="flex flex-1 p-6 space-x-6">
        {/* Danh sách phần thi */}
        <div className="w-1/4 bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-lg font-bold mb-4">Danh sách phần thi</h2>
          <ul className="space-y-2">
            <li className="flex justify-between items-center bg-gray-100 p-2 rounded-lg">
              <span>Phần 1</span>
              <span className="text-gray-500">0/47</span>
            </li>
            <li className="flex justify-between items-center bg-gray-100 p-2 rounded-lg">
              <span>Phần 2</span>
              <span className="text-gray-500">0/51</span>
            </li>
            <li className="flex justify-between items-center bg-gray-100 p-2 rounded-lg">
              <span>Phần 3</span>
              <span className="text-gray-500">0/26</span>
            </li>
          </ul>
        </div>

        {/* Danh sách quiz */}
        <div className="flex-1 bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-lg font-bold mb-4">Danh sách Quiz</h2>
          <div className="space-y-4">
            {quizzes.map((quiz) => (
              <div
                key={quiz.quiz_id}
                className="p-4 bg-gray-100 shadow-sm rounded-lg border"
              >
                <h3 className="text-base font-semibold">{quiz.title}</h3>
                <Link
                  to={`/quiz/${quiz.quiz_id}`}
                  className="text-blue-500 mt-2 inline-block"
                >
                  Thực hiện Quiz
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Mục lục câu hỏi */}
        <div className="w-1/4 bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-lg font-bold mb-4">Mục lục câu hỏi</h2>
          <div className="grid grid-cols-5 gap-2">
            {[...Array(47)].map((_, index) => (
              <button
                key={index}
                className="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center"
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizDashboard;



import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
const QuizzAdd = () => {
  const [values, setValues] = useState({
    subject_id: '',
    duration_minutes: '',
    total_questions: '',
    title: '',
  }, [])
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:2000/api/quizzes/subject')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }, [])

  const handleSumit = async (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:2000/api/quizzes/add', values)
      .then(() => {
        toast.success("Thêm quiz thành công")
      })
      .catch((err) => toast.error(err))
  }

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
          <option disabled >
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
          <option disabled >
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
          <option disabled >
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

import { Routes, Route, useLocation } from 'react-router-dom'
import PagesHome from './page/PagesHome'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Account from './page/account/Account'
import IntroductionPage from './page/BLOG/IntroductionPage'
import FeedbackPage from './page/FeedbackPage'
import FAQPage from './page/FAQPage'
import ContactPage from './page/ContactPage'
import QuizPages from './page/QuizPages'
import QuizzAdd from './page/QuizzAdd'
import Login from './page/Login'
import Register from './page/Register'
import CauHoi from './page/CauHoi'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ExamInfo from './page/ExamQuizz/ExamInfo'
import ExamQuizz from './page/ExamQuizz/ExamQuizz'
import ResultOnpage from './page/ResultOnpage'
import Tset from './page/tset'
import AccountFooter from './page/account/AccountFooter'
import AccountHeader from './page/account/AccountHeader'
import QuestionAdd from './page/QuestionAdd'
function App() {
  const location = useLocation()
  const pagesWithCustomHeaderFooter = ['/account']
  const isCustomHeaderFooter = pagesWithCustomHeaderFooter.includes(
    location.pathname
  )
  return (
    <div className="flex flex-col min-h-screen">
      <ToastContainer />
      {isCustomHeaderFooter ? (
        <>
          {/* Account */}
          {location.pathname === '/account' && (
            <>
              <AccountHeader />
              <div className="flex-grow">
                <Routes>
                  <Route path="/account" element={<Account />} />
                </Routes>
              </div>
              <AccountFooter />
            </>
          )}
          {location.pathname}
          {/*  */}
        </>
      ) : (
        <>
       <div className='sticky top-0 z-10'>
       <Navbar />
       </div>
          <div className="flex-grow relative z-0">
            <Routes>
              <Route index path="/" element={<PagesHome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {/* <Route path="/account" element={<Account />} /> */}
              <Route path="/resultonpage/:id" element={<ResultOnpage />} />
              <Route path="/gioi-thieu" element={<IntroductionPage />} />
              <Route path="/gop-y" element={<FeedbackPage />} />
              <Route path="/hoi-dap" element={<FAQPage />} />
              <Route path="/lien-he" element={<ContactPage />} />
              <Route path="/quiz" element={<QuizPages />} />
              <Route path="/quiz/:id" element={<CauHoi />} />
              <Route path="/quizadd" element={<QuizzAdd />} />
              <Route path="/examinfo" element={<ExamInfo />} />
              <Route path="/examquizz" element={<ExamQuizz />} />
              <Route path="/test" element={<Tset />} />
              <Route path="/quizadd/:id" element={<QuestionAdd />} />
              {/* <Route path="/mainAccountDetails" element={<MainAccountDetails />} /> */}
            </Routes>
          </div>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App

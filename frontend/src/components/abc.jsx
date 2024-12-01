import { useContext, useState, useEffect } from 'react'
import { IoIosTime } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { GoHeart } from "react-icons/go";
import { FcLike } from "react-icons/fc";
import { useParams } from "react-router-dom";
import { QuizContext } from '../context/QuizContext';
import { FaUserCircle } from 'react-icons/fa'

import axios from 'axios';
const Abc = () => {
  const { id } = useParams();//context

  const [activeTab, setActiveTab] = useState("content");
  const [liked, setLiked] = useState(false);
  const [hearted, setHearted] = useState(false);
  const { setVisible, setUserQuizId } = useContext(QuizContext)
  const [data, setData] = useState({})

  const formatDate = (dateS) => {
    const date = new Date(dateS)
    return date.toLocaleDateString('vi-VN')
  }
  const questions = [
    {
      id: 1,
      title: "Câu 1: (Một đáp án)",
      question: "Quá trình nào sau đây thuộc quá trình sản xuất?",
      options: [
        "Quá trình tạo phôi",
        "Quá trình gia công cắt gọt",
        "Quá trình lắp ráp",
        "Tất cả các quá trình trên",
      ],
    },
  ];

  const tabs = [
    { id: "content", label: "Nội dung đề thi" },
    { id: "results", label: "Kết quả ôn tập" },
    { id: "statistics", label: "Thống kê ôn tập" },
  ];

  const handlePostData = async () => {
    setVisible(true);
    try {
      const res = await axios.post(`http://localhost:2000/api/userquiz/add`, {
        quiz_id: id,
      });
      setUserQuizId(res.data.user_quiz_id);

    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await axios.get(`http://localhost:2000/api/quizzes/getuserquizcreator`, {
          params: { id }
        });
        setData(res.data[0]);

      } catch (error) {
        console.error(error);
      }
    };

    fetchSettings();
  }, [id]);

  return (
    <div>
      <div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center justify-between">
            {/* Left Side */}
            <div className="grid grid-cols-2 gap-3 items-center">
              <div className="space-y-4">
                <p className="font-medium text-black">Thông tin đề thi</p>
                <div className="overflow-hidden w-[300px] h-[150px] rounded-lg shadow-sm">
                {
                data.quiz_image ? <div> <img  className='w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110' src={`http://localhost:2000/uploads/${data.quiz_image}`} alt="" /> </div> : <FaUserCircle size={35} />
              }
                </div>
              </div>
              {/* Thông tin */}
              <div className="space-y-4">
                <h1 className="text-xl font-bold text-gray-700">
                 {data.title}
                </h1>
                <p className="text-sm text-black flex items-center gap-2 font-medium">
                {
                data.user_image ? <div> <img  className='rounded-full w-[50px] border-black border' src={`http://localhost:2000/uploads/${data.user_image}`} alt="" /> </div> : <FaUserCircle size={35} />
              }
                 {data.name}
                </p>
                <p className="text-sm text-black flex items-center gap-1 font-medium">
                  <IoIosTime size={20} style={{ color: "black" }} />
                {formatDate(data.created_at)}
                </p>
                {/* like */}
                <div className="flex space-x-3">
                  <div
                    onClick={() => setLiked(!liked)}
                    className={`cursor-pointer ${liked ? "text-blue-500" : "text-black"
                      }`}
                  >
                    {liked ? <BiSolidLike /> : <BiLike />}
                  </div>
                  <div
                    onClick={() => setHearted(!hearted)}
                    className={`cursor-pointer`}
                  >
                    {hearted ? <FcLike /> : <GoHeart />}
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div>
              <div className="flex flex-col space-y-4">
                <p>Chia sẻ đề thi</p>
                <div className="flex gap-3">
                  <img
                    src="path_to_avatar_image.jpg"
                    alt="Avatar"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <img
                    src="path_to_avatar_image.jpg"
                    alt="Avatar"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <img
                    src="path_to_avatar_image.jpg"
                    alt="Avatar"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-col items-center space-x-2">
                <div className="flex items-center text-center">
                  <div className="flex-grow border-t border-gray-400"></div>
                  <span className="mx-4 font-semibold text-gray-600">
                    hoặc
                  </span>
                  <div className="flex-grow border-t border-gray-400"></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-blue-500 text-white text-sm px-3 py-1 rounded-lg">
                    Sao chép link
                  </button>
                  <button className="bg-purple-500 text-white text-sm px-3 py-1 rounded-lg">
                    Quét mã QRCode
                  </button>
                </div>
              </div>
            </div>
            {/*  */}
          </div>

          {/* Nút hành động */}
          <div className="mt-4 grid grid-cols-3 space-x-4">
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg">
              {/* Thẻ ghi nhớ */}
            </button>
            <button
              className="bg-purple-600 text-white px-4 py-2 rounded-lg"
              // onClick={() => setIsModalOpen(true)}
              onClick={handlePostData}
            >
              Bắt đầu ôn thi
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
              {/* Tải về */}
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-6 bg-white shadow-md rounded-lg">
          <div className="flex border-b">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`flex-1 text-center py-2 ${activeTab === tab.id
                  ? "border-b-2 border-indigo-500 text-indigo-600 font-bold"
                  : "text-gray-600"
                  }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {/*  */}
          <div className="p-6">
            {activeTab === "content" && (
              <div>
                <h2 className="text-lg font-semibold mb-4">Phần thi</h2>
                {questions.map((question) => (
                  <div key={question.id}>
                    <h3 className="text-md font-bold">{question.title}</h3>
                    <p>{question.question}</p>
                    <ul className="list-disc pl-5 space-y-1">
                      {question.options.map((option, index) => (
                        <li key={index}>{option}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Abc

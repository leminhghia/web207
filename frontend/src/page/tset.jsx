import { useState } from "react";
import axios from "axios";

function Tset() {
  const [formData, setFormData] = useState({
    user_answer_id: "",
    user_quiz_id: "",
    question_id: "",
    selected_option_id: "",
    is_correct: "",
  });

  const [savedData, setSavedData] = useState([]); // Dữ liệu lưu tạm thời

  // Xử lý thay đổi dữ liệu form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Thêm dữ liệu vào danh sách lưu tạm
  const handleAdd = () => {
    if (
      !formData.user_answer_id ||
      !formData.user_quiz_id ||
      !formData.question_id ||
      !formData.selected_option_id
    ) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    setSavedData([...savedData, formData]); // Thêm vào danh sách tạm thời
    setFormData({
      user_answer_id: "",
      user_quiz_id: "",
      question_id: "",
      selected_option_id: "",
      is_correct: "",
    }); // Reset form
  };

  // Gửi dữ liệu lên server
  const handleSubmit = async () => {
    if (savedData.length === 0) {
      alert("Không có dữ liệu để gửi!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/submit-answers", {
        answers: savedData,
      });
      alert("Dữ liệu đã được gửi thành công!");
      setSavedData([]); // Xóa dữ liệu tạm sau khi gửi thành công
    } catch (error) {
      console.error("Lỗi khi gửi dữ liệu:", error);
      alert("Gửi dữ liệu thất bại!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Thêm câu trả lời</h2>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="user_answer_id"
          placeholder="User Answer ID"
          value={formData.user_answer_id}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          name="user_quiz_id"
          placeholder="User Quiz ID"
          value={formData.user_quiz_id}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          name="question_id"
          placeholder="Question ID"
          value={formData.question_id}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          name="selected_option_id"
          placeholder="Selected Option ID"
          value={formData.selected_option_id}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          name="is_correct"
          placeholder="Is Correct (0 hoặc 1)"
          value={formData.is_correct}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleAdd}>Thêm</button>
      </div>

      <h3>Dữ liệu đã lưu tạm:</h3>
      <ul>
        {savedData.map((data, index) => (
          <li key={index}>
            {JSON.stringify(data)}
          </li>
        ))}
      </ul>

      <button onClick={handleSubmit} style={{ marginTop: "20px", padding: "10px 20px" }}>
        Gửi dữ liệu
      </button>
    </div>
  );
}

export default Tset;

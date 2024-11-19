 import db from "../config/db.js";
export const addUserQuiz = (req,res) =>{
    const { user_id} = req.user
    const { quiz_id } = req.body;
  
    const checkQuizSql = "SELECT * FROM quiz WHERE quiz_id = ?";
    db.query(checkQuizSql, [quiz_id], (err, data) => {
      if (err) return res.json({ Error: "Không tìm thấy quiz" });
  
      const sql = "INSERT INTO userquiz (user_id, quiz_id, start_time , created_at) VALUES (?, ?, NOW(),NOW())";
      db.query(sql, [user_id, quiz_id], (err, result) => {
        if (err) return res.json({ Error: "Bắt đầu quiz thất bại" });
        res.json({ message: "Quiz đã bắt đầu", user_quiz_id: result.insertId });
      });
    });
}













  

// export const submitQuiz = (req, res) => {
//     const { user_quiz_id } = req.body;
  
//     const checkSql = "SELECT * FROM userquiz WHERE user_quiz_id = ?";
//     db.query(checkSql, [user_quiz_id], (err, data) => {
//       if (err) return res.json({ Error: "Không tìm thấy phiên quiz" });
  
//       const end_time = new Date();
//       const score = calculateScore(user_quiz_id);  // Hàm tính điểm dựa trên câu trả lời của người dùng
  
//       // Cập nhật thông tin kết thúc quiz và điểm số
//       const updateSql = "UPDATE userquiz SET end_time = ?, score = ? WHERE user_quiz_id = ?";
//       db.query(updateSql, [end_time, score, user_quiz_id], (err, result) => {
//         if (err) return res.json({ Error: "Lưu kết quả quiz thất bại" });
  
//         // Lưu kết quả vào bảng `result`
//         const user_id = data[0].user_id; // Lấy user_id từ bảng userquiz
//         const quiz_id = data[0].quiz_id; // Lấy quiz_id từ bảng userquiz
//         const date_taken = end_time.toISOString().split('T')[0]; // Chuyển đổi thành định dạng YYYY-MM-DD
//         const time_taken = end_time.toISOString().split('T')[1].split('.')[0]; // Lấy giờ:phút:giây
  
//         const insertResultSql = "INSERT INTO result (user_id, quiz_id, score, date_taken, time_taken) VALUES (?, ?, ?, ?, ?)";
//         db.query(insertResultSql, [user_id, quiz_id, score, date_taken, time_taken], (err, result) => {
//           if (err) return res.json({ Error: "Lưu kết quả vào bảng result thất bại" });
  
//           res.json({ message: "Quiz đã được nộp và kết quả đã lưu", score });
//         });
//       });
//     });
//   };
  
  
//   const calculateScore = (user_quiz_id) => {
//     return new Promise((resolve, reject) => {
//       // Lấy tất cả câu trả lời của người dùng cho quiz này
//       const sql = `
//         SELECT ua.is_correct 
//         FROM useranswer ua 
//         JOIN answeroption ao ON ua.selected_option_id = ao.option_id
//         WHERE ua.user_quiz_id = ?;
//       `;
//       db.query(sql, [user_quiz_id], (err, results) => {
//         if (err) reject("Error calculating score");
  
//         let score = 0;
//         results.forEach(result => {
//           if (result.is_correct) score += 1;  // Cộng điểm nếu câu trả lời đúng
//         });
  
//         resolve(score); // Trả về tổng điểm
//       });
//     });
//   };
  
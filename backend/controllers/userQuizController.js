import db from "../config/db.js";
export const addUserQuiz = (req, res) => {
  const { user_id } = req.user;
  const { quiz_id } = req.body;

  const checkQuizSql = "SELECT * FROM quiz WHERE quiz_id = ?";
  db.query(checkQuizSql, [quiz_id], (err, data) => {
    if (err) return res.json({ Error: "Không tìm thấy quiz" });

    const sql =
      "INSERT INTO userquiz (user_id, quiz_id, start_time , created_at) VALUES (?, ?, NOW(),NOW())";
    db.query(sql, [user_id, quiz_id], (err, result) => {
      if (err) return res.json({ Error: "Bắt đầu quiz thất bại" });
      res.json({ message: "Quiz đã bắt đầu", user_quiz_id: result.insertId });
    });
  });
};

export const updateUserQuiz = (req, res) => {
  const { score, user_quiz_id, quiz_id } = req.body;
  const { user_id } = req.user;

  const checkSql = "SELECT * FROM userquiz WHERE user_quiz_id = ?";
  db.query(checkSql, [user_quiz_id], (err, data) => {
    if (err) return res.json({ Error: "Không tìm thấy quiz" });

    const end_time = new Date();
    const updateSql =
      "UPDATE userquiz SET end_time = ?, score = ? WHERE user_quiz_id = ?";
    db.query(updateSql, [end_time, score, user_quiz_id], (err, result) => {
      if (err) return res.json({ Error: "Lưu kết quả quiz thất bại" });

      const insertResultSql =
        "INSERT INTO result (user_id, quiz_id,user_quiz_id, score, date_taken, time_taken) VALUES (?, ?, ?, ?,NOW(),NOW())";
      db.query(insertResultSql, [user_id, quiz_id,user_quiz_id, score], (err, result) => {
        if (err) {
          return res.json({ Error: "Lưu kết quả vào bảng result thất bại" });
        }

        res.json({ message: "Thanh cong", score });
      });
    });
  });
};

export const getResult = (req, res) => {
  const { user_id } = req.user;
  const { id } = req.params;
  const sql = `
SELECT 
    u.name,
    u.email,
    u.user_id,
    uq.user_quiz_id,
    r.score,
    r.date_taken
FROM 
    user u
JOIN 
    userquiz uq ON u.user_id = uq.user_id
JOIN 
    result r ON uq.user_quiz_id = r.user_quiz_id
WHERE 
    u.user_id = ? AND uq.user_quiz_id = ?;
  
`;

  db.query(sql, [user_id,id], (err, data) => {
    if (err) {
      return res.json({ Error: "lay that bai", err });
    }
    res.json(data);
  });
};

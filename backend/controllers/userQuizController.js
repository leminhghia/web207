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
  const { score, user_quiz_id, quiz_id,total_correct } = req.body;
  const { user_id } = req.user;

  const checkSql = "SELECT * FROM userquiz WHERE user_quiz_id = ?";
  db.query(checkSql, [user_quiz_id], (err, data) => {
    if (err || data.length === 0)
      return res.json({ Error: "Không tìm thấy quiz" });

    const start_time = data[0].start_time;

    const updateSql =
      "UPDATE userquiz SET end_time = NOW(),time_taken = NOW(), score = ? WHERE user_quiz_id = ?";
    db.query(updateSql, [score, user_quiz_id], (err, result) => {
      if (err) return res.json({ Error: "Lưu kết quả quiz thất bại" });

      // Truy vấn lại để lấy end_time
      const getEndTimeSql =
        "SELECT end_time FROM userquiz WHERE user_quiz_id = ?";
      db.query(getEndTimeSql, [user_quiz_id], (err, resultData) => {
        if (err || resultData.length === 0)
          return res.json({ Error: "Không thể lấy end_time" });

        const end_time = resultData[0].end_time;
        function timeToSeconds(time) {
          const [hours, minutes, seconds] = time.split(":").map(Number);
          return hours * 3600 + minutes * 60 + seconds;
        }
        const timeTaken = timeToSeconds(end_time) - timeToSeconds(start_time);

        let rating = "";
        if (score > 8.4) {
          rating = "giỏi";
        } else if (score > 6.9) {
          rating = "Khá";
        } else if (score > 5.4) {
          rating = "Trung bình";
        } else if (score > 3.9) {
          rating = "Yếu";
        } else {
          rating = "Kém";
        }

        // Lưu kết quả vào bảng result
        const insertResultSql =
          "INSERT INTO result (user_id, quiz_id, user_quiz_id, score,total_correct, rating, date_taken, time_taken) VALUES (?, ?, ?, ?, ?, ?, NOW(),?)";
        db.query(
          insertResultSql,
          [user_id, quiz_id, user_quiz_id, score,total_correct, rating, timeTaken],
          (err, insertResult) => {
            if (err) {
              return res.json({
                Error: "Lưu kết quả vào bảng result thất bại",
              });
            }

            res.json({ message: "Thành công", score });
          }
        );
      });
    });
  });
};

export const getResultById = (req, res) => {
  const { user_id } = req.user;
  const { id } = req.params;
  const sql = `
SELECT 
    u.name,
    u.email,
    u.user_id,
    uq.user_quiz_id,
    uq.quiz_id,
    r.score,
    r.date_taken,
    r.time_taken,
    r.rating,
    r.total_correct
FROM 
    user u
JOIN 
    userquiz uq ON u.user_id = uq.user_id
JOIN 
    result r ON uq.user_quiz_id = r.user_quiz_id
WHERE 
    u.user_id = ? AND uq.user_quiz_id = ?;
  
`;

  db.query(sql, [user_id, id], (err, data) => {
    if (err) {
      return res.json({ Error: "lay that bai", err });
    }
    res.json(data);
  });
};

export const getResult = (req, res) => {
  const { user_id } = req.user;
  const sql = `
  SELECT 
     r.*,
     q.title,
     q.quiz_id
  FROM 
      result r
  JOIN
    quiz q ON r.quiz_id = q.quiz_id
    WHERE r.user_id = ?
  `;
  db.query(sql, [user_id], (err, data) => {
    if (err) {
      return res.json({ Error: "lay that bai", err });
    }
    res.json(data);
  });
};

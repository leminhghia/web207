import db from "../config/db.js";

export const getQuiz = (req, res) => {
  const sql = `
  SELECT q.quiz_id, q.title, q.total_questions, q.duration_minutes, q.created_at, s.name AS subject_name, s.subject_id AS subject_id
  FROM quiz q JOIN subject s ON q.subject_id = s.subject_id
`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json({ Error: "Không thể lấy dữ liệu quiz" });
    }
    return res.json(data);
  });
};

export const getQuizId = (req, res) => {
  const { quiz_id } = req.params;

  if (!quiz_id) {
    return res.status(400).json({ Error: "quiz_id không được cung cấp" });
  }

  const sql = `
    SELECT q.quiz_id, q.title, q.total_questions, q.duration_minutes, q.created_at, 
           s.name AS subject_name, s.subject_id AS subject_id
    FROM quiz q 
    JOIN subject s ON q.subject_id = s.subject_id 
    WHERE q.quiz_id = ?
  `;

  db.query(sql, [quiz_id], (err, data) => {
    if (err) {
      console.error("Lỗi khi truy vấn:", err);
      return res.status(500).json({ Error: "Không thể lấy dữ liệu quiz" });
    }
    if (data.length === 0) {
      return res.json({ Error: "Không tìm thấy quiz với quiz_id này" });
    }
    return res.json(data[0]);
  });
};

export const addQuiz = (req, res) => {
  const checksql = "SELECT * FROM subject WHERE subject_id = ?";
  const { subject_id, title, total_questions, duration_minutes } = req.body;
  const { user_id } = req.user;
  db.query(checksql, [subject_id], (err) => {
    if (err) {
      return res.json({ Error: "Lỗi truy vấn kiểm tra subject" });
    }

    const sql = `
      INSERT INTO quiz (subject_id, title, total_questions, duration_minutes, created_at)
      VALUES (?, ?, ?, ?, NOW())
    `;

    db.query(
      sql,
      [subject_id, title, total_questions, duration_minutes],
      (err, data) => {
        if (err) {
          return res.json({ Error: "Thêm quiz thất bại" });
        }

        const quiz_id = data.insertId;

        const insertsql = `INSERT INTO user_quiz_creator (user_id , quiz_id , created_at)
        VALUES (?,?,NOW())`;
        db.query(insertsql, [user_id, quiz_id], (err, result) => {
          if (err) {
            return res.json({ Error: "Thêm quiz thất bại" });
          }
          return res.json({
            message: "Thêm quiz thành công",
            quiz_id: data.insertId,
          });
        });
      }
    );
  });
};

export const subject = (req, res) => {
  const sql = "SELECT * FROM subject";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json({ Error: "error" });
    }
    return res.json(data);
  });
};

export const updateQuiz = (req, res) => {
  const { subject_id, title, total_questions, duration_minutes, quiz_id } =
    req.body;

  if (!quiz_id) {
    return res.status(400).json({ Error: "quiz_id không được cung cấp" });
  }

  if (!subject_id || !title || !total_questions || !duration_minutes) {
    return res
      .status(400)
      .json({ Error: "Tất cả các trường đều phải có giá trị" });
  }

  const sql = `UPDATE quiz SET subject_id = ?, title = ?, total_questions = ?, duration_minutes = ? WHERE quiz_id = ?`;

  db.query(
    sql,
    [subject_id, title, total_questions, duration_minutes, quiz_id],
    (err, data) => {
      if (err) {
        console.error("Database Error: ", err);
        return res
          .status(500)
          .json({ Error: "Cập nhật quiz thất bại", details: err });
      }

      if (data.affectedRows === 0) {
        return res
          .status(404)
          .json({ Error: "Không tìm thấy quiz để cập nhật" });
      }

      return res.json({
        message: "Cập nhật quiz thành công",
      });
    }
  );
};

export const getQuizbyUser = (req, res) => {
  const { user_id } = req.user;

  const checksql = `SELECT 
  uqc.*, 
  q.quiz_id, 
  q.title
FROM user_quiz_creator uqc
JOIN quiz q ON uqc.quiz_id = q.quiz_id
WHERE uqc.user_id = ?
 `;
  db.query(checksql, [user_id], (err, data) => {
    if (err) {
      console.error("Database Error: ", err);
      return res
        .status(500)
        .json({ Error: "Cập nhật quiz thất bại", details: err });
    }
    return res.json(data);
  });
};

export const DeleteQuiz = (req,res) =>{
  const {quiz_id} = req.params
  const sql = `DELETE FROM quiz WHERE quiz_id = ?`
  db.query(sql,[quiz_id],(err)=>{
    if (err) {
      console.error("Database Error: ", err);
      return res
        .status(500)
        .json({ Error: "Cập nhật quiz thất bại", details: err });
    }
        return res.json({message:'xoa thanh cong'});
    })
  

 
}

import db from "../config/db.js";

export const getQuiz = (req, res) => {
  const sql = `
 SELECT 
  quiz.quiz_id,
  quiz.title,
  quiz.quiz_image,
  quiz.created_at,
  quiz_level.level_id,
  quiz_subject.subject_id,
  quiz_major.major_id
FROM quiz
LEFT JOIN quiz_level ON quiz.quiz_id = quiz_level.quiz_id
LEFT JOIN quiz_subject ON quiz.quiz_id = quiz_subject.quiz_id
LEFT JOIN quiz_major ON quiz.quiz_id = quiz_major.quiz_id;

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
SELECT 
  quiz.quiz_id,
  quiz.title,
  quiz.quiz_image,
  quiz.created_at,
  quiz_level.level_id,
  quiz_subject.subject_id,
  quiz_major.major_id
FROM quiz
LEFT JOIN quiz_level ON quiz.quiz_id = quiz_level.quiz_id
LEFT JOIN quiz_subject ON quiz.quiz_id = quiz_subject.quiz_id
LEFT JOIN quiz_major ON quiz.quiz_id = quiz_major.quiz_id
WHERE quiz.quiz_id = ?;
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
  const { title, level_id, subject_id, major_id } = req.body; // Lấy dữ liệu từ req.body
  const { user_id } = req.user; // Lấy user_id từ req.user
  const image = req.file ? req.file.filename : null;
  
  // Kiểm tra bắt buộc 'title', 'level_id'
  if (!title || !level_id) {
    return res.json({
      Error: "Tên quiz, trình độ và tên trình độ là bắt buộc",
    });
  }

  // Kiểm tra xem level_id có tồn tại trong bảng level không
  const checkLevelSql = "SELECT * FROM level WHERE level_id = ?";
  db.query(checkLevelSql, [level_id], (err, result) => {
    if (err) {
      return res.json({ Error: "Lỗi truy vấn kiểm tra trình độ" });
    }

    if (result.length === 0) {
      return res.json({ Error: "Trình độ không tồn tại" });
    }

    // Thực hiện thêm quiz vào bảng quiz
    const sql = `
      INSERT INTO quiz (title, quiz_image, created_at)
      VALUES (?, ?, NOW())
    `;

    db.query(sql, [title, image], (err, data) => {
      if (err) {
        return res.json({ Error: "Thêm quiz thất bại" });
      }

      const quiz_id = data.insertId;

      const quizLevel = `INSERT INTO quiz_level (quiz_id, level_id) 
      VALUES (?,?)`;

      db.query(quizLevel, [quiz_id, level_id], (err) => {
        if (err) {
          return res.json({ Error: "Thêm subject vào quiz thất bại" });
        }
      });

      // Nếu có subject_id thì thêm vào bảng quiz_subject
      if (subject_id) {
        const quizSubjectSql = `
          INSERT INTO quiz_subject (quiz_id, subject_id)
          VALUES (?, ?)
        `;
        db.query(quizSubjectSql, [quiz_id, subject_id], (err) => {
          if (err) {
            return res.json({ Error: "Thêm subject vào quiz thất bại" });
          }
        });
      }

      // Nếu có major_id thì thêm vào bảng quiz_major
      if (major_id) {
        const quizMajorSql = `
          INSERT INTO quiz_major (quiz_id, major_id)
          VALUES (?, ?)
        `;
        db.query(quizMajorSql, [quiz_id, major_id], (err) => {
          if (err) {
            return res.json({ Error: "Thêm major vào quiz thất bại" });
          }
        });
      }

      // Thêm thông tin quiz vào bảng user_quiz_creator
      const insertQuizCreatorSql = `INSERT INTO user_quiz_creator (user_id , quiz_id , created_at)
        VALUES (?,?,NOW())`;
      db.query(insertQuizCreatorSql, [user_id, quiz_id], (err, result) => {
        if (err) {
          return res.json({ Error: "Thêm quiz creator thất bại" });
        }

        return res.json({
          message: "Thêm quiz thành công",
          quiz_id: quiz_id,
        });
      });
    });
  });
};

export const updateQuiz = (req, res) => {
  const { title, level_id, subject_id, major_id, quiz_id } = req.body;
  const image = req.file ? req.file.filename : null;

  // Kiểm tra bắt buộc: 'quiz_id', 'title', 'level_id'
  if (!quiz_id || !title || !level_id) {
    return res
      .status(400)
      .json({ Error: "quiz_id, title, level_id là bắt buộc" });
  }

  // Kiểm tra xem level_id có tồn tại trong bảng level không
  const checkLevelSql = "SELECT * FROM level WHERE level_id = ?";
  db.query(checkLevelSql, [level_id], (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ Error: "Lỗi truy vấn kiểm tra trình độ", details: err });
    }

    if (result.length === 0) {
      return res.status(404).json({ Error: "Trình độ không tồn tại" });
    }

    // Cập nhật dữ liệu vào bảng quiz (Không cần cập nhật level_id nữa)
    const updateQuizSql = `
      UPDATE quiz 
      SET title = ?, quiz_image = ? ,created_at = NOW()
      WHERE quiz_id = ?
    `;
    db.query(updateQuizSql, [title, image, quiz_id], (err, data) => {
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

      // Cập nhật bảng quiz_level với quiz_id và level_id mới
      const updateQuizLevelSql = `
        INSERT INTO quiz_level (quiz_id, level_id)
        VALUES (?, ?)
        ON DUPLICATE KEY UPDATE level_id = VALUES(level_id)
      `;
      db.query(updateQuizLevelSql, [quiz_id, level_id], (err) => {
        if (err) {
          console.error("Database Error: ", err);
          return res
            .status(500)
            .json({ Error: "Cập nhật level vào quiz thất bại", details: err });
        }
      });

      // Cập nhật bảng quiz_subject nếu có subject_id
      if (subject_id) {
        const updateSubjectSql = `
          INSERT INTO quiz_subject (quiz_id, subject_id)
          VALUES (?, ?)
          ON DUPLICATE KEY UPDATE subject_id = VALUES(subject_id)
        `;
        db.query(updateSubjectSql, [quiz_id, subject_id], (err) => {
          if (err) {
            console.error("Database Error: ", err);
            return res.status(500).json({
              Error: "Cập nhật subject vào quiz thất bại",
              details: err,
            });
          }
        });
      }

      // Cập nhật bảng quiz_major nếu có major_id
      if (major_id) {
        const updateMajorSql = `
          INSERT INTO quiz_major (quiz_id, major_id)
          VALUES (?, ?)
          ON DUPLICATE KEY UPDATE major_id = VALUES(major_id)
        `;
        db.query(updateMajorSql, [quiz_id, major_id], (err) => {
          if (err) {
            console.error("Database Error: ", err);
            return res.status(500).json({
              Error: "Cập nhật major vào quiz thất bại",
              details: err,
            });
          }
        });
      }

      return res.json({
        message: "Cập nhật quiz thành công",
      });
    });
  });
};

export const getQuizbyUser = (req, res) => {
  const { user_id } = req.user;

  const checksql = `SELECT 
  uqc.*, 
  q.quiz_id, 
  q.title,
  q.quiz_image
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

export const DeleteQuiz = (req, res) => {
  const { quiz_id } = req.params;
  const sql = `DELETE FROM quiz WHERE quiz_id = ?`;
  db.query(sql, [quiz_id], (err) => {
    if (err) {
      console.error("Database Error: ", err);
      return res
        .status(500)
        .json({ Error: "Cập nhật quiz thất bại", details: err });
    }
    return res.json({ message: "xoa thanh cong" });
  });
};

export const Levels = (req, res) => {
  db.query("SELECT * FROM level", (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Lỗi khi truy vấn dữ liệu" });
    }
    res.json(results);
  });
};

export const Majors = (req, res) => {
  db.query("SELECT * FROM major", (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Lỗi khi truy vấn dữ liệu" });
    }
    res.json(results);
  });
};

export const Subjects = (req, res) => {
  db.query("SELECT * FROM subject", (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Lỗi khi truy vấn dữ liệu" });
    }
    res.json(results);
  });
};

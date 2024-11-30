import db from "../config/db.js";

export const getSubject = (req, res) => {
  const { quiz_id } = req.params;

  const sql = `SELECT * FROM question WHERE quiz_id = ?`;
  db.query(sql, [quiz_id], (err, data) => {
    if (err) return res.json({ Error: "error" });
    return res.json(data);
  });
};

export const getQuestion = (req, res) => {
  const { id } = req.params;

  const sql = ` SELECT * FROM question WHERE quiz_id = ?`;
  db.query(sql, [id], (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Lỗi khi thêm câu trả lời" });
    }
    return res.json(data);
  });
};

export const getQuestionbyId = (req, res) => {
  const { id } = req.params;

  const sql = `
    SELECT 
      q.question_id, 
      q.question_text, 
      q.question_type,
      q.question_img,
      a.option_id, 
      a.option_text, 
      a.is_correct
    FROM 
      question q
    JOIN 
      answeroption a ON q.question_id = a.question_id
    WHERE 
      q.question_id = ?
  `;

  db.query(sql, [id], (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Lỗi khi lấy câu hỏi và lựa chọn" });
    }

    // Tạo đối tượng để chứa câu hỏi và lựa chọn
    const questionData = {
      question_id: data[0]?.question_id,
      question_text: data[0]?.question_text,
      question_type: data[0]?.question_type,
      question_img: data[0]?.question_img,
      options: [],
    };

    // thêm dữ liệu option vào mảng
    data.forEach((row) => {
      questionData.options.push({
        option_id: row.option_id,
        option_text: row.option_text,
        is_correct: row.is_correct,
      });
    });

    return res.json(questionData);
  });
};

export const addQuestion = (req, res) => {
  try {
    const { quiz_id, question, question_type } = req.body;

    // Parse answers từ chuỗi JSON sang mảng
    let answers;
    try {
      answers = JSON.parse(req.body.answers);
    } catch (err) {
      return res.status(400).json({ error: "Dữ liệu answers không hợp lệ" });
    }
    const image = req.file ? req.file.filename : null;

    const questionSql = `INSERT INTO question (quiz_id, question_img, question_text, question_type) VALUES (?, ?, ?, ?)`;
    db.query(questionSql, [quiz_id, image || null, question, question_type], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Lỗi khi thêm câu hỏi" });
      }

      const question_id = result.insertId;

      const answerSql = `INSERT INTO answeroption (question_id, option_text, is_correct) VALUES ?`;
      const answerValues = answers.map((answer) => [
        question_id,
        answer.answer_text,
        answer.is_correct,
      ]);

      db.query(answerSql, [answerValues], (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: "Lỗi khi thêm câu trả lời" });
        }

        return res.json({
          message: "Câu hỏi và câu trả lời được thêm thành công",
          question_id,
        });
      });
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Đã xảy ra lỗi trong server" });
  }
};


export const updateQuestion = (req, res) => {
  const { question_id, question, question_type } = req.body;
  const image = req.file ? req.file.filename : null;
 
  let answers;
  try {
    answers = JSON.parse(req.body.answers);
  } catch (err) {
    return res.status(400).json({ error: "Dữ liệu answers không hợp lệ" });
  }
  const questionSql = `UPDATE question SET question_text = ?, question_type = ? ${image ? ", question_img = ?" : ""} WHERE question_id = ?`;
  const questionValues = [question, question_type, ...(image ? [image] : []), question_id];

  db.query(questionSql, questionValues, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Lỗi khi cập nhật câu hỏi" });
    }

    const answerSql = `UPDATE answeroption SET option_text = ?, is_correct = ? WHERE question_id = ? AND option_id = ?`;
    
    answers.forEach((answer) => {
      db.query(
        answerSql,
        [answer.answer_text, answer.is_correct, question_id, answer.option_id],
        (err) => {
          if (err) {
            console.error(err);
            return res
              .status(500)
              .json({ error: "Lỗi khi cập nhật câu trả lời" });
          }
        }
      );
    });

    return res.json({
      message: "Cập nhật câu hỏi và câu trả lời thành công",
      question_id,
      question_type,
    });
  });
};


export const DeleteQuestion = (req, res) => {
  const { id, checkId } = req.params;

  const sql = `DELETE FROM question WHERE quiz_id = ? AND question_id = ?`;
  db.query(sql, [id, checkId], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Lỗi khi xoa cau hoi" });
    }
    return res.json({ message: "xoa thanh cong" });
  });
};

// export const addQuizQuestions = (req, res) => {
//     const { quiz_id, questions } = req.body;

//     if (!quiz_id || !questions || !Array.isArray(questions)) {
//       return res.status(400).json({ Error: "Dữ liệu không hợp lệ" });
//     }

//     // Lặp qua mỗi câu hỏi
//     questions.forEach(async (question) => {
//       const { question_text, difficulty, answers } = question;

//       // Chèn câu hỏi vào bảng question
//       const questionSql = `INSERT INTO question (quiz_id, question_text, difficulty) VALUES (?, ?, ?)`;
//       db.query(questionSql, [quiz_id, question_text, difficulty], (err, result) => {
//         if (err) {
//           return res.status(500).json({ Error: "Lỗi khi thêm câu hỏi" });
//         }

//         // Lấy question_id vừa được tạo ra
//         const question_id = result.insertId;

//         // Chèn câu trả lời vào bảng answeroption
//         answers.forEach((answer) => {
//           const { answer_text, is_correct } = answer;
//           const answerSql = `INSERT INTO answeroption (question_id, answer_text, is_correct) VALUES (?, ?, ?)`;
//           db.query(answerSql, [question_id, answer_text, is_correct], (err, result) => {
//             if (err) {
//               return res.status(500).json({ Error: "Lỗi khi thêm câu trả lời" });
//             }
//           });
//         });
//       });
//     });

//     return res.json({ message: "Cập nhật câu hỏi và câu trả lời thành công!" });
//   };

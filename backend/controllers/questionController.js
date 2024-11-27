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
  const { quiz_id, question, answers } = req.body;
  console.log(req.body);
  const questionSql = `INSERT INTO question (quiz_id, question_text) VALUES (?, ?)`;
  db.query(questionSql, [quiz_id, question], (err, result) => {
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
        question_id: result.insertId,
      });
    });
  });
};

export const updateQuestion = (req, res) => {
  const { question_id, question, answers } = req.body;


  // Cập nhật câu hỏi
  const questionSql = `UPDATE question SET  question_text = ? WHERE question_id = ?`;
  db.query(questionSql, [ question, question_id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Lỗi khi cập nhật câu hỏi" });
    }

    // Cập nhật các câu trả lời
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
    });
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

import db from "../config/db.js";

export const getUsetAnswer = (req, res) => {
  const { user_quiz_id } = req.params;

  const sql = `SELECT * FROM useranswer WHERE user_quiz_id = ? `;
  db.query(sql, [user_quiz_id], (err, data) => {
    if (err) return console.error("ko get dc", err);
    return res.json(data);
  });
};


export const addUserAnswer = (req, res) => {
  const { user_quiz_id, answer: answers } = req.body;

  // Tạo mảng các giá trị cần chèn vào bảng useranswer
  const values = answers.map((a) => [a.user_quiz_id, a.question_id, a.option_id]);
  const insertsql = `INSERT INTO useranswer (user_quiz_id, question_id, selected_option_id) VALUES ?`;

  db.query(insertsql, [values], (err) => {
    if (err) {
      console.error(err);
      return res.json({ error: "Lỗi thêm đáp án của người dùng" });
    }

    // Lấy tổng số câu hỏi trong bài quiz
    const totalQuestionsSql = `
      SELECT COUNT(*) AS total_questions 
      FROM question`;

    db.query(totalQuestionsSql, (err, totalQuestionsResult) => {
      if (err) {
        console.error(err);
        return res.json({ error: "Lỗi lấy tổng số câu hỏi" });
      }

      const totalQuestions = totalQuestionsResult[0]?.total_questions || 0;

      // Lấy tất cả đáp án đúng của các câu hỏi
      const correctAnswersSql = `
        SELECT q.question_id, ao.option_id
        FROM question q
        JOIN answeroption ao ON q.question_id = ao.question_id
        WHERE ao.is_correct = 1`;

      db.query(correctAnswersSql, (err, correctAnswers) => {
        if (err) {
          console.error(err);
          return res.json({ error: "Lỗi lấy đáp án đúng" });
        }

        // Tạo đối tượng để lưu đáp án đúng cho mỗi câu hỏi
        const correctAnswersMap = {};
        correctAnswers.forEach((row) => {
          if (!correctAnswersMap[row.question_id]) {
            correctAnswersMap[row.question_id] = [];
          }
          correctAnswersMap[row.question_id].push(row.option_id);
        });

        // Lấy tất cả đáp án người dùng đã chọn
        const userAnswersSql = `
          SELECT ua.question_id, ua.selected_option_id
          FROM useranswer ua
          WHERE ua.user_quiz_id = ?`;

        db.query(userAnswersSql, user_quiz_id, (err, userAnswers) => {
          if (err) {
            console.error(err);
            return res.json({ error: "Lỗi lấy đáp án người dùng" });
          }

          // Tạo đối tượng để lưu đáp án người dùng cho mỗi câu hỏi
          const userAnswersMap = {};
          userAnswers.forEach((row) => {
            if (!userAnswersMap[row.question_id]) {
              userAnswersMap[row.question_id] = [];
            }
            userAnswersMap[row.question_id].push(row.selected_option_id);
          });

          // Kiểm tra các câu trả lời của người dùng
          const updateResults = [];
          let correctCount = 0; // Biến đếm số câu đúng
          Object.keys(correctAnswersMap).forEach((questionId) => {
            const correctOptions = correctAnswersMap[questionId];
            const userSelectedOptions = userAnswersMap[questionId] || [];

            // Kiểm tra xem đáp án người dùng có giống đáp án đúng không
            const isCorrect =
              correctOptions.length === userSelectedOptions.length &&
              correctOptions.every((option) => userSelectedOptions.includes(option)) &&
              userSelectedOptions.every((option) => correctOptions.includes(option));

            // Tăng đếm câu đúng nếu đúng
            if (isCorrect) {
              correctCount += 1;
            }

            // Cập nhật kết quả vào bảng useranswer
            updateResults.push([
              isCorrect ? 1 : 0,
              questionId,
              user_quiz_id,
            ]);
          });

          // Cập nhật kết quả cho tất cả các câu trả lời của người dùng
          const updateSql = `
            UPDATE useranswer
            SET is_correct = ?
            WHERE user_quiz_id = ? AND question_id = ?`;

          updateResults.forEach(([isCorrect, questionId, userQuizId]) => {
            db.query(updateSql, [isCorrect, userQuizId, questionId], (err) => {
              if (err) {
                console.error(err);
              }
            });
          });

          // Tính phần trăm điểm
          const scorePercentage = ((correctCount / totalQuestions) * 10).toFixed(2);

          // Gửi kết quả về client
          return res.json({
            message: "Nộp bài thành công", score: scorePercentage , correctCount,
          });
        });
      });
    });
  });
};

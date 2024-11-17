import db from "../config/db.js";

export const addUserAnswer = (req,res)=>{
const {user_quiz_id,question_id,selected_option_id } = req.body

const checkUserQuizSql = `SELECT * FROM userquiz WHERE user_quiz_id = ?`
db.query(checkUserQuizSql,[user_quiz_id],(err,data)=>{
    if (err) return res.json({ Error: "Không tìm thấy quiz" });

    const checkQuestionSql = `SELECT * FROM question WHERE question_id = ?`
    db.query(checkQuestionSql,[question_id],(err,data)=>{
        if (err) return res.json({ Error: "Không tìm thấy câu hỏi" });

        const checkAnswerSql = `SELECT * FROM answeroption  WHERE option_id = ?`
        db.query(checkAnswerSql,[selected_option_id],(err,data)=>{
            if (err) return res.json({ Error: "Không tìm thấy câu trả lời" });

            const sql = `INSERT INTO useranswer (user_quiz_id, question_id, selected_option_id, is_correct) VALUES (?, ?, ?, ?)`
            const is_correct = data[0].correct_option_id === selected_option_id ? 1 : 0;
            db.query(sql, [user_quiz_id, question_id, selected_option_id, is_correct], (err, data) => {
                if (err) return res.json({ Error: "Lưu thành công" });
                res.json({ message: "Câu trả lời đã được lưu" });
              });
        })
    })
})
}

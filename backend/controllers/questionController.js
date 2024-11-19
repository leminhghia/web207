import db from '../config/db.js'

export const getQuestion = (req,res)=>{
 const sql = `SELECT * FROM question`
 db.query(sql,(err,data)=>{
    if (err) return res.json({Error:"error"})
        return res.json(data)
 })
}


export const addQuestion = (req,res)=>{
    const {quiz_id, question_text, difficulty} = req.body;

    const checksql = `SELECT * FROM quiz WHERE quiz_id = ?`

    db.query(checksql,[quiz_id],(err,data)=>{
        if (err) return res.json({ Error: "Không tìm thấy quiz" });

        const sql = `INSERT INTO question (quiz_id,question_text, difficulty,created_at)
          VALUES (?, ?, ?, NOW())`;

        db.query(sql,[quiz_id, question_text, difficulty],(err,data)=>{
            if (err) return res.json({ Error: "Thêm câu hỏi thất bại" });
            res.json({ message: "thêm thành công" });
        })
    })

}
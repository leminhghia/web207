import db from "../config/db.js";

export const getAnswerOptions = (req, res) => {
    const { question_id } = req.params;
  
    const sql = "SELECT * FROM answeroption WHERE question_id = ?";
    db.query(sql, [question_id], (err, data) => {
      if (err) return res.json({ Error: "Không thể lấy lựa chọn câu trả lời" });
      res.json(data);
    });
  };
  

export const addAnswerOption = (req,res)=>{
const {question_id,option_text,is_corrrect} = req.body;

const checksql=`SELECT * FROM question WHERE question_id = ?`

db.query(checksql,[question_id],(err,data)=>{
    if(err) return res.json({Error:"không tìm thấy câu hỏi"})

    const sql = `INSERT INTO answeroption (question_id,option_text,is_correct,created_at)
    VALUES (?,?,?,NOW())`
    db.query(sql,[question_id,option_text,is_corrrect],(err,data)=>{
        if (err) return res.json({ Error: "Thêm câu trả lời thất bại" });
        res.json({ message: "Thêm lựa chọn câu trả lời thành công" });
    })
})

}

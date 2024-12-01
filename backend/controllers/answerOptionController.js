import db from "../config/db.js";

export const getAnswerOptions = (req, res) => {
  const { question_id } = req.params;

  // Truy vấn lấy câu trả lời và kiểm tra shuffle_options
  const sql = `
    SELECT 
      ao.*, 
      qs.shuffle_options 
    FROM answeroption ao
    JOIN question q ON ao.question_id = q.question_id
    JOIN quizsetting qs ON q.quiz_id = qs.quiz_id
    WHERE ao.question_id = ?`;

  db.query(sql, [question_id], (err, data) => {
    if (err) {
      return res.status(500).json({ Error: "Không thể lấy lựa chọn câu trả lời", details: err });
    }

    if (data.length === 0) {
      return res.status(404).json({ Error: "Không tìm thấy lựa chọn câu trả lời" });
    }

    const shuffleOptions = data[0].shuffle_options; // Kiểm tra shuffle_options từ kết quả
    let answerOptions = data.map(({ shuffle_options, ...rest }) => rest); // Loại bỏ shuffle_options khỏi kết quả

    // Nếu shuffle_options = 1, xáo trộn danh sách câu trả lời
    if (shuffleOptions === 1) {
      answerOptions = shuffleArray(answerOptions);
    }

    return res.json(answerOptions);
  });
};

// Hàm xáo trộn mảng
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
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

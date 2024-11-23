import db from '../config/db.js'

export const getUsetAnswer = (req,res) =>{
  const {user_quiz_id} = req.params

  const sql = `SELECT * FROM useranswer WHERE user_quiz_id = ? `
  db.query(sql,[user_quiz_id],(err,data)=>{
    if(err) return console.error("ko get dc",err);
    return res.json(data);
  })
}

export const addUserAnswer = (req, res) => {
  const answers = req.body.answer;
  if (!answers) return console.error("loi");
  const optionIds = answers.map((a)=>a.option_id)
  const placeholders = optionIds.map(() => '?').join(', ');
const checksql = `SELECT is_correct FROM answeroption WHERE option_id IN (${placeholders})`

  const values = answers.map((a) => [
  a.user_quiz_id, a.question_id, a.option_id
]);

db.query(checksql, optionIds, (err, data) => {
  if (err) {
    return console.error('Error:', err);
  }
  // Xử lý kết quả truy vấn ở đây
  console.log(data);
});

// const sql =`INSERT INTO useranswer (user_quiz_id,question_id,selected_option_id) VALUES ?`

// db.query(sql,[values],(err,data)=>{
//   if(err) return console.error('loi',err);
  
//   res.json({message:"nộp bài thành công",data})
// })


};


// export const addUserAnswer = (req, res) => {
//   const { user_quiz_id, question_id, selected_option_id } = req.body

//   const checksql = `SELECT is_correct FROM answeroption WHERE option_id = ?`
//   db.query(checksql, [selected_option_id], (err, data) => {
//     if (err) return console.error("loi1:", err);

//     const is_correct = data.length > 0 ? data[0].is_correct : null

//     const findsql = `SELECT * FROM useranswer WHERE user_quiz_id = ? AND question_id = ?`
//     db.query(findsql, [user_quiz_id, question_id], (err, data) => {
//       if (err) return console.error("loi2:", err);

//       if (data.length > 0) {
//         const updatesql = `UPDATE useranswer SET selected_option_id = ?, is_correct = ?
//         WHERE user_quiz_id = ? AND question_id = ?`
//         db.query(updatesql, [selected_option_id, is_correct, user_quiz_id, question_id], (err, data) => {
//           if (err) return console.error("loi3:", err);
//           res.json({ message: "cap nhat thah cnong" })

//         })
//       }
//       else {
//         const insertsql = `INSERT INTO useranswer (user_quiz_id,question_id,selected_option_id,is_correct)
//         VALUES (?,?,?,?)`
//         db.query(insertsql, [user_quiz_id, question_id, selected_option_id, is_correct], (err, data) => {
//           if (err) return console.error("loi4:", err);
//           res.json({ message: "them thanh cong", user_answer_id: data.insertId })
//         })
//       }
//     })
//   })

// }

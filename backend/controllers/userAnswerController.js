import db from '../config/db.js'

export const getUsetAnswer = (req,res) =>{
  const {user_quiz_id} = req.params

  const sql = `SELECT * FROM useranswer WHERE user_quiz_id = ? `
  db.query(sql,[user_quiz_id],(err,data)=>{
    if(err) return console.error("ko get dc",err);
    return res.json(data);
  })
}

export const addOrUpdateUserAnswer = (req, res) => {
  const { user_quiz_id, question_id, selected_option_id } = req.body

  const checksql = `SELECT is_correct FROM answeroption WHERE option_id = ?`
  db.query(checksql, [selected_option_id], (err, data) => {
    if (err) return console.error("loi1:", err);

    const is_correct = data.length > 0 ? data[0].is_correct : null

    const findsql = `SELECT * FROM useranswer WHERE user_quiz_id = ? AND question_id = ?`
    db.query(findsql, [user_quiz_id, question_id], (err, data) => {
      if (err) return console.error("loi2:", err);

      if (data.length > 0) {
        const updatesql = `UPDATE useranswer SET selected_option_id = ?, is_correct = ?
        WHERE user_quiz_id = ? AND question_id = ?`
        db.query(updatesql, [selected_option_id, is_correct, user_quiz_id, question_id], (err, data) => {
          if (err) return console.error("loi3:", err);
          res.json({ message: "cap nhat thah cnong" })

        })
      }
      else {
        const insertsql = `INSERT INTO useranswer (user_quiz_id,question_id,selected_option_id,is_correct)
        VALUES (?,?,?,?)`
        db.query(insertsql, [user_quiz_id, question_id, selected_option_id, is_correct], (err, data) => {
          if (err) return console.error("loi4:", err);
          res.json({ message: "them thanh cong", user_answer_id: data.insertId })
        })
      }
    })
  })

}

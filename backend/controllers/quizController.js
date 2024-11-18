import db from '../config/db.js'

export const getQuiz = (req, res) => {
  const sql = `
  SELECT q.quiz_id, q.title, q.total_questions, q.duration_minutes, q.created_at, s.name AS subject_name, s.subject_id AS subject_id
  FROM quiz q JOIN subject s ON q.subject_id = s.subject_id
`
  db.query(sql, (err, data) => {
    if (err) {
      return res.json({ Error: 'Không thể lấy dữ liệu quiz' })
    }
    return res.json(data)
  })
}

export const addQuiz = (req, res) => {
  const checksql = 'SELECT * FROM subject WHERE subject_id = ?'

  const { subject_id, title, total_questions, duration_minutes } = req.body
  db.query(checksql, [subject_id], (err, data) => {
    if (err) return res.json({ Error: 'ko co subject id' })
  })
  const sql = `INSERT INTO quiz (subject_id, title, total_questions, duration_minutes,created_at)
  VALUES  (?, ?, ?, ?, NOW())
  `

  db.query(
    sql,
    [subject_id, title, total_questions, duration_minutes],
    (err, data) => {
      if (err) return res.json({ Error: 'Thêm quiz thất bại' })
      return res.json({ message: 'Thêm quiz thành công' })
    }
  )
}

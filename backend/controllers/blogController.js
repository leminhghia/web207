import db from '../config/db.js'

export const getBlog = (req, res) => {
  const sql = `SELECT * FROM posts`

  db.query(sql, (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ error: 'Lỗi khi lấy câu hỏi và lựa chọn' })
    }
    if (data.length === 0) {
      return res.status(404).json({ message: 'Không có bài viết nào' })
    }
    res.json(data)
  })
}

export const addBlog = (req, res) => {
  const { tag, title, description } = req.body
  console.log('Dữ liệu nhận được:', req.body)
  const image = req.file ? req.file.filename : null
  console.log(image)
  // Kiểm tra các trường bắt buộc
  if (!tag || !title || !description) {
    return res
      .status(400)
      .json({ error: 'Thiếu tiêu đề, nội dung bài viết hoặc hình ảnh' })
  }

  const sql = `INSERT INTO posts (tag, title, description,image, created_at, updated_at)
    VALUES (?, ?, ?, ?,  NOW(), NOW())`

  db.query(sql, [tag, title, description, image], (err, result) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ error: 'Lỗi khi thêm bài viết' })
    }
    res.status(201).json({
      message: 'Bài viết đã được thêm',
      id: result.insertId,
    })
  })
}

export const updateBlog = (req, res) => {
  const { tag, title, description, id } = req.body
  console.log('Dữ liệu nhận được:', req.body) // Xem dữ liệu gửi đến từ frontend
  const image = req.file ? req.file.filename : null
  console.log(image)

  if (!tag || !title || !description || !id) {
    return res
      .status(400)
      .json({ error: 'Thiếu ID, tiêu đề hoặc nội dung bài viết' })
  }

  const sql = `UPDATE posts SET tag = ?, title = ?, description = ?, image = ? WHERE id = ?`
  db.query(sql, [tag, title, description, image, id], (err, result) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ error: 'Lỗi khi cập nhật bài viết' })
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Không tìm thấy bài viết' })
    }
    res.status(200).json({ message: 'Cập nhật bài viết thành công' })
  })
}

//
export const deleteBlog = (req, res) => {
  const { id } = req.params
  if (!id) {
    return res.status(400).json({ error: 'Thiếu ID bài viết' })
  }
  const sql = `DELETE FROM posts WHERE id = ?`
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ error: 'Lỗi khi xóa bài viết' })
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Không tìm thấy bài viết để xóa' })
    }
    res.status(200).json({ message: 'Xóa bài viết thành công' })
  })
}

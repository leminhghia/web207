import express from 'express'
// import { addUserQuiz, getResult, getResultById, updateUserQuiz } from '../controllers/userQuizController.js'
import { verifyUser } from '../middleware/authMiddleware.js'
import {
  addBlog,
  getBlog,
  updateBlog,
  deleteBlog,
} from '../controllers/blogController.js'

import multer from 'multer'

const router = express.Router()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  },
})
const upload = multer({ storage })
//
router.post('/add', verifyUser, upload.single('image'), addBlog)
router.put('/update', verifyUser, updateBlog)
router.get('/list', verifyUser, getBlog)
router.delete('/delete/:id', verifyUser, deleteBlog)

export default router

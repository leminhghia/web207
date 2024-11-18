import express from 'express'
import { getQuiz, addQuiz } from '../controllers/quizController.js'
import { verifyUser, checkRole } from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/list', getQuiz)
router.post('/add', addQuiz)

export default router

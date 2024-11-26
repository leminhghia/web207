import express from 'express'
import { getQuiz, addQuiz, subject, getQuizId, updateQuiz } from '../controllers/quizController.js'
import { verifyUser, checkRole } from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/list', getQuiz)
router.get('/list/:quiz_id', getQuizId)
router.get('/subject', subject)
router.post('/add', verifyUser, checkRole(['teacher', 'admin']), addQuiz)
router.put('/update', verifyUser, checkRole(['teacher', 'admin']), updateQuiz)

export default router

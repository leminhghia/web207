import express from 'express'
import { submitQuiz } from '../controllers/userQuizController.js'
import { verifyUser } from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/add',verifyUser,submitQuiz)

export default router;

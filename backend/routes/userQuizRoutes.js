import express from 'express'
import { addUserQuiz } from '../controllers/userQuizController.js'
import { verifyUser } from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/add',verifyUser,addUserQuiz)

export default router;

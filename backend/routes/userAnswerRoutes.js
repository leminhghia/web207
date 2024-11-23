import express from 'express'
import { addUserAnswer, getUsetAnswer } from '../controllers/userAnswerController.js'
import { verifyUser } from '../middleware/authMiddleware.js'

const router = express.Router()
router.get('/list/:user_quiz_id',verifyUser,getUsetAnswer)
router.post('/add',verifyUser,addUserAnswer)
export default router;

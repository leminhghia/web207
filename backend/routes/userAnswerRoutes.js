import express from 'express'
import { addOrUpdateUserAnswer, getUsetAnswer } from '../controllers/userAnswerController.js'
import { verifyUser } from '../middleware/authMiddleware.js'

const router = express.Router()
router.get('/list/:user_quiz_id',verifyUser,getUsetAnswer)
router.post('/add-update',verifyUser,addOrUpdateUserAnswer)
export default router;

import express from 'express'
import { addUserAnswer } from '../controllers/userAnswerController.js'
import { verifyUser } from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/add',verifyUser,addUserAnswer)

export default router;

import express from 'express'
import { addUserQuiz, getResult, updateUserQuiz } from '../controllers/userQuizController.js'
import { verifyUser } from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/add',verifyUser,addUserQuiz)
router.put('/update',verifyUser,updateUserQuiz)
router.get('/result/list',verifyUser,getResult)
export default router;

import express from 'express'
import { addAnswerOption,getAnswerOptions } from '../controllers/answerOptionController.js'
import { verifyUser,checkRole } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get("/list/:question_id", getAnswerOptions);
router.post('/add',verifyUser,checkRole(['teacher','admin']),addAnswerOption)

export default router;

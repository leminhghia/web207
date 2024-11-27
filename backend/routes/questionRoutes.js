import express from 'express';
import { addQuestion, getQuestion, getQuestionbyId, getSubject, updateQuestion } from '../controllers/questionController.js';
import { verifyUser, checkRole } from '../middleware/authMiddleware.js';
import { updatePassword } from '../controllers/authController.js';

const router = express.Router();

router.get('/list/:quiz_id',getSubject)
router.post("/add", verifyUser, checkRole(['teacher', 'admin']), addQuestion);
router.get('/get/:id',getQuestion)
router.get('/getid/:id',getQuestionbyId)
router.put('/update',updateQuestion)

export default router;

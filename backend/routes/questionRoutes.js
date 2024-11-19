import express from 'express';
import { addQuestion, getQuestion } from '../controllers/questionController.js';
import { verifyUser, checkRole } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/list/:quiz_id',getQuestion)
router.post("/add", verifyUser, checkRole(['teacher', 'admin']), addQuestion);

export default router;

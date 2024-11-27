import express from 'express';
import { addQuestion, getQuestion, getSubject } from '../controllers/questionController.js';
import { verifyUser, checkRole } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/list/:quiz_id',getSubject)
router.post("/add", verifyUser, checkRole(['teacher', 'admin']), addQuestion);
router.get('/get',getQuestion)
export default router;

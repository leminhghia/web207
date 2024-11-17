import express from 'express';
import { addQuestion } from '../controllers/questionController.js';
import { verifyUser, checkRole } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post("/add", verifyUser, checkRole(['teacher', 'admin']), addQuestion);

export default router;

import express from "express";
import { getQuiz, addQuiz, subject } from "../controllers/quizController.js";
import { verifyUser,checkRole } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/list", getQuiz);
router.get("/subject", subject);
router.post("/add",verifyUser, checkRole(['teacher', 'admin']), addQuiz);

export default router;

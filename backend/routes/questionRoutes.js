import express from 'express';
import { addQuestion, DeleteQuestion, getQuestion, getQuestionbyId, getQuestionByUserQuizId, getSubject, updateQuestion } from '../controllers/questionController.js';
import { verifyUser, checkRole } from '../middleware/authMiddleware.js';
import multer from 'multer';

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads"); 
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
  });
  const upload = multer({ storage });

router.get('/list/:quiz_id',getSubject)
router.get('/list/userquiz/:user_quiz_id/quiz/:quiz_id',getQuestionByUserQuizId)
router.post("/add", verifyUser, upload.single("image"), checkRole(['teacher', 'admin']), addQuestion);
router.get('/get/:id',getQuestion)
router.get('/getid/:id',getQuestionbyId)
router.put('/update',verifyUser,upload.single("image"),updateQuestion)
router.delete('/delete/quiz/:id/question/:checkId',DeleteQuestion)

export default router;

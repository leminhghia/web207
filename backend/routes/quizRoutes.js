import express from 'express'
import { getQuiz, addQuiz, getQuizId, updateQuiz, getQuizbyUser, DeleteQuiz, Levels, Majors, Subjects, getQuizCreator } from '../controllers/quizController.js'
import { verifyUser, checkRole } from '../middleware/authMiddleware.js'
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

router.get('/list', getQuiz)
router.get('/list/:quiz_id', getQuizId)
router.get('/GetByUser',verifyUser, getQuizbyUser)
router.delete('/delete/:quiz_id',verifyUser,DeleteQuiz)
router.post('/add', verifyUser,upload.single("image"), checkRole(['teacher', 'admin']), addQuiz)
router.put('/update', verifyUser,upload.single("image"), checkRole(['teacher', 'admin']), updateQuiz)
router.get('/levels', Levels)
router.get('/subjects', Subjects)
router.get('/majors', Majors)
router.get('/getuserquizcreator', getQuizCreator)

export default router

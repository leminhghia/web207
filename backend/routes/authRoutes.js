import express from "express";
import { register, login, logout, getUser, updateUser, updatePassword } from "../controllers/authController.js";
import { verifyUser } from "../middleware/authMiddleware.js";

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

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/list",verifyUser,getUser )
router.put("/update",upload.single("image"),verifyUser,updateUser)
router.put("/update/pass",verifyUser,updatePassword)
export default router;
    
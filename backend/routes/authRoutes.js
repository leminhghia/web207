import express from "express";
import { register, login, logout, getUser, updateUser, updatePassword } from "../controllers/authController.js";
import { verifyUser } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/list",verifyUser,getUser )
router.put("/update",verifyUser,updateUser)
router.put("/update/pass",verifyUser,updatePassword)
export default router;
    
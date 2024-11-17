import express from "express";
import { register, login, logout, getUser } from "../controllers/authController.js";
import { verifyUser } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/list",verifyUser,getUser )

export default router;
    
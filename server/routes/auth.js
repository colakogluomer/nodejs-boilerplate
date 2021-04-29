import express from "express";
import { login, register } from "../controllers/authController.js";

const router = express.Router();
//Register Router
router.post("/register", register);
//Login Router
router.post("/login", login);

export default router;

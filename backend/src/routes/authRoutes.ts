import express from 'express';
import { handleLogin, handleLogout } from '../controllers/authController.js';

const router = express.Router();

router.post("/auth/login", handleLogin);

router.post("/auth/logout", handleLogout);

export default router;
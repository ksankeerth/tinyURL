import express from 'express';
import { handleDeleteUser, handleGetUser, handleRegisterUser, handleUpdateUser } from '../controllers/userController.js';

const router = express.Router();

router.post("/user/register", handleRegisterUser);

router.get("/user/:id", handleGetUser);

router.put("/user/:id", handleUpdateUser);

router.delete("/user/:id", handleDeleteUser);

export default router;
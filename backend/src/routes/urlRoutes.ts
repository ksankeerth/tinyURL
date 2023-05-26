import express  from 'express';
import { handleCreateUrl, handleDeleteUrl, handleGetUrl, handleGetUrls } from '../controllers/urlController.js';

const router = express.Router();

router.post("/url", handleCreateUrl);

router.get("/url/:path", handleGetUrl);

router.delete("/url/:id", handleDeleteUrl)

router.get("/urls", handleGetUrls)

export default router;

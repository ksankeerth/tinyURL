import express  from 'express';
import { handleCreateUrl, handleDeleteUrl, handleGetUrl } from '../controllers/urlController.js';

const router = express.Router();

router.post("/url", handleCreateUrl);

router.get("/url/:userId-:projectId-:hash", handleGetUrl);

router.delete("/url/:userId-:projectId-:hash", handleDeleteUrl)

export default router;

import express from 'express';
import { handleCreateProject, handleDeleteProject, handleGetProject, handleProjects, handleUpdateProject } from '../controllers/projectController.js';

const router = express.Router();

router.post("/project", handleCreateProject);

router.get("/project/:id", handleGetProject);

router.delete("/project/:id", handleDeleteProject);

router.put("/project/:id", handleUpdateProject);

router.get("/projects", handleProjects);

export default router;


import express, { Request, Response } from 'express';

const router = express.Router();

router.post("/url", (req : Request, res: Response) => {
  console.log(req, res);
});

router.get("/url/:userId-:projectId-:hash", (req : Request, res: Response) => {
  console.log(req, res);
});

export default router;
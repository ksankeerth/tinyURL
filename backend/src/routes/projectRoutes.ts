import express, { Request, Response } from 'express';

const router = express.Router();

router.post("/project", (req: Request, res: Response) => {
  console.log(req, res);
});

router.get("/project/:id", (req : Request, res: Response) => {
  console.log(req, res);
});

router.delete("/project/:id", (req : Request, res: Response) => {
  console.log(req, res);
});

router.put("/project/:id", (req : Request, res: Response) => {
  console.log(req, res);
});

export default router;
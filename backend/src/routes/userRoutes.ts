import express, { Request, Response } from 'express';

const router = express.Router();

router.post("/user/register", (req: Request, res: Response) => {
  console.log(req, res);
});

router.get("/user/:id", (req: Request, res: Response) => {
  console.log(req, res);
});

router.put("/user/:id", (req: Request, res: Response) => {
  console.log(req, res);
});

router.delete("/user/:id", (req: Request, res: Response) => {
  console.log(req, res);
});

export default router;
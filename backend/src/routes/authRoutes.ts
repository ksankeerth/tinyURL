import express, {Request, Response } from 'express';

const router = express.Router();

router.post("/auth/login", (req: Request, res: Response) => {
    console.log(req, res);
});

router.post("/auth/logout", (req: Request, res: Response) => {
  console.log(req, res);
});


export default router;
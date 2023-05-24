import { Request, Response } from 'express';

export const handleGetUrl = (req: Request, res: Response): void => {
  console.log(req, res);
}

export const handleDeleteUrl = (req: Request, res: Response): void => {
  console.log(req, res);
}

export const handleCreateUrl = (req: Request, res: Response): void => {
  console.log(req, res);
}


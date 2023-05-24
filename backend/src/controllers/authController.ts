import { Request, Response} from 'express';


export const handleLogin = (req: Request, res: Response): void => {
  console.log(req, res);
}

export const handleLogout = (req: Request, res: Response): void => {
  console.log(req, res);
}




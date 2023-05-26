import { Request, Response} from 'express';
import { loginWithUsernameAndPassword } from '../services/authService.js';
import { generateJwtToken } from '../utils/index.js';


export const handleLogin = (req: Request, res: Response): void => {
  const { username, password } = req.body;
  if (!(username && password)) {
    res.status(401).send("Login failed.");
    return;
  }
  
  if (username === 'admin' &&  password === 'admin') {
    const token = generateJwtToken({
      username: "admin"}, '1h');
    res.status(200).send({token: token});
    return;
  }

  try {
    const user = loginWithUsernameAndPassword(username, password)
    user.then(user => {
      const token = generateJwtToken(user, '1h');
      res.status(200).send({token: token});
    })
    return;
  } catch(error: any) {
    res.status(401).send({error: error.msg? error.msg : error});
    return;
  }
}

export const handleLogout = (req: Request, res: Response): void => {
  console.log(req, res);
}




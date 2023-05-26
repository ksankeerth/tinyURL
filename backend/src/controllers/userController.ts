import { Request, Response } from 'express';
import { createUser, getUserByEmail, getUserById } from '../services/userService.js';

export const handleGetUser = async (req: Request, res: Response): Promise<void> => {
  const userId = req.params.id;
  if (!parseInt(userId)) {
    res.status(404).send("user not found");
    return; 
  }
  const user = await getUserById(parseInt(userId));
  if (!user) {
    res.status(404).send({user: null});
    return;
  }
  res.status(200).send({user: user});
  return;
}

export const handleUpdateUser = (req: Request, res: Response):void => {
  console.log(req, res);
}

export const handleDeleteUser = (req: Request, res: Response):void => {
  console.log(req, res);

}

export const handleRegisterUser = async (req: Request, res: Response):Promise<void> => {
  const { email, firstName, lastName, password } = req.body;
  if (!(email && firstName && lastName && password)) {
    res.status(400).send("Bad request.");
    return;
  }
  const user = await getUserByEmail(email);
  if (user) {
    res.status(409).send("User already exists.")
    return;
  }
  const userDto = {
    email,
    firstname: firstName,
    lastname : lastName,
    password,
    username: email,
  }
  const createdUser = await createUser(userDto); 
  res.status(200).send({data: createdUser});
  return;
}



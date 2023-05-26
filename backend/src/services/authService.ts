import { User } from '../models/index.js';
import { getUserByEmail } from './userService.js';

export class UserNotFoundError extends Error {
  constructor(msg) {
    super(msg);
  }
}

export class InvalidCredentialError extends Error {
  constructor(msg) {
    super(msg);
  }
}

export const loginWithUsernameAndPassword = async (username: string, password: string): Promise<User | never>  => {
  const user = await getUserByEmail(username)
  if (user == null) {
    throw new UserNotFoundError("User account doesn't exist.");
  }
  
  // TODO : Password hashing/encrypting
  if (!(user.password === password)) {
    throw new InvalidCredentialError("Invalid credentials.")
  }
  delete user['password'];
  return user;
}

export const logout = async (token: string) => {
  console.log(token)
}

export const refreshAuth = async(token: string) => {
  console.log(token);
}
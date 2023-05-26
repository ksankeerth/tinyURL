
import jwt from 'jsonwebtoken';

export const generateJwtToken = (payload: object, expiresIn: string): string => {
  // Generate the JWT token

  const token = jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn });

  return token;
}
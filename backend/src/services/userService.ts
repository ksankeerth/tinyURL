
import { User } from '../models/index.js';
import prisma from '../prisma_client.js';

export const getUserById = async (id: number) : Promise<Omit<User, 'password'> | null>  => {
  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      username: true,
      email: true,
      firstname: true,
      lastname: true,
    }
  })
  return user;
}

export const getUserByEmail = async (email: string) : Promise<User | null> => {
  const user = await prisma.user.findUnique({
    where: {email },
  })
  return user;
}

export const createUser = async (userDto : Omit<User, 'id'>): Promise<Omit<User, 'password'> | null> => {
  
 const user = await prisma.user.create({ 
    data: userDto
  })
  delete user['password']
  return user;
}

export const deleteUserById = async(id: number):  Promise<Omit<User, 'password'> | null> => {
  const deletedUser = await prisma.user.delete({
    where: {id}
  });
  delete deletedUser['password']
  return deletedUser;
}

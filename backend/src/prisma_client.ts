import { PrismaClient } from "@prisma/client";

interface CustomNodeGlobal extends Global {
  prisma : PrismaClient
}

declare const global:CustomNodeGlobal

const prisma: PrismaClient = global.prisma || new PrismaClient();

export default prisma;
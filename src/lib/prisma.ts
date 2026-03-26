import { PrismaClient } from "@prisma/client"
// @typescript-eslint no-explicit-any
const globalForPrisma = { prisma: PrismaClient }
export const prisma =
  globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma
}
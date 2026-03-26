import { PrismaClient } from "@prisma/client"
// @typescript-eslint/no-explicit-any
const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined }
export const prisma =
  globalForPrisma.prisma || new PrismaClient({
    log: ["query", "info", "warn", "error"],
  })

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma
}
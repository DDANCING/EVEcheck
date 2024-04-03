import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'], // Registra consultas, informações, avisos e erros
})
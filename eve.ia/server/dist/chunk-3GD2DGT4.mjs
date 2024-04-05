// src/utils/prisma.ts
import { PrismaClient } from "@prisma/client";
var prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"]
  // Registra consultas, informações, avisos e erros
});

export {
  prisma
};

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default ({ req, res }: { req: Request; res: Response }) => ({
  req,
  res,
  db: prisma,
});

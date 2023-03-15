import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { Logger } from "pino";
import { Session } from "next-auth";

export type HandlerType = (params: {
  req: NextApiRequest;
  res: NextApiResponse;
  logger: Logger;
  session?: Session | null;
}) => void;

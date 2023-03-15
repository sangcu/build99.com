import type { NextApiRequest, NextApiResponse } from "next";
import pino from "pino";
import type { HandlerType } from "./types";
import { Session } from "next-auth";

const logger = pino();

export interface HandlerList {
  [key: string]: HandlerType;
}

const withHandler =
  (handlers: HandlerList, session?: Session | null) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    const method = req?.method?.toLowerCase() || "";

    const handler = handlers[method];

    if (!handler) {
      res.status(404).json("Not Found");
      return;
    }

    try {
      await handler({ req, res, logger, session });
    } catch (err) {
      logger.error(err);
      res.status(500).json("Something went wrong");
    }
  };

export default withHandler;

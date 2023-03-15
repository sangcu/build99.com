import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import withHandlers, { HandlerList } from "./withHandlers";

const withAuthorizedHandlers =
  (handlers: HandlerList) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req });

    if (!session) {
      res.status(401).json("Unauthorized");
    }

    withHandlers(handlers, session)(req, res);
  };

export default withAuthorizedHandlers;

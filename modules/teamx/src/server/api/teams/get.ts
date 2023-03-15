import { HandlerType } from "@/server/types";
import prisma from "@/database/prismadb";

const handleGet: HandlerType = async ({ req, res, session }) => {
  const { user } = session as any;

  const teams = await prisma.team.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      name: "asc",
    },
  });

  res.status(200).json(teams);
};

export default handleGet;

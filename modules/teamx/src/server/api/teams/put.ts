import { HandlerType } from "@/server/types";
import prisma from "@/database/prismadb";

const handlePut: HandlerType = async ({ req, res, session }) => {
  const { user } = session as any;

  const { id, name, description } = req.body;
  const targetTeam = prisma.team.findFirst({
    where: {
      id,
      userId: user.id,
    },
  });

  if (!targetTeam) return res.status(401).json("Unauthorized");

  const result = await prisma.team.update({
    where: {
      id: id,
    },
    data: {
      name,
      description,
    },
  });

  res.status(200).json(result);
};

export default handlePut;

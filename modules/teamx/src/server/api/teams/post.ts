import { HandlerType } from "@/server/types";
import prisma from "@/database/prismadb";

const handlePost: HandlerType = async ({ req, res, session }) => {
  const { user } = session as any;

  const { name, description } = req.body;

  const newTeam = await prisma.team.create({
    data: {
      userId: user.id,
      name,
      description,
    },
  });

  res.status(200).json(newTeam);
};

export default handlePost;

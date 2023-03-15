import { HandlerType } from "@/server/types";
import prisma from "@/database/prismadb";

const handleGet: HandlerType = async ({ req, res, session }) => {
  const { user } = session as any;
  const { teamId, id } = req.query;

  const targetTeam = prisma.team.findFirst({
    where: {
      id: teamId as string,
      userId: user.id,
    },
  });

  if (!targetTeam) return res.status(401).json("Unauthorized");

  const teamMember = await prisma.teamMember.findFirst({
    where: {
      id: id as string,
      teamId: teamId as string,
    },
  });

  res.status(200).json(teamMember);
};

export default handleGet;

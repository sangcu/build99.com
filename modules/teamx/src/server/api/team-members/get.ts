import { HandlerType } from "@/server/types";
import prisma from "@/database/prismadb";

const handleGet: HandlerType = async ({ req, res, session }) => {
  const { user } = session as any;
  const { teamId } = req.query;

  const targetTeam = prisma.team.findFirst({
    where: {
      id: teamId as string,
      userId: user.id,
    },
  });

  if (!targetTeam) return res.status(401).json("Unauthorized");

  const teamMembers = await prisma.teamMember.findMany({
    where: {
      teamId: teamId as string,
    },
    orderBy: {
      name: "asc",
    },
  });

  res.status(200).json(teamMembers);
};

export default handleGet;

import { HandlerType } from "@/server/types";
import prisma from "@/database/prismadb";

const handlePost: HandlerType = async ({ req, res, session }) => {
  const { user } = session as any;

  const { override, team } = req.body;

  const teamDefault = await prisma.team.findFirst({
    where: {
      userId: user.id,
    },
  });

  if (override || !teamDefault) {
    await prisma.$transaction([
      prisma.team.deleteMany({
        where: {
          userId: user.id,
        },
      }),
      prisma.team.create({
        data: {
          userId: user.id,
          name: team.name,
          description: team.description,
          teamMembers: {
            create: team.teamMembers,
          },
        },
      }),
    ]);
  } else {
    await prisma.team.update({
      where: {
        id: teamDefault.id,
      },
      data: {
        name: team.name,
        description: team.description,
        teamMembers: {
          create: team.teamMembers,
        },
      },
    });
  }

  res.status(200).json({});
};

export default handlePost;

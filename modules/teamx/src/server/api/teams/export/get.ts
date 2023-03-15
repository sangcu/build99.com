import { HandlerType } from "@/server/types";
import prisma from "@/database/prismadb";

const handleGet: HandlerType = async ({ req, res, session }) => {
  const { user } = session as any;

  const team = await prisma.team.findFirst({
    where: {
      userId: user.id,
    },
    select: {
      name: true,
      description: true,
      teamMembers: {
        select: {
          name: true,
          email: true,
          job_title: true,
          profile_photo: true,
          notes: true,
        },
      },
    },
    orderBy: {
      name: "asc",
    },
  });

  res.status(200).json(team);
};

export default handleGet;

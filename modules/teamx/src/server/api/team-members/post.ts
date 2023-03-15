import { HandlerType } from "@/server/types";
import prisma from "@/database/prismadb";

const handlePost: HandlerType = async ({ req, res, session }) => {
  const { user } = session as any;
  const { teamId } = req.query;

  const targetTeam = prisma.team.findFirst({
    where: {
      id: teamId as string,
      userId: user.id,
    },
  });

  if (!targetTeam) return res.status(401).json("Unauthorized");

  const { name, job_title, profile_photo, notes, email } = req.body;

  const newTeamMember = await prisma.teamMember.create({
    data: {
      teamId: teamId as string,
      name,
      job_title,
      profile_photo,
      notes,
      email,
    },
  });

  res.status(200).json(newTeamMember);
};

export default handlePost;

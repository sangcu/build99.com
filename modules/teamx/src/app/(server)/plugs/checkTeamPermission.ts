import { NextResponse } from "next/server";
import { Plug } from "../next-api/types";
import prisma from "@/database/prismadb";

const checkTeamPermission: Plug = async ({ context }) => {
  const { currentUser, params } = context!;
  const { teamId } = params;

  const targetTeam = prisma.team.findFirst({
    where: {
      id: teamId,
      userId: currentUser.id,
    },
  });

  if (!targetTeam)
    return {
      context,
      response: NextResponse.json("Unauthorized", {
        status: 401,
      }),
    };
};

export default checkTeamPermission;

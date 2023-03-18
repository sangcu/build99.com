import { NextResponse } from "next/server";
import prisma from "@/database/prismadb";
import {
  checkAuthPlug,
  addCurrentUserPlug,
  checkTeamPermission,
} from "@/app/(server)/plugs";
import nextApi from "@/app/(server)/next-api";
import { Context } from "@/app/(server)/next-api/types";

const pipeline = [checkAuthPlug, addCurrentUserPlug, checkTeamPermission];

export const GET = nextApi({
  pipeline,
  handler: async (_, context?: Context) => {
    const {
      params: { teamId, id },
    } = context!;

    const teamMember = await prisma.teamMember.findFirst({
      where: {
        id: id as string,
        teamId: teamId as string,
      },
    });

    return NextResponse.json(teamMember);
  },
});

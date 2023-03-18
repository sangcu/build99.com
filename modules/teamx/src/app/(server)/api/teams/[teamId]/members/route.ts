import { NextResponse } from "next/server";
import prisma from "@/database/prismadb";
import {
  addCurrentUserPlug,
  checkAuthPlug,
  checkTeamPermission,
} from "@/app/(server)/plugs";
import nextApi from "@/app/(server)/next-api";
import { Context } from "@/app/(server)/next-api/types";

const pipeline = [checkAuthPlug, addCurrentUserPlug, checkTeamPermission];

export const GET = nextApi({
  pipeline,
  handler: async (_, context?: Context) => {
    const {
      params: { teamId },
    } = context!;

    const teamMembers = await prisma.teamMember.findMany({
      where: {
        teamId: teamId as string,
      },
      orderBy: {
        name: "asc",
      },
    });

    return NextResponse.json(teamMembers);
  },
});

export const POST = nextApi({
  pipeline,
  handler: async (request?: Request, context?: Context) => {
    const {
      params: { teamId },
    } = context!;

    const { name, job_title, profile_photo, notes, email } =
      await request!.json();

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

    return NextResponse.json(newTeamMember);
  },
});

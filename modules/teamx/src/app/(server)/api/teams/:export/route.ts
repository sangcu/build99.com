import { NextResponse } from "next/server";
import prisma from "@/database/prismadb";
import { addCurrentUserPlug, checkAuthPlug } from "@/app/(server)/plugs";
import nextApi from "@/app/(server)/next-api";
import { Context } from "@/app/(server)/next-api/types";

const pipeline = [checkAuthPlug, addCurrentUserPlug];

export const GET = nextApi({
  pipeline,
  handler: async (_, context?: Context) => {
    const { currentUser } = context!;

    const team = await prisma.team.findFirst({
      where: {
        userId: currentUser.id,
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

    return NextResponse.json(team);
  },
});

import { NextResponse } from "next/server";
import prisma from "@/database/prismadb";
import { addCurrentUserPlug, checkAuthPlug } from "@/app/(server)/plugs";
import nextApi from "@/app/(server)/next-api";
import { Context } from "@/app/(server)/next-api/types";

const pipeline = [checkAuthPlug, addCurrentUserPlug];

export const POST = nextApi({
  pipeline,
  handler: async (request?: Request, context?: Context) => {
    const { currentUser } = context!;

    const { override, team } = await request!.json();

    const teamDefault = await prisma.team.findFirst({
      where: {
        userId: currentUser.id,
      },
    });

    if (override || !teamDefault) {
      await prisma.$transaction([
        prisma.team.deleteMany({
          where: {
            userId: currentUser.id,
          },
        }),
        prisma.team.create({
          data: {
            userId: currentUser.id,
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

    return NextResponse.json({});
  },
});

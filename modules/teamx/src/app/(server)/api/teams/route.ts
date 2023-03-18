import { NextResponse } from "next/server";
import prisma from "@/database/prismadb";
import nextApi from "@/app/(server)/next-api";
import { addCurrentUserPlug, checkAuthPlug } from "@/app/(server)/plugs";
import { Context } from "../../next-api/types";

const pipeline = [checkAuthPlug, addCurrentUserPlug];

export const GET = nextApi({
  pipeline,
  handler: async (_, context?: Context) => {
    const { currentUser } = context!;

    const teams = await prisma.team.findMany({
      where: {
        userId: currentUser.id,
      },
      orderBy: {
        name: "asc",
      },
    });

    return NextResponse.json(teams);
  },
});

export const POST = nextApi({
  pipeline,
  handler: async (request?: Request, context?: Context) => {
    const { currentUser } = context!;

    const { name, description } = await request!.json();

    const newTeam = await prisma.team.create({
      data: {
        userId: currentUser.id,
        name,
        description,
      },
    });

    return NextResponse.json(newTeam);
  },
});

export const PUT = nextApi({
  pipeline,
  handler: async (request?: Request, context?: Context) => {
    if (!context || !request) return;
    const { currentUser } = context;

    const { id, name, description } = await request.json();
    const targetTeam = prisma.team.findFirst({
      where: {
        id,
        userId: currentUser.id,
      },
    });

    if (!targetTeam)
      return NextResponse.json("Unauthorized", {
        status: 401,
      });

    const result = await prisma.team.update({
      where: {
        id: id,
      },
      data: {
        name,
        description,
      },
    });

    return NextResponse.json(result);
  },
});

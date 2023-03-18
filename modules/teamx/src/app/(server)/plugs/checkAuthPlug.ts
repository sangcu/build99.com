import { NextResponse } from "next/server";
import { Plug } from "../next-api/types";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const checkAuthPlug: Plug = async ({ context }) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return {
      context,
      response: NextResponse.json("Unauthorized", {
        status: 401,
      }),
    };
  }
};

export default checkAuthPlug;

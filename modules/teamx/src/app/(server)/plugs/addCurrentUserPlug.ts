import { Plug, PlugResponse } from "../next-api/types";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const addCurrentUserPlug: Plug = async ({ context }) => {
  const session = await getServerSession(authOptions);
  const { user } = session as any;

  return {
    context: {
      ...context,
      currentUser: user,
    },
    response: undefined,
  } as PlugResponse;
};

export default addCurrentUserPlug;

"use client";

import { signIn, useSession } from "next-auth/react";
import { Loading } from "../components/atoms";

export interface NavigationItem {
  name: string;
  href: string;
  icon: any;
  current?: boolean;
}

export default function Template({ children }: { children: React.ReactNode }) {
  const { status } = useSession();

  if (status === "unauthenticated") {
    signIn();
    return null;
  }

  if (status === "loading")
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <Loading containerClassName="mt-20" />
      </div>
    );

  return <>{children}</>;
}

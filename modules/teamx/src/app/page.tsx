"use client";

import db from "@/database/db";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { Loading } from "@/components/atoms";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const checkDbExist = async () => {
      try {
        const result = await db.teams.toArray();
        if (result?.length > 0) return router.push("/dashboard/teams");
        return router.push("/onboarding");
      } catch (ex) {
        return router.push("/onboarding");
      }
    };

    checkDbExist();
  }, []);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Loading containerClassName="mt-20" />
    </div>
  );
}

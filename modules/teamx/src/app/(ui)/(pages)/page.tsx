"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { Loading } from "@/app/(ui)/components/atoms";
import useQueryTeamInfo from "../hooks/useQueryTeamInfo";

export default function Home() {
  const router = useRouter();
  const { data, isLoading, isError } = useQueryTeamInfo();

  useEffect(() => {
    if (isLoading || isError) return;
    if (data) {
      return router.push("/dashboard");
    }

    return router.push("/onboarding");
  }, [data, isLoading, isError]);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Loading containerClassName="mt-20" />
    </div>
  );
}

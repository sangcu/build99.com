"use client";

import "./globals.css";
import { useEffect } from "react";
import Providers from "./providers";
import db from "@/database/db";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const checkDbExist = async () => {
      const result = await db.teams.toArray();
      if (result?.length > 0) return router.push("/dashboard");
      return router.push("/onboarding");
    };

    checkDbExist();
  }, []);

  return (
    <html lang="en">
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

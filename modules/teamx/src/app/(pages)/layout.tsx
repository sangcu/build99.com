// "use client";

import { signIn, useSession } from "next-auth/react";
import "./globals.css";
import Providers from "./providers";
import { Loading } from "@/app/components/atoms";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
          <ContainerComp>{children}</ContainerComp>
        </Providers>
      </body>
    </html>
  );
}

const ContainerComp: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  // const { status } = useSession();

  // if (status === "unauthenticated") {
  //   signIn();
  //   return null;
  // }

  // if (status === "loading")
  //   return (
  //     <div className="h-screen w-screen flex items-center justify-center">
  //       <Loading containerClassName="mt-20" />
  //     </div>
  //   );

  return <>{children}</>;
};

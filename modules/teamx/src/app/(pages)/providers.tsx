"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { SessionProvider } from "next-auth/react";

export default function Providers({ children }: any) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SessionProvider>
  );
}

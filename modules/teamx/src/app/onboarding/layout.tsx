"use client";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-screen h-screen">
      <div className="mx-auto w-full max-w-7xl flex-grow lg:flex">
        {children}
      </div>
    </main>
  );
}

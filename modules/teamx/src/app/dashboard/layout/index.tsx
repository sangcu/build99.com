"use client";

import {
  HomeIcon,
  UserGroupIcon,
  DocumentPlusIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

export interface NavigationItem {
  name: string;
  href: string;
  icon: any;
  current?: boolean;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  const navigation: NavigationItem[] = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: HomeIcon,
      current: pathName === "/dashboard",
    },
    {
      name: "Teams",
      href: "/dashboard/teams",
      icon: UserGroupIcon,
      current: pathName?.startsWith("/dashboard/teams"),
    },
    {
      name: "Templates",
      href: "/dashboard/templates",
      icon: DocumentPlusIcon,
      current: pathName?.startsWith("/dashboard/templates"),
    },
  ];

  return (
    <div className="relative flex min-h-full flex-col">
      <Header navigation={navigation} />
      <main className="mx-auto w-full max-w-7xl flex-grow lg:flex">
        <SideBar navigation={navigation} />
        <div className="bg-white lg:min-w-0 lg:flex-1">{children}</div>
      </main>
    </div>
  );
}

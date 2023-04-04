"use client";

import {
  HomeIcon,
  UserGroupIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import type { Route } from "next";

export interface NavigationItem {
  name: string;
  href: Route<string>;
  icon: any;
  current?: boolean;
}

export default function Template({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  const navigation: NavigationItem[] = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: HomeIcon,
      current: pathName === "/dashboard",
    },
    {
      name: "Members",
      href: "/dashboard/team-members",
      icon: UserGroupIcon,
      current: pathName?.startsWith("/dashboard/team-members"),
    },
    {
      name: "Goals",
      href: "/dashboard/goals",
      icon: ArrowUpRightIcon,
      current: pathName?.startsWith("/dashboard/goals"),
    },
  ];

  return (
    <div className="relative flex h-screen flex-col bg-gray-100">
      <Header navigation={navigation} />
      <main className="flex mx-auto w-full max-w-7xl flex-grow lg:flex lg:min-content-area h-full">
        {children}
      </main>
    </div>
  );
}

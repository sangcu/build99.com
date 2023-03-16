"use client";

import {
  HomeIcon,
  UserGroupIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { UrlObject } from "url";

export interface NavigationItem {
  name: string;
  href: UrlObject;
  icon: any;
  current?: boolean;
}

export default function Template({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  const navigation: NavigationItem[] = [
    {
      name: "Dashboard",
      href: new URL("/dashboard"),
      icon: HomeIcon,
      current: pathName === "/dashboard",
    },
    {
      name: "Members",
      href: new URL("/dashboard/team-members"),
      icon: UserGroupIcon,
      current: pathName?.startsWith("/dashboard/team-members"),
    },
    {
      name: "Goals",
      href: new URL("/dashboard/goals"),
      icon: ArrowUpRightIcon,
      current: pathName?.startsWith("/dashboard/goals"),
    },
  ];

  return (
    <div className="relative flex min-h-full flex-col bg-gray-50">
      <Header navigation={navigation} />
      <main className="mx-auto w-full max-w-7xl flex-grow lg:flex content-area">
        <SideBar navigation={navigation} />
        <div className="lg:min-w-0 lg:flex-1">{children}</div>
      </main>
    </div>
  );
}

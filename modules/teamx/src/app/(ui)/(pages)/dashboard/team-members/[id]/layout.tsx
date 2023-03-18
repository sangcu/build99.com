"use client";
import { Loading } from "@/app/(ui)/components/atoms";
import TabHeader from "@/app/(ui)/components/atoms/TabHeader";
import toModel from "@/app/(ui)/models/team-members/toModel";
import Image from "next/image";
import { usePathname } from "next/navigation";
import useQueryTeamMemberDetail from "../hooks/useQueryTeamMemberDetail";
import useQueryTeamInfo from "@/app/(ui)/hooks/useQueryTeamInfo";
import { Route } from "next";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const { id } = params;
  const pathName = usePathname();
  const { data: teamInfo } = useQueryTeamInfo();
  const { isLoading, data, isError } = useQueryTeamMemberDetail(
    teamInfo?.id,
    id
  );

  const memberDetail = data ? toModel(data) : undefined;
  const { name, profilePhoto, jobTitle } = memberDetail || {};

  const tabList = [
    {
      name: "Profile",
      href: `/dashboard/team-members/${id}/profile` as Route<string>,
      current:
        pathName?.startsWith("/dashboard/team-members/") &&
        pathName.includes("profile"),
    },
    {
      name: "1-1 Meetings",
      href: `/dashboard/team-members/${id}/1-1` as Route<string>,
      current:
        pathName?.startsWith("/dashboard/team-members/") &&
        pathName.includes("1-1"),
    },
  ];

  if (isLoading)
    return (
      <div className="px-4 lg:px-0 mt-24 lg:h-56">
        <Loading />
      </div>
    );

  if (isError)
    return (
      <div className="px-4 lg:px-0 text-center text-red-500 font-semibold mt-24">
        Something went wrong. Please try again!
      </div>
    );

  return (
    <main className="w-full">
      <div className="bg-white pt-10 mx-auto max-w-3xl px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
        <div className="flex items-center space-x-5 pb-6 sm:pb-2 2xl:pb-5">
          <div className="flex-shrink-0">
            <div className="relative">
              {profilePhoto ? (
                <Image
                  width={64}
                  height={64}
                  className="mx-auto h-16 w-16 rounded-full"
                  src={profilePhoto}
                  alt=""
                />
              ) : (
                <div className="flex items-center w-full justify-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                </div>
              )}
              <span
                className="absolute inset-0 rounded-full shadow-inner"
                aria-hidden="true"
              />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
            <p className="text-sm font-medium text-gray-500">{jobTitle}</p>
          </div>
        </div>
      </div>
      <div>
        <div className="border-b border-gray-200">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 bg-white">
            <TabHeader tabs={tabList} />
          </div>
        </div>
        <div className="border-t border-gray-200 py-5">{children}</div>
      </div>
    </main>
  );
}

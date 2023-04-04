"use client";
import { Button } from "@/app/(ui)/components/atoms";
import { TeamMemberList, TeamHeader } from "./components";
import Link from "next/link";
import { team_members } from "./exampleData";

export default function TeamList() {
  return (
    <div className="w-full mt-8 px-6 lg:px-8 sm-px-4">
      <TeamHeader />

      <div className="mt-4">
        <div className="p-6 bg-white overflow-hidden rounded-lg shadow col-span-2">
          <div className="lg:flex items-center">
            <div className="flex-1 text-2xl font-semibold">Members</div>
            <div>
              <Link href="/dashboard/team-members/add-new">
                <Button className="mt-2 lg:mt-0 w-full lg:w-auto">
                  Create New Member
                </Button>
              </Link>
            </div>
          </div>
          {team_members && (
            <TeamMemberList
              memberList={team_members.map((member) => ({
                ...member,
                isSelected: false,
              }))}
            />
          )}
        </div>
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import ImportProfile from "./components/ImportProfile";
import TeamInfoForm from "./components/TeamInfoForm";

export default function Home() {
  const [isImportProfile, setIsImportProfile] = useState(true);
  return (
    <div className="p-4 lg:p-0 w-full mt-4 lg:mt-20">
      <h1 className="text-center text-4xl font-bold text-orange-600">
        Welcome to yLeader!
      </h1>
      <div className="mt-2 w-full flex justify-center items-center">
        <p className="w-120 text-center text-lg text-gray-500">
          We&apos;re software engineers like you and we built this to help us to be a better tech lead.
        </p>
      </div>
      {isImportProfile ? (
        <ImportProfile onCancel={() => setIsImportProfile(false)} />
      ) : (
        <TeamInfoForm />
      )}
    </div>
  );
}

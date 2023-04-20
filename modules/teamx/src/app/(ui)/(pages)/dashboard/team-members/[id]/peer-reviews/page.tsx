"use client";
import React from "react";

const Overview: React.FC = () => {
  return (
    <div className="mt-8 flex flex-col items-center w-full justify-center">
      <div className="flex space-x-24">
        <div className="">
          <div className="block bg-white overflow-hidden h-full w-40">
            <div className="text-lg font-semibold">Business Impacts</div>
            <div className="mt-1 w-full bg-sky-400 p-4 text-white">
              <div>
                <span className="text-4xl font-bold">98.7</span>
                <span>%</span>
              </div>
              <div className="mt-1 text-base">
                {
                  "agreed that you're performing very well and is a key driver in the team"
                }
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="block bg-white overflow-hidden h-full w-40">
            <div className="text-lg font-semibold">Behaviors</div>
            <div className="mt-1 w-full bg-sky-400 p-4 text-white h-full">
              <div>
                <span className="text-4xl font-bold">78</span>
                <span>%</span>
              </div>
              <div className="mt-1 text-base">
                want to work with you in future
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

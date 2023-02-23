"use client";

import Link from "next/link";
import { people, userNavigation } from "./constants";

export default function Home() {
  return (
    <>
      <div
        className="z-[10] lg:fixed top-0 left-0 h-full w-1/2 bg-white"
        aria-hidden="true"
      />
      <div
        className="z-[10] lg:fixed top-0 right-0 h-full w-1/2 bg-gray-50"
        aria-hidden="true"
      />
      {/* Left sidebar & main wrapper */}
      <div className="z-[100] min-w-0 flex-1 bg-white xl:flex content-area">
        {/* Account profile */}
        <div className="pt-4">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 sm-px-4">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our team
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-y-16 gap-x-8 text-center sm:grid-cols-3 lg:grid-cols-4 lg:mx-0 lg:max-w-none"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <img
                    className="mx-auto h-24 w-24 rounded-full"
                    src={person.imageUrl}
                    alt=""
                  />
                  <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm leading-6 text-gray-600">
                    {person.role}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Activity feed */}
      <div className="z-[100] hidden lg:block bg-gray-50 pr-4 sm:pr-6 lg:flex-shrink-0 lg:border-l lg:border-gray-200 lg:pr-8 xl:pr-0">
        <div className="pl-6 lg:w-80">
          <div className="py-6">
            <Link href="/create-new-member">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Create New Member
              </button>
            </Link>
          </div>
          <div className="border-t pt-4 pb-2 space-y-2">
            {userNavigation?.map((naviation) => (
              <div key={naviation.name}>
                <button
                  key={naviation?.name}
                  type="button"
                  className="rounded-md text-base text-right font-medium text-gray-800 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  {naviation.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

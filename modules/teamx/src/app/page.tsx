"use client";

import Image from "next/image";
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
                Brilliant Team
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Solving high performance thoughput.
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-y-16 gap-x-8 text-center sm:grid-cols-3 lg:grid-cols-4 lg:mx-0 lg:max-w-none"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <Image
                    width={240}
                    height={240}
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
              <li>
                <Link href={'/create-new-member'}>
                <div className="flex flex-col align-center text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 48 48" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286M30 14a6 6 0 11-12 0 6 6 0 0112 0zm12 6a4 4 0 11-8 0 4 4 0 018 0zm-28 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                  <h2 className="mt-2 text-base font-semibold leading-6 text-gray-900">Add team members</h2>
                </div>
                </Link>
              </li>
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

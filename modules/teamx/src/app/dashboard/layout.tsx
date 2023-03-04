"use client";

import { Disclosure } from "@headlessui/react";
import { Bars3CenterLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import LogoIcon from "public/logo.svg";
import { Button } from "@/components/atoms";
import useExportTeamProfile from "@/hooks/useExportTeamProfile";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const navigations = [
    { name: "Who's next", onClick: () => {} },
    { name: "Create vote", onClick: () => {} },
    { name: "360 Feedbacks", onClick: () => {} },
  ];

  const { mutate: exportProfile, isLoading: isExporting } =
    useExportTeamProfile();

  return (
    <div className="relative flex min-h-full flex-col">
      {/* Navbar */}
      <Disclosure as="header" className="z-[100] flex-shrink-0 bg-orange-600">
        {({ open, close }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                {/* Logo section */}
                <div className="flex items-center px-2 lg:px-0 xl:w-64">
                  <Link href="/">
                    <div className="flex items-center flex-shrink-0">
                      <LogoIcon />
                      <div className="pl-2">
                        <div className="text-white font-bold text-2xl">
                          yLeader
                        </div>
                        <div className="text-orange-50 text-xs">
                          Helping people succeed.
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="flex lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-orange-600 p-2 text-orange-400 hover:bg-orange-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3CenterLeftIcon
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                {/* Links section */}
                <div className="hidden lg:block lg:w-80">
                  <div className="flex items-center justify-end">
                    <div className="flex space-x-2">
                      <Button
                        variant="white"
                        className="!w-20 !border-0 !hover:bg-gray-100"
                        onClick={() =>
                          router?.push("/dashboard/import-profile")
                        }
                      >
                        Import
                      </Button>
                      <Button
                        variant="white"
                        className="!w-20 !border-0 !hover:bg-gray-100"
                        loading={isExporting}
                        onClick={exportProfile}
                      >
                        Export
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                <Link href="/dashboard/import-profile">
                  <Disclosure.Button
                    as="a"
                    className="text-orange-200 hover:text-orange-100 hover:bg-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Import
                  </Disclosure.Button>
                </Link>
                <Disclosure.Button
                  as="a"
                  onClick={exportProfile}
                  className="text-orange-200 hover:text-orange-100 hover:bg-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Export
                </Disclosure.Button>
              </div>

              <div className="border-t border-orange-800 pt-4 pb-3 px-2">
                <Button
                  onClick={() => {
                    router.push("/dashboard/create-new-member");
                    close();
                  }}
                  className="!bg-orange-100 !border-transparent !text-orange-700 !hover:bg-orange-200 !w-full"
                >
                  Create New Member
                </Button>
                <div className="space-y-1">
                  {navigations.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      onClick={item?.onClick}
                      className="block rounded-md px-3 py-2 text-base font-medium text-orange-200 hover:bg-orange-600 hover:text-orange-100"
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* 3 column wrapper */}
      <main className="mx-auto w-full max-w-7xl flex-grow lg:flex">
        {children}
      </main>
    </div>
  );
}

"use client";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import useExportTeamProfile from "@/app/(ui)/hooks/useExportTeamProfile";
import { NavigationItem } from "../..";

import { MobileMenuButton, MobileMenuPanel } from "./components/MobileMenu";
import Brand from "./components/Brand";
import classNames from "classnames";
import Link from "next/link";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface HeaderProps {
  navigation: NavigationItem[];
}

const Header: React.FC<HeaderProps> = ({ navigation }) => {
  const { mutate: exportProfile, isLoading: isExporting } =
    useExportTeamProfile();
  const session = useSession();
  const currentUser = session?.data?.user;
  const router = useRouter();
  const userNavigation = [
    {
      name: "Import",
      onClick: () => {
        router?.push("/dashboard/import-profile");
      },
    },
    { name: "Export", onClick: exportProfile },
    {
      name: "Sign out",
      onClick: () => {
        signOut();
      },
    },
  ];
  return (
    <Disclosure as="header" className="flex-shrink-0 bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <Brand />
              <nav className="hidden lg:block ml-8 py-4 flex space-x-4 w-full">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? "text-sky-600" : "text-gray-600",
                      "rounded-md bg-sky-100 bg-opacity-0 px-3 py-2 text-base font-medium hover:bg-opacity-100"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="flex lg:hidden">
                <MobileMenuButton open={open} />
              </div>
              <Menu as="div" className="hidden lg:block relative ml-4 flex-shrink-0">
                <div>
                  <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none">
                    <span className="sr-only">Open user menu</span>
                    <div className="flex space-x-2 text-gray-900 items-center">
                      <div className="text-base">{currentUser?.email}</div>
                      <ChevronDownIcon className="h-5 w-5" />
                    </div>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <div
                            onClick={item.onClick}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                            )}
                          >
                            {item.name}
                          </div>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
          <MobileMenuPanel
            navigation={navigation}
            onExport={exportProfile as () => void}
          />
        </>
      )}
    </Disclosure>
  );
};

export default Header;

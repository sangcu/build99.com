import { Bars3CenterLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { NavigationItem } from "@/app/(pages)/dashboard/layout";
import classNames from "classnames";

export const MobileMenuButton: React.FC<{
  open: boolean;
}> = ({ open }) => {
  return (
    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-orange-700 p-2 text-orange-400 hover:bg-orange-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600">
      <span className="sr-only">Open main menu</span>
      {open ? (
        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
      ) : (
        <Bars3CenterLeftIcon className="block h-6 w-6" aria-hidden="true" />
      )}
    </Disclosure.Button>
  );
};

export const MobileMenuPanel: React.FC<{
  navigation: NavigationItem[];
  onExport: () => void;
}> = ({ navigation, onExport }) => {
  return (
    <Disclosure.Panel className="lg:hidden">
      <div className="space-y-1 px-2 pt-2 pb-3">
        <Link href="/dashboard/import-profile">
          <Disclosure.Button
            as="div"
            className="text-orange-200 hover:text-orange-100 hover:bg-orange-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Import
          </Disclosure.Button>
        </Link>
        <Disclosure.Button
          as="div"
          onClick={onExport}
          className="text-orange-200 hover:text-orange-100 hover:bg-orange-600 block px-3 py-2 rounded-md text-base font-medium"
        >
          Export
        </Disclosure.Button>
      </div>

      <div className="border-t border-orange-800 pt-4 pb-3 px-2">
        <div className="space-y-1">
          {navigation.map((item) => (
            <Link href={item.href} key={item.name}>
              <Disclosure.Button
                as="div"
                className={classNames(
                  item.current
                    ? "bg-orange-700 text-white"
                    : "text-orange-200 hover:bg-orange-600 hover:text-orange-100",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </Disclosure.Button>
            </Link>
          ))}
        </div>
      </div>
    </Disclosure.Panel>
  );
};

import classNames from "classnames";
import { Route } from "next";
import Link from "next/link";

interface TabHeaderProps {
  tabs: {
    name: string;
    href: Route<string>;
    current?: boolean;
  }[];
}
const TabHeader: React.FC<TabHeaderProps> = ({ tabs }) => {
  return (
    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          href={tab.href}
          className={classNames(
            tab.current
              ? "border-orange-600 text-gray-900"
              : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
            "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
          )}
        >
          {tab.name}
        </Link>
      ))}
    </nav>
  );
};

export default TabHeader;

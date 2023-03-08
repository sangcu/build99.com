import Link from "next/link";
import { NavigationItem } from "../..";
import classNames from "classnames";

interface SideBarProps {
  navigation: NavigationItem[];
}

const SideBar: React.FC<SideBarProps> = ({ navigation }) => {
  return (
    <div className="hidden min-w-0 bg-white lg:flex">
      {/* Account profile */}
      <div className="ml-8 bg-white xl:w-64 xl:flex-shrink-0 xl:border-r xl:border-gray-200">
        <nav className="mt-6 pr-4">
          <div className="space-y-1">
            {navigation.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                className={classNames(
                  item.current
                    ? "bg-orange-600 text-white"
                    : "text-gray-700 hover:bg-orange-50 hover:text-gray-900",
                  "group flex items-center rounded-md px-2 py-2 text-sm font-medium"
                )}
              >
                <item.icon
                  className={classNames(
                    item.current
                      ? "text-white-500"
                      : "text-gray-400 group-hover:text-gray-500",
                    "mr-3 h-6 w-6 flex-shrink-0"
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;

import Link from "next/link";
import { NavigationItem } from "../..";
import classNames from "classnames";
import { useRouter } from "next/navigation";

interface SideBarProps {
  navigation: NavigationItem[];
}

const SideBar: React.FC<SideBarProps> = ({ navigation }) => {
  const router = useRouter();
  return (
    <div className="hidden min-w-0 lg:flex">
      <div className="ml-8 xl:w-64 xl:flex-shrink-0 xl:border-r xl:border-gray-200">
        <nav className="mt-6 pr-4">
          <div className="space-y-1">
            {navigation.map((item) => (
              <div
                onClick={() => router.push(item.href)}
                key={item.name}
                className={classNames(
                  item.current
                    ? "bg-orange-600 text-white"
                    : "text-gray-700 hover:bg-orange-50 hover:text-gray-900",
                  "cursor-pointer group flex items-center rounded-md px-2 py-2 text-sm font-medium"
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
              </div>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;

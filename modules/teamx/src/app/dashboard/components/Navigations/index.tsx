import Link from "next/link";

interface NavigationProps {
  navigations: {
    name: string;
    onClick: () => void;
  }[];
}

const Navigations: React.FC<NavigationProps> = ({ navigations }) => {
  return (
    <div className="z-[100] hidden lg:block bg-gray-50 pr-4 sm:pr-6 lg:flex-shrink-0 lg:border-l lg:border-gray-200 lg:pr-8 xl:pr-0">
      <div className="pl-6 lg:w-80">
        <div className="py-6">
          <Link href="/dashboard/create-new-member">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Create New Member
            </button>
          </Link>
        </div>
        <div className="border-t pt-4 pb-2 space-y-2">
          {navigations?.map((naviation) => (
            <div key={naviation.name}>
              <button
                key={naviation?.name}
                type="button"
                onClick={naviation.onClick}
                className="rounded-md text-base text-right font-medium text-gray-800 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                {naviation.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigations;

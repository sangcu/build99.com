import Link from "next/link";
import LogoIcon from "public/logo.svg";

const Brand: React.FC = () => {
  return (
    <div className="flex items-center px-2 lg:px-0 xl:w-64">
      <Link href="/dashboard">
        <div className="flex items-center flex-shrink-0">
          <LogoIcon />
          <div className="pl-2">
            <div className="text-white font-bold text-2xl">yLeader</div>
            <div className="text-orange-50 text-xs">
              Helping people succeed.
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Brand;

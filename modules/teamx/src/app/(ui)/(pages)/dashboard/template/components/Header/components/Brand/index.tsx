import Link from "next/link";
import LogoIcon from "public/logo.svg";

const Brand: React.FC = () => {
  return (
    <div className="flex items-center px-2 lg:px-0 flex-0 lg:w-80">
      <Link href="/dashboard">
        <div className="flex items-center">
          <LogoIcon />
          <div className="pl-2">
            <div className="text-sky-600 font-bold text-2xl">yLeader</div>
            <div className="text-sky-600 text-xs font-semibold">
              Helping people succeed
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Brand;

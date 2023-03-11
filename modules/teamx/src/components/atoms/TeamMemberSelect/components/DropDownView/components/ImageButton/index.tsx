import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

interface ImageButtonProps {
  photoList: {
    key: string;
    photo: string;
  }[];
}

const ImageButton: React.FC<ImageButtonProps> = ({ photoList }) => {
  return (
    <Menu.Button className="items-center inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900">
      <div className="flex space-x-1 items-center">
        {photoList.map((item) =>
          item.photo ? (
            <Image
              key={item.key}
              width={20}
              height={20}
              className="h-8 w-8 rounded-full border-2 border-orange-500"
              src={item.photo}
              alt=""
            />
          ) : (
            <div
              key={item.key}
              className="w-8 h-8 bg-gray-300 rounded-full border-2 border-orange-500"
            ></div>
          )
        )}
      </div>
      <ChevronDownIcon
        className="-mr-1 h-5 w-5 text-gray-400"
        aria-hidden="true"
      />
    </Menu.Button>
  );
};

export default ImageButton;

import { Disclosure } from "@headlessui/react";
import useExportTeamProfile from "@/hooks/useExportTeamProfile";
import { NavigationItem } from "../..";

import { MobileMenuButton, MobileMenuPanel } from "./components/MobileMenu";
import Action from "./components/Action";
import Brand from "./components/Brand";

interface HeaderProps {
  navigation: NavigationItem[];
}

const Header: React.FC<HeaderProps> = ({ navigation }) => {
  const { mutate: exportProfile, isLoading: isExporting } =
    useExportTeamProfile();

  return (
    <Disclosure as="header" className="flex-shrink-0 bg-orange-600">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <Brand />
              <div className="flex lg:hidden">
                <MobileMenuButton open={open} />
              </div>
              <div className="hidden lg:block lg:w-80">
                <Action
                  isExporting={isExporting}
                  onExport={exportProfile as () => void}
                />
              </div>
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

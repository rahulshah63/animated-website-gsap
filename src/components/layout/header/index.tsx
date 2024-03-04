import { FC } from "react";
import { Link } from "react-router-dom";

import { MENU_LIST } from "@/constants";
import { MobileMenu, WebMenu } from "@/components/menu";
import { cn } from "@/utils/cn";
import { CedroIcon, CedroText, HamburgerIcon, CROSS } from "@/constants/assets/Icons";

interface IHeader {
    classname?: string;
    showMobileMenu: boolean, 
    setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: FC<IHeader> = ({ classname, showMobileMenu, setShowMobileMenu }) => {
    const MENUS = Object.values(MENU_LIST);

    return (
        <header
            className={cn("w-full sticky top-0 z-50 bg-[rgb(244,240,250)] flex justify-between items-center px-5 py-3 shadow-sm sm:px-9", classname)}
        >
            <Link to={"/"} className="inline-flex gap-3 z-20">
                <CedroIcon className="w-[2.15rem] h-[2.15rem]" />
                <CedroText className="h-[2.15rem]" />
            </Link>
            <MobileMenu showmenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu} menus={MENUS} />
            <WebMenu menus={MENUS} />

            <div
                className={cn("md:hidden w-[2.125rem] h-[2.125rem] z-10",)}
                onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
                {showMobileMenu ? <CROSS /> : <HamburgerIcon />}
            </div>
        </header>
    );
};

export default Header;

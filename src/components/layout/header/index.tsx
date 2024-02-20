import { FC, useState } from "react";
import { Link } from "react-router-dom";

import { EXTERNAL_LINKS, MENU_LIST } from "@/constants";
import { MobileMenu, WebMenu } from "@/components/menu";
import { cn } from "@/utils/cn";
import { CROSS, CedroIcon, CedroText, HamburgerIcon, PLUS } from "@/constants/assets/Icons";
import { CedroLogo } from "@/constants/assets/Images";

interface IHeader {
    classname?: string;
}

const Header: FC<IHeader> = ({ classname }) => {
    const MENUS = Object.values(MENU_LIST);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <header className={cn("w-full flex justify-between items-center mt-6 px-5 sm:px-9", classname)}>
                <Link to={"/"} className="inline-flex gap-3">
                    <img className="w-[2.15rem] h-[2.15rem]" src={CedroIcon} alt="cedro-logo" />
                    <img className="h-[2.15rem]" src={CedroText} alt="cedro-text" />
                </Link>
                <MobileMenu showmenu={showMobileMenu} menus={MENUS} />
                <WebMenu menus={MENUS} />

                <img
                    src={showMobileMenu ? CROSS : HamburgerIcon}
                    className={cn("lg:hidden w-6 h-6 z-10", {'w-10 h-10 opacity-60': showMobileMenu})}
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                />
        </header>
    );
};

export default Header;

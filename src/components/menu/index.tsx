import { EXTERNAL_LINKS } from "@/constants/index";
import { cn } from "@/utils/cn";
import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../button/Button";

interface IWebMenu {
    menus: {
        title: string;
        link: string;
        icon?: string;
        isExternalLink?: boolean;
    }[];
}
export const WebMenu: FC<IWebMenu> = (props) => {
    const { menus } = props || {};
    const navigate = useNavigate();

    return (
        <>
            <div className="hidden lg:flex gap-2.5 justify-center items-center ">
                {menus.map((item) => (
                    <h6
                        key={item.title}
                        onClick={() =>
                            item.isExternalLink
                                ? window.open(item.link, "_blank", "noopener,noreferrer")
                                : navigate(item.link)
                        }
                        className="m-2.5 text-base cursor-pointer w-fit"
                    >
                        {item.title}
                    </h6>
                ))}
            </div>
            <div className="hidden lg:flex gap-5 justify-center items-center ">
              <Button bgColor="bg-transparent" textColor="text-black" text="Launch Demo" handleClick={() => {}}/>
              <Button bgColor="bg-[#713CEE]" textColor="text-white" text="Join Waitlist" handleClick={() => {}}/>
            </div>
        </>
    );
};

interface IMobileMenu {
    showmenu: boolean;
    menus: {
        title: string;
        link: string;
        icon?: string;
        isExternalLink?: boolean;
    }[];
}
export const MobileMenu: FC<IMobileMenu> = ({ showmenu, menus }) => {
    const navigate = useNavigate();

    return (
        <div
            className={cn(
                "hidden flex-col fixed bottom-0 left-0 bg-[rgba(77,77,77,0.9)] w-full h-[100%] xl:hidden justify-between z-10 overflow-scroll",
                {
                    flex: showmenu,
                }
            )}
        >
            <div />
            <div className="flex flex-col align-center justify-start gap-10 mt-[100px] mb-[30px]">
                {menus.map((item) => (
                    <div key={item.title} className="w-full flex flex-col items-center over">
                        <h6
                            onClick={() =>
                                item.isExternalLink
                                    ? window.open(item.link, "_blank", "noopener,noreferrer")
                                    : navigate(item.link)
                            }
                            className="cursor-pointer w-fit"
                        >
                            {item.title}
                        </h6>
                    </div>
                ))}
            </div>
            <div className="w-full flex flex-col items-center gap-5">
                <div className="flex gap-4">
                    <a
                        href={EXTERNAL_LINKS.TWITTER}
                        target="_blank"
                        rel="noreferrer"
                        className="w-5 h-5 hover:opacity-80"
                    >
                        <img src="twitter" />
                    </a>
                    <a
                        href={EXTERNAL_LINKS.DISCORD}
                        target="_blank"
                        rel="noreferrer"
                        className="w-6 h-6 hover:opacity-80"
                    >
                        <img src="discord" />
                    </a>
                    <a
                        href={EXTERNAL_LINKS.INSTAGRAM}
                        target="_blank"
                        rel="noreferrer"
                        className="w-6 h-6 hover:opacity-80"
                    >
                        <img src="instagram" />
                    </a>
                </div>
                <p className="text-white inline-block opacity-40 text-sm font-light">
                    &copy; 2023 Anichess. All Rights Reserved
                </p>
            </div>
        </div>
    );
};

import { EXTERNAL_LINKS } from "@/constants/index";
import { cn } from "@/utils/cn";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { TWITTER, DISCORD, MEDIUM, TELEGRAM } from "@/constants/assets/Icons";


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
                            className="cursor-pointer text-white/80 text-2xl font-semibold w-fit"
                        >
                            {item.title}
                        </h6>
                    </div>
                ))}
            </div>
            <div className="w-full flex flex-col items-center gap-5">
            <div className="flex gap-4 pb-2">
                <a
                    href={EXTERNAL_LINKS.TWITTER}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[rgba(114,104,255,1)] rounded-full flex justify-center items-center w-[2.7125rem] h-[2.7125rem] md:w-[3.035rem]  md:h-[3.035rem] hover:opacity-80"
                >
                    <TWITTER />
                </a>
                <a
                    href={EXTERNAL_LINKS.DISCORD}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[rgba(114,104,255,1)] rounded-full flex justify-center items-center w-[2.7125rem] h-[2.7125rem] md:w-[3.035rem]  md:h-[3.035rem] hover:opacity-80"
                >
                    <DISCORD />
                </a>
                <a
                    href={EXTERNAL_LINKS.MEDIUM}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[rgba(114,104,255,1)] rounded-full flex justify-center items-center w-[2.7125rem] h-[2.7125rem] md:w-[3.035rem]  md:h-[3.035rem] hover:opacity-80"
                >
                    <MEDIUM />
                </a>
                <a
                    href={EXTERNAL_LINKS.TELEGRAM}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[rgba(114,104,255,1)] rounded-full flex justify-center items-center w-[2.7125rem] h-[2.7125rem] md:w-[3.035rem]  md:h-[3.035rem] hover:opacity-80"
                >
                    <TELEGRAM />
                </a>
            </div>
            <p className="footer copyright !text-white">&copy; 2023 Cedro. All rights reserved.</p>
            </div>
        </div>
    );
};

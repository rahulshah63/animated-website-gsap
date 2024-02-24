import { EXTERNAL_LINKS } from "@/constants/index";
import { cn } from "@/utils/cn";
import { FC } from "react";
import { TWITTER, DISCORD, MEDIUM, TELEGRAM } from "@/constants/assets/Icons";
import { Button } from "../button/Button";

interface IMobileMenu {
    showmenu: boolean;
    scrollTo: (target: string) => void;
    menus: {
        title: string;
        href: string;
    }[];
}
export const MobileMenu: FC<IMobileMenu> = ({ scrollTo, showmenu, menus }) => {
    return (
        <div
            className={cn(
                "header hidden flex-col fixed bottom-0 left-0 bg-[#F4F0FA] w-full h-[100%] md:hidden justify-between z-10",
                {
                    flex: showmenu,
                }
            )}
        >
        <div className="absolute -z-10 scale-[2] -right-1/2 top-1/4 pink-gradient h-full w-full" />
            <div className="flex flex-col align-center items-center gap-10 mt-[100px] mb-[30px]">
                {menus.map((item) => (
                    <div key={item.title} className="w-full flex flex-col items-center over">
                        <a onClick={() => scrollTo(item.href)} className="cursor-pointer title w-fit">
                            {item.title}
                        </a>
                    </div>
                ))}
                <div className="flex flex-col items-center gap-3 w-full">
                    <Button
                        className="w-[60%]"
                        bgColor="bg-[#713CEE]"
                        textColor="text-white"
                        text="Join Waitlist"
                        handleClick={() => {}}
                    />
                    <Button
                        className="w-[60%]"
                        bgColor="bg-white"
                        textColor="text-black"
                        text="Launch Demo"
                        handleClick={() => {}}
                    />
                </div>
            </div>
            <div className="w-full flex flex-col items-center gap-5">
                <p className="title">Get in touch</p>
                <div className="flex gap-4 my-6">
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
            </div>
        </div>
    );
};

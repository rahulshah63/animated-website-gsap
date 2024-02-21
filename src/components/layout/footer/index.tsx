import { Button } from "@/components/button/Button";
import { EXTERNAL_LINKS } from "@/constants";
import { CedroIcon, CedroText, DISCORD, MEDIUM, TELEGRAM, TWITTER } from "@/constants/assets/Icons";
import { cn } from "@/utils/cn";
import { FC } from "react";
import { Link } from "react-router-dom";

interface IFooter {
    classname?: string;
}

const Footer: FC<IFooter> = ({ classname }) => {
    return (
        <footer
            className={cn(
                "footer w-full p-10 flex flex-col items-center gap-4 md:gap-11",
                classname
            )}
        >
            <div className="flex w-full flex-col md:flex-row justify-center md:justify-between gap-6 items-center md:items-end">
            <Link to={"/"} className="inline-flex gap-3 pb-2">
                <CedroIcon className="w-[2.15rem] h-[2.15rem]" />
                <CedroText className="h-[2.15rem]" />
            </Link>
            <div className="input-section gap-3 md:gap-6">
                <span className="text">Stay up to date</span>
                <div className="input-wrapper w-[21.1875rem] md:w-[25rem]">
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className="w-full pl-2 outline-none text-gray-700"
                    />
                    <Button
                        className="!h-[2.75rem] md:!h-[3.75rem] w-[60%] !px-0"
                        bgColor="bg-[#141414]"
                        textColor="text-white"
                        text="Join waitlist"
                        handleClick={() => {}}
                    />
                </div>
            </div>
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
            </div>
            <p className="copyright">&copy; 2023 Cedro. All rights reserved.</p>
        </footer>
    );
};

export default Footer;

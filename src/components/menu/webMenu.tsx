import { FC } from "react";
import { Button } from "../button/Button";
import { EXTERNAL_LINKS } from "@/constants";

interface IWebMenu {
    menus: {
        title: string;
        href: string;
    }[];
}
export const WebMenu: FC<IWebMenu> = (props) => {
    const { menus } = props || {};

    return (
        <>
            <div className="header hidden md:flex gap-2.5 justify-center items-center ">
                {menus.map((item) => (
                    <a key={item.title} href={item.href} className="m-2.5 title cursor-pointer w-fit">
                        {item.title}
                    </a>
                ))}
            </div>
            <div className="hidden lg:flex gap-5 justify-center items-center ">
                <Button
                    bgColor="bg-transparent"
                    textColor="text-black"
                    text="Launch Demo"
                    handleClick={() => window.open(EXTERNAL_LINKS.DEMO, "_blank")}
                />
                <Button
                    bgColor="bg-[#713CEE]"
                    textColor="text-white"
                    text="Join Waitlist"
                    handleClick={() => document.getElementById("join-waitlist").focus()}
                />
            </div>
        </>
    );
};

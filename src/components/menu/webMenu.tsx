import { FC } from "react";
import { Button } from "../button/Button";

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
                    <a
                    href={item.href}
                        className="m-2.5 title cursor-pointer w-fit"
                    >
                        {item.title}
                    </a>
                ))}
            </div>
            <div className="hidden lg:flex gap-5 justify-center items-center ">
              <Button bgColor="bg-transparent" textColor="text-black" text="Launch Demo" handleClick={() => {}}/>
              <Button bgColor="bg-[#713CEE]" textColor="text-white" text="Join Waitlist" handleClick={() => {}}/>
            </div>
        </>
    );
};

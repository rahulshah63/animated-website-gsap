import { FC } from "react";
import { useNavigate } from "react-router-dom";
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

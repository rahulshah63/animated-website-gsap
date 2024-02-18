import { cn } from "@/utils/cn";
import { FC } from "react";

interface IFooter {
    classname?: string;
}

const Footer: FC<IFooter> = ({ classname }) => {
    return <div className={cn(classname)}>footer</div>;
};

export default Footer;
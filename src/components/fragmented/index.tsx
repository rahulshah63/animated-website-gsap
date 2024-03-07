import { FRAG } from "@/constants/assets/Icons";
import { cn } from "@/utils/cn";

export const Fragmented = () => {
    return (
        <div className="fragmented-wrapper">
            <span className="title -mb-[4rem] md:-mb-[10rem] lg:-mb-[15rem]">
                Navigating the world of <br /> <b>fragmented liquidity</b>
            </span>
            <div id='frag-wrapper' className="relative flex justify-center items-center w-full child:w-full child:md:!w-[70%]">
                <FRAG id='frag' className={cn('!pt-[5rem] md:!pt-[10rem] !top-0')}/>
                <div
                    id="scroll-circle"
                    className="circle absolute opacity-0 !z-10"
                />
                {/* <div
                    id="frag-circle"
                    className="circle opacity-0"
                /> */}
            </div>
        </div>
    );
};

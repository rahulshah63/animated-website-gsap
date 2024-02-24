import { FRAG } from "@/constants/assets/Icons";

export const Fragmented = () => {
    return (
        <div className="fragmented-wrapper">
            <span className="title my-20">
                Navigating the world of <br /> <b>fragmented liquidity</b>
            </span>
            <div className="bridgingTheGap relative flex justify-center items-center w-full md:w-[80%] ">
                <FRAG id='frag'/>
                <div
                    id="frag-circle"
                    className="circle opacity-0"
                />
            </div>
        </div>
    );
};

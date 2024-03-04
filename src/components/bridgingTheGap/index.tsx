import { BRIDGING_THE_GAP, CedroIcon } from "@/constants/assets/Icons";

export const BridgingTheGap = () => {
   
    return (
        <div  className="bridgingTheGap mt-[20rem]">
            <div id='bridging-the-gap-wrapper' className="flex relative justify-center items-center">
                <BRIDGING_THE_GAP id="bridging-the-gap" className="w-[80%] max-w-[48rem] !-z-0" />
                <CedroIcon id="cedro-icon" className="absolute w-[14%] md:w-auto !z-20" />
            </div>
            <div id="sticky-text-wrapper"  className="w-full flex flex-col justify-center px-8 gap-6">
                <span id="sticky-text" className="title z-20">
                    <text id="sticky-text-title" className="blue font-bold">Bridging the Gaps </text>
                    <br />
                    Between Blockchains
                </span>
                <p id="sticky-text-description" className="description z-20">
                    Meet Cedro - Your Gateway to Omnichain Liquidity
                </p>
            </div>
        </div>
    );
};

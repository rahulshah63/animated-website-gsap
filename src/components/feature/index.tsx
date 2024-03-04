import { FeatureCard } from "@/components/cards";
import { FeatureBG, FeatureFG } from "@/constants/assets/Images";

export const Feature = () => {
    return (
        <div
            id="features"
            className="feature-wrapper flex flex-col gap-[1.875rem] md:gap-[10rem] justify-center"
        >
            <span className="title z-20">
                The <b>Omni Future</b>
                <br />
                with Cedro
            </span>
            <div className="flex flex-col gap-5 justify-center items-center">
                <FeatureCard
                    title={
                        <>
                            Use native tokens{" "}
                            <text className="text-[#FFFBA2]">
                                across <br /> different
                            </text>{" "}
                            blockchains
                        </>
                    }
                    image={
                        <div className="relative flex justify-center items-center w-[13.5rem] h-[13.5rem] md:w-[28.375rem] md:h-[28.375rem]">
                            <img
                                src={FeatureBG}
                                alt="Cedro Finance | Lend and borrow the assets with cross-chain decentralized liquidity protocol."
                                className="absolute -left-8 -top-8 scale-[2.75] pointer-events-none"
                            />
                            <img
                                src={FeatureFG}
                                alt="Cedro Finance | Lend and borrow the assets with cross-chain decentralized liquidity protocol."
                                className="z-10"
                            />
                        </div>
                    }
                    description="Transforms isolated assets into powerful tools usable across multiple blockchains"
                    buttonText="Try it Now"
                    tag="OmniAsset"
                    handleClick={() => {}}
                />
                <FeatureCard
                    title={
                        <>
                            <text className="text-[#FFFBA2]">Maximize</text> the Power of Your
                            Capital
                        </>
                    }
                    image={
                        <div className="relative flex justify-center items-center w-[13.5rem] h-[13.5rem] md:w-[28.375rem] md:h-[28.375rem]">
                            <img
                                src={FeatureBG}
                                alt="Cedro Finance | Lend and borrow the assets with cross-chain decentralized liquidity protocol."
                                className="absolute -left-8 -top-8 scale-[2.75] pointer-events-none"
                            />
                            <img
                                src={FeatureFG}
                                alt="Cedro Finance | Lend and borrow the assets with cross-chain decentralized liquidity protocol."
                                className="z-10"
                            />
                        </div>
                    }
                    description="Transforms isolated assets into powerful tools usable across multiple blockchains"
                    tag="OmniYield"
                    buttonText="Try it Now"
                    handleClick={() => {}}
                />
                <FeatureCard
                    title={
                        <>
                            Use native tokens{" "}
                            <text className="text-[#FFFBA2]">
                                across <br /> different
                            </text>{" "}
                            blockchains
                        </>
                    }
                    image={
                        <div className="relative flex justify-center items-center w-[13.5rem] h-[13.5rem] md:w-[28.375rem] md:h-[28.375rem]">
                            <img
                                src={FeatureBG}
                                alt="Cedro Finance | Lend and borrow the assets with cross-chain decentralized liquidity protocol."
                                className="absolute -left-8 -top-8 scale-[2.75] pointer-events-none"
                            />
                            <img
                                src={FeatureFG}
                                alt="Cedro Finance | Lend and borrow the assets with cross-chain decentralized liquidity protocol."
                                className="z-10"
                            />
                        </div>
                    }
                    description="Transforms isolated assets into powerful tools usable across multiple blockchains"
                    tag="OmniLPD"
                    buttonText="Try it Now"
                    handleClick={() => {}}
                />
            </div>
        </div>
    );
};

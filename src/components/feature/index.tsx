import { FeatureCard } from "@/components/cards";
import { EXTERNAL_LINKS } from "@/constants";
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
                            Utilize native tokens{" "}
                            <text className="text-[#FFFBA2]">
                                across <br /> multiple
                            </text>{" "}
                            chains
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
                    description="Expands the value of your native assets from single chain to multiple chains"
                    buttonText="Try it Now"
                    tag="OmniAsset"
                    handleClick={() => window.open(EXTERNAL_LINKS.APP, "_blank")}
                />
                <FeatureCard
                    title={
                        <>
                            <text className="text-[#FFFBA2]">Maximize</text> your Yield
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
                    description="Lets you earn more yield from users across multiple chains"
                    tag="OmniYield"
                    buttonText="Try it Now"
                    handleClick={() => window.open(EXTERNAL_LINKS.APP, "_blank")}
                />
                <FeatureCard
                    title={
                        <>
                            <text className="text-[#FFFBA2]">Single</text> environment powerhouse
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
                    description="Aggregates liquidity from multiple chains to one for greater composability"
                    tag="OmniLPD"
                    buttonText="Try it Now"
                    handleClick={() => window.open(EXTERNAL_LINKS.APP, "_blank")}
                />
            </div>
        </div>
    );
};

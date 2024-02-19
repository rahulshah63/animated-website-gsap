import SEO from "@/components/SEO";
import { Button } from "@/components/button/Button";
import { FeatureCard } from "@/components/cards/Feature";
import { StepCard } from "@/components/cards/Step";
import { Addidas, Fila, Nike, Ritter } from "@/constants/assets/Icons";
import { FeatureBG, FeatureFG, HeroCards, JoinedAvatar } from "@/constants/assets/Images";

export const Home = () => {
    const metaData = {
        pageTitle: `Cedro Finance`,
        pageDescription: "Convert Native Assets to OmniAssets.",
        pageKeywords: null,
        pageImage: null,
    };
    return (
        <SEO pageMetaData={metaData}>
            <div className="px-5 sm:px-[1.5rem] lg:px-[3rem] xl:px-[5rem] relative h-screen w-full flex flex-col sm:flex-row justify-around items-center">
                <div className="absolute -top-[3%] -z-10 md:-right-1/2 pink-gradient h-full w-full scale-125" />
                <div className="flex flex-col gap-5">
                    <span className="heading">
                        Convert <b>Native Assets</b> to <b>OmniAssets</b>
                    </span>
                    <p className="description-text mt-5">
                        OmniAsset lets you utilize your native assets on any chains
                    </p>
                    <div className="flex items-center gap-1.5 sm:gap-3 md:gap-5">
                        <Button
                            textColor="text-white"
                            bgColor="bg-[rgba(113,60,238,1)]"
                            text="Join Waitlist"
                            handleClick={() => {}}
                        />
                        <Button
                            bgColor="bg-white"
                            textColor="text-[rgba(113,60,238,1)]"
                            text="Launch Demo"
                            handleClick={() => {}}
                        />
                    </div>
                    <span className="joined inline-flex gap-3 items-center">
                        <img src={JoinedAvatar} />
                        1200+ joined
                    </span>
                </div>
                <div className="flex justify-center items-center">
                    <img src={HeroCards} />
                </div>
            </div>
            {/* Features */}
            <div className="feature-wrapper flex flex-col gap-[1.875rem] md:gap-[10rem] justify-center">
                <span className="title">
                    The <b>Omni Power</b>
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
                                <img src={FeatureBG} alt="feature-card-image"  className="absolute -left-8 -top-8 scale-[2.75] pointer-events-none"/>
                                <img
                                    src={FeatureFG}
                                    alt="feature-card-image"
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
                                <img src={FeatureBG} alt="feature-card-image"  className="absolute -left-8 -top-8 scale-[2.75] pointer-events-none"/>
                                <img
                                    src={FeatureFG}
                                    alt="feature-card-image"
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
                                <img src={FeatureBG} alt="feature-card-image"  className="absolute -left-8 -top-8 scale-[2.75] pointer-events-none"/>
                                <img
                                    src={FeatureFG}
                                    alt="feature-card-image"
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
            {/* Steps */}
            <div className="step-wrapper flex flex-col gap-[1.875rem] md:gap-[3.875rem] mt-[3.75rem] md:mt-[11.5rem] justify-center">
                <span className="title">
                    Get Started in {' '}
                    <text className="text-[#6029D7] font-semibold">
                        Three <br />
                        Simple Steps
                    </text>
                </span>
                <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
                    <StepCard
                        title="First Step"
                        description="Brief explanation of this step and what to do"
                        tag="1"
                    />
                    <StepCard
                        title="Second Step"
                        description="Brief explanation of this step and what to do"
                        tag="2"
                    />
                    <StepCard
                        title="Third Step"
                        description="Brief explanation of this step and what to do"
                        tag="3"
                    />
                </div>
                <div className="flex justify-center items-center gap-1.5 sm:gap-3 md:gap-5">
                        <Button
                            textColor="text-white"
                            bgColor="bg-[rgba(113,60,238,1)]"
                            text="Join Waitlist"
                            handleClick={() => {}}
                        />
                        <Button
                            bgColor="bg-white"
                            textColor="text-[rgba(113,60,238,1)]"
                            text="Launch Demo"
                            handleClick={() => {}}
                        />
                    </div>
            </div>
            {/* Partners */}
            <div className="partners my-20 gap-7 md:gap-14">
                <span className="title">Partners</span>
                <div className="flex flex-wrap justify-center gap-8 items-center">
                        <div className="flex flex-col gap-2 items-center md:max-w-[11.25rem] max-w-[8.25rem]">
                            <img src={Fila} className="w-[4.175rem] h-auto"/>
                            <p className="info-text">Finalist SAN New Kids on the Block 2022</p>
                        </div>
                        <div className="flex flex-col gap-2 items-center md:max-w-[11.25rem] max-w-[8.25rem]">
                            <img src={Nike} className="w-[4.175rem] h-auto"/>
                            <p className="info-text">Finalist SAN New Kids on the Block 2022</p>
                        </div>
                        <div className="flex flex-col gap-2 items-center md:max-w-[11.25rem] max-w-[8.25rem]">
                            <img src={Addidas} className="w-[4.175rem] h-auto"/>
                            <p className="info-text">Finalist SAN New Kids on the Block 2022</p>
                        </div>
                        <div className="flex flex-col gap-2 items-center md:max-w-[11.25rem] max-w-[8.25rem]">
                            <img src={Ritter} className="w-[4.175rem] h-auto"/>
                            <p className="info-text">Finalist SAN New Kids on the Block 2022</p>
                        </div>
                        <div className="flex flex-col gap-2 items-center md:max-w-[11.25rem] max-w-[8.25rem]">
                            <img src={Fila} className="w-[4.175rem] h-auto"/>
                            <p className="info-text">Finalist SAN New Kids on the Block 2022</p>
                        </div>
                </div>
            </div>
        </SEO>
    );
};

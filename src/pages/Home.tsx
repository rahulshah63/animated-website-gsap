import { Button } from "@/components/button/Button";
import { FeatureCard } from "@/components/cards/Feature";
import { StepCard } from "@/components/cards/Step";
import FAQ from "@/components/faq";
import {
    Addidas,
    BRIDGING_THE_GAP,
    CedroIcon,
    FRAG_1,
    FRAG_2,
    FRAG_3,
    FRAG_4,
    FRAG_5,
    Fila,
    Nike,
    Ritter,
} from "@/constants/assets/Icons";
import {
    BannerBG,
    FeatureBG,
    FeatureFG,
    FragmentedBG,
    HeroCards,
    JoinedAvatar,
} from "@/constants/assets/Images";
import useScrollToTop from "@/hooks/useScrollToTop";
import { useState, useEffect } from "react";
import Seo from "@/components/seo";

export const Home = () => {
    const [scale, setScale] = useState(1);
    const [scaleStep, setScaleStep] = useState(0.08);
    const [translation, setTranslation] = useState("");
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const [scrollingPos, setScrollingPos] = useState({
        minY: 99999,
        maxY: 99999,
        minStickyY: 99999,
        maxStickyY: 99999,
    });
    useScrollToTop();

    useEffect(() => {
        var circle = document.getElementById("scroll-circle");
        var bridgingTheGap = document.getElementById("bridging-the-gap");
        var CedroIcon = document.getElementById("cedro-icon");
        var stickyText = document.getElementById("sticky-text");
        var FeatureSection = document.getElementById("features");

        // Define scaling factors for smooth resizing
        // const scaleStep = isBigScreen ? 0.08 : 0.25; // Adjust the step as needed for smoothness
        const minScale = 1; // Minimum scale factor

        const handleScroll = () => {
            var circlePosition = circle?.getBoundingClientRect();
            var stickyTextPosition = stickyText?.getBoundingClientRect();
            const currentScrollPos = window.scrollY;
            const scrollDelta = currentScrollPos - prevScrollPos;
            let newScale = scale;

            //Setting up the animation positions
            if (
                (circlePosition.top + circlePosition.height / 2) < window.innerHeight / 2 &&
                scrollingPos.minY === 99999
            ) {
                setScrollingPos({
                    ...scrollingPos,
                    minY: currentScrollPos,
                    maxY: currentScrollPos + 2000,
                });
            }
            if (
                (stickyTextPosition.top + stickyTextPosition.height / 2) < window.innerHeight / 2 &&
                scrollingPos.minStickyY === 99999
            ) {
                setScrollingPos({
                    ...scrollingPos,
                    minStickyY: currentScrollPos,
                    maxStickyY: currentScrollPos + 1000,
                });
            }

            //Conditional Scroll Animation
            if (currentScrollPos > scrollingPos.minY && currentScrollPos < scrollingPos.maxY) {
                if (FeatureSection?.classList.contains("!bg-[#6029d7]"))
                    FeatureSection?.classList.remove("!bg-[#6029d7]");
                if (!circle?.classList.contains("circle")) circle?.classList.add("circle");
                if (!circle?.classList.contains("!fixed")) circle?.classList.add("!fixed");
                if (!bridgingTheGap?.classList.contains("opacity-0"))
                    bridgingTheGap?.classList.add("opacity-0");
                if (!CedroIcon?.classList.contains("opacity-0"))
                    CedroIcon?.classList.add("opacity-0");
                if (scrollDelta < 0) {
                    // Scrolling up
                    newScale = Math.max(minScale, scale - scaleStep);
                } else {
                    // Scrolling down
                    newScale = scale + scaleStep;
                }

                // sticky text
                if (currentScrollPos > scrollingPos.minStickyY) {
                    if (newScale < 3) newScale = 3;
                    // setScaleStep(0.25);
                    if (!circle?.classList.contains("!bg-[#6029D7]"))
                        circle?.classList.add("!bg-[#6029D7]");
                    if (!stickyText?.classList.contains("toggleText"))
                        stickyText?.classList.add("toggleText");
                } else {
                    // setScaleStep(0.08);
                    if (circle?.classList.contains("!bg-[#6029D7]"))
                        circle?.classList.remove("!bg-[#6029D7]");
                    if (stickyText?.classList.contains("toggleText"))
                        stickyText?.classList.remove("toggleText");
                }

                if (
                    currentScrollPos > scrollingPos.minStickyY &&
                    currentScrollPos < scrollingPos.maxStickyY
                ) {
                    setScaleStep(0.2);
                    if (!stickyText?.classList.contains("sticky-text"))
                        stickyText?.classList.add("sticky-text");
                    setTranslation(`translate(-50%, -50%)`);
                } else if (currentScrollPos < scrollingPos.minStickyY) {
                    setScaleStep(0.08);
                    if (stickyText?.classList.contains("smooth-transition"))
                        stickyText?.classList.remove("smooth-transition");
                    if (stickyText?.classList.contains("sticky-text"))
                        stickyText?.classList.remove("sticky-text");
                    setTranslation(`translate(0%, 0%)`);
                } else if (currentScrollPos > scrollingPos.maxStickyY) {
                    if (!stickyText?.classList.contains("smooth-transition"))
                        stickyText?.classList.add("smooth-transition");
                    setTranslation(`translate(-50%, -400%)`);
                }
            } else if (currentScrollPos < scrollingPos.minY) {
                // above
                newScale = 1;
                if (circle?.classList.contains("!fixed")) circle?.classList.remove("!fixed");
                if (bridgingTheGap?.classList.contains("opacity-0"))
                    bridgingTheGap?.classList.remove("opacity-0");
                if (CedroIcon?.classList.contains("opacity-0"))
                    CedroIcon?.classList.remove("opacity-0");
            } else if (currentScrollPos > scrollingPos.maxY) {
                // below
                if (circle?.classList.contains("circle")) circle?.classList.remove("circle");
                if (!FeatureSection?.classList.contains("!bg-[#6029d7]"))
                    FeatureSection?.classList.add("!bg-[#6029d7]");
            }
            setScale(newScale);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);
    return (
        <>
            <Seo title="Cedro Finance" description="Convert Native Assets to OmniAssets." />
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
            <div className="fragmented-wrapper gap-12 md:gap-32">
                <span className="title">
                    Navigating the world of <br /> <b>fragmented liquidity</b>
                </span>
                <div className="relative w-[85%] md:w-[60%] ">
                    <div className="grid grid-cols-5 items-center justify-items-center">
                        <img
                            src={FragmentedBG}
                            alt="feature-card-image"
                            className="absolute top-10 scale-[1.75] pointer-events-none z-0"
                        />
                        <img
                            src={FRAG_1}
                            className="col-span-3 -mr-[clamp(2rem,5dvw,6rem)] md:self-start z-10"
                        />
                        <img
                            src={FRAG_2}
                            className="col-span-2 -ml-[clamp(1rem,5dvw,6rem)]  mt-8 self-end z-10"
                        />
                        <img
                            src={FRAG_3}
                            className="col-span-2 -ml-[clamp(1rem,5dvw,3rem)] -mt-[clamp(2rem,8dvw,5rem)] justify-self-start self-start scale-90 lg:scale-100 z-10"
                        />
                        <img
                            src={FRAG_4}
                            className="col-span-2 -ml-[clamp(1rem,5dvw,8rem)] -mt-[clamp(1rem,5dvw,5rem)] self-start justify-self-start scale-150 z-10"
                        />
                        <img src={FRAG_5} className="col-span-1 self-start z-10" />
                    </div>
                    <div className="absolute w-full h-full top-0 z-10 grid grid-cols-5 items-center justify-items-center">
                        <p className="description col-span-3 -mr-[clamp(1rem,1dvw,5rem)] w-[50%]">
                            Capital Isolation Across Blockchains
                        </p>
                        <p className="description col-span-2 -ml-[clamp(1rem,5dvw,6rem)] w-[50%] mt-12 lg:mt-28">
                            Constrained Yield <br />
                            Opportunites
                        </p>
                        <p className="description col-span-5 ml-[clamp(1rem,5dvw,8rem)] w-[50%]">
                            Complexity and <br />
                            Inefficiency in Cross-
                            <br />
                            Chain Transactions
                        </p>
                    </div>
                </div>
            </div>
            <div className="bridgingTheGap pb-[150dvh]">
                <div className="flex relative justify-center items-center">
                    <div
                        id="scroll-circle"
                        className="circle"
                        style={{
                            transform: `translate(-50%, -50%) scale(${scale})`, // Gradually increase size
                        }}
                    />
                    <img
                        src={BRIDGING_THE_GAP}
                        id="bridging-the-gap"
                        className="w-[80%] max-w-[48rem]"
                    />
                    <img
                        src={CedroIcon}
                        id="cedro-icon"
                        className="absolute w-[14%] md:w-auto z-[20]"
                    />
                </div>
                <div
                    id="sticky-text"
                    className="w-full flex flex-col justify-center px-8 gap-6"
                    style={{
                        transform: translation, // Gradually move up and down
                    }}
                >
                    <span className="title z-20">
                        <text className="blue font-bold">Bridging the Gaps </text>
                        <br />
                        Between Blockchains
                    </span>
                    <p className="description z-20">
                        Meet Cedro - Your Gateway to Omnichain Flexibility
                    </p>
                </div>
            </div>
            {/* Features */}
            <div
                id="features"
                className="feature-wrapper flex flex-col gap-[1.875rem] md:gap-[10rem] justify-center"
            >
                <span className="title z-20">
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
                                <img
                                    src={FeatureBG}
                                    alt="feature-card-image"
                                    className="absolute -left-8 -top-8 scale-[2.75] pointer-events-none"
                                />
                                <img src={FeatureFG} alt="feature-card-image" className="z-10" />
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
                                    alt="feature-card-image"
                                    className="absolute -left-8 -top-8 scale-[2.75] pointer-events-none"
                                />
                                <img src={FeatureFG} alt="feature-card-image" className="z-10" />
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
                                    alt="feature-card-image"
                                    className="absolute -left-8 -top-8 scale-[2.75] pointer-events-none"
                                />
                                <img src={FeatureFG} alt="feature-card-image" className="z-10" />
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
                    Get Started in{" "}
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
                        <img src={Fila} className="w-[4.175rem] h-auto" />
                        <p className="info-text">Finalist SAN New Kids on the Block 2022</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center md:max-w-[11.25rem] max-w-[8.25rem]">
                        <img src={Nike} className="w-[4.175rem] h-auto" />
                        <p className="info-text">Finalist SAN New Kids on the Block 2022</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center md:max-w-[11.25rem] max-w-[8.25rem]">
                        <img src={Addidas} className="w-[4.175rem] h-auto" />
                        <p className="info-text">Finalist SAN New Kids on the Block 2022</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center md:max-w-[11.25rem] max-w-[8.25rem]">
                        <img src={Ritter} className="w-[4.175rem] h-auto" />
                        <p className="info-text">Finalist SAN New Kids on the Block 2022</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center md:max-w-[11.25rem] max-w-[8.25rem]">
                        <img src={Fila} className="w-[4.175rem] h-auto" />
                        <p className="info-text">Finalist SAN New Kids on the Block 2022</p>
                    </div>
                </div>
            </div>

            {/* Half White Section */}
            <div className="bg-white pt-12 md:pt-[6.5rem]">
                <FAQ />
                <div className="banner-wrapper relative flex flex-col justify-center items-center">
                    <img src={BannerBG} className="absolute w-full h-full object-cover" />
                    <span className="title">
                        <text className="text-[#EDFB8B]">Start Earning </text> with Cedro
                    </span>
                    <p className="description mt-[0.9375rem] md:mt-[1.625rem]">
                        Everything you need to know about the product.
                    </p>
                    <div className="mt-11 md:mt-[3.125rem] mb-3 md:mb-[1.375rem] flex items-center gap-1.5 sm:gap-3 md:gap-5">
                        <Button
                            textColor="text-black"
                            bgColor="bg-[#EDFB8B]"
                            text="Join Waitlist"
                            handleClick={() => {}}
                        />
                        <Button
                            bgColor="bg-white"
                            textColor="text-black"
                            text="Launch Demo"
                            handleClick={() => {}}
                        />
                    </div>
                    <p className="joined">12000+ already joined</p>
                </div>
            </div>
        </>
    );
};

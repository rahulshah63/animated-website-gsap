import { BRIDGING_THE_GAP, CedroIcon } from "@/constants/assets/Icons";
import { useState, useEffect } from "react";

export const BridgingTheGap = () => {
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
                circlePosition.top + circlePosition.height / 2 < window.innerHeight / 2 &&
                scrollingPos.minY === 99999
            ) {
                setScrollingPos({
                    ...scrollingPos,
                    minY: currentScrollPos,
                    maxY: currentScrollPos + 2000,
                });
            }
            if (
                stickyTextPosition.top + stickyTextPosition.height / 2 < window.innerHeight / 2 &&
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
        <div className="bridgingTheGap pb-[150dvh]">
            <div className="flex relative justify-center items-center">
                <div
                    id="scroll-circle"
                    className="circle"
                    style={{
                        transform: `translate(-50%, -50%) scale(${scale})`, // Gradually increase size
                    }}
                />
                <BRIDGING_THE_GAP id="bridging-the-gap" className="w-[80%] max-w-[48rem]" />
                <CedroIcon id="cedro-icon" className="absolute w-[14%] md:w-auto z-[20]" />
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
    );
};

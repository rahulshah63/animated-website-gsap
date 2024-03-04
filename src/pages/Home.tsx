import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import useScrollToTop from "@/hooks/useScrollToTop";
import { useMediaQuery } from "@/hooks/useMediaQuery";

import {FAQ} from "@/components/faq";
import Seo from "@/components/seo";
import { Hero } from "@/components/hero";
import { Fragmented } from "@/components/fragmented";
import { Feature } from "@/components/feature";
import { Step } from "@/components/step";
import { Partner } from "@/components/partner";
import { Banner } from "@/components/banner";
import { BridgingTheGap } from "@/components/bridgingTheGap";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Home = () => {
    useScrollToTop();
    const main = useRef();
    const isBiggerScreen = useMediaQuery("(min-width: 1080px)");
    const isBigScreen = useMediaQuery("(min-width: 768px)");
    const isMediumScreen = useMediaQuery("(min-width: 420px)");

    useGSAP(
        () => {
            gsap.set("#frag", {
                filter: 'brightness(1)',
            });
            gsap.set("#frag-1", {
                translateX: "-25",
                translateY: "0",
            });
            gsap.set("#frag-2", {
                translateX: "25",
                translateY: "-5",
            });
            gsap.set("#frag-3", {
                translateX: "-75",
                translateY: "20",
            });
            gsap.set("#frag-4", {
                translateX: "-25",
                translateY: "25",
            });
            gsap.set("#frag-5", {
                translateX: "75",
                translateY: "25",
            });
            //fragments
            gsap.to("#frag", {
                scale: 0.2,
                opacity: 0,
                scrollTrigger: {
                    trigger: "#frag",
                    start: "81%",
                    end: "150%",
                    scrub: true,
                },
            });
            gsap.to("#frag", {
                filter: isMediumScreen ? 'brightness(5)' : 'brightness(1.5)',
                scrollTrigger: {
                    trigger: "#frag",
                    pin: true,
                    start: "center center",
                    end: "200%",
                    scrub: true,
                },
            });
            gsap.to("#frag-1", {
                translateX: "0",
                translateY: "0",
                scrollTrigger: {
                    trigger: "#frag",
                    start: "center center",
                    end: "80%",
                    scrub: true,
                },
            });
            gsap.to("#frag-2", {
                translateX: "0",
                translateY: "0",
                scrollTrigger: {
                    trigger: "#frag",
                    start: "center center",
                    end: "80%",
                    scrub: true,
                },
            });
            gsap.to("#frag-3", {
                translateX: "0",
                translateY: "0",
                scrollTrigger: {
                    trigger: "#frag",
                    start: "center center",
                    end: "80%",
                    scrub: true,
                },
            });
            gsap.to("#frag-4", {
                translateX: "0",
                translateY: "0",
                scrollTrigger: {
                    trigger: "#frag",
                    start: "center center",
                    end: "80%",
                    scrub: true,
                },
            });
            gsap.to("#frag-5", {
                translateX: "0",
                translateY: "0",
                scrollTrigger: {
                    trigger: "#frag",
                    start: "center center",
                    end: "80%",
                    scrub: true,
                },
            });

            //positioning
            gsap.to("#frag-wrapper", {
                scrollTrigger: {
                    trigger: "#frag-wrapper",
                    pin: true,
                    start: "center center",
                    end: isBiggerScreen ? "300%" : isBigScreen ? "350%" : isMediumScreen ? "400%" : "700%",
                    scrub: true,
                },
            });
            gsap.to("#bridging-the-gap-wrapper", {
                opacity: 0,
                scrollTrigger: {
                    trigger: "#bridging-the-gap-wrapper",
                    pin: true,
                    start: "center center",
                    end: '100%',
                    scrub: true,
                },
            });
            gsap.to("#sticky-text-wrapper", {
                scrollTrigger: {
                    trigger: "#sticky-text-wrapper",
                    pin: true,
                    start: "center center",
                    end: isBiggerScreen ? "400%" : isBigScreen ? "325%" : isMediumScreen ? "275%" : "200%",
                    scrub: true,
                },
            });

            //animation
            gsap.to("#scroll-circle", {
                opacity: 1,
                scrollTrigger: {
                    trigger: "#frag-wrapper",
                    start: "center center",
                    end: "300%",
                    scrub: true,
                },
            });
            gsap.to("#scroll-circle", {
                scale: isBiggerScreen ? 3.25 : isBigScreen ? 3.5 : isMediumScreen ? 3.75 : 4,
                scrollTrigger: {
                    trigger: "#bridging-the-gap",
                    start: "51%",
                    scrub: true,
                },
            });
            gsap.to("#scroll-circle", {
                scale: 12,
                scrollTrigger: {
                    trigger: "#sticky-text",
                    start: "51%",
                    scrub: true,
                },
            });
            gsap.to("#scroll-circle", {
                background: "#6029d7",
                filter: 'brightness(1)',
                scrollTrigger: {
                    trigger: "#sticky-text-wrapper",
                    start: "center center",
                    end: "0.01%",
                    scrub: true,
                },
            });
            gsap.to("#sticky-text", {
                color: "white",
                scrollTrigger: {
                    trigger: "#sticky-text",
                    start: "center center",
                    end: "0.01%",
                    scrub: true,
                },
            });
            gsap.to("#sticky-text-title", {
                color: "white",
                scrollTrigger: {
                    trigger: "#sticky-text",
                    start: "center center",
                    end: "0.01%",
                    scrub: true,
                },
            });
            gsap.to("#sticky-text-description", {
                color: "white",
                scrollTrigger: {
                    trigger: "#sticky-text",
                    start: "center center",
                    end: "0.01%",
                    scrub: true,
                },
            });
            gsap.to("#features", {
                background: "#6029d7",
                scrollTrigger: {
                    trigger: "#scroll-circle",
                    start: "center bottom",
                    scrub: true,
                },
            });

        },
        { scope: main }
    );

    return (
        <div id="smooth-wrapper" ref={main}>
            <Seo title="Cedro Finance | Lend and borrow the assets with cross-chain decentralized liquidity protocol." 
            description="Cedro Finance is a cross-chain decentralized liquidity protocol where users can lend and borrow the listed assets." />
            <div id="smooth-content">
                <Hero />

                <Fragmented />
                <BridgingTheGap />
                <Feature />
                <Step />
                <Partner />

                <div className="bg-white pt-12 md:pt-[6.5rem]">
                    <FAQ />
                    <Banner />
                </div>
            </div>
        </div>
    );
};

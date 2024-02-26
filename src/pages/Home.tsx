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
    const isBigScreen = useMediaQuery("(min-width: 1080px)");

    useGSAP(
        () => {
            gsap.set("#frag", {
                filter: 'brightness(1)',
            });
            gsap.set("#frag-1", {
                translateX: "-50",
                translateY: "0",
            });
            gsap.set("#frag-2", {
                translateX: "50",
                translateY: "-10",
            });
            gsap.set("#frag-3", {
                translateX: "-150",
                translateY: "40",
            });
            gsap.set("#frag-4", {
                translateX: "-50",
                translateY: "50",
            });
            gsap.set("#frag-5", {
                translateX: "150",
                translateY: "50",
            });
            //fragments
            gsap.to("#frag", {
                scale: 0.2,
                opacity: 0,
                scrollTrigger: {
                    trigger: "#frag",
                    start: "center 40%",
                    scrub: true,
                },
            });
            gsap.to("#frag", {
                filter: 'brightness(5)',
                scrollTrigger: {
                    trigger: "#frag",
                    pin: true,
                    start: "center center",
                    scrub: true,
                },
            });
            gsap.to("#frag-1", {
                translateX: "0",
                translateY: "0",
                scrollTrigger: {
                    trigger: "#frag",
                    start: "center center",
                    end: "20%",
                    scrub: true,
                },
            });
            gsap.to("#frag-2", {
                translateX: "0",
                translateY: "0",
                scrollTrigger: {
                    trigger: "#frag",
                    start: "center center",
                    end: "20%",
                    scrub: true,
                },
            });
            gsap.to("#frag-3", {
                translateX: "0",
                translateY: "0",
                scrollTrigger: {
                    trigger: "#frag",
                    start: "center center",
                    end: "20%",
                    scrub: true,
                },
            });
            gsap.to("#frag-4", {
                translateX: "0",
                translateY: "0",
                scrollTrigger: {
                    trigger: "#frag",
                    start: "center center",
                    end: "20%",
                    scrub: true,
                },
            });
            gsap.to("#frag-5", {
                translateX: "0",
                translateY: "0",
                scrollTrigger: {
                    trigger: "#frag",
                    start: "center center",
                    end: "20%",
                    scrub: true,
                },
            });

            //positioning
            gsap.to("#frag-wrapper", {
                scrollTrigger: {
                    trigger: "#frag-wrapper",
                    pin: true,
                    start: "center center",
                    end: "300%",
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
                    end: isBigScreen ? "400%" : "200%",
                    scrub: true,
                },
            });

            //animation
            gsap.to("#scroll-circle", {
                opacity: 1,
                scrollTrigger: {
                    trigger: "#frag-wrapper",
                    start: "center center",
                    // end: "40%",
                    scrub: true,
                },
            });
            gsap.to("#scroll-circle", {
                scale: 3.25,
                scrollTrigger: {
                    trigger: "#bridging-the-gap",
                    start: "51%",
                    scrub: true,
                },
            });
            gsap.to("#scroll-circle", {
                scale: 10,
                scrollTrigger: {
                    trigger: "#sticky-text",
                    start: "51%",
                    scrub: true,
                },
            });
            gsap.to("#scroll-circle", {
                background: "#6029d7",
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

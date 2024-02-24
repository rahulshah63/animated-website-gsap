import FAQ from "@/components/faq";
import useScrollToTop from "@/hooks/useScrollToTop";
import Seo from "@/components/seo";
import { Hero } from "@/components/hero";
import { Fragmented } from "@/components/fragmented";
import { Feature } from "@/components/feature";
import { Step } from "@/components/step";
import { Partner } from "@/components/partner";
import { Banner } from "@/components/banner";
import { BridgingTheGap } from "@/components/bridgingTheGap";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from "@gsap/react";
// import { useMediaQuery } from "@/hooks/useMediaQuery";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Home = () => {
    useScrollToTop();
    const main = useRef();
    // const isBigScreen = useMediaQuery("(min-width: 1080px)");

    useGSAP(
        () => {
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
                scale: 0.6,
                opacity: 0,
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
                    end: "bottom 40%",
                    scrub: true,
                },
            });
            gsap.to("#frag-2", {
                translateX: "0",
                translateY: "0",
                scrollTrigger: {
                    trigger: "#frag",
                    start: "center center",
                    end: "bottom 40%",
                    scrub: true,
                },
            });
            gsap.to("#frag-3", {
                translateX: "0",
                translateY: "0",
                scrollTrigger: {
                    trigger: "#frag",
                    start: "center center",
                    end: "bottom 40%",
                    scrub: true,
                },
            });
            gsap.to("#frag-4", {
                translateX: "0",
                translateY: "0",
                scrollTrigger: {
                    trigger: "#frag",
                    start: "center center",
                    end: "bottom 40%",
                    scrub: true,
                },
            });
            gsap.to("#frag-5", {
                translateX: "0",
                translateY: "0",
                scrollTrigger: {
                    trigger: "#frag",
                    start: "center center",
                    end: "bottom 40%",
                    scrub: true,
                },
            });

            //circle
            gsap.to("#scroll-circle", {
                scale: 14,
                scrollTrigger: {
                    trigger: "#scroll-circle",
                    pin: true,
                    start: "center center",
                    end: "400%",
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
            gsap.to("#sticky-text-wrapper", {
                scrollTrigger: {
                    trigger: "#sticky-text-wrapper",
                    pin: true,
                    start: "center center",
                    end: "300%",
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
                    start: "center center",
                    scrub: true,
                },
            });
            gsap.to("#bridging-the-gap", {
                opacity: 0,
                scrollTrigger: {
                    trigger: "#scroll-circle",
                    start: "center center",
                    //   end: '0.001%',
                    scrub: true,
                },
            });
            gsap.to("#cedro-icon", {
                opacity: 0,
                scrollTrigger: {
                    trigger: "#scroll-circle",
                    start: "center center",
                    //   end: '0.001%',
                    scrub: true,
                },
            });
        },
        { scope: main }
    );

    //   useEffect(() =>{

    //     const lenis = new Lenis({
    //         duration: 0.2,
    //         // smoothWheel: true,
    //         // touchMultiplier: 2,
    //     })

    //     lenis.on('scroll', () => {})

    //     function raf(time) {
    //     lenis.raf(time)
    //     requestAnimationFrame(raf)
    //     }

    //     requestAnimationFrame(raf)
    //   }, [])

    return (
        <div id="smooth-wrapper" ref={main}>
            <Seo title="Cedro Finance" description="Convert Native Assets to OmniAssets." />
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

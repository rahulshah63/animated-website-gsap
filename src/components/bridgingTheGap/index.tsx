import { BRIDGING_THE_GAP, CedroIcon } from "@/constants/assets/Icons";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Lenis from "@studio-freight/lenis";
import { useState, useEffect } from "react";
// import * as TWEEN from '@tweenjs/tween.js'

export const BridgingTheGap = () => {
    const [scale, setScale] = useState(1);
    const [scaleStep, setScaleStep] = useState(0.08);
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const [scrollingPos, setScrollingPos] = useState({
        minY: 99999,
        maxY: 99999,
        minStickyY: 99999,
        maxStickyY: 99999,
        minFragY: 99999,
    });
    const isBigScreen = useMediaQuery('(min-width: 1080px)')
    
    useEffect(() => {
        var circle = document.getElementById("scroll-circle");
        var bridgingTheGap = document.getElementById("bridging-the-gap");
        var CedroIcon = document.getElementById("cedro-icon");
        var stickyText = document.getElementById("sticky-text");
        var FeatureSection = document.getElementById("features");

        var Frag = document.getElementById("frag");
        var Frag1 = document.getElementById("frag-1");
        var Frag2 = document.getElementById("frag-2");
        var Frag3 = document.getElementById("frag-3");
        var Frag4 = document.getElementById("frag-4");
        var Frag5 = document.getElementById("frag-5");
        // Define scaling factors for smooth resizing
        // const scaleStep = isBigScreen ? 0.08 : 0.25; // Adjust the step as needed for smoothness
        const minScale = 1; // Minimum scale factor

        const handleScroll = () => {
            var fragPosition = Frag?.getBoundingClientRect();
            var circlePosition = circle?.getBoundingClientRect();
            var stickyTextPosition = stickyText?.getBoundingClientRect();
            const currentScrollPos = window.scrollY;
            const scrollDelta = currentScrollPos - prevScrollPos;
            let newScale = scale;            
            
            //Setting up the animation positions
            if (
                fragPosition.top + fragPosition.height / 2 < window.innerHeight / 2 &&
                scrollingPos.minFragY === 99999
            ) {
                setScrollingPos({
                    ...scrollingPos,
                    minFragY: currentScrollPos,
                });
            }
            if (
                circlePosition.top + circlePosition.height / 2 < window.innerHeight / 2 &&
                scrollingPos.minY === 99999
            ) {
                setScrollingPos({
                    ...scrollingPos,
                    minY: currentScrollPos,
                    maxY: currentScrollPos + (isBigScreen ? 2500 : 1600),
                });
            }
            if (
                stickyTextPosition.top + stickyTextPosition.height / 2 < window.innerHeight / 2 &&
                scrollingPos.minStickyY === 99999
            ) {
                setScrollingPos({
                    ...scrollingPos,
                    minStickyY: currentScrollPos,
                    maxStickyY: currentScrollPos + (isBigScreen ? 1000 : 700),
                });
            }

            //Conditional Scroll Animation
            if (currentScrollPos > scrollingPos.minFragY && currentScrollPos < scrollingPos.minY){
                //center the fragmented piece
                if(currentScrollPos < scrollingPos.minFragY + 500){
                    if(scrollDelta < 0){
                        Frag1.setAttribute('transform', `translate(${Math.min(-50, scaleStep * scrollDelta)} 0)`)
                        Frag2.setAttribute('transform', `translate(${Math.max(50, scaleStep * scrollDelta)} ${Math.min(-10, scaleStep * scrollDelta)})`)
                        Frag3.setAttribute('transform', `translate(${Math.min(-150, scaleStep * scrollDelta)} ${Math.max(40, scaleStep * scrollDelta)})`)
                        Frag4.setAttribute('transform', `translate(${Math.min(-50, scaleStep * scrollDelta)} ${Math.max(50, scaleStep * scrollDelta)})`)
                        Frag5.setAttribute('transform', `translate(${Math.max(150, scaleStep * scrollDelta)} ${Math.max(50, scaleStep * scrollDelta)})`)
                    }
                    else{
                        Frag1.setAttribute('transform', `translate(${Math.max(0, -50 + scaleStep * scrollDelta)} 0)`)
                        Frag2.setAttribute('transform', `translate(${Math.min(0, 50 - scaleStep * scrollDelta)} ${Math.max(0, -10 + scaleStep * scrollDelta)})`)
                        Frag3.setAttribute('transform', `translate(${Math.max(0, -150 + scaleStep * scrollDelta)} ${Math.min(0, 40 - scaleStep * scrollDelta)})`)
                        Frag4.setAttribute('transform', `translate(${Math.max(0, -50 + scaleStep * scrollDelta)} ${Math.min(0, 50 - scaleStep * scrollDelta)})`)
                        Frag5.setAttribute('transform', `translate(${Math.min(0, 150 - scaleStep * scrollDelta)} ${Math.min(0, 50 - scaleStep * scrollDelta)})`)
                    }
                }
                else{
                    //TODO: scale down to 24dwd or 240px
                    Frag.classList.forEach((value) =>{
                        const reg = new RegExp('/\bscale-\b/')
                        if(reg.test(value)){
                            // Frag.classList.replace(value, `scale-[${scrollDelta}]`)
                        }
                        else{

                        }
                    })
                }
            }

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
                    // setScaleStep(0.2);
                    if (!stickyText?.classList.contains("sticky-text"))
                        stickyText?.classList.add(...["sticky-text", "center"]);
                    if (stickyText?.classList.contains("above"))
                        stickyText?.classList.replace("above", "center");

                    // setTranslation(`translate(-50%, -50%)`);
                } else if (currentScrollPos < scrollingPos.minStickyY) {
                    // setScaleStep(0.08);
                    if (stickyText?.classList.contains("smooth-transition"))
                        stickyText?.classList.remove("smooth-transition");
                    if (stickyText?.classList.contains("sticky-text"))
                        stickyText?.classList.remove("sticky-text");
                    // setTranslation(`translate(0%, 0%)`);
                } else if (currentScrollPos > scrollingPos.maxStickyY) {
                    if (!stickyText?.classList.contains("smooth-transition"))
                        stickyText?.classList.add("smooth-transition");
                    if (stickyText?.classList.contains("center"))
                        stickyText?.classList.replace("center", "above");
                    // setTranslation(`translate(-50%, -400%)`);
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
            console.log(currentScrollPos, newScale);

            
            // new TWEEN.Tween({scale})
            // .to({ x: newScale }, 10)
            // .easing(TWEEN.Easing.Cubic.In)
            // .onUpdate((val) => {
            //     console.log(val);
                
            //   setScale(val.scale);
            // })
            // .start();


			// animate(performance.now())

			// //If we register the callback animate, but the TWEEN.update(time) returns false,
			// //cancel/unregister the handler
			// function animate(time) {
			// 	var id = requestAnimationFrame(animate)

			// 	var result = TWEEN.update(time)

			// 	if (!result) cancelAnimationFrame(id)
			// }

            setScale(newScale);
            setPrevScrollPos(currentScrollPos);
        };

        // const lenis = new Lenis({
        //     duration: 0.2,
        //     // smoothWheel: true,
        //     // touchMultiplier: 2,
        // })

        // lenis.on('scroll', handleScroll)
    
        // function raf(time) {
        // lenis.raf(time)
        // requestAnimationFrame(raf)
        // }
    
        // requestAnimationFrame(raf)
        
        window.addEventListener("scroll", handleScroll);
        window.addEventListener('load', () => {
            Frag1.setAttribute('transform', 'translate(-50 0)') 
            Frag2.setAttribute('transform', 'translate(50 -10)')
            Frag3.setAttribute('transform', 'translate(-150 40)')
            Frag4.setAttribute('transform', 'translate(-50 50)')
            Frag5.setAttribute('transform', 'translate(150 50)')
        })

        
        return () => {
            // lenis.on('scroll', handleScroll)
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

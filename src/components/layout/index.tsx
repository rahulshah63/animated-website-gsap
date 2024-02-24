import { ReactNode, FC, useState } from 'react';
import { useRef } from "react";
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { useGSAP } from "@gsap/react";
// import { useMediaQuery } from "@/hooks/useMediaQuery";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

import Header from './header';
import Footer from './footer';
import useScrollToTop from '@/hooks/useScrollToTop';

interface LayoutProps {
  children: ReactNode;
  className?: string;
  hideheader?: boolean;
  hideFooter?: boolean;
  headerClass?: string;
  mainClass?: string;
}

const Layout: FC<LayoutProps> = ({
  children,
  className,
  hideheader,
  hideFooter,
  headerClass,
  mainClass,
}: LayoutProps) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  useScrollToTop();
  const main = useRef();
  const smoother = useRef();

  // const isBigScreen = useMediaQuery("(min-width: 1080px)");
  const scrollTo = (target: string) => {
    if(smoother.current)
    (smoother.current as ScrollSmoother).scrollTo(target, true, 'center center');
  };

  useGSAP(
      () => {
          // create the smooth scroller FIRST!
          //@ts-ignore
          smoother.current = ScrollSmoother.create({
              smooth: 2, // seconds it takes to "catch up" to native scroll position
              effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
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
          // ScrollTrigger.create({

          // })
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
                  end: "bottom 10%",
                  scrub: true,
              },
          });
          gsap.to("#frag-2", {
              translateX: "0",
              translateY: "0",
              scrollTrigger: {
                  trigger: "#frag",
                  start: "center center",
                  end: "bottom 10%",
                  scrub: true,
              },
          });
          gsap.to("#frag-3", {
              translateX: "0",
              translateY: "0",
              scrollTrigger: {
                  trigger: "#frag",
                  start: "center center",
                  end: "bottom 10%",
                  scrub: true,
              },
          });
          gsap.to("#frag-4", {
              translateX: "0",
              translateY: "0",
              scrollTrigger: {
                  trigger: "#frag",
                  start: "center center",
                  end: "bottom 10%",
                  scrub: true,
              },
          });
          gsap.to("#frag-5", {
              translateX: "0",
              translateY: "0",
              scrollTrigger: {
                  trigger: "#frag",
                  start: "center center",
                  end: "bottom 10%",
                  scrub: true,
              },
          });

          //circle
          gsap.to("#scroll-circle", {
              scale: 16,
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

  return (
    <div id="smooth-wrapper" ref={main}>
    <div id="smooth-content" className={`flex flex-col justify-between items-center min-h-screen bg-[rgb(244,240,250)] site-layout overflow-hidden ${className ?? ''}`}>
      {!hideheader && <Header scrollTo={scrollTo} setShowMobileMenu={setShowMobileMenu} showMobileMenu={showMobileMenu} classname={headerClass} />}
      <main className={`w-full  ${mainClass}`}>
        {!showMobileMenu  && children}
      </main>
      {!hideFooter && <Footer classname='bg-white'/>}
    </div>
    </div>
  );
};

export default Layout;

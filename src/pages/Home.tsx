import FAQ from "@/components/faq";
import Seo from "@/components/seo";
import { Hero } from "@/components/hero";
import { Fragmented } from "@/components/fragmented";
import { Feature } from "@/components/feature";
import { Step } from "@/components/step";
import { Partner } from "@/components/partner";
import { Banner } from "@/components/banner";
import { BridgingTheGap } from "@/components/bridgingTheGap";

export const Home = () => {
    return (
        <>
            <Seo title="Cedro Finance" description="Convert Native Assets to OmniAssets." />
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
        </>
    );
};

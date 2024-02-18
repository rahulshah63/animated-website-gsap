import SEO from "@/components/SEO";
import { Button } from "@/components/button/Button";
import { HeroCards, JoinedAvatar } from "@/constants/assets/Images";

export const Home = () => {
    const metaData = {
        pageTitle: `Marketplace | GangstaBet: A Digital Collectible  `,
        pageDescription:
            "GangstaBet is a collection of 5555 unique Gangsters & Detectives with changeable names & stats.",
        pageKeywords: null,
        pageImage: null,
    };
    return (
        <SEO pageMetaData={metaData}>
            <div className="relative h-[80dvh] xs:h-screen w-full flex flex-col sm:flex-row justify-around items-center">
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
                    1200+ joined</span>
                </div>
                <div className="flex justify-center items-center">
                    <img src={HeroCards} />
                </div>
            </div>
        </SEO>
    );
};

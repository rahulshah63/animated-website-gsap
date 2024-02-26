import { BannerBG } from "@/constants/assets/Images";
import { Button } from "@/components/button/Button";
import { EXTERNAL_LINKS } from "@/constants";

export const Banner = () => {
    return (
        <div className="banner-wrapper relative flex flex-col justify-center items-center">
            <img src={BannerBG} alt="Cedro Finance | Lend and borrow the assets with cross-chain decentralized liquidity protocol." className="absolute w-full h-full object-cover" />
            <span className="title z-10">
                <text className="text-[#EDFB8B]">Start Earning </text> with Cedro
            </span>
            <p className="description mt-[0.9375rem] md:mt-[1.625rem] z-10">
                Everything you need to know about the product.
            </p>
            <div className="mt-11 md:mt-[3.125rem] z-10 mb-3 md:mb-[1.375rem] flex items-center gap-1.5 sm:gap-3 md:gap-5">
                <Button
                    textColor="text-black"
                    bgColor="bg-[#EDFB8B]"
                    text="Join Waitlist"
                    handleClick={() => document.getElementById('join-waitlist').focus()}
                />
                <Button
                    bgColor="bg-white"
                    textColor="text-black"
                    text="Launch Demo"
                    handleClick={() => 
                        window.open(EXTERNAL_LINKS.DEMO, "_blank")
                    }
                />
            </div>
            <p className="joined z-10">12000+ already joined</p>
        </div>
    );
};
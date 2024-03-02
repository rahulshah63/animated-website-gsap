import { JoinedAvatar, HeroCards } from "@/constants/assets/Images"
import { Button } from "../button/Button"
import { EXTERNAL_LINKS } from "@/constants"

export const Hero = () => {
    return (
        <div className="px-5 sm:px-[1.5rem] lg:px-[3rem] xl:px-[5rem] relative h-screen w-full flex flex-col sm:flex-row justify-around items-center">
        <div className="flex flex-col gap-5">
            <span className="heading z-10">
                Convert <b>Native Assets</b> to <b>OmniAssets</b>
            </span>
            <p className="description-text mt-5 z-10">
                OmniAsset lets you utilize your native assets on any chains
            </p>
            <div className="flex items-center gap-1.5 sm:gap-3 md:gap-5 z-10">
                <Button
                    textColor="text-white"
                    bgColor="bg-[rgba(113,60,238,1)]"
                    text="Join Waitlist"
                    handleClick={() => document.getElementById('join-waitlist').focus()}
                />
                <Button
                    bgColor="bg-white"
                    textColor="text-[rgba(113,60,238,1)]"
                    text="Launch Demo"
                    handleClick={() => 
                        window.open(EXTERNAL_LINKS.DEMO, "_blank")
                    }
                />
            </div>
            <span className="joined inline-flex gap-3 items-center z-10">
                <img src={JoinedAvatar} 
                alt="Cedro Finance | Lend and borrow the assets with cross-chain decentralized liquidity protocol."/>
                1200+ joined
            </span>
        </div>
        <div className="flex justify-center items-center z-10">
            <img src={HeroCards}
            alt="Cedro Finance | Lend and borrow the assets with cross-chain decentralized liquidity protocol." />
        </div>
        <div className="absolute -top-[3%] -z-0 -right-1/2 pink-gradient h-full w-full pointer-events-none scale-125" />
    </div>
    )
}
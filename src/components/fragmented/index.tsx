import { FRAG_1, FRAG_2, FRAG_3, FRAG_4, FRAG_5 } from "@/constants/assets/Icons";
import { FragmentedBG } from "@/constants/assets/Images";

export const Fragmented = () => {
    return (
        <div className="fragmented-wrapper gap-12 md:gap-32">
            <span className="title">
                Navigating the world of <br /> <b>fragmented liquidity</b>
            </span>
            <div className="relative w-[85%] md:w-[60%] ">
                <div className="grid grid-cols-5 items-center justify-items-center">
                    <img
                        src={FragmentedBG}
                        alt="feature-card-image"
                        className="absolute top-10 scale-[1.75] pointer-events-none z-0"
                    />
                    <FRAG_1
                       className="col-span-3 -mr-[clamp(2rem,5dvw,6rem)] md:self-start z-10"
                    />
                    <FRAG_2
                        className="col-span-2 -ml-[clamp(1rem,5dvw,6rem)]  mt-8 self-end z-10"
                    />
                    <FRAG_3
                        className="col-span-2 -ml-[clamp(1rem,10dvw,10rem)] -mt-[clamp(1rem,20dvw,18rem)] justify-self-start self-start scale-75 z-10"
                    />
                    <FRAG_4
                        className="col-span-2 -ml-[clamp(1rem,15dvw,10rem)] -mt-[clamp(1rem,10dvw,8rem)] self-start justify-self-start scale-125 z-10"
                    />
                    <FRAG_5
                        className="col-span-1 -mr-[clamp(1rem,8dvw,10rem)] -mt-[clamp(1rem,5dvw,8rem)] self-start scale-75 z-10"
                    />
                </div>
                <div className="absolute w-full h-full top-0 z-10 grid grid-cols-5 items-center justify-items-center">
                    <p className="description col-span-3 -mr-[clamp(1rem,1dvw,5rem)] w-[50%]">
                        Capital Isolation Across Blockchains
                    </p>
                    <p className="description col-span-2 -ml-[clamp(1rem,5dvw,6rem)] w-[50%] mt-12 lg:mt-28">
                        Constrained Yield <br />
                        Opportunites
                    </p>
                    <p className="description col-span-5 ml-[clamp(1rem,5dvw,8rem)] w-[50%]">
                        Complexity and <br />
                        Inefficiency in Cross-
                        <br />
                        Chain Transactions
                    </p>
                </div>
            </div>
        </div>
    );
};

import { FRAG } from "@/constants/assets/Icons";
// import { FragmentedBG } from "@/constants/assets/Images";
// transform="rotate(45 50 50)"
// setAttribute
export const Fragmented = () => {
    return (
        <div className="fragmented-wrapper">
            <span className="title my-20">
                Navigating the world of <br /> <b>fragmented liquidity</b>
            </span>
            <div className="relative w-[85%] md:w-[60%] ">
                <FRAG id='frag' className="scale-150"/>
                {/* <FRAG_SEP className="z-[10]"/> */}
                {/* <div className="flex justify-center items-center">
                <img
                    src={FragmentedBG}
                    alt="feature-card-image"
                    className="absolute top-10 scale-[1.75] pointer-events-none z-0"
                />
                    <FRAG_1
                       className="col-span-2  z-10"
                    //    className="col-span-3 -mr-[clamp(2rem,5dvw,6rem)] md:self-start z-10"
                    />
                    <FRAG_2
                        className="col-span-1 -m-10 z-10"
                    />
                    <FRAG_3
                        className="col-span-1 z-10"
                    />
                    <FRAG_4
                        className="col-span-1 z-10"
                    />
                    <FRAG_5
                        className="col-span-1 z-10"
                    />
                </div> */}
                {/* <div className="absolute w-full h-full top-0 z-10 grid grid-cols-5 items-center justify-items-center">
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
                </div> */}
            </div>
        </div>
    );
};

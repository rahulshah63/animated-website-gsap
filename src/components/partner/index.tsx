import { BING, BLOCKCHAIN_BUILDER_FUND, INFINITY_VENTURE, L2VI, LAYER_ZERO, MASK, SHIMA_CAPITAL, SPARTAN_GROUP, STANFORD_BLOCKCHAIN_ACCELERATOR } from "@/constants/assets/Icons";

export const Partner = () => {
    return (
        <div className="partners my-20 mx-5 md:mx-10 gap-7 md:gap-14">
            <div className="text-center">

            <span className="title">Partners</span>
            <p className="info-text mt-4">Backed by the best.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-12 items-center child:w-[25%] child:md:w-[20%] child:lg:w-[15%] child:h-auto">
                <BING />
                <BLOCKCHAIN_BUILDER_FUND />
                <INFINITY_VENTURE />
                <L2VI />
                <LAYER_ZERO />
                <MASK />
                <SHIMA_CAPITAL />
                <SPARTAN_GROUP />
                <STANFORD_BLOCKCHAIN_ACCELERATOR />
            </div>
        </div>
    );
};

import { FC, ReactNode, useRef } from "react";
import gsap from "gsap";
import { PLUS } from "@/constants/assets/Icons";
import { useGSAP } from "@gsap/react";

const FAQList = [
    {
        question: "What is Cedro Finance?",
        answer: (
            <>
                Cedro Finance is a cross-chain decentralized liquidity protocol where users can lend
                and borrow the listed assets. Lenders are able to deposit their assets to contribute
                to the liquidity of the platform and borrowers are able to borrow the liquidity in
                an overcollateralized manner.
            </>
        ),
    },
    {
        question: "Why should I use Cedro Finance?",
        answer: (
            <>
                <p className="mb-[1rem]">
                    You have numerous reasons to use Cedro Finance. To list a few:
                </p>
                <ol className="pl-[2rem] mb-[1rem]">
                    <li className="list-disc">
                        We connect fragmented liquidity across chains, which means higher capital
                        efficiency. So, for lenders and borrowers, it means better rates on assets.
                    </li>
                    <li className="list-disc">
                        You can open positions on multiple chains with ease. Hence, you don't have
                        to miss financial opportunities on any chain.
                    </li>
                    <li className="list-disc">
                        First-class User Experience. With other protocols, you need to use multiple
                        third-party services and numerous clicks to open positions across chains.
                        However, you can achieve this in clicks with us.
                    </li>
                    <li className="list-disc">
                        Secure and easily scalable. Thanks to our top-notch architecture.
                    </li>
                </ol>
            </>
        ),
    },
    {
        question: "Why do I have to keep changing the network for different transactions?",
        answer: (
            <>
                Because of our protocol architecture design, if you are depositing or repaying, then
                you have to interact with the smart contract on the chain of that asset. However, if
                you are Borrowing, Withdrawing, or Liquidating, you can do that directly in the Root
                without having to switch networks.
            </>
        ),
    },
    {
        question: "What is Cedro Unified Liquidity Token (CULT)?",
        answer: (
            <>
                Currently, many of the multi-chain assets are treated as different assets, hence
                liquidity fragmentation at an asset level. For example, USDC is live on multiple
                chains like Ethereum, Solana, Polygon, etc. However, they are treated as a unique
                asset on each chain. So, with our novel architecture, we are able to virtually merge
                the liquidity of these assets across chains. From the user's perspective, the origin
                chain of their multichain asset deposit will be abstracted away. This is our novel
                feature: CULT.
                <br />
                <br />
                We are connecting the liquidity flow of multiple chains. Hence, capital efficiency
                times 100. On top of that, we are merging the liquidity of multi-chain assets.
                Hence, capital efficiency times INFINITY!
            </>
        ),
    },
    {
        question: "Can I trust my fund with Cedro Finance?",
        answer: (
            <>
                We understand the suspicion among users since we've seen multiple cases of scams in
                this industry. However, we are a decentralized protocol. This means the funds are
                sent to our smart contracts, which are accessible to anyone. Hence, everything is
                completely transparent. The smart contract controls the funds, and no one has direct
                access to them. We write these smart contracts with security as our top priority,
                and we spend a significant amount of time testing them. On top of that, these smart
                contracts are audited by multiple reputed organizations before going live.
                <br />
                <br />
                So, in short, yes, you can trust Cedro Finance with your fund.
            </>
        ),
    },
    {
        question: "How costly is a transaction on Cedro Finance?",
        answer: (
            <>
                The cost varies based on the chain you are operating on and its current usage.
                Making a cross-chain call can be relatively a bit expensive operation. With this in
                our mind, we designed the protocol to make sure that the frequency of cross-chain
                calls is as low as possible. In fact, for some operations, there's no cross-chain
                call at all. Even with that, our Computation Offloading process makes the
                transaction cost very affordable.
            </>
        ),
    },
    {
        question: "What are Root and Branch?",
        answer: (
            <>
                The Root is the smart contract that aggregates the protocol data and the Branch is a
                liquidity pool storage contract deployed on all chains.{" "}
                <a
                    href="https://docs.cedro.finance/features/protocol-architecture#branch"
                    target="_blank"
                    className="underline text-[#0D6EFD] underline-offset-2"
                >
                    Learn More
                </a>
            </>
        ),
    },
];

export const FAQ = () => {
    const faq = useRef();

    useGSAP(
        () => {
    const questions = document.querySelectorAll('.faq');

    questions.forEach(question => {
      const answer = question.querySelector('.faq-answer') as HTMLElement;
      const icon = question.querySelector('.faq-icon') as HTMLElement;
      const questionTitle = question.querySelector('h2'); // For click target
    
      questionTitle.addEventListener('click', () => {
        const isVisible = answer.style.height === 'auto'; // Check current visibility

        gsap.to(answer, {
            duration: 0.5,
            height: isVisible ? '0' : 'auto', 
        });
        gsap.to(icon, {
            duration: 0.5,
            rotate: isVisible ? '0' : '225',
        });
      });
    });
},
{ scope: faq }
);
    return (
        <div
        ref={faq}
            id="faq"
            className="faq-wrapper flex flex-col mx-auto justify-center items-center w-full"
        >
            <span className="title">Frequently asked questions</span>
            <p className="description my-8">Everything you need to know about the product.</p>
                {FAQList.map((item, index) => (
                <FAQItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                />
            ))}
        </div>
    );
};

interface IFAQItem {
    question: string;
    answer: string | ReactNode;
}

const FAQItem: FC<IFAQItem> = ({ question, answer}) => {
    return (
        <div className="w-[80%] max-w-[1030px] bg-white">
                <div className="px-4 lg:px-12">
                    <div className="faq flex justify-between py-1 items-start">
                        <div className="w-[90%] faq-question">
                            <h2 className="question select-none py-3">{question}</h2>
                            <p className="mt-6 answer faq-answer h-0">{answer}</p>
                        </div>
                        <PLUS
                            className= "faq-icon"
                        />
                    </div>
                    <hr className="border-[#AEA5BE] border-opacity-20 w-full" />
                </div>

        </div>
    );
};

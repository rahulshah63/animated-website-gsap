// import { ARROW_UP } from "@/constants/images";
import React, { FC, ReactNode, useState } from "react";

import { PLUS } from "@/constants/assets/Icons";

const FAQList = [
    {
        question: "What is Cedro Finance?",
        //@TODO
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
        //@TODO
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
        question: "Why do I have to keep changing the network for different transactions?",
        //@TODO
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
        question: "Can I trust my fund with Cedro Finance?",
        //@TODO
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
        question: "How costly is a transaction on Cedro Finance?",
        //@TODO
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
        question: "What are Root and Branch?",
        //@TODO
        answer: (
            <>
                Cedro Finance is a cross-chain decentralized liquidity protocol where users can lend
                and borrow the listed assets. Lenders are able to deposit their assets to contribute
                to the liquidity of the platform and borrowers are able to borrow the liquidity in
                an overcollateralized manner.
            </>
        ),
    },
];

const FAQ = () => {
    const [faqIds, setFaqIds] = useState<number[]>([]);

    return (
        <div className="faq-wrapper flex flex-col mx-auto justify-center items-center w-full">
            <span className="title">Frequently asked questions</span>
            <p className="description mt-8 mb-16">Everything you need to know about the product.</p>
            {FAQList.map((item, index) => (
                <FAQItem
                    key={index}
                    id={index}
                    question={item.question}
                    answer={item.answer}
                    faqIds={faqIds}
                    setFaqIds={setFaqIds}
                />
            ))}
        </div>
    );
};

interface IFAQItem {
    id: number;
    question: string;
    answer: string | ReactNode;
    faqIds: number[];
    setFaqIds: React.Dispatch<React.SetStateAction<number[]>>;
}

const FAQItem: FC<IFAQItem> = ({ question, answer, id, faqIds, setFaqIds }) => {
    const handleClick = () => {
        if (faqIds.includes(id)) {
            setFaqIds(faqIds.filter((item) => item !== id));
        } else {
            setFaqIds([...faqIds, id]);
        }
    };
    return (
        <div className="w-[80%] max-w-[1030px]">
            <div className="cursor-pointer" onClick={handleClick}>
                <div className="px-4 lg:px-12">
                    <div className="flex justify-between items-start">
                        <div className="w-[90%]">
                            <p className="question">{question}</p>
                            {faqIds.includes(id) && <p className="mt-6 answer">{answer}</p>}
                        </div>
                        <img
                            src={PLUS}
                            alt="faq-toggle"
                            className={`${faqIds.includes(id) && "-rotate-45"}`}
                        />
                    </div>
                    <hr className="my-6 border-[#AEA5BE] border-opacity-20 w-full" />
                </div>
            </div>
        </div>
    );
};

export default FAQ;

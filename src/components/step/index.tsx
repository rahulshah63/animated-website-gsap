import { StepCard } from "@/components/cards";
import { Button } from "@/components/button/Button";

export const Step = () => {
    return (
        <div id='steps' className="step-wrapper flex flex-col gap-[1.875rem] md:gap-[3.875rem] mt-[3.75rem] md:mt-[11.5rem] justify-center">
        <span className="title">
            Get Started in{" "}
            <text className="text-[#6029D7] font-semibold">
                Three <br />
                Simple Steps
            </text>
        </span>
        <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
            <StepCard
                title="First Step"
                description="Brief explanation of this step and what to do"
                tag="1"
            />
            <StepCard
                title="Second Step"
                description="Brief explanation of this step and what to do"
                tag="2"
            />
            <StepCard
                title="Third Step"
                description="Brief explanation of this step and what to do"
                tag="3"
            />
        </div>
        <div className="flex justify-center items-center gap-1.5 sm:gap-3 md:gap-5">
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
    </div>
    )}
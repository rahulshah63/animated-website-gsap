import { StepBG } from '@/constants/assets/Images';
import { cn } from '@/utils/cn';
import { FC } from 'react';

interface StepCardProps {
  title: string;
  description: string;
  tag: string;
  className?: string;
}

export const StepCard: FC<StepCardProps> = ({ title, tag, description, className }) => {
   return (
      <div
        className={cn(
          'step-card relative shadow-[0_35px_60px_-15px_rgba(224,185,255,1)] flex md:flex-col gap-8 px-[1.1875rem] md:px-[2rem] py-6 md:py-8 rounded-[1.25rem] md:rounded-[2.8125rem] h-[7.5rem] md:h-[17.5rem] w-[70%] md:w-[30%] lg:w-[25%] max-h-[280px] max-w-[382px]',
          className,
        )}
      >
      <img src={StepBG} alt="step-card-image"  className="absolute -left-7 -top-7 md:scale-150 md:-left-2 md:-top-1  pointer-events-none"/>

        <span className='step-count rounded-full bg-black w-[2rem] h-[2rem] flex justify-center items-center text-white'>{tag}</span>
        <div className='flex flex-col items-baseline justify-normal w-full gap-3'>
          <span className='title'>{title}</span>
          <span className='description'>{description}</span>
        </div>
      </div>
  );
};

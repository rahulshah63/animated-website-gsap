import { cn } from '@/utils/cn';
import { FC, ReactNode } from 'react';
import { Button } from '../button/Button';

interface FeatureCardProps {
  title: ReactNode;
  description: string;
  buttonText: string;
  tag: string;
  image: ReactNode;
  className?: string;
  handleClick: () => void
}

export const FeatureCard: FC<FeatureCardProps> = ({ title, tag, description, buttonText, image, className, handleClick }) => {
   return (
      <div
        className={cn(
          'feature-card relative flex flex-col md:flex-row justify-center items-center gap-5 rounded-[2.125rem] px-[1.1875rem] max-w-[1275px]',
          className,
        )}
        onClick={handleClick}
      >
        <span className='hidden md:block tag rounded-[200px] px-5 py-2.5'>&#8226; {tag}</span>
        {image}
        <div className='flex flex-col justify-center items-center md:items-start gap-5'>
          <span className='title'>{title}</span>
          <span className='description'>{description}</span>
          <Button textColor='text-black' bgColor='bg-[#F0B2FF]' text={buttonText} handleClick={() => {}} />
        </div>
      </div>
  );
};

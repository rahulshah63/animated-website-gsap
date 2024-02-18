import { cn } from '@/utils/cn';
import { FC, ReactNode } from 'react';
import { Button } from '../button/Button';

interface FeatureCardProps {
  title: ReactNode;
  description: string;
  buttonText: string;
  image: string;
  className?: string;
  handleClick: () => void
}

export const FeatureCard: FC<FeatureCardProps> = ({ title, description, buttonText, image, className, handleClick }) => {
   return (
      <div
        className={cn(
          'feature-card relative flex flex-col md:flex-row justify-center items-center gap-12 rounded-[2.125rem] px-[1.1875rem]',
          className,
        )}
        onClick={handleClick}
      >
        <span className='hidden md:block tag rounded-[200px] px-5 py-2.5'>&#8226; OmniAsset</span>
        <img src={image} alt='feature-card-image' className='w-[13.5rem] h-[13.5rem] md:w-[28.375rem] md:h-[28.375rem]' />
        <div className='flex flex-col justify-center items-center md:items-start gap-5'>
          <span className='title'>{title}</span>
          <span className='description'>{description}</span>
          <Button textColor='text-black' bgColor='bg-[#F0B2FF]' text={buttonText} handleClick={() => {}} />
        </div>
      </div>
  );
};

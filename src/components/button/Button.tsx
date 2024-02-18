import { cn } from '@/utils/cn';
import { FC } from 'react';

interface ButtonProps {
  textColor?: string;
  bgColor?: string;
  text: string;
  className?: string;
  handleClick: () => void
}

export const Button: FC<ButtonProps> = ({ bgColor, textColor, text, className, handleClick }) => {
  // const sizeClass =
    // size === 'sm' ? 'w-4 h-4 border-2' : size === 'lg' ? 'w-8 h-8 border-4' : 'w-6 h-6 border-2';
  return (
      <button
        className={cn(
          'h-[2.875rem] md:h-16 text-[14px] md:text-[18px] rounded-[6.25rem] px-[1.1875rem] font-semibold',
          className,
          textColor,
          bgColor
        )}
        onClick={handleClick}
      >
        {text}
      </button>
  );
};

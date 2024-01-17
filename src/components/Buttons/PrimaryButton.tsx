import { twMerge } from 'tailwind-merge';

interface PrimaryButtonProps {
  className?: string;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

function PrimaryButton({
  className = '',
  children,
  onClick,
  ...restProps
}: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        'h-16 rounded-full border-[1px] bg-gray-100',
        className,
      )}
      {...restProps}>
      {children}
    </button>
  );
}

export default PrimaryButton;

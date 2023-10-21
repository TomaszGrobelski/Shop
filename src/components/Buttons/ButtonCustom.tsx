import { twMerge } from "tailwind-merge";

interface ButtonCustomProps {
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

function ButtonCustom({ className = "", children, onClick, ...restProps }: ButtonCustomProps) {
  return (
    <button onClick={onClick} className={twMerge("rounded-full border-[1px] bg-gray-100 h-16", className)} {...restProps}>
      {children}
    </button>
  );
}

export default ButtonCustom;

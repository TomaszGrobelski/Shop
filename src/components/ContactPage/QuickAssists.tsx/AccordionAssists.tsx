import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

interface AccordionAssistsProps {
  title: string;
  children: React.ReactNode;
}

function AccordionAssists({ title, children }:AccordionAssistsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b-[1px] md:border-b-0 ">
      <button onClick={handleClick} className="flex p-4 w-full items-center justify-between md:p-0 my-4 ">
        <p className="font-bold text-[18px] opacity-[85%] ">{title}</p>
        <div className="md:hidden">{isOpen ? <FiPlus /> : <FiMinus />}</div>
      </button>
      {isOpen && <div className="md:hidden flex flex-col gap-2 pl-4">{children}</div>}
      <div className="hidden md:flex md:flex-col md:gap-2 font-bold opacity-70 ">{children}</div>
    </div>
  );
}

export default AccordionAssists;

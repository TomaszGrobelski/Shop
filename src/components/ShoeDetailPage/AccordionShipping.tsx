import { useState } from "react";
import { BiSolidChevronDown, BiSolidChevronUp } from "react-icons/bi";

interface AccordionShippingProps {
  title: string;
  children: React.ReactNode;
}

function AccordionShipping({ title, children }: AccordionShippingProps) {
  const [visible, setVisible] = useState(false);
  const visibleClick = () => {
    setVisible(!visible);
  };

  return (
    <div className="border-b-[1px] ">
<<<<<<< HEAD
      <button onClick={visibleClick} className="flex p-4 w-full items-center justify-between md:p-0 my-4 ">
        <p className="font-bold text-[24px] opacity-[85%] ">{title}</p>
=======
      <button
        onClick={visibleClick}
        className="my-4 flex w-full items-center justify-between p-4 md:p-0 ">
        <p className="text-[24px] font-bold opacity-[85%] ">{title}</p>
>>>>>>> d7429fbb29cddb730079b0695a415bfd9d1f153b
        <div>{visible ? <BiSolidChevronUp /> : <BiSolidChevronDown />}</div>
      </button>
      {visible && (
        <div className="flex flex-col gap-5 font-bold opacity-70 ">
          {children}
        </div>
      )}
    </div>
  );
}

export default AccordionShipping;

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
      <button onClick={visibleClick} className="flex p-4 w-full items-center justify-between md:p-0 my-4 ">
        <p className="font-bold text-[24px] opacity-[85%] ">{title}</p>
        <div>{visible ? <BiSolidChevronUp /> : <BiSolidChevronDown />}</div>
      </button>
      {visible && <div className="flex flex-col gap-5 font-bold opacity-70 ">{children}</div>}
    </div>
  );
}

export default AccordionShipping;

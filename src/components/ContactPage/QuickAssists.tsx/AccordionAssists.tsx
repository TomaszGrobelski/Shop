import { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

import { AccordionAssistsProps } from '../../../types/ContactPage/contactPage.types';

function AccordionAssists({ title, children }: AccordionAssistsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='border-b-[1px] md:border-b-0 '>
      <button
        onClick={handleClick}
        className='my-4 flex w-full items-center justify-between p-4 md:p-0 '>
        <p className='text-[18px] font-bold opacity-[85%] '>{title}</p>
        <div className='md:hidden'>{isOpen ? <FiPlus /> : <FiMinus />}</div>
      </button>
      {isOpen && (
        <div className='flex flex-col gap-2 pl-4 md:hidden'>{children}</div>
      )}
      <div className='hidden font-bold opacity-70 md:flex md:flex-col md:gap-2 '>
        {children}
      </div>
    </div>
  );
}

export default AccordionAssists;

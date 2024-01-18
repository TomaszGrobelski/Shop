import { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

import { AccordionAssistsProps } from '../../../types/ContactPage/contactPage.types';
import {
  AccordionContainer,
  AccordionContent,
  AccordionTitle,
  AccordionToggle,
  IconContainer,
  StaticAccordionContent,
} from '../../../styles/ContactPage/AccordionAssists.styles';

function AccordionAssists({ title, children }: AccordionAssistsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContainer>
      <AccordionToggle onClick={handleClick}>
        <AccordionTitle>{title}</AccordionTitle>
        <IconContainer>{isOpen ? <FiPlus /> : <FiMinus />}</IconContainer>
      </AccordionToggle>
      {isOpen && <AccordionContent>{children}</AccordionContent>}
      <StaticAccordionContent>{children}</StaticAccordionContent>
    </AccordionContainer>
  );
}

export default AccordionAssists;

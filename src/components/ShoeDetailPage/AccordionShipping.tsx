import { useState } from 'react';
import { BiSolidChevronDown, BiSolidChevronUp } from 'react-icons/bi';

import { AccordionShippingProps } from '../../types/ShoeDetailPage/shoeDetailPage.types';
import {
  AccordionContent,
  AccordionShippingContainer,
  AccordionTitle,
  ToggleAccordionButton,
} from '../../styles/ShoeDetailPage/AccordionShipping.styles';

function AccordionShipping({ title, children }: AccordionShippingProps) {
  const [visible, setVisible] = useState(false);
  const visibleClick = () => {
    setVisible(!visible);
  };

  return (
    <AccordionShippingContainer>
      <ToggleAccordionButton onClick={visibleClick}>
        <AccordionTitle>{title}</AccordionTitle>
        <div>{visible ? <BiSolidChevronUp /> : <BiSolidChevronDown />}</div>
      </ToggleAccordionButton>
      {visible && <AccordionContent>{children}</AccordionContent>}
    </AccordionShippingContainer>
  );
}

export default AccordionShipping;

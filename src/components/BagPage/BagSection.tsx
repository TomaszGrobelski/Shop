import { useState } from 'react';

import Order from './Bag/Order';
import { BagSectionContainer, BagTitle, EmptyBagMessage, OrdersContainer } from '../../styles/BagPage/BagSection.styles';
import Summary from './Summary/Summary';

function BagSection() {
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <BagSectionContainer>
      <OrdersContainer>
        <BagTitle>Bag</BagTitle>
        <EmptyBagMessage>There are no items in your bag.</EmptyBagMessage>
        <Order setTotalPrice={setTotalPrice} />
      </OrdersContainer>
      <Summary totalPrice={totalPrice} />
    </BagSectionContainer>
  );
}

export default BagSection;

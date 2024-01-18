import { useState } from 'react';
import { BiMinus } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import { SummaryProps } from '../../../types/BagPage/bagPage.types';
import PrimaryButton from '../../Buttons/PrimaryButton';
import PromoCode from './PromoCode';
import {
  CheckoutBox,
  DiscountBox,
  DiscountInfoBox,
  DiscountSection,
  EstimatedTaxBox,
  EstimatedTaxFlexBox,
  ShippingBox,
  SubtotalBox,
  SubtotalTitle,
  SummaryContainer,
  SummaryTitle,
  TotalAmountSection,
} from '../../../styles/BagPage/Summary.styles';

function Summary({ totalPrice, visible = true }: SummaryProps) {
  const [discount, setDiscount] = useState(false);
  const discountValue = (totalPrice * 0.2).toFixed(2);

  if (discount === true) {
    totalPrice = totalPrice - totalPrice * 0.2;
  }

  return (
    <SummaryContainer>
      <SummaryTitle>Summary</SummaryTitle>
      {visible && <PromoCode setDiscount={setDiscount} />}
      <SubtotalBox>
        <SubtotalTitle>Subtotal</SubtotalTitle>
        <span>
          <BiMinus />
        </span>
      </SubtotalBox>
      <ShippingBox>
        <p>Estimated Shipping & Handling</p>
        <span>$0.00</span>
      </ShippingBox>
      <EstimatedTaxBox>
        <EstimatedTaxFlexBox>
          <div>Estimated Tax</div>
          <BiMinus />
        </EstimatedTaxFlexBox>
        {discount && (
          <DiscountSection>
            <DiscountBox>
              <p>Discount Total</p>
              <span>${discountValue}</span>
            </DiscountBox>
            <DiscountInfoBox>
              <p>MEMBER20 -20% off</p>
              <span>X</span>
            </DiscountInfoBox>
          </DiscountSection>
        )}
      </EstimatedTaxBox>
      <TotalAmountSection>
        <p>Total</p>
        <span>{totalPrice === 0 ? <BiMinus /> : '$' + totalPrice.toFixed(2)}</span>
      </TotalAmountSection>
      <CheckoutBox>
        {visible && (
          <Link to='/checkout'>
            <PrimaryButton
              className={'w-full text-gray-500 ' + (totalPrice === 0 ? 'gr-gray-300' : 'bg-black text-white')}>
              Checkout
            </PrimaryButton>
          </Link>
        )}
      </CheckoutBox>
    </SummaryContainer>
  );
}

export default Summary;

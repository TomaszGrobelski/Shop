import { DiscountFilterProps } from '../../../../types/ShoesPage/shoePage.types';
import { DiscountLabel,DiscountBox,DiscountContainer,DiscountInput,DiscountTitle } from '../../../../styles/ShoePage/DiscountFilter.styles';


const DiscountFilter: React.FC<DiscountFilterProps> = ({ setDiscount }) => {
  const handleDiscountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDiscount(event.target.checked ? 'discounted' : null);
  };

  return (
    <DiscountContainer>
      <DiscountTitle>Sale & Offers</DiscountTitle>
      <DiscountBox>
        <DiscountInput type='checkbox' name='Sale' id='Sale' onChange={handleDiscountChange} />
        <DiscountLabel htmlFor='Sale'>Discounted</DiscountLabel>
      </DiscountBox>
    </DiscountContainer>
  );
};

export default DiscountFilter;

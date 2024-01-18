import { ShoeCardProps } from '../../../types/ShoesPage/shoePage.types';
import { ShoeCardBox, ShoeCardContainer, ShoeCardImage, ShoeGender, ShoeName, ShoePriceBox } from '../../../styles/ShoePage/ShoeCard.styles';

const ShoeCard: React.FC<ShoeCardProps> = ({ shoe, key, children, favorite }) => {
  return (
    <ShoeCardContainer key={key}>
      <ShoeCardBox>
        <ShoeCardImage loading='lazy' src={shoe.img} alt={shoe.name} width={400} height={400} />
        {favorite}
      </ShoeCardBox>
      <div className='p-2'>
        <ShoeName>{shoe.name}</ShoeName>
        <ShoeGender>{shoe.gender}</ShoeGender>
        <ShoePriceBox>
          <span className='font-bold '>{shoe.price}</span>
          <span className='font-bold text-gray-500 line-through opacity-90 '>
            {shoe.oldPrice ? `$${shoe.oldPrice}` : null}
          </span>
        </ShoePriceBox>
        {children}
      </div>
    </ShoeCardContainer>
  );
};

export default ShoeCard;

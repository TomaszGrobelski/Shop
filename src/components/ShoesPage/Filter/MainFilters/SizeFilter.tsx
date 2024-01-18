import { SizeFilterProps } from '../../../../types/ShoesPage/shoePage.types';
import { SizeButton, SizeButtonsContainer, SizeFilterContainer, SizesHeader } from '../../../../styles/ShoePage/SizeFilter.styles';

const SizeFilter = ({ selectedSize, setSelectedSize }: SizeFilterProps) => {
  return (
    <SizeFilterContainer>
      <SizesHeader>Sizes</SizesHeader>
      <SizeButtonsContainer>
        {Array.from({ length: 13 }).map((_, index) => {
          const size = 7 + index * 0.5;
          if (size > 13) return null;
          const isActive = size === selectedSize;

          return (
            <SizeButton key={size}>
              <button
                className={`h-10 w-12 border ${isActive ? 'border-black' : ''} rounded hover:border-black`}
                onClick={() => setSelectedSize(isActive ? null : size)}>
                {size}
              </button>
            </SizeButton>
          );
        })}
      </SizeButtonsContainer>
    </SizeFilterContainer>
  );
};

export default SizeFilter;

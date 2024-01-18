import { useEffect, useState } from 'react';

import { SortFilterProps } from '../../../../types/ShoesPage/shoePage.types';
import { ButtonsBox, HighLowButton, LowHighButton, SortFilterContainer } from '../../../../styles/ShoePage/SortFilter.styles';

const SortFilter = ({ sortBy, setSortBy }: SortFilterProps) => {
  const highLow = 'high-low';
  const lowHigh = 'low-high';
  const [sortByLabe, setSortByLabel] = useState('');
  useEffect(() => {
    if (sortBy === highLow) {
      setSortByLabel(': Price: High-Low');
    } else if (sortBy === lowHigh) {
      setSortByLabel(': Price: Low-High');
    }
  }, [sortBy]);

  return (
    <SortFilterContainer>
      <p>
        Sort By <span className='opacity-60'>{sortByLabe}</span>
      </p>
      <ButtonsBox>
        <HighLowButton
          onClick={() => {
            setSortBy(highLow);
          }}>
          Price: High-Low
        </HighLowButton>
        <LowHighButton
          onClick={() => {
            setSortBy(lowHigh);
          }}>
          Price: Low-High
        </LowHighButton>
      </ButtonsBox>
    </SortFilterContainer>
  );
};

export default SortFilter;

import { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { PiSlidersHorizontal } from 'react-icons/pi';

import { FilterPhoneProps } from '../../../types/ShoesPage/shoePage.types';
import { ModelList } from '../../../styles/ShoePage/FilterPhone.styles';
import { ModelResultTitle } from '../../../styles/ShoePage/FilterPhone.styles';
import { ModelListBox } from '../../../styles/ShoePage/FilterPhone.styles';
import { CloseButton } from '../../../styles/ShoePage/FilterPhone.styles';
import { FilterHeader } from '../../../styles/ShoePage/FilterPhone.styles';
import { FilterModal } from '../../../styles/ShoePage/FilterPhone.styles';
import { FilterButton } from '../../../styles/ShoePage/FilterPhone.styles';
import { ModelListContainer } from '../../../styles/ShoePage/FilterPhone.styles';
import modelsList from './Lists/modelsList';
import DiscountFilter from './MainFilters/DiscountFilter';
import GenderFilter from './MainFilters/GenderFilter';
import SizeFilter from './MainFilters/SizeFilter';
import SortFilter from './MainFilters/SortFilter';

function FilterPhone({
  sortBy,
  setSortBy,
  setFilterType,
  setDiscount,
  setGenderFilter,
  genderFilter,
  selectedSize,
  setSelectedSize,
}: FilterPhoneProps) {
  const [filterVisible, setFilterVisible] = useState(false);

  const handleFilter = () => {
    setFilterVisible(true);
    document.body.style.overflow = 'hidden';
  };

  const handleFilterOut = () => {
    setFilterVisible(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setFilterVisible(false);
        document.body.style.overflow = 'auto';
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const models = modelsList.map((model, index) => {
    return (
      <li key={index}>
        <button onClick={() => setFilterType(model.name)}>{model.name}</button>
      </li>
    );
  });

  return (
    <div className='md:hidden '>
      <ModelListContainer>
        <ModelList>{models}</ModelList>
      </ModelListContainer>
      <ModelListBox>
        <ModelResultTitle>Results</ModelResultTitle>
        <FilterButton onClick={handleFilter}>
          Filter <PiSlidersHorizontal size={22} />
        </FilterButton>
      </ModelListBox>
      {filterVisible && (
        <FilterModal>
          <div className='text-[18px] '>
            <FilterHeader>Filter</FilterHeader>
            <CloseButton onClick={handleFilterOut}>
              <AiFillCloseCircle size={35} />
            </CloseButton>
            <SortFilter sortBy={sortBy} setSortBy={setSortBy} />
            <GenderFilter genderFilter={genderFilter} setGenderFilter={setGenderFilter} />
            <DiscountFilter setDiscount={setDiscount} />
            <SizeFilter selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
          </div>
        </FilterModal>
      )}
    </div>
  );
}

export default FilterPhone;

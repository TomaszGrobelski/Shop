import { GenderFilterProps } from '../../../../types/ShoesPage/shoePage.types';
import genderList from '../Lists/genderList';
import { GenderContainer, GenderInput, GenderItem, GenderLabel, GenderList, GenderTitle } from '../../../../styles/ShoePage/GenderFilter.styles';

const GenderFilter: React.FC<GenderFilterProps> = ({ setGenderFilter, genderFilter }) => {
  const handleCheckboxChange = (genderType: string) => {
    if (genderFilter === genderType) {
      setGenderFilter(null);
    } else {
      setGenderFilter(genderType);
    }
  };

  return (
    <GenderContainer>
      <GenderTitle>Gender</GenderTitle>
      <GenderList>
        {genderList.map((sex, index) => {
          const inputId = `gender-${index}`;
          return (
            <GenderItem key={index}>
              <GenderInput
                id={inputId}
                type='checkbox'
                checked={genderFilter === sex.type}
                onChange={() => handleCheckboxChange(sex.type)}
              />
              <GenderLabel htmlFor={inputId}>{sex.type}</GenderLabel>
            </GenderItem>
          );
        })}
      </GenderList>
    </GenderContainer>
  );
};

export default GenderFilter;

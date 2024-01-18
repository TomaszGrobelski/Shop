import { SportsData } from '../../../../types/UserPage/userPage.types';
import { CategoryDivProps } from '../../../../types/UserPage/userPage.types';
import { athletesList, citiesList, productsList, sportsList, teamsList } from '../../listOfInterests/index';
import { CategoryBox, CategoryItem, CategoryList } from '../../../../styles/UserPage/CategoryDiv.styles';

function CategoryDiv({ setCurrentCategory, setSelectedList, currentCategory }: CategoryDivProps) {
  const interestsList: { name: string; data: SportsData[] }[] = [
    { name: 'Sports', data: sportsList },
    { name: 'Products', data: productsList },
    { name: 'Teams', data: teamsList },
    { name: 'Athletes', data: athletesList },
    { name: 'Cities', data: citiesList },
  ];

  const handleCategoryChange = (category: string) => {
    setCurrentCategory(category);
    const newSelectedList = interestsList.find((item) => item.name === category)?.data || [];
    setSelectedList(newSelectedList);
  };

  return (
    <CategoryBox>
      <CategoryList>
        {interestsList.map((interest, index) => (
          <CategoryItem key={index}>
            <button
              onClick={() => handleCategoryChange(interest.name)}
              className={interest.name === currentCategory ? 'text-black' : 'text-gray-400'}>
              {interest.name} ({interest.data.length})
            </button>
          </CategoryItem>
        ))}
      </CategoryList>
    </CategoryBox>
  );
}

export default CategoryDiv;

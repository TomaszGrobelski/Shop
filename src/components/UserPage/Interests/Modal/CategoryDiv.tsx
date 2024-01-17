import athletesList from '../../listOfInterests/athletesList';
import citiesList from '../../listOfInterests/citiesList';
import productsList from '../../listOfInterests/productsList';
import sportsList from '../../listOfInterests/sportsList';
import teamsList from '../../listOfInterests/teamsList';

type InterestDataItem = { name: string };
type InterestData = InterestDataItem[];

interface SportsData {
  name: string;
}

interface CategoryDivProps {
  setCurrentCategory: (category: string) => void;
  setSelectedList: (list: InterestData) => void;
  currentCategory: string;
}

function CategoryDiv({
  setCurrentCategory,
  setSelectedList,
  currentCategory,
}: CategoryDivProps) {
  const interestsList: { name: string; data: SportsData[] }[] = [
    { name: 'Sports', data: sportsList },
    { name: 'Products', data: productsList },
    { name: 'Teams', data: teamsList },
    { name: 'Athletes', data: athletesList },
    { name: 'Cities', data: citiesList },
  ];

  const handleCategoryChange = (category: string) => {
    setCurrentCategory(category);
    const newSelectedList =
      interestsList.find((item) => item.name === category)?.data || [];
    setSelectedList(newSelectedList);
  };

  return (
    <div className='border-b-[1px]'>
      <ul className='flex gap-5 overflow-x-auto text-[18px]'>
        {interestsList.map((interest, index) => (
          <li key={index} className='py-2'>
            <button
              onClick={() => handleCategoryChange(interest.name)}
              className={
                interest.name === currentCategory
                  ? 'text-black'
                  : 'text-gray-400'
              }>
              {interest.name} ({interest.data.length})
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryDiv;

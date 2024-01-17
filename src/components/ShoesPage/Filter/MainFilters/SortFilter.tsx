import { useEffect, useState } from 'react';

interface SortFilterProps {
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

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
    <div className='flex flex-col gap-4 border-b-[1px] py-3'>
      <p>
        Sort By <span className='opacity-60'>{sortByLabe}</span>
      </p>
      <div className='flex flex-col'>
        <button
          onClick={() => {
            setSortBy(highLow);
          }}
          className='whitespace-nowrap text-start hover:opacity-70'>
          Price: High-Low
        </button>
        <button
          onClick={() => {
            setSortBy(lowHigh);
          }}
          className='whitespace-nowrap text-start hover:opacity-70'>
          Price: Low-High
        </button>
      </div>
    </div>
  );
};

export default SortFilter;

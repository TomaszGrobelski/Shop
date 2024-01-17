import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BiSolidChevronDown } from 'react-icons/bi';
import { PiSlidersHorizontalLight } from 'react-icons/pi';

interface HeaderShoesProps {
  filterVisible: boolean;
  sortBy: string;
  setFilterVisible: (visible: boolean) => void;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

function HeaderShoes({
  filterVisible,
  setFilterVisible,
  setSortBy,
  sortBy,
}: HeaderShoesProps) {
  const highLow = 'high-low';
  const lowHigh = 'low-high';
  const [sortVisible, setSortVisible] = useState(false);
  const [sortByLabe, setSortByLabel] = useState('');

  useEffect(() => {
    if (sortBy === highLow) {
      setSortByLabel(': Price: High-Low');
    } else if (sortBy === lowHigh) {
      setSortByLabel(': Price: Low-High');
    }
  }, [sortBy]);

  const sortVisibleClick = () => {
    setSortVisible(!sortVisible);
  };

  const visibleClick = () => {
    setFilterVisible(!filterVisible);
  };

  return (
    <div className=' sticky top-0 z-30 flex items-center justify-between bg-white pl-10'>
      <h1 className='my-4 text-[20px] font-bold tracking-[2px]'>
        Lifestyle Shoes
      </h1>
      <div className='hidden gap-6 pr-10 font-bold opacity-90 md:flex'>
        <nav>
          <button onClick={visibleClick} className='flex items-center'>
            {filterVisible ? 'Hide' : 'Show'} Filters{' '}
            <PiSlidersHorizontalLight size={25} />{' '}
          </button>
        </nav>
        <div className='relative'>
          <button onClick={sortVisibleClick} className='flex items-center '>
            Sort By <span className='opacity-60'>{sortByLabe}</span>{' '}
            <BiSolidChevronDown size={20} />
          </button>{' '}
          <div
            className='absolute right-0 top-5 w-[150px] overflow-hidden'
            style={{ height: '90px' }}>
            <AnimatePresence>
              {sortVisible && (
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: 0 }}
                  exit={{ y: -100 }}
                  transition={{ duration: 0.2 }}
                  className='absolute right-0 top-1 z-50 mt-6 flex w-[150px] flex-col gap-1 rounded-bl-lg bg-white'>
                  <button
                    onClick={() => {
                      setSortBy(highLow);
                      sortVisibleClick();
                    }}
                    className='whitespace-nowrap hover:opacity-70'>
                    Price: High-Low
                  </button>
                  <button
                    onClick={() => {
                      setSortBy(lowHigh);
                      sortVisibleClick();
                    }}
                    className='whitespace-nowrap hover:opacity-70'>
                    Price: Low-High
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderShoes;

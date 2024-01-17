import { AnimatePresence, motion } from 'framer-motion';

import DiscountFilter from './MainFilters/DiscountFilter';
import GenderFilter from './MainFilters/GenderFilter';
import ModelFilter from './MainFilters/ModelFilter';
import SizeFilter from './MainFilters/SizeFilter';

interface MainFilterProps {
  filterVisible: boolean;
  setFilterType: React.Dispatch<React.SetStateAction<string>>;
  setGenderFilter: React.Dispatch<React.SetStateAction<string | null>>;
  genderFilter: string | null;
  setDiscount: React.Dispatch<React.SetStateAction<string | null>>;
  selectedSize: number | null;
  setSelectedSize: React.Dispatch<React.SetStateAction<number | null>>;
}

function MainFilter({
  filterVisible,
  setFilterType,
  setDiscount,
  setGenderFilter,
  genderFilter,
  selectedSize,
  setSelectedSize,
}: MainFilterProps) {
  return (
    <AnimatePresence>
      {filterVisible && (
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          exit={{ x: -300 }}
          transition={{ duration: 0.2 }}
          className='sticky  top-24 hidden max-h-[80vh] min-w-[200px] overflow-y-scroll font-bold opacity-90 md:flex md:flex-col'>
          <ModelFilter setFilterType={setFilterType} />
          <GenderFilter
            genderFilter={genderFilter}
            setGenderFilter={setGenderFilter}
          />
          <DiscountFilter setDiscount={setDiscount} />
          <SizeFilter
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MainFilter;

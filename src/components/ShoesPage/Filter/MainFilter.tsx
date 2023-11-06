import ModelFilter from "./MainFilters/ModelFilter";
import GenderFilter from "./MainFilters/GenderFilter";
import DiscountFilter from "./MainFilters/DiscountFilter";
import SizeFilter from "./MainFilters/SizeFilter";
import { motion, AnimatePresence } from "framer-motion";

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
          className="hidden  min-w-[200px] font-bold opacity-90 max-h-[80vh] overflow-y-scroll md:flex md:flex-col sticky top-24"
        >
          <ModelFilter setFilterType={setFilterType} />
          <GenderFilter genderFilter={genderFilter} setGenderFilter={setGenderFilter} />
          <DiscountFilter setDiscount={setDiscount} />
          <SizeFilter selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MainFilter;

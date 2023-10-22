import ModelFilter from "./MainFilters/ModelFilter";
import GenderFilter from "./MainFilters/GenderFilter";
import DiscountFilter from "./MainFilters/DiscountFilter";
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
          className="hidden  min-w-[200px] font-bold opacity-90 md:flex md:flex-col sticky top-24"
        >
          <ModelFilter setFilterType={setFilterType} />
          <GenderFilter genderFilter={genderFilter} setGenderFilter={setGenderFilter} />
          <DiscountFilter setDiscount={setDiscount} />
          <div className="py-6 border-b-[1px] border-gray-200">
            <p className="mb-4">Size</p>
            <div className="grid grid-cols-3 items-center gap-2">
              {Array.from({ length: 13 }).map((_, index) => {
                const size = 7 + index * 0.5;
                if (size > 13) return null;
                const isActive = size === selectedSize;

                return (
                  <div key={size} className={`text-center`}>
                    <button
                      className={`w-12 h-10 border ${isActive ? "border-black" : ""} rounded hover:border-black`}
                      onClick={() => setSelectedSize(isActive ? null : size)}
                    >
                      {size}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MainFilter;

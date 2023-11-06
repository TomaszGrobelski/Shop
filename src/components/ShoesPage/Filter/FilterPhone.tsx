import modelsList from "./Lists/modelsList";
import { PiSlidersHorizontal } from "react-icons/pi";

import GenderFilter from "./MainFilters/GenderFilter";
import DiscountFilter from "./MainFilters/DiscountFilter";
import SizeFilter from "./MainFilters/SizeFilter";
import { useState, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import SortFilter from "./MainFilters/SortFilter";

interface FilterPhoneProps {
  setFilterType: React.Dispatch<React.SetStateAction<string>>;
  setGenderFilter: React.Dispatch<React.SetStateAction<string | null>>;
  genderFilter: string | null;
  setDiscount: React.Dispatch<React.SetStateAction<string | null>>;
  selectedSize: number | null;
  setSelectedSize: React.Dispatch<React.SetStateAction<number | null>>;
  sortBy: string; 
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

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
      document.body.style.overflow = "hidden";
  };

  const handleFilterOut=()=>{
    setFilterVisible(false)
    document.body.style.overflow = "auto";
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setFilterVisible(false);
        document.body.style.overflow = 'auto';
        console.log('yol');
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  console.log(modelsList.length);
  const models = modelsList.map((model, index) => {
    return (
      <li key={index}>
        <button onClick={() => setFilterType(model.name)}>{model.name}</button>
      </li>
    );
  });

  return (
    <div className="md:hidden ">
      <div className="pl-10 border-b-[1px] pb-2">
        <ul className="flex flex-wrap gap-6 font-bold opacity-90 overflow-hidden whitespace-nowrap ">{models}</ul>
      </div>
      <div className="flex items-center justify-between px-10  py-2">
        <p className="text-[18px] opacity-80">Results</p>
        <button
          onClick={handleFilter}
          className="flex gap-2 text-[18px] px-4 items-center border-[1px] rounded-full hover:border-black"
        >
          Filter <PiSlidersHorizontal size={22} />
        </button>
      </div>
      {filterVisible && (
        <div className="fixed left-0 top-0 w-full h-full z-50 bg-white p-6 overflow-y-auto">
          <div className="text-[18px] ">
            <h2 className=" border-b-[1px] pb-2">Filter</h2>
            <button onClick={handleFilterOut} className="fixed right-6 top-6">
              <AiFillCloseCircle size={35} />
            </button>
            <SortFilter sortBy={sortBy} setSortBy={setSortBy} />
            <GenderFilter genderFilter={genderFilter} setGenderFilter={setGenderFilter} />
            <DiscountFilter setDiscount={setDiscount} />
            <SizeFilter selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterPhone;

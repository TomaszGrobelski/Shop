import { PiSlidersHorizontalLight } from "react-icons/pi";
import { BiSolidChevronDown } from "react-icons/bi";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderShoesProps {
  filterVisible: boolean;
  sortBy: string;
  setFilterVisible: (visible: boolean) => void;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

function HeaderShoes({ filterVisible, setFilterVisible, setSortBy, sortBy }: HeaderShoesProps) {
  const [sortVisible, setSortVisible] = useState(false);
  const [sortByLabe, setSortByLabel] = useState("");

  useEffect(() => {
    if (sortBy === "high-low") {
      setSortByLabel(": Price: High-Low");
    } else if (sortBy === "low-high") {
      setSortByLabel(": Price: Low-High");
    }
  }, [sortBy]);

  const sortVisibleClick = () => {
    setSortVisible(!sortVisible);
  };

  const visibleClick = () => {
    setFilterVisible(!filterVisible);
  };

  return (
    <div className=" sticky top-0 bg-white z-30 pl-10 flex justify-between items-center">
      <h1 className="text-[20px] font-bold tracking-[2px] my-4">Lifestyle Shoes</h1>
      <div className="hidden md:flex pr-10 gap-6 font-bold opacity-90">
        <nav>
          <button onClick={visibleClick} className="flex items-center">
            {filterVisible ? "Hide" : "Show"} Filters <PiSlidersHorizontalLight size={25} />{" "}
          </button>
        </nav>
        <div className="relative">
          <button onClick={sortVisibleClick} className="flex items-center ">
            Sort By <span className="opacity-60">{sortByLabe}</span> <BiSolidChevronDown size={20} />
          </button>{" "}
          <div className="absolute right-0 top-5 overflow-hidden w-[150px]" style={{ height: "90px" }}>
            <AnimatePresence>
              {sortVisible && (
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: 0 }}
                  exit={{ y: -100 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-1 right-0 flex flex-col w-[150px] bg-white mt-6 gap-1 rounded-bl-lg z-50"
                >
                  <button
                    onClick={() => {
                      setSortBy("high-low");
                      sortVisibleClick();
                    }}
                    className="whitespace-nowrap hover:opacity-70"
                  >
                    Price: High-Low
                  </button>
                  <button
                    onClick={() => {
                      setSortBy("low-high");
                      sortVisibleClick();
                    }}
                    className="whitespace-nowrap hover:opacity-70"
                  >
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

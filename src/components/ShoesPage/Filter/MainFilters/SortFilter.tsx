import { useEffect, useState } from "react";

interface SortFilterProps {
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

const SortFilter = ({ sortBy, setSortBy }: SortFilterProps) => {
  const [sortByLabe, setSortByLabel] = useState("");
  useEffect(() => {
    if (sortBy === "high-low") {
      setSortByLabel(": Price: High-Low");
    } else if (sortBy === "low-high") {
      setSortByLabel(": Price: Low-High");
    }
  }, [sortBy]);

  return (
    <div className="flex flex-col gap-4 border-b-[1px] py-3">
      <p>
        Sort By <span className="opacity-60">{sortByLabe}</span>
      </p>
      <div className="flex flex-col">
        <button
          onClick={() => {
            setSortBy("high-low");
          }}
          className="whitespace-nowrap hover:opacity-70 text-start"
        >
          Price: High-Low
        </button>
        <button
          onClick={() => {
            setSortBy("low-high");
          }}
          className="whitespace-nowrap hover:opacity-70 text-start"
        >
          Price: Low-High
        </button>
      </div>
    </div>
  );
};

export default SortFilter;

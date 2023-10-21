import Slider from "./Slider/Slider";
import HeaderShoes from "./Filter/HeaderShoes";
import FilterPhone from "./Filter/FilterPhone";
import MainFilter from "./Filter/MainFilter";
import Products from "./Products/Products";
import { useState } from "react";


function ShoesSection() {
  const [filterVisible, setFilterVisible] = useState(true);
  const [sortBy, setSortBy] = useState("");
  const [filterType, setFilterType] = useState("");
  const [genderFilter, setGenderFilter] = useState<string | null>(null);
  const [discount, setDiscount] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  return (
    <div>
      <Slider />
      <HeaderShoes
        sortBy={sortBy}
        setSortBy={setSortBy}
        filterVisible={filterVisible}
        setFilterVisible={setFilterVisible}
      />
      <FilterPhone setFilterType={setFilterType} />

      <div className="flex p-2 sm:p-8 md:p-10 md:gap-10  ">
        <MainFilter
          setDiscount={setDiscount}
          genderFilter={genderFilter}
          setGenderFilter={setGenderFilter}
          setFilterType={setFilterType}
          filterVisible={filterVisible}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
        <Products
          discount={discount}
          genderFilter={genderFilter}
          filterType={filterType}
          sortBy={sortBy}
          selectedSize={selectedSize}
        />
      </div>
    </div>
  );
}

export default ShoesSection;

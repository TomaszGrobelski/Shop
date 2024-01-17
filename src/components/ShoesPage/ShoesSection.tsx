import { useState } from "react";

import FilterPhone from "./Filter/FilterPhone";
import HeaderShoes from "./Filter/HeaderShoes";
import MainFilter from "./Filter/MainFilter";
import Products from "./Products/Products";
import Slider from "./Slider/Slider";

function ShoesSection() {
  const [filterVisible, setFilterVisible] = useState(true);
  const [sortBy, setSortBy] = useState("");
  const [filterType, setFilterType] = useState("");
  const [genderFilter, setGenderFilter] = useState<string | null>(null);
  const [discount, setDiscount] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  return (
    <>
      <Slider />
      <HeaderShoes
        sortBy={sortBy}
        setSortBy={setSortBy}
        filterVisible={filterVisible}
        setFilterVisible={setFilterVisible}
      />
      <FilterPhone
        sortBy={sortBy}
        setSortBy={setSortBy}
        setDiscount={setDiscount}
        genderFilter={genderFilter}
        setGenderFilter={setGenderFilter}
        setFilterType={setFilterType}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
<<<<<<< HEAD
      <div className="flex sm:p-8 md:p-10 md:gap-10">
        <MainFilter
          setDiscount={setDiscount}
          genderFilter={genderFilter}
          setGenderFilter={setGenderFilter}
          setFilterType={setFilterType}
          filterVisible={filterVisible}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
=======
      <div className="flex  sm:p-8 md:gap-10 md:p-10">
        <div>
          <MainFilter
            setDiscount={setDiscount}
            genderFilter={genderFilter}
            setGenderFilter={setGenderFilter}
            setFilterType={setFilterType}
            filterVisible={filterVisible}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
        </div>
>>>>>>> d7429fbb29cddb730079b0695a415bfd9d1f153b
        <Products
          discount={discount}
          genderFilter={genderFilter}
          filterType={filterType}
          sortBy={sortBy}
          selectedSize={selectedSize}
        />
      </div>
    </>
  );
}

export default ShoesSection;

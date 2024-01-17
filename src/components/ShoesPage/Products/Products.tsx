import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ShoeCard from "./ShoeCard";
import shoesList from "./shoesList";

interface ProductsPage {
  sortBy: string;
  filterType: string;
  genderFilter: string | null;
  discount: string | null;
  selectedSize: number | null;
}

function Products({
  sortBy,
  filterType,
  genderFilter,
  discount,
  selectedSize,
}: ProductsPage) {
  const discounted = "discounted";
  const highLow = "high-low";
  const lowHigh = "low-high";
  const [sortedProducts, setSortedProducts] = useState(shoesList);

  useEffect(() => {
    let filteredProducts = [...shoesList];

    if (filterType && filterType !== "All") {
      filteredProducts = filteredProducts.filter(
        (shoe) => shoe.type === filterType,
      );
    }

    if (genderFilter) {
      filteredProducts = filteredProducts.filter(
        (shoe) => shoe.gender === genderFilter,
      );
    }

    if (discount === discounted) {
      filteredProducts = filteredProducts.filter(
        (shoe) => shoe.oldPrice !== undefined,
      );
    }

    if (selectedSize !== null) {
      filteredProducts = filteredProducts.filter((shoe) =>
        shoe.sizes.includes(selectedSize),
      );
    }

    if (sortBy === highLow) {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === lowHigh) {
      filteredProducts.sort((a, b) => a.price - b.price);
    }

    setSortedProducts(filteredProducts);
  }, [sortBy, filterType, genderFilter, discount, selectedSize]);

  const produkts = sortedProducts.map((shoe, index) => {
    return (
      <Link to={`/shoe/${shoe.name}`} key={index}>
        <ShoeCard shoe={shoe} />
      </Link>
    );
  });
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3  ">{produkts}</div>
  );
}

export default Products;

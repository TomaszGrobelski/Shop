import shoesList from "./shoesList";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShoeCard from "./ShoeCard";

interface ProductsPage {
  sortBy: string;
  filterType: string;
  genderFilter: string | null;
  discount: string | null;
  selectedSize: number | null;
}

function Products({ sortBy, filterType, genderFilter, discount, selectedSize }: ProductsPage) {
  const [sortedProducts, setSortedProducts] = useState(shoesList);
  
  useEffect(() => {
    let filteredProducts = [...shoesList];

    if (filterType) {
      filteredProducts = filteredProducts.filter((shoe) => shoe.type === filterType);
    }

    if (genderFilter) {
      filteredProducts = filteredProducts.filter((shoe) => shoe.gender === genderFilter);
    }

    if (discount === "discounted") {
      filteredProducts = filteredProducts.filter((shoe) => shoe.oldPrice !== undefined);
    }

    if (selectedSize !== null) {
      filteredProducts = filteredProducts.filter((shoe) => shoe.sizes.includes(selectedSize));
    }

    if (sortBy === "high-low") {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === "low-high") {
      filteredProducts.sort((a, b) => a.price - b.price);
    }

    setSortedProducts(filteredProducts);
  }, [sortBy, filterType, genderFilter, discount, selectedSize]);


  const produkts = sortedProducts.map((shoe, index) => {
    
    return (
      <Link to={`/shoe/${shoe.name}`} key={index} >
        <ShoeCard shoe={shoe} />
      </Link>
    );
  });
  return <div className="grid grid-cols-2 md:grid-cols-3 gap-4  ">{produkts}</div>;
}

export default Products;

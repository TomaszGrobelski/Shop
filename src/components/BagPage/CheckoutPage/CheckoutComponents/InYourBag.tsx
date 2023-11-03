import { BiMinus } from "react-icons/bi";
import Summary from "../../Summary/Summary";
import { useState, useEffect } from "react";

function InYourBag() {
  const [summary, setSummary] = useState(true);

  const handleSummary = () => {
    if (window.innerWidth < 768) {
      setSummary(!summary);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSummary(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  interface Item {
    price: number;
  }

  const reducer = (accumulator: number, currentValue: Item | null) => {
    if (currentValue?.price) {
      return accumulator + currentValue.price;
    }
    return accumulator;
  };

  const bagListString = localStorage.getItem("bagItems");
  const bagList: (Item | null)[] = bagListString ? JSON.parse(bagListString) : [];
  const totalPrice = bagList.reduce(reducer, 0);


  return (
    <div className="max-w-[640px] my-4">
      <button onClick={handleSummary} className="flex justify-between items-center w-full">
        <h2 className="text-[20px]">In Your Bag</h2>
        <BiMinus className="md:hidden" />
      </button>
      {summary && <Summary totalPrice={totalPrice} visible={false} />}
    </div>
  );
}

export default InYourBag;

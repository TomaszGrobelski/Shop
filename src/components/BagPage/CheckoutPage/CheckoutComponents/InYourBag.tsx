import { useEffect, useState } from "react";
import { BiMinus } from "react-icons/bi";

import Summary from "../../Summary/Summary";

function InYourBag() {
  const [summary, setSummary] = useState(true);
  const windowWidth768 = 768;
  const handleSummary = () => {
    if (window.innerWidth < windowWidth768) {
      setSummary(!summary);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= windowWidth768) {
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
  const bagList: (Item | null)[] = bagListString
    ? JSON.parse(bagListString)
    : [];
  const totalPrice = bagList.reduce(reducer, 0);

  return (
    <div className="my-4 max-w-[640px]">
      <button
        onClick={handleSummary}
        className="flex w-full items-center justify-between">
        <h2 className="text-[20px]">In Your Bag</h2>
        <BiMinus className="md:hidden" />
      </button>
      {summary && <Summary totalPrice={totalPrice} visible={false} />}
    </div>
  );
}

export default InYourBag;

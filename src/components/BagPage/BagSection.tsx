import Order from "./Bag/Order";
import Summary from "./Summary/Summary";
import {useState} from 'react'

function BagSection() {
  const [totalPrice, setTotalPrice]= useState(0)
  
  return (
    <div className="flex flex-col mt-20 gap-4 p-4 md:flex-row md:justify-center md:p-10">
      <div className="w-2/3 font-bold">
        <h1 className="text-[24px] sm:text-[32px] ">Bag</h1>
        <p className="opacity-80 mt-2 mb-10">There are no items in your bag.</p>
        <Order setTotalPrice={setTotalPrice} />
      </div>
      <Summary totalPrice={totalPrice} />
    </div>
  );
}

export default BagSection;

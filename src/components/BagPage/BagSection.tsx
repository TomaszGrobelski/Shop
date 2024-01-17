import { useState } from "react";

import Order from "./Bag/Order";
import Summary from "./Summary/Summary";
<<<<<<< HEAD
import { useState } from "react";
=======
>>>>>>> d7429fbb29cddb730079b0695a415bfd9d1f153b

function BagSection() {
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <div className="mt-20 flex flex-col gap-4 p-4 md:flex-row md:justify-center md:p-10">
      <div className="w-2/3 font-bold">
        <h1 className="text-[24px] sm:text-[32px] ">Bag</h1>
        <p className="mb-10 mt-2 opacity-80">There are no items in your bag.</p>
        <Order setTotalPrice={setTotalPrice} />
      </div>
      <Summary totalPrice={totalPrice} />
    </div>
  );
}

export default BagSection;

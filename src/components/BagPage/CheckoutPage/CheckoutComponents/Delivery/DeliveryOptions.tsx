import { LiaShippingFastSolid } from "react-icons/lia";
import { SlLocationPin } from "react-icons/sl";
import FormDelivery from "./FormDelivery";
import PickUp from "./PickUp";
import { useState } from "react";

function DeliveryOptions() {
  const [delivery, setDelivery] = useState("ship");

  const shipClick = () => {
    setDelivery("ship");
  };
  const pickUpClick = () => {
    setDelivery("pickUp");
  };

  return (
    <div className="my-2 w-[100%] ">
      <h2 className="my-2 text-[22px]">{delivery==='ship'?"Delivery Options":"Pickup"}</h2>
      <div className="flex flex-row gap-4 my-4 text-[20px]">
        <button
          onClick={shipClick}
          className={`flex items-center justify-center gap-3 p-4 w-full border-[2px] rounded-2xl ${
            delivery === "ship" ? "border-black" : "border-gray-300"
          } `}
        >
          <LiaShippingFastSolid size={25} /> Shipping
        </button>
        <button
          onClick={pickUpClick}
          className={`flex items-center justify-center gap-3 p-4 w-full border-[2px] rounded-2xl ${
            delivery === "pickUp" ? "border-black" : "border-gray-300"
          } `}
        >
          <SlLocationPin size={25} /> Pickup
        </button>
      </div>
      {delivery === "ship" && <FormDelivery />}
      {delivery === "pickUp" && <PickUp />}
    </div>
  );
}

export default DeliveryOptions;

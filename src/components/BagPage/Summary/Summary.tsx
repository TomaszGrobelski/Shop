import ButtonCustom from "../../Buttons/ButtonCustom";
import PromoCode from "./PromoCode";
import { BiMinus } from "react-icons/bi";

interface SummaryProps {
  totalPrice: number;
}

function Summary({totalPrice}:SummaryProps) {
  return (
    <div className="max-w-[400px] min-w-[300px] flex flex-col gap-3 font-bold  ">
      <h2 className="text-[24px] ">Summary</h2>
      <PromoCode />
      <div className="flex py-3 justify-between items-center">
        <div className="flex gap-3 items-center opacity-90">
          Subtotal
          <button className="bg-black w-4 h-4 text-white rounded-full text-[12px] font-bold">?</button>
        </div>
        <span>
          <BiMinus />
        </span>
      </div>
      <div className="flex py-2 justify-between items-center">
        <p>Estimated Shipping & Handling</p>
        <span>$0.00</span>
      </div>
      <div className="flex py-3 justify-between items-center border-b-[1px]">
        <div>
          Estimated Tax <button className="bg-black  w-4 h-4 text-white rounded-full text-[12px] font-bold">?</button>
        </div>
        <span>
          <BiMinus />
        </span>
      </div>
      <div className="flex justify-between items-center border-b-[1px] py-3">
        <p>Total</p>
        <span>{totalPrice === 0 ? <BiMinus /> : totalPrice}</span>
      </div>
      <div className=" hidden font-bold gap-4 md:flex md:flex-col">
        <ButtonCustom className="text-gray-500">Checkout</ButtonCustom>
        <ButtonCustom className="text-gray-500">
          <span className=" text-pay italic">Pay</span>
          <span className="text-pal italic">Pal</span>
        </ButtonCustom>
      </div>
    </div>
  );
}

export default Summary;

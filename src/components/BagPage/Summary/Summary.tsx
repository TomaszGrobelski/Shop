import { useState } from "react";
import ButtonCustom from "../../Buttons/ButtonCustom";
import PromoCode from "./PromoCode";
import { BiMinus } from "react-icons/bi";
import { Link } from "react-router-dom";

interface SummaryProps {
  totalPrice: number;
  visible?: boolean;
}

function Summary({ totalPrice, visible = true }: SummaryProps) {
  const [discount, setDiscount] = useState(false);
  const discountValue = totalPrice * 0.2;

  if (discount === true) {
    totalPrice = totalPrice - totalPrice * 0.2;
  }

  return (
    <div className="max-w-[660px] min-w-[300px] flex flex-col gap-3 font-bold  ">
      <h2 className="text-[24px] mt-6 ">Summary</h2>
      {visible&&<PromoCode setDiscount={setDiscount} />}
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
      <div className="flex flex-col py-3 gap-2 border-b-[1px]">
        <div className="flex justify-between">
          <div>
            Estimated Tax <button className="bg-black  w-4 h-4 text-white rounded-full text-[12px] font-bold">?</button>
          </div>
          <div>
            <BiMinus />
          </div>
        </div>
        {discount && (
          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <p>Discount Total</p>
              <span>${discountValue}</span>
            </div>
            <div className="flex justify-between text-green-700">
              <p>MEMBER20 -20% off</p>
              <span>X</span>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-between items-center border-b-[1px] py-3">
        <p>Total</p>
        <span>{totalPrice === 0 ? <BiMinus /> : "$" + totalPrice.toFixed(2)}</span>
      </div>
      <div className="min-w-[300px] max-w-[500px] self-center font-bold ">
        {visible && (
          <Link to="/checkout">
            <ButtonCustom
              className={"text-gray-500 w-full " + (totalPrice === 0 ? "gr-gray-300" : "bg-black text-white")}
            >
              Checkout
            </ButtonCustom>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Summary;

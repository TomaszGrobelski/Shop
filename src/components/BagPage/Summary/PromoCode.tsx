import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
<<<<<<< HEAD
import PrimaryButton from "../../Buttons/PrimaryButton";
=======
>>>>>>> d7429fbb29cddb730079b0695a415bfd9d1f153b
import { BiSolidChevronDown } from "react-icons/bi";

import PrimaryButton from "../../Buttons/PrimaryButton";

interface PromoCodeProps {
  setDiscount: (value: boolean) => void;
}

function PromoCode({ setDiscount }: PromoCodeProps) {
  const [visible, setVisible] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const discountCode = "MEMBER20";

  const handleClick = () => {
    setVisible(!visible);
  };

  const discountClick = () => {
    if (promoCode === discountCode) {
      setDiscount(true);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        animate={{ height: visible ? 70 : 20 }}
        transition={{ duration: 0.2 }}>
        <button
          onClick={handleClick}
          className="mb-2 flex w-full items-center justify-between">
          <p className="opacity-90">Do you have a Promo Code?</p>
          <BiSolidChevronDown
            size={25}
            className="transition-transform duration-300 ease-in-out"
            style={{ transform: `rotate(${visible ? 180 : 0}deg)` }}
          />
        </button>
        {visible && (
          <motion.div className="flex gap-3">
            <input
              onChange={(e) => setPromoCode(e.target.value)}
              type="text"
              className="h-10 w-2/3 rounded-lg border-[1px]"
            />
<<<<<<< HEAD
            <PrimaryButton onClick={discountClick} className="w-1/3 h-10 text-gray-500 bg-white">
=======
            <PrimaryButton
              onClick={discountClick}
              className="h-10 w-1/3 bg-white text-gray-500">
>>>>>>> d7429fbb29cddb730079b0695a415bfd9d1f153b
              Apply
            </PrimaryButton>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default PromoCode;

import { useState } from "react";
import ButtonCustom from "../../Buttons/ButtonCustom";
import { BiSolidChevronDown } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

interface PromoCodeProps {
  setDiscount: (value: boolean) => void;
}

function PromoCode({ setDiscount }: PromoCodeProps) {
  const [visible, setVisible] = useState(false);
  const [promoCode, setPromoCode] = useState("");

  const handleClick = () => {
    setVisible(!visible);
  };

  const discountClick = () => {
    if (promoCode === "MEMBER20") {
      setDiscount(true);
    }
  };

  return (
    <AnimatePresence>
      <motion.div animate={{ height: visible ? 70 : 20 }} transition={{ duration: 0.2 }}>
        <button onClick={handleClick} className="flex justify-between items-center mb-2 w-full">
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
              className="w-2/3 border-[1px] rounded-lg h-10"
            />
            <ButtonCustom onClick={discountClick} className="w-1/3 h-10 text-gray-500 bg-white">
              Apply
            </ButtonCustom>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default PromoCode;

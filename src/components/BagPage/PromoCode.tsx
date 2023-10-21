import { useState } from "react";
import ButtonCustom from "../Buttons/ButtonCustom";
import { BiSolidChevronDown } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

function PromoCode() {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <AnimatePresence>
      <motion.div animate={{ height: visible ? 70 : 20 }} transition={{ duration: 0.2 }}>
        <button onClick={handleClick} className="flex justify-between items-center mb-2">
          <span className="opacity-90">Do you have a Promo Code?</span>
          <BiSolidChevronDown
            size={25}
            className="transition-transform duration-300 ease-in-out"
            style={{ transform: `rotate(${visible ? 180 : 0}deg)` }}
          />
        </button>
        {visible && (
          <motion.div className="flex gap-3">
            <input className="w-2/3 border-[1px] rounded-lg h-10" type="text" name="" id="" />
            <ButtonCustom className="w-1/3 h-10 text-gray-500 bg-white">Apply</ButtonCustom>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default PromoCode;

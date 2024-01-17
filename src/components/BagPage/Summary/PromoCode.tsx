import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { BiSolidChevronDown } from 'react-icons/bi';

import { PromoCodeProps } from '../../../types/BagPage/bagPage.types';
import PrimaryButton from '../../Buttons/PrimaryButton';


function PromoCode({ setDiscount }: PromoCodeProps) {
  const [visible, setVisible] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const discountCode = 'MEMBER20';

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
          className='mb-2 flex w-full items-center justify-between'>
          <p className='opacity-90'>Do you have a Promo Code?</p>
          <BiSolidChevronDown
            size={25}
            className='transition-transform duration-300 ease-in-out'
            style={{ transform: `rotate(${visible ? 180 : 0}deg)` }}
          />
        </button>
        {visible && (
          <motion.div className='flex gap-3'>
            <input
              onChange={(e) => setPromoCode(e.target.value)}
              type='text'
              className='h-10 w-2/3 rounded-lg border-[1px]'
            />
            <PrimaryButton
              onClick={discountClick}
              className='h-10 w-1/3 bg-white text-gray-500'>
              Apply
            </PrimaryButton>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default PromoCode;

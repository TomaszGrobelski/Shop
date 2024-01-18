import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { BiSolidChevronDown } from 'react-icons/bi';

import { PromoCodeProps } from '../../../types/BagPage/bagPage.types';
import PrimaryButton from '../../Buttons/PrimaryButton';
import { PromoCodeButton, PromoCodeInput, PromoCodeTitle } from '../../../styles/BagPage/PromoCode.styles';

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
      <motion.div animate={{ height: visible ? 70 : 20 }} transition={{ duration: 0.2 }}>
        <PromoCodeButton onClick={handleClick}>
          <PromoCodeTitle>Do you have a Promo Code?</PromoCodeTitle>
          <BiSolidChevronDown
            size={25}
            className='transition-transform duration-300 ease-in-out'
            style={{ transform: `rotate(${visible ? 180 : 0}deg)` }}
          />
        </PromoCodeButton>
        {visible && (
          <motion.div className='flex gap-3'>
            <PromoCodeInput onChange={(e) => setPromoCode(e.target.value)} type='text' />
            <PrimaryButton onClick={discountClick} className='h-10 w-1/3 bg-white text-gray-500'>
              Apply
            </PrimaryButton>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default PromoCode;

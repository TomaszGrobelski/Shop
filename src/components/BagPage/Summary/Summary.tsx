import { useState } from 'react';
import { BiMinus } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import { SummaryProps } from '../../../types/BagPage/bagPage.types';
import PrimaryButton from '../../Buttons/PrimaryButton';
import PromoCode from './PromoCode';

function Summary({ totalPrice, visible = true }: SummaryProps) {
  const [discount, setDiscount] = useState(false);
  const discountValue = (totalPrice * 0.2).toFixed(2);

  if (discount === true) {
    totalPrice = totalPrice - totalPrice * 0.2;
  }

  return (
    <div className='flex min-w-[300px] max-w-[660px] flex-col gap-3 font-bold  '>
      <h2 className='mt-6 text-[24px] '>Summary</h2>
      {visible && <PromoCode setDiscount={setDiscount} />}
      <div className='flex items-center justify-between py-3'>
        <div className='flex items-center gap-3 opacity-90'>
          Subtotal
          <button className='h-4 w-4 rounded-full bg-black text-[12px] font-bold text-white'>
            ?
          </button>
        </div>
        <span>
          <BiMinus />
        </span>
      </div>
      <div className='flex items-center justify-between py-2'>
        <p>Estimated Shipping & Handling</p>
        <span>$0.00</span>
      </div>
      <div className='flex flex-col gap-2 border-b-[1px] py-3'>
        <div className='flex justify-between'>
          <div>
            Estimated Tax{' '}
            <button className='h-4  w-4 rounded-full bg-black text-[12px] font-bold text-white'>
              ?
            </button>
          </div>
          <div>
            <BiMinus />
          </div>
        </div>
        {discount && (
          <div className='flex flex-col gap-1'>
            <div className='flex justify-between'>
              <p>Discount Total</p>
              <span>${discountValue}</span>
            </div>
            <div className='flex justify-between text-green-700'>
              <p>MEMBER20 -20% off</p>
              <span>X</span>
            </div>
          </div>
        )}
      </div>
      <div className='flex items-center justify-between border-b-[1px] py-3'>
        <p>Total</p>
        <span>
          {totalPrice === 0 ? <BiMinus /> : '$' + totalPrice.toFixed(2)}
        </span>
      </div>
      <div className='min-w-[300px] max-w-[500px] self-center font-bold '>
        {visible && (
          <Link to='/checkout'>
            <PrimaryButton
              className={
                'w-full text-gray-500 ' +
                (totalPrice === 0 ? 'gr-gray-300' : 'bg-black text-white')
              }>
              Checkout
            </PrimaryButton>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Summary;

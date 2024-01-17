import { useState } from 'react';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { SlLocationPin } from 'react-icons/sl';

import FormDelivery from './FormDelivery';
import PickUp from './PickUp';

const DELIVERY_TYPES = {
  SHIP: 'ship',
  PICK_UP: 'pickUp',
};
type DeliveryType = (typeof DELIVERY_TYPES)[keyof typeof DELIVERY_TYPES];

function DeliveryOptions() {
  const [delivery, setDelivery] = useState(DELIVERY_TYPES.SHIP);

  const handleDeliveryChange = (deliveryType: DeliveryType) => {
    setDelivery(deliveryType);
  };

  return (
    <div className='my-2 w-[100%]'>
      <h2 className='my-2 text-[22px]'>
        {delivery === DELIVERY_TYPES.SHIP
          ? 'Delivery Options'
          : DELIVERY_TYPES.PICK_UP}
      </h2>
      <div className='my-4 flex flex-row gap-4 text-[20px]'>
        <button
          onClick={() => handleDeliveryChange(DELIVERY_TYPES.SHIP)}
          className={`flex w-full items-center justify-center gap-3 rounded-2xl border-[2px] p-4 ${
            delivery === DELIVERY_TYPES.SHIP
              ? 'border-black'
              : 'border-gray-300'
          } `}>
          <LiaShippingFastSolid size={25} /> Shipping
        </button>
        <button
          onClick={() => handleDeliveryChange(DELIVERY_TYPES.PICK_UP)}
          className={`flex w-full items-center justify-center gap-3 rounded-2xl border-[2px] p-4 ${
            delivery === DELIVERY_TYPES.PICK_UP
              ? 'border-black'
              : 'border-gray-300'
          } `}>
          <SlLocationPin size={25} /> Pickup
        </button>
      </div>
      {delivery === DELIVERY_TYPES.SHIP && <FormDelivery />}
      {delivery === DELIVERY_TYPES.PICK_UP && <PickUp />}
    </div>
  );
}

export default DeliveryOptions;

import { useState } from 'react';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { SlLocationPin } from 'react-icons/sl';

import OrderReview from '../OrderReview';
import FormDelivery from './FormDelivery';
import PickUp from './PickUp';
import { validate } from './validate';

const DELIVERY_TYPES = {
  SHIP: 'ship',
  PICK_UP: 'pickUp',
};
type DeliveryType = (typeof DELIVERY_TYPES)[keyof typeof DELIVERY_TYPES];

function DeliveryOptions() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [postalCode, setPostalCode] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<number>();

  const [delivery, setDelivery] = useState(DELIVERY_TYPES.SHIP);
  const handleDeliveryChange = (deliveryType: DeliveryType) => {
    setDelivery(deliveryType);
  };

  return (
    <div className='flex flex-col'>
      <div className='my-2 w-[100%]'>
        <h2 className='my-2 text-[22px]'>{delivery === DELIVERY_TYPES.SHIP ? 'Delivery Options' : 'PickUp Oprion'}</h2>
        <div className='my-4 flex flex-row gap-4 text-[20px]'>
          <button
            onClick={() => handleDeliveryChange(DELIVERY_TYPES.SHIP)}
            className={`flex w-full items-center justify-center gap-3 rounded-2xl border-[2px] p-4 ${
              delivery === DELIVERY_TYPES.SHIP ? 'border-black' : 'border-gray-300'
            } `}>
            <LiaShippingFastSolid size={25} /> Shipping
          </button>
          <button
            onClick={() => handleDeliveryChange(DELIVERY_TYPES.PICK_UP)}
            className={`flex w-full items-center justify-center gap-3 rounded-2xl border-[2px] p-4 ${
              delivery === DELIVERY_TYPES.PICK_UP ? 'border-black' : 'border-gray-300'
            } `}>
            <SlLocationPin size={25} /> Pickup
          </button>
        </div>
        {delivery === DELIVERY_TYPES.SHIP && (
          <FormDelivery
            setFirstName={setFirstName}
            setLastName={setLastName}
            setAddress={setAddress}
            setCity={setCity}
            setPostalCode={setPostalCode}
            setEmail={setEmail}
            setPhoneNumber={setPhoneNumber}
          />
        )}
        {delivery === DELIVERY_TYPES.PICK_UP && <PickUp />}
      </div>
      <OrderReview validate={() => validate(firstName, lastName, address, city, postalCode, email, phoneNumber)} />
    </div>
  );
}

export default DeliveryOptions;

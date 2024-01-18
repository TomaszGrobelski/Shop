import { Icon } from '@iconify/react';
import { Stripe, loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';

import {
  BagItemsProps,
  ItemsProps,
} from '../../../../types/BagPage/bagPage.types';

interface OrderReviewProps {
  validate: () => boolean;
}
function OrderReview({ validate }: OrderReviewProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState('');
  let items: ItemsProps[] = [];
  const bagItemsString = localStorage.getItem('bagItems');

  if (bagItemsString) {
    const bagItems: BagItemsProps[] = JSON.parse(bagItemsString);

    const itemCounts = bagItems.reduce<Record<string, ItemsProps>>(
      (acc, item) => {
        if (acc[item.name]) {
          acc[item.name].quantity += 1;
        } else {
          acc[item.name] = {
            price: item.stripePrice,
            quantity: 1,
          };
        }
        return acc;
      },
      {},
    );

    items = Object.values(itemCounts);
  } else {
    setError('No items');
  }

  let stripePromise: Promise<Stripe | null>;
  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
    }
    return stripePromise;
  };

  const checkoutOptions = {
    lineItems: items,
    mode: 'payment' as const,
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/checkout`,
  };

  const redirectToCheckout = async () => {
    if (!validate()) {
      setError('Please enter correct personal details');
      return;
    }
    setIsLoading(true);
    setError('');
    const stripe = await getStripe();
    if (stripe) {
      const result = await stripe.redirectToCheckout(checkoutOptions);
      if (result.error) {
        setError(result.error.message as string);
      }
    } else {
      setIsLoading(false);
      setError('The payment could not be made');
    }
  };

  return (
    <div className='flex max-w-[660px] items-center justify-end gap-4 py-10'>
      <p className=' font-bold text-red-500'>{error}</p>
      <button
        onClick={redirectToCheckout}
        className=' rounded-md border-2 p-3 px-8 text-[20px] font-bold transition-all duration-500 hover:rounded-3xl hover:border-black active:scale-125'>
        {isLoading ? (
          <Icon icon='eos-icons:bubble-loading' width={26} />
        ) : (
          'Pay'
        )}
      </button>
    </div>
  );
}

export default OrderReview;

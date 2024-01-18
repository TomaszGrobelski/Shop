import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';

import { CheckoutFormProps } from '../../../types/BagPage/bagPage.types';

const CheckoutForm = ({ totalPrice, handlePayment }: CheckoutFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);
    setError('');

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      setError('Card element not found.');
      setIsLoading(false);
      return;
    }

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        setError(error.message || 'Something went wrong.');
      } else if (paymentMethod) {
        handlePayment(paymentMethod.id);
      }
    } catch (error) {
      setError('Error while creating payment method. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type='submit' disabled={!stripe}>
        {isLoading ? 'Loading...' : `Pay ${totalPrice}`}
      </button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default CheckoutForm;

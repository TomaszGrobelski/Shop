import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';

interface CheckoutFormProps {
  totalPrice: number;
  handlePayment: (paymentMethodId: string) => void;
}

const CheckoutForm = ({ totalPrice, handlePayment }: CheckoutFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    // Dodać isLoading + !!!!!!!!!!!!!!!!!! USUNĄĆ KOM
    const cardElement = elements.getElement(CardElement);

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement!,
      });

      if (error) {
        console.error(error.message);
        if (typeof error.message === 'string') {
          setError(error.message);
        } else {
          setError('smth go wrong');
        }
      } else {
        if (paymentMethod && typeof paymentMethod.id === 'string') {
          handlePayment(paymentMethod.id);
        }
      }
    } catch (error) {
      setError('Błąd podczas tworzenia metody płatności. Spróbuj ponownie.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type='submit' disabled={!stripe}>
        Pay ${totalPrice}
      </button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default CheckoutForm;

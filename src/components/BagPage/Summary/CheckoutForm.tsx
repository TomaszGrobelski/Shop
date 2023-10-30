import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

interface CheckoutFormProps {
  totalPrice: number;
  handlePayment: (paymentMethodId: string) => void;
}

const CheckoutForm = ({ totalPrice, handlePayment }: CheckoutFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement!,
      });

      if (error) {
        console.error(error.message);
        if (typeof error.message === "string") {
          setError(error.message);
        }
      } else {
        if (paymentMethod && typeof paymentMethod.id === "string") {
          handlePayment(paymentMethod.id);
        }
      }
    } catch (error) {
      console.error("Błąd podczas tworzenia metody płatności:", error);
      if (typeof error === "string") {
        setError("Błąd podczas tworzenia metody płatności. Spróbuj ponownie.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={
          {
            /* opcje karty */
          }
        }
      />
      <button type="submit" disabled={!stripe}>
        Pay ${totalPrice}
      </button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default CheckoutForm;

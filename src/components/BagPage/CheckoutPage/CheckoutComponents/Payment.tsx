// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';
// import { FormEvent } from 'react';

// const KEY= "pk_test_51O4iOWGa5FM93XwuQtVotQkr7pFDySdTjVv1SheVHrqqKIijTws3F8tQzIOZiCoAwQd3nPA2me2gwcp5SxB9mU1p00Ie76m5OW"

// const stripePromise = loadStripe(KEY);

// const CheckoutForm = () => {
//   const handleSubmit = async (event:FormEvent) => {
//     event.preventDefault();
//     // Tutaj możesz dodać kod obsługi płatności za pomocą Stripe API
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* Dodaj pola formularza, takie jak dane karty, adres itp. */}
//       <button type="submit" disabled={!stripe}>
//         Zapłać teraz
//       </button>
//     </form>
//   );
// };

// const Payment = () => {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutForm />
//     </Elements>
//   );
// };

// export default Payment;

function Payment() {
  return (
    <div>Payment</div>
  )
}

export default Payment
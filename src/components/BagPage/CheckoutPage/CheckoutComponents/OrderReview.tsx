<<<<<<< HEAD
import { loadStripe, Stripe } from "@stripe/stripe-js";
=======
import { Stripe, loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
>>>>>>> d7429fbb29cddb730079b0695a415bfd9d1f153b

type Item = {
  price: string;
  quantity: number;
};
type BagItem = {
  stripePrice: string;
  name: string;
};

function OrderReview() {
<<<<<<< HEAD
=======
  const [error, setError] = useState("");
>>>>>>> d7429fbb29cddb730079b0695a415bfd9d1f153b
  let items: Item[] = [];
  const bagItemsString = localStorage.getItem("bagItems");

  if (bagItemsString) {
    const bagItems: BagItem[] = JSON.parse(bagItemsString);

    const itemCounts = bagItems.reduce<Record<string, Item>>((acc, item) => {
      if (acc[item.name]) {
        acc[item.name].quantity += 1;
      } else {
        acc[item.name] = {
          price: item.stripePrice,
          quantity: 1,
        };
      }
      return acc;
    }, {});

    items = Object.values(itemCounts);
  } else {
<<<<<<< HEAD
    return;
=======
    setError("No items");
>>>>>>> d7429fbb29cddb730079b0695a415bfd9d1f153b
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
    mode: "payment" as const,
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/checkout`,
  };

  const redirectToCheckout = async () => {
    const stripe = await getStripe();
    if (stripe) {
      const result = await stripe.redirectToCheckout(checkoutOptions);
      if (result.error) {
        setError(result.error.message as any);
      }
    } else {
      setError("Stripe could not be initialized");
    }
  };

  return (
<<<<<<< HEAD
    <div className="py-10 flex justify-end max-w-[660px]">
      <button onClick={redirectToCheckout} className=" border-2 p-3 px-8 rounded-3xl font-bold text-[20px]">
=======
    <div className="flex max-w-[660px] justify-end py-10">
      <div>{error}</div>
      <button
        onClick={redirectToCheckout}
        className=" rounded-3xl border-2 p-3 px-8 text-[20px] font-bold">
>>>>>>> d7429fbb29cddb730079b0695a415bfd9d1f153b
        Pay
      </button>
    </div>
  );
}

export default OrderReview;

import { loadStripe, Stripe } from "@stripe/stripe-js";

type Item = {
  price: string;
  quantity: number;
};
type BagItem = {
  stripePrice: string;
  name: string;
};

function OrderReview() {
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
    return;
  }

  const STRIPE_KEY =
    "pk_test_51O4iOWGa5FM93XwuQtVotQkr7pFDySdTjVv1SheVHrqqKIijTws3F8tQzIOZiCoAwQd3nPA2me2gwcp5SxB9mU1p00Ie76m5OW";
  let stripePromise: Promise<Stripe | null>;
  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(STRIPE_KEY);
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
      const { error } = await stripe.redirectToCheckout(checkoutOptions);
      console.log(error);
    } else {
      console.error("Stripe could not be initialized");
    }
  };

  return (
    <div className="py-10 flex justify-end max-w-[660px]">
      <button onClick={redirectToCheckout} className=" border-2 p-3 px-8 rounded-3xl font-bold text-[20px]">
        Pay
      </button>
    </div>
  );
}

export default OrderReview;

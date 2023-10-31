import FooterSection from "../../Footer/FooterSection";
import InYourBag from "./CheckoutComponents/InYourBag";
import DeliveryOptions from "./CheckoutComponents/DeliveryOptions";
import Payment from "./CheckoutComponents/Payment";
import OrderReview from "./CheckoutComponents/OrderReview";
import Navbar from "../../Navigation/Navbar";

//https://www.youtube.com/watch?v=BSN2KcB_h-M&ab_channel=DesignCode    23:50
import { loadStripe } from "@stripe/stripe-js";


const STRIPE_KEY= "pk_test_51O4iOWGa5FM93XwuQtVotQkr7pFDySdTjVv1SheVHrqqKIijTws3F8tQzIOZiCoAwQd3nPA2me2gwcp5SxB9mU1p00Ie76m5OW"
let stripePromise:Promise<any>; // DODAĆ TYP !!!!!!!!!!!!!!!!

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(STRIPE_KEY);
  }
  return stripePromise;
};
function CheckoutPage() {
  const item = {
    price: "price_1O6ojaGa5FM93XwuePSySmoE",
    quantity: 1,
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/checkout`,
  };

  const redirectToCheckout = async () => {
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log(error);
  };
  return (
    <div>
      <Navbar />
      <div className="flex flex-col sm:flex-row-revers p-6">
        <button onClick={redirectToCheckout} className="text-center text-[28px] my-10">Checkout</button>

        <InYourBag />
        <div>
          <DeliveryOptions />
          <Payment />
          <OrderReview />
        </div>
      </div>
      <FooterSection />
    </div>
  );
}

export default CheckoutPage;

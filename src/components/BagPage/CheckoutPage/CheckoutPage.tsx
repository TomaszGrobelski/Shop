import FooterSection from "../../Footer/FooterSection";
import InYourBag from "./CheckoutComponents/InYourBag";
import DeliveryOptions from "./CheckoutComponents/DeliveryOptions";
import Payment from "./CheckoutComponents/Payment";
import OrderReview from "./CheckoutComponents/OrderReview";
import Navbar from "../../Navigation/Navbar";

function CheckoutPage() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col sm:flex-row-revers p-6">
        <h1 className="text-center text-[28px] my-10">Checkout</h1>

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

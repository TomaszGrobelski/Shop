import FooterSection from "../../Footer/FooterSection";
import Navbar from "../../Navigation/Navbar";
import DeliveryOptions from "./CheckoutComponents/Delivery/DeliveryOptions";
import InYourBag from "./CheckoutComponents/InYourBag";
import OrderReview from "./CheckoutComponents/OrderReview";

function CheckoutPage() {
  return (
    <div>
      <Navbar />
      <div className="sm:flex-row-revers flex flex-col p-6">
        <button className="my-10 text-center text-[28px]">Checkout</button>
        <div className="flex flex-col md:flex-row-reverse md:justify-center md:gap-12">
          <InYourBag />
          <div>
            <DeliveryOptions />
            <OrderReview />
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}

export default CheckoutPage;

import FooterSection from "../../Footer/FooterSection";
import InYourBag from "./CheckoutComponents/InYourBag";
import DeliveryOptions from "./CheckoutComponents/DeliveryOptions";
import OrderReview from "./CheckoutComponents/OrderReview";
import Navbar from "../../Navigation/Navbar";


function CheckoutPage() {
  
  return (
    <div>
      <Navbar />
      <div className="flex flex-col sm:flex-row-revers p-6">
        <button className="text-center text-[28px] my-10">
          Checkout
        </button>

        <InYourBag />
        <div>
          <DeliveryOptions />
          <OrderReview />
        </div>
      </div>
      <FooterSection />
    </div>
  );
}

export default CheckoutPage;

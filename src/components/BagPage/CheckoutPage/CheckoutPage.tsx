import FooterSection from '../../Footer/FooterSection';
import Navbar from '../../Navigation/Navbar';
import DeliveryOptions from './CheckoutComponents/Delivery/DeliveryOptions';
import InYourBag from './CheckoutComponents/InYourBag';
import { CheckoutButton, CheckoutContainer, CheckoutContent } from '../../../styles/BagPage/CheckoutPage.styles';

function CheckoutPage() {
  return (
    <>
      <Navbar />
      <CheckoutContainer>
        <CheckoutButton>Checkout</CheckoutButton>
        <CheckoutContent>
          <InYourBag />
          <DeliveryOptions />
        </CheckoutContent>
      </CheckoutContainer>
      <FooterSection />
    </>
  );
}

export default CheckoutPage;

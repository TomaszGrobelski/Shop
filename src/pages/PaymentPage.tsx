import Summary from '../components/BagPage/Summary/Summary'
import CheckoutForm from '../components/BagPage/Summary/CheckoutForm'

function PaymentPage() {
  const totalPrice = 2000; 

  const handlePayment = async (paymentMethodId:string) => {
    try {
      const response = await fetch('URL_DO_TWOJEGO_ENDPOINTU_PLATNOSCI', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethodId,
          totalPrice: totalPrice,
        }),
      });
      const data = await response.json();
      console.log(data); // Obsłuż odpowiedź z serwera
    } catch (error) {
      console.error('Błąd żądania HTTP:', error); // Obsłuż błąd żądania HTTP
    }
  };

  return (
    <div>
      <Summary totalPrice={200} />
      <p>Total: ${totalPrice}</p>
      <CheckoutForm totalPrice={totalPrice} handlePayment={handlePayment} />
    </div>
  );
}

export default PaymentPage;

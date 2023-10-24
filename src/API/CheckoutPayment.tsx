// const KEY= "pk_test_51O4iOWGa5FM93XwuQtVotQkr7pFDySdTjVv1SheVHrqqKIijTws3F8tQzIOZiCoAwQd3nPA2me2gwcp5SxB9mU1p00Ie76m5OW"

// // This is your test secret API key.
// import Stripe from 'stripe';
// import express from 'express';

// const stripe = new Stripe(KEY,{apiVersion: '2023-10-16'});
// const app = express();
// app.use(express.static('public'));

// const YOUR_DOMAIN = 'http://localhost:5173';

// app.post('/create-checkout-session', async (req, res) => {
//     const session = await stripe.checkout.sessions.create({
//       line_items: [
//         {
//           price: '{{PRICE_ID}}',
//           quantity: 1,
//         },
//       ],
//       mode: 'payment',
//       success_url: `${YOUR_DOMAIN}/success.html`,
//       cancel_url: `${YOUR_DOMAIN}/cancel.html`,
//     });
  
//     if (session.url) {
//       res.redirect(303, session.url);
//     } else {
//       // Obsłuż przypadki, gdy session.url jest null
//       // Możesz przekierować użytkownika na inną stronę lub zwrócić odpowiedni komunikat
//     }
//   });

// app.listen(4242, () => console.log('Uruchomiono na porcie 4242'));

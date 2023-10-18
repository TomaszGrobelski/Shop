import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqtPAAdd3UcSaDyuvgOSxeADb0XquQcPM",
  authDomain: "shop-c4784.firebaseapp.com",
  projectId: "shop-c4784",
  storageBucket: "shop-c4784.appspot.com",
  messagingSenderId: "177975144546",
  appId: "1:177975144546:web:d6d1133ab757553e57613b",
  measurementId: "G-9HT4H95MPV",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;

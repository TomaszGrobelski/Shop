import "@stripe/stripe-js";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import CheckoutPage from "./components/BagPage/CheckoutPage/CheckoutPage";
import ContainerHome from "./components/Containers/Container";
import ProtectedRoute from "./components/PrivateRout/ProtectedRoute";
import FavoritesProvider from "./context/FavoritesProvider";
import {
  BagPage,
  ContactPage,
  FavoritePage,
  HomePage,
  LoginPage,
  RegisterPage,
  ShoeDetailPage,
  ShoesPage,
  SuccessPage,
  UserPage,
} from "./pages/index";

function App() {
  return (
    <Router>
      <ContainerHome>
        <FavoritesProvider>
          <Routes>
            <Route path="/nika/" element={<LoginPage />} />
            <Route path="/registration/" element={<RegisterPage />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/shoes"
              element={
                <ProtectedRoute>
                  <ShoesPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <ProtectedRoute>
                  <ContactPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/favorite"
              element={
                <ProtectedRoute>
                  <FavoritePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/bag"
              element={
                <ProtectedRoute>
                  <BagPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user"
              element={
                <ProtectedRoute>
                  <UserPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <CheckoutPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/success"
              element={
                <ProtectedRoute>
                  <SuccessPage />
                </ProtectedRoute>
              }
            />
            <Route path="/shoe/:name" element={<ShoeDetailPage />} />
          </Routes>
        </FavoritesProvider>
      </ContainerHome>
    </Router>
  );
}

export default App;

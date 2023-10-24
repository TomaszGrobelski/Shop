import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import ShoesPage from "./pages/ShoesPage";
import ContactPage from "./pages/ContactPage";
import FavoritePage from "./pages/FavoritePage";
import BagPage from "./pages/BagPage";
import UserPage from "./pages/UserPage";
import ProtectedRoute from "./components/PrivateRout/ProtectedRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContainerHome from "./components/Containers/Container";
import ShoeDetailPage from "./pages/ShoeDetailPage";
import CheckoutPage from "./components/BagPage/CheckoutPage/CheckoutPage";

import FavoritesProvider from "./context/FavoritesProvider";

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
            <Route path="/shoe/:name" element={<ShoeDetailPage />} />
          </Routes>
        </FavoritesProvider>
      </ContainerHome>
    </Router>
  );
}

export default App;

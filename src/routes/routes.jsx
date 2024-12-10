import { Route, Routes } from "react-router-dom";
import {
  PrivateRoute,
  UnprotectedRoute,
} from "../components/PrivateRoutes/PrivateRoutes";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import YourAddress from "../pages/YourAddress";
import PaymentPage from "../pages/PaymentPage";
import YourProfile from "../pages/YourProfile";
import OrderSuccessful from "../pages/OrderSuccessful";
import Restaurant from "../pages/Restaurant";
import Checkout from "../pages/Checkout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Unprotected Routes */}
      <Route
        path="/signup"
        element={
          <UnprotectedRoute>
            <Signup />
          </UnprotectedRoute>
        }
      />
      <Route
        path="/login"
        element={
          <UnprotectedRoute>
            <Login />
          </UnprotectedRoute>
        }
      />

      {/* Protected Routes */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/restaurant/:restaurantSlug"
        element={
          <PrivateRoute>
            <Restaurant />
          </PrivateRoute>
        }
      />
      <Route
        path="/checkout"
        element={
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        }
      />
      <Route
        path="/your-address"
        element={
          <PrivateRoute>
            <YourAddress />
          </PrivateRoute>
        }
      />
      <Route
        path="/payment-page"
        element={
          <PrivateRoute>
            <PaymentPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/order-successful"
        element={
          <PrivateRoute>
            <OrderSuccessful />
          </PrivateRoute>
        }
      />
      <Route
        path="/your-profile"
        element={
          <PrivateRoute>
            <YourProfile />
          </PrivateRoute>
        }
      />

      {/* Page Not Found */}
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
};

export default AppRoutes;

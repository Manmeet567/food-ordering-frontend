import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import YourAddress from "./pages/YourAddress";
import PaymentPage from "./pages/PaymentPage";
import YourProfile from "./pages/YourProfile";
import OrderSuccessful from "./pages/OrderSuccessful";
import Restaurant from "./pages/Restaurant";
import Checkout from "./pages/Checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  PrivateRoute,
  UnprotectedRoute,
} from "./components/PrivateRoutes/PrivateRoutes";
import { fetchUserData } from "./redux/slices/authSlice";

function App() {
  const dispatch = useDispatch();
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const token = userData?.token;
  
    if (token) {
      // Decode token to get user ID and fetch user data
      const userId = JSON.parse(atob(token.split(".")[1]))._id;
  
      // Set token in auth state
      dispatch({ type: "auth/login/fulfilled", payload: { token } });
  
      // Fetch user data once based on the decoded user ID
      dispatch(fetchUserData(userId)).finally(() => setInitialLoading(false));
    } else {
      setInitialLoading(false);
    }
  }, [dispatch]);

  if (initialLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="app">
      <BrowserRouter>
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
          <Route path="/checkout" element={<Checkout />} />

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
      </BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;

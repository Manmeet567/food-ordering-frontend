import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';  // Add useState
import { useDispatch } from 'react-redux';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import YourAddress from './pages/YourAddress';
import PaymentPage from './pages/PaymentPage';
import YourProfile from './pages/YourProfile';
import OrderSuccessful from './pages/OrderSuccessful';
import Restaurant from './pages/Restaurant';
import Checkout from './pages/Checkout';
import { PrivateRoute, UnprotectedRoute } from './components/PrivateRoutes/PrivateRoutes';

function App() {
  const dispatch = useDispatch();
  const [initialLoading, setInitialLoading] = useState(true);  

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      dispatch({ type: 'auth/login/fulfilled', payload: user });
    }
    setInitialLoading(false);  // Ensure that initial loading is done
  }, [dispatch]);

  if (initialLoading) {
    return <p>Loading...</p>;  // Prevent routes from rendering before user check is complete
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
            path="/restaurant/:restaurant_name"
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
    </div>
  );
}

export default App;

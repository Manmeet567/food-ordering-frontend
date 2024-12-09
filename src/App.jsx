import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchUserData } from "./redux/slices/authSlice";
import { fetchCartData, saveCartData } from "./redux/slices/cartSlice";
import AppRoutes from "./routes/routes";
import { debounce } from "lodash";

function App() {
  const dispatch = useDispatch();
  const [initialLoading, setInitialLoading] = useState(true);
  const [skipSave, setSkipSave] = useState(true); // To control when to skip saveCart API
  const cartItems = useSelector((state) => state.cart.items);
  const userId = useSelector((state) => state.auth.user?._id);

  // Debounced saveCart function - will be triggered after user stops modifying cart
  const debouncedSaveCart = debounce(() => {
    if (!skipSave && cartItems.length > 0) {
      dispatch(saveCartData({ userId, items: cartItems }));
    }
  }, 1000); // Wait for 1500ms of inactivity

  useEffect(() => {
    if (initialLoading) {
      const userData = JSON.parse(localStorage.getItem("user"));
      const token = userData?.token;

      if (token) {
        const userId = JSON.parse(atob(token.split(".")[1]))._id;

        dispatch({ type: "auth/login/fulfilled", payload: { token } });

        dispatch(fetchUserData(userId)).finally(() => {
          dispatch(fetchCartData(userId)).finally(() => {
            setInitialLoading(false);
            setSkipSave(false);
          });
        });
      } else {
        setInitialLoading(false);
      }
    }
  }, [dispatch, initialLoading]);

  // Trigger saveCart whenever the cartItems change, but use debounce to ensure the API call
  // is only made after the user has stopped modifying the cart for 1000ms.
  useEffect(() => {
    if (!initialLoading) {
      debouncedSaveCart();
    }

    // Cleanup the debounce effect to prevent unnecessary calls
    return () => {
      debouncedSaveCart.cancel(); // Clean up debounced function if the component unmounts or changes occur
    };
  }, [cartItems]); // Run only when cartItems change

  if (initialLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="app">
      <BrowserRouter>
        <AppRoutes />
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

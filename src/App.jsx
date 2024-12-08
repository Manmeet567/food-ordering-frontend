import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchUserData } from "./redux/slices/authSlice";
import { fetchCartData } from "./redux/slices/cartSlice";
import AppRoutes from "./routes/routes";

function App() {
  const dispatch = useDispatch();
  const [initialLoading, setInitialLoading] = useState(true);

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
          });
        });
      } else {
        setInitialLoading(false);
      }
    }
  }, [dispatch, initialLoading]); // added initialLoading as a dependency
  

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

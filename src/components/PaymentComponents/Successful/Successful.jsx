import "./Successful.css";
import successimg from "../../../assets/success.png";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart, saveCartData } from "../../../redux/slices/cartSlice";
import { useEffect, useState } from "react";

function Successful({ success }) {
  const { items } = useSelector((state) => state.cart);
  const userId = useSelector((state) => state.auth.user._id);
  const [orderItems, setOrderItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      setOrderItems(items);
      dispatch(clearCart());
      dispatch(saveCartData({ userId, items: [] }));
    }
  }, [success]);

  return (
    <div className="successful">
      <div className="sf-container">
        <div className="sfc-content">
          <img src={successimg} alt="" />
          <p>Order Placed Successfully</p>
          <p>
            Your order is confirmed and on its way. Get set to savor your chosen
            delights!
          </p>
          <div className="sfc-order-list">
            {orderItems?.map((item) => (
              <div key={item?._id} className="sfc-item">
                <p>{item?.meal_name}</p>
              </div>
            ))}
            <Link to="/">
              <div className="sfc-btn">Back to Home</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Successful;

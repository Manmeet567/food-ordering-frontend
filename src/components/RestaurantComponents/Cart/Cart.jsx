import React from "react";
import share from "../../../assets/share.png";
import "./Cart.css";
import basket from "../../../assets/Full Shopping Basket.png";
import remove from "../../../assets/Remove.png";
import down from "../../../assets/Forward Button.png";
import forward from "../../../assets/Forward Button green.png";
import scooter from "../../../assets/Delivery Scooter.png";
import store from "../../../assets/New Store.png";
import checkoutArrow from "../../../assets/checkout-button-forward.png";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../../redux/slices/cartSlice";
import {Link} from 'react-router-dom';

function Cart() {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector((state) => state.cart);

  const handleRemoveMeal = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart" id="cart">
      <div className="share-cart">
        <img src={share} alt="share" />
        <p>Share this cart with your friends</p>
        <button>Copy Link</button>
      </div>
      <div className="my-basket">
        <div className="mb-header">
          <img src={basket} alt="basket" />
          <p>My Basket</p>
        </div>
        <div className="mb-items">
          {items?.map((item) => (
            <div className="mb-item" key={item._id}>
              <div className="mb-item-info">
                <p>{item?.item_count}x</p>
                <div className="mbi-info">
                  <p>₹{item?.meal_price}</p>
                  <p>{item?.meal_name}</p>
                </div>
              </div>
              <div
                className="mbi-remove"
                onClick={() => handleRemoveMeal(item?._id)}
              >
                <img src={remove} alt="remove" />
              </div>
            </div>
          ))}
          {items?.length == 0 && (
            <div className="mb-no-item">
              <p>No items. Add items to the cart</p>
            </div>
          )}
        </div>
        {items?.length > 0 && (
          <>
            <div className="mb-sub-total">
              <div className="mbst-sub-total mbst">
                <span>Sub Total:</span>
                <span>₹{totalAmount}.00</span>
              </div>
              <div className="mbst-discount mbst">
                <span>Discounts: </span>
                <span>-₹3.00</span>
              </div>
              <div className="mbst-delivery mbst">
                <span>Delivery Fee:</span>
                <span>₹3.00</span>
              </div>
            </div>
            <div className="mb-total">
              <button className="mbt-total">
                <span>Total to pay</span>
                <span>₹{totalAmount}.00</span>
              </button>
              <button className="mbt-free-item">
                <span>Choose your free item..</span>
                <img src={down} alt="down" />
              </button>
              <button className="mbt-coupon-code">
                <span>Apply Coupon Code here</span>
                <img src={forward} alt="forward" />
              </button>
            </div>
            <div className="mb-checkout">
              <div className="mbc-options">
                <div className="mbco-option">
                  <img src={scooter} alt="scooter" />
                  <p>Delivery</p>
                  <p>Starts at 17:50</p>
                </div>
                <div className="mbco-line"></div>
                <div className="mbco-disabled-option">
                  <img src={store} alt="store" />
                  <p>Collection</p>
                  <p>Starts at 16:50</p>
                </div>
              </div>
              <Link to="/checkout">
                <button className="mbc-checkout-btn">
                  <img src={checkoutArrow} alt="arrow" />
                  <span>Checkout!</span>
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;

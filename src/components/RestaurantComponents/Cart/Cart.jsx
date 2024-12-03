import React from "react";
import share from "../../../assets/share.png";
import "./Cart.css";
import basket from "../../../assets/Full Shopping Basket.png";
import remove from "../../../assets/Remove.png";
import down from '../../../assets/Forward Button.png';
import forward from '../../../assets/Forward Button green.png';
import scooter from '../../../assets/Delivery Scooter.png';
import store from '../../../assets/New Store.png';
import checkoutArrow from '../../../assets/checkout-button-forward.png';

function Cart() {
  return (
    <div className="cart">
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
          <div className="mb-item">
            <p>1x</p>
            <div className="mbi-info">
              <p>₹120</p>
              <p>Royal Cheese Burger</p>
            </div>
            <div className="mbi-remove">
              <img src={remove} alt="remove" />
            </div>
          </div>
        </div>
        <div className="mb-sub-total">
          <div className="mbst-sub-total mbst">
            <span>Sub Total:</span>
            <span>₹230.00</span>
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
            <span>₹230.00</span>
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
          <button className="mbc-checkout-btn">
            <img src={checkoutArrow} alt="arrow" />
            <span>Checkout!</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;

import { useState } from "react";
import Tagbar from "../../CheckoutComponents/Tagbar/Tagbar";
import "./MainPayment.css";
import wallet from "../../../assets/Wallet.png";
import right from "../../../assets/right.png";
import Successful from "../Successful/Successful";
import { useSelector } from "react-redux";
import {toast} from 'react-toastify';

function MainPayment() {
  const [success, setSuccess] = useState(false);
  const { totalAmount } = useSelector((state) => state.cart);

  const handleProceed = () => {
    if (totalAmount === 0) {
        setSuccess(false);
        toast.error("No items in cart");
        return
      } else {
        setSuccess(true);
        reuturn
      }
  }

  return (
    <div className="main-payment">
      {success && <Successful success={success} />}
      {!success && (
        <div className="mp-container">
          <Tagbar tag="Choose and Pay" />
          <div className="mp-details">
            <div className="mp-payment-method">
              <div className="mpm-active-method">
                <div className="mpm-first">
                  <div className="active-wallet">
                    <img src={wallet} alt="" />
                  </div>
                  <div className="wallet-info">
                    <p>Wallet</p>
                    <p>Available balance: ₹300</p>
                  </div>
                </div>
                <div className="wallet-right">
                  <img src={right} alt="" />
                </div>
              </div>
            </div>
            <div className="mp-proceed">
              <div className="mp-amount">
                <span>Amount to be payed</span>
                <span>₹{totalAmount != 0 ? totalAmount + 10 : 0}</span>
              </div>
              <div
                className="mp-btn"
                onClick={handleProceed}
                style={{
                  cursor: totalAmount === 0 ? "not-allowed" : "pointer",
                }}
              >
                Proceed Payment
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainPayment;

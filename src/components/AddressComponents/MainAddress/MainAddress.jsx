import React from "react";
import Tagbar from "../../CheckoutComponents/Tagbar/Tagbar";
import "./MainAddress.css";
import { useSelector } from "react-redux";
import plus from "../../../assets/orange-plus.png";

function MainAddress() {
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  return (
    <div className="main-address">
      <div className="ma-container">
        <Tagbar tag="Your Addresses" />
        <div className="mac-address">
          <div className="mac-add-address">
            <div className="macaa-plus">
              <img src={plus} alt="plus" />
            </div>
            <p>Add Address</p>
          </div>
          {user?.addresses?.map((address) => (
            <div className="mac-address-card" key={address?._id}>
              <div className="macac-info">
                <div className="macac-name-bar">
                  <p>{user?.name}</p>
                  {address?.active && <p>Default</p>}
                </div>
                <p className="macac-address">
                  {address?.full_address}, {address?.city}, {address?.state},{" "}
                  {address?.pincode}, India
                </p>
                <p className="macac-pno">
                  Phone Number: {address?.phone_number}
                </p>
              </div>
              <div className="macac-btn">
                <button>Edit</button>
                <button>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainAddress;

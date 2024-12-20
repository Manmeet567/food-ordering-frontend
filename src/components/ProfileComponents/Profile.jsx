import React, { useState } from "react";
import Tagbar from "../CheckoutComponents/Tagbar/Tagbar";
import { useSelector, useDispatch } from "react-redux";
import "./Profile.css";
import card from "../../assets/credit-card.png";
import editIcon from "../../assets/edit-3.png";
import plus from "../../assets/orange-plus.png";

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  // Initialize form state with user's current data
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    gender: "None",
    country: "India",
  });

  const [edit, setEdit] = useState(false);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Save function to dispatch updated user data
  const handleSave = () => {
    if (edit) {
      // Dispatch an action or make API call to update user data
      dispatch(updateUser(formData)); // Call to update the user data in the store/backend
    }
    setEdit(!edit); // Toggle between edit and save
  };

  return (
    <div className="profile">
      <div className="profile-container">
        <Tagbar tag="My Profile" />
        <div className="main-profile">
          <div className="mp-header">
            <div className="mph-img">
              <img src={user?.profile_image} alt="" />
              <p>{user?.name}</p>
            </div>
            <button onClick={handleSave}>
              {edit ? "Save" : "Edit"}
            </button>
          </div>
          <div className="mp-fields">
            <div className="mpf-field">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                disabled={!edit}
                style={{
                  border: `${edit ? "0.5px solid #00000080" : "0.5px solid #f9f9f9"}`,
                }}
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mpf-field">
              <label>Email Address</label>
              <input
                type="text"
                name="email"
                disabled={!edit}
                style={{
                  border: `${edit ? "0.5px solid #00000080" : "0.5px solid #f9f9f9"}`,
                }}
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mpf-field">
              <label>Gender</label>
              <input
                type="text"
                name="gender"
                disabled={!edit}
                style={{
                  border: `${edit ? "0.5px solid #00000080" : "0.5px solid #f9f9f9"}`,
                }}
                value={formData.gender}
                onChange={handleChange}
              />
            </div>
            <div className="mpf-field">
              <label>Country</label>
              <input
                type="text"
                name="country"
                disabled={!edit}
                style={{
                  border: `${edit ? "0.5px solid #00000080" : "0.5px solid #f9f9f9"}`,
                }}
                value={formData.country}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mp-payment-method">
            <p>Saved Payment Methods</p>
            <div className="mppm-method-list">
              <div className="mpml-method">
                <div>
                  <img src={card} alt="" />
                </div>
                <div>
                  <p>xxxx xxxx xxxx 1234</p>
                  <p>{user?.name}</p>
                </div>
                <img src={editIcon} alt="" />
              </div>
              <div className="mpml-add">
                <div>
                  <img src={plus} alt="" />
                </div>
                <p>Add New Card</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

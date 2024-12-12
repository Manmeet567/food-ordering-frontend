import { useState, useEffect } from "react";
import location from "../../../assets/location-black.png";
import states from "../../../utils/states.json";
import "./AddressModal.css";

function AddressModal({ address = null, onSubmit }) {
  const [formData, setFormData] = useState({
    full_address: "",
    city: "",
    state: "",
    pincode: "",
    phone_number: "",
  });

  useEffect(() => {
    if (address) {
      // Pre-fill the form if we are editing an address
      setFormData({
        full_address: address.full_address,
        city: address.city,
        state: address.state,
        pincode: address.pincode,
        phone_number: address.phone_number,
      });
    }
  }, [address]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass the formData back to MainAddress's handleSubmit function
  };

  return (
    <div className="address-modal">
      <div className="am-header">
        <img src={location} alt="location" />
        <span>{address ? "Edit Address" : "Add Address"}</span>
      </div>
      <form onSubmit={handleSubmit} className="address-modal-form">
        <div className="amf-fields">
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="amf-field"
          >
            <option value="">State</option>
            {states.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="city"
            className="amf-field"
            placeholder="City/District"
            value={formData.city}
            onChange={handleChange}
          />
          <input
            className="amf-field"
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={handleChange}
          />
          <input
            className="amf-field"
            type="text"
            name="phone_number"
            placeholder="Phone Number"
            value={formData.phone_number}
            onChange={handleChange}
          />
        </div>
        <textarea
          name="full_address"
          placeholder="Full Address"
          value={formData.full_address}
          onChange={handleChange}
        />
        <div className="amf-submit">
          <button type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddressModal;

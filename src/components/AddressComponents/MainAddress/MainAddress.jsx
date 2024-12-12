import { useState } from "react";
import Tagbar from "../../CheckoutComponents/Tagbar/Tagbar";
import "./MainAddress.css";
import { useSelector, useDispatch } from "react-redux";
import plus from "../../../assets/orange-plus.png";
import { removeAddress, addAddress, editAddress } from "../../../redux/slices/authSlice"; // Import add and edit thunks
import Modal from "../../Modal/Modal";
import AddressModal from "../AddressModal/AddressModal";

function MainAddress() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentAddress, setCurrentAddress] = useState(null); // To hold the current address being edited

  const openModal = (address = null) => {
    setCurrentAddress(address); // Set the current address if we're editing, null if adding
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleRemoveAddress = (addressId) => {
    // Dispatch the removeAddress thunk
    dispatch(removeAddress({ addressId }));
  };

  const handleSubmit = (formData) => {
    if (currentAddress) {
      // If currentAddress is set, we are in edit mode
      dispatch(editAddress({ addressId: currentAddress._id, addressData: formData }));
    } else {
      // Otherwise, we are in add mode
      dispatch(addAddress(formData));
    }
    closeModal(); // Close the modal after submission
  };

  return (
    <div className="main-address">
      <div className="ma-container">
        <Tagbar tag="Your Addresses" />
        <div className="mac-address">
          <div className="mac-add-address" onClick={() => openModal()}>
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
                <button onClick={() => openModal(address)}>Edit</button>
                <button onClick={() => handleRemoveAddress(address?._id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AddressModal
          address={currentAddress} 
          onSubmit={handleSubmit}
        />
      </Modal>
    </div>
  );
}

export default MainAddress;

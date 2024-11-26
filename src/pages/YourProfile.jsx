import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function YourProfile() {
  return (
    <div className="your-profile">
      <Navbar />
      Yourprofile
      <nav>
        <ul>
          <li>
            <Link to="/restaurant/restaurant_name">Restaurant</Link>
          </li>
          <li>
            <Link to="/your-address">Your Address</Link>
          </li>
          <li>
            <Link to="/payment-page">Payment Page</Link>
          </li>
          <li>
            <Link to="/order-successful">Order Successful</Link>
          </li>
          <li>
            <Link to="/your-profile">Your Profile</Link>
          </li>
        </ul>
      </nav>
      <Footer />
    </div>
  );
}

export default YourProfile;

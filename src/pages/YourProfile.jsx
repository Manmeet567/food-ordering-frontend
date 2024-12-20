import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Profile from "../components/ProfileComponents/Profile";

function YourProfile() {
  return (
    <div className="your-profile">
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
}

export default YourProfile;

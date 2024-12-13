import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Tagbar from "../components/CheckoutComponents/Tagbar/Tagbar";
import MainPayment from "../components/PaymentComponents/MainPayment/MainPayment";

function PaymentPage() {
  return (
    <div className="payment-page">
      <Navbar />
      <MainPayment />
      <Footer />
    </div>
  );
}

export default PaymentPage;

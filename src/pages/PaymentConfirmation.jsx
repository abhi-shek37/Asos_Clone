
import React from "react";
import { useLocation } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Navbar2 from "../components/Navbar2";
import Navbar3 from "../components/Navbar3";
import Footer from "../components/Footer";
import "./Checkout.css";

const PaymentConfirmation = () => {
  const location = useLocation();
  const { userInfo } = location.state || {};

  return (
    <div>
      <Navbar1 />
      <Navbar2 />
      <Navbar3 />
      <div className="confirmation-container">
        <h2>Payment Confirmation</h2>
        <p>Thank you, {userInfo?.name}! Your order has been confirmed.</p>
        <h3>Order Details</h3>
        <p>
          <strong>Email:</strong> {userInfo?.email}
        </p>
        <p>
          <strong>Shipping Address:</strong> {userInfo?.address}
        </p>
        <h4>Your order will be shipped to you soon!</h4>
        <button
          className="btn btn-primary"
          onClick={() => (window.location.href = "/")}
        >
          Return to Home
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentConfirmation;

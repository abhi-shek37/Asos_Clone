
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Navbar2 from "../components/Navbar2";
import Navbar3 from "../components/Navbar3";
import Footer from "../components/Footer";
import CartContext from "../store/CartContext";
import "./Checkout.css";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    address: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    // Navigate to PaymentConfirmation page with the userInfo
    navigate("/payment-confirmation", { state: { userInfo } });
  };

  const totalAmount = cart
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);

  return (
    <div>
      <Navbar1 />
      <Navbar2 />
      <Navbar3 />
      <div className="checkout-container">
        <h2>Checkout</h2>
        <form onSubmit={handleCheckout} className="checkout-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={userInfo.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userInfo.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Shipping Address"
            value={userInfo.address}
            onChange={handleInputChange}
            required
          />
          <h3>Order Summary</h3>
          <ul className="order-summary">
            {cart.map((item, index) => (
              <li key={index}>
                <p>{item.title}</p>
                <p>£{item.price}</p>
              </li>
            ))}
          </ul>
          <p className="total">Total: £{totalAmount}</p>
          <button type="submit" className="btn btn-primary">
            Confirm Order
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;

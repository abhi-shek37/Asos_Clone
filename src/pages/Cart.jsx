import React from 'react';
import Navbar1 from '../components/Navbar1';
import Navbar2 from '../components/Navbar2';
import Navbar3 from '../components/Navbar3';
import Footer from '../components/Footer';
import "./Product.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdDelete, MdExposurePlus1 } from "react-icons/md";
import { TbExposureMinus1 } from "react-icons/tb";
import { useContext } from 'react';
import CartContext from '../store/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, total, increaseItem, decreaseItem } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <Navbar3 />
      <div className="product-box">
        {cart.length ? (
          cart.map((item, index) => (
            <div className="products" key={index}>
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
              <h4>£{item.price}</h4>
              <h4>Quantity: {item.quantity}</h4>
              <span className="btns">
                <button onClick={() => removeFromCart(item)}>
                  <MdDelete />
                </button>
                <button onClick={() => increaseItem(item)}>
                  <MdExposurePlus1 />
                </button>
                <button onClick={() => decreaseItem(item)}>
                  <TbExposureMinus1 />
                </button>
              </span>
            </div>
          ))
        ) : (
          <h2 className="no-item">No Items in the Cart</h2>
        )}
      </div>

      <h1 className="total-amount">TOTAL: £{Math.floor(total)}</h1>
      {cart.length > 0 && (
        <div className="checkoutdiv">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/checkout")}
          >
            Checkout
          </button>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Cart;

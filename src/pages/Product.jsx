import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Navbar2 from "../components/Navbar2";
import Navbar3 from "../components/Navbar3";
import Footer from "../components/Footer";
import "./Product.css";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import CartContext from "../store/CartContext";

const Product = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const { addToCart, addToFav } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://asos-backend-riht.onrender.com/menu/getPost",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const fetchedData = await response.json();
      if (response.ok) {
        setData(fetchedData);
      } else {
        setError("Failed to fetch data");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar1 />
      <Navbar2 />
      <Navbar3 />
      {error && <h1>{error}</h1>}
      <div className="product-container">
        {data.map((item) => (
          <div
            className="product"
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`)}
          >
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <h4>£{item.price}</h4>
            <span className="btns">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(item);
                }}
              >
                <FaShoppingCart />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToFav(item);
                }}
              >
                <FaHeart />
              </button>
            </span>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Product;

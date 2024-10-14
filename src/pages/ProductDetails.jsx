import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Navbar2 from "../components/Navbar2";
import Navbar3 from "../components/Navbar3";
import Footer from "../components/Footer";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import CartContext from "../store/CartContext";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const { addToCart, addToFav } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();

        if (response.ok) {
          setProduct(data);
        } else {
          setError("Failed to fetch product details");
        }
      } catch (error) {
        setError("An error occurred while fetching the product details");
      }
    };
    fetchProduct();
  }, [id]);

  if (error) {
    return <h1>{error}</h1>;
  }

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Navbar1 />
      <Navbar2 />
      <Navbar3 />
      <div className="product-details-container">
        <div className="product-details">
          <div className="product-image">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid"
            />
          </div>
          <div className="product-info">
            <h2>{product.title}</h2>
            <p className="category">Category: {product.category}</p>
            <p className="price">£{product.price}</p>
            <p className="description">{product.description}</p>

            <div className="actions">
              <button
                className="btn btn-primary"
                onClick={() => addToCart(product)}
              >
                <FaShoppingCart /> Add to Cart
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => addToFav(product)}
              >
                <FaHeart /> Add to Favorites
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;

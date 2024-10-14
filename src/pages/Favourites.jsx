import "./Product.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdDelete } from "react-icons/md";
import React, { useContext } from "react";
import Navbar1 from "../components/Navbar1";
import Navbar2 from "../components/Navbar2";
import Navbar3 from "../components/Navbar3";
import Footer from "../components/Footer";
import CartContext from "../store/CartContext";

const Favourites = () => {
  const { favorites, removeFromFav } = useContext(CartContext);

  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <Navbar3 />
      <div className="product-box">
        {favorites.length ? (
          favorites.map((item, index) => (
            <div className="products" key={index}>
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
              <h4>£{item.price}</h4>
              <button onClick={() => removeFromFav(item)}>
                <MdDelete />
              </button>
            </div>
          ))
        ) : (
          <h2 className="no-item">No Items Available</h2>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Favourites;

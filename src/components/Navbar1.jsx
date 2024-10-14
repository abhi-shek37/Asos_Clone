
import React from 'react';
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import './Components.css';
import { Link } from 'react-router-dom';


const Navbar1 = () => {
  return (
    <div className="container">
      <div className="child">
        <div className="child1">
          <Link to="/">ASOS</Link>
        </div>
        <div className="child1">
          <Link to="/">WOMEN</Link>
        </div>
        <div className="child1">
          <Link to="/men">MEN</Link>
        </div>
      </div>
      <input
        style={{ width: "50%", borderRadius: "25px", padding: "10px" }}
        type="serach"
        placeholder="Search for items and brands"
      ></input>
      <div className="child">
        <Link to="/login">
          <FaRegUser />
        </Link>
        <Link to="/favourites">
          <FaRegHeart />
        </Link>
        <Link to="/cart">
          <IoBagOutline />
        </Link>
      </div>
    </div>
  );
}

export default Navbar1

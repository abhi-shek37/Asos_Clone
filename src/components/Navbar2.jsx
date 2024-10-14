
import React from "react";
import "./Components.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Navbar2 = () => {
  return (
    <div className="container text-center">
      <div className="row row-cols-0 row-cols-lg-10" style={{ margin: "20px" }}>
        <div className="col">
          <div className="dropdown">
            <div
              className="p-1 dropdown-toggle"
              id="dropdownNewIn"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ cursor: "pointer" }}
            >
              New in
            </div>
            <ul className="dropdown-menu" aria-labelledby="dropdownNewIn">
              <li>
                <a className="dropdown-item" href="#">
                  New Arrivals
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Best Sellers
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Limited Editions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col">
          <div className="dropdown">
            <div
              className="p-1 dropdown-toggle"
              id="dropdownClothing"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ cursor: "pointer" }}
            >
              Clothing
            </div>
            <ul className="dropdown-menu" aria-labelledby="dropdownClothing">
              <li>
                <a className="dropdown-item" href="#">
                  T-Shirts
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Jackets
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Jeans
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col">
          <div className="dropdown">
            <div
              className="p-1 dropdown-toggle"
              id="dropdownNewIn"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ cursor: "pointer" }}
            >
              Trending
            </div>
            <ul className="dropdown-menu" aria-labelledby="dropdownNewIn">
              <li>
                <a className="dropdown-item" href="#">
                  New Arrivals
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Best Sellers
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Limited Editions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col">
          <div className="dropdown">
            <div
              className="p-1 dropdown-toggle"
              id="dropdownNewIn"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ cursor: "pointer" }}
            >
              Dreses
            </div>
            <ul className="dropdown-menu" aria-labelledby="dropdownNewIn">
              <li>
                <a className="dropdown-item" href="#">
                  New Arrivals
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Best Sellers
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Limited Editions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col">
          <div className="dropdown">
            <div
              className="p-1 dropdown-toggle"
              id="dropdownNewIn"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ cursor: "pointer" }}
            >
              Shoes
            </div>
            <ul className="dropdown-menu" aria-labelledby="dropdownNewIn">
              <li>
                <a className="dropdown-item" href="#">
                  New Arrivals
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Best Sellers
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Limited Editions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col">
          <div className="dropdown">
            <div
              className="p-1 dropdown-toggle"
              id="dropdownNewIn"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ cursor: "pointer" }}
            >
              Accessories
            </div>
            <ul className="dropdown-menu" aria-labelledby="dropdownNewIn">
              <li>
                <a className="dropdown-item" href="#">
                  New Arrivals
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Best Sellers
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Limited Editions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col">
          <div className="dropdown">
            <div
              className="p-1 dropdown-toggle"
              id="dropdownNewIn"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ cursor: "pointer" }}
            >
              SportsWear
            </div>
            <ul className="dropdown-menu" aria-labelledby="dropdownNewIn">
              <li>
                <a className="dropdown-item" href="#">
                  New Arrivals
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Best Sellers
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Limited Editions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col">
          <div className="dropdown">
            <div
              className="p-1 dropdown-toggle"
              id="dropdownNewIn"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ cursor: "pointer" }}
            >
              Sale
            </div>
            <ul className="dropdown-menu" aria-labelledby="dropdownNewIn">
              <li>
                <a className="dropdown-item" href="#">
                  New Arrivals
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Best Sellers
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Limited Editions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;


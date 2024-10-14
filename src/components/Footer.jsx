import { BsInstagram } from "react-icons/bs";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaSnapchatSquare } from "react-icons/fa";
import React from "react";
import "./Components.css";

const Footer = () => {
  return (
    <>
      <hr />
      <div className="icons">
        <a href="https://www.facebook.com/ASOS/" target={"_blank"}>
          <RiFacebookBoxLine />
        </a>
        <a href="https://www.instagram.com/asos/" target={"_blank"}>
          <BsInstagram />
        </a>
        <a href="https://twitter.com/asos" target={"_blank"}>
          <FaSnapchatSquare />
        </a>

        <a href="#">
          |
        </a>

        <a href="#">
          <img src="https://images.asos-media.com/navigation/visa-png" />
        </a>
        <a href="#">
          <img src="https://images.asos-media.com/navigation/mastercard-png" />
        </a>
        <a href="#">
          <img src="https://images.asos-media.com/navigation/pay-pal-png" />
        </a>
        <a href="#">
          <img src="https://images.asos-media.com/navigation/american-express-png" />
        </a>
        <a href="#">
          <img src="https://images.asos-media.com/navigation/visa-electron-png" />
        </a>
        <a href="#">
          <img src="https://images.asos-media.com/navigation/maestro-png" />
        </a>
        <a href="#">
          <img src="https://images.asos-media.com/navigation/apple-pay-png" />
        </a>
        <a href="#">
          <img src="https://images.asos-media.com/navigation/klarna-gb-png" />
        </a>
        <a href="#">
          <img src="https://images.asos-media.com/navigation/afterpay_new-png" />
        </a>
      </div>
      <footer className="py-8">
        <div className="row footer">
          <div className="col-5 col-md-3 mb-3">
            <h5> HELP & INFORMATION </h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="https://www.asos.com/customer-care/"
                  target={"_blank"}
                  className="nav-link p-0 text-body-secondary"
                >
                  Help
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://www.asos.com/payments-and-deliveries/delivery/"
                  target={"_blank"}
                  className="nav-link p-0 text-body-secondary"
                >
                  Track Order
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://www.asos.com/payments-and-deliveries/delivery/"
                  target={"_blank"}
                  className="nav-link p-0 text-body-secondary"
                >
                  Delivery & Returns
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://www.asos.com/sitemap/"
                  target={"_blank"}
                  className="nav-link p-0 text-body-secondary"
                >
                  sitemap
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3 mb-3">
            <h5>ABOUT ASOS </h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="https://www.asos.com/about/"
                  target={"_blank"}
                  className="nav-link p-0 text-body-secondary"
                >
                  About us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://asoscareers.asos.com/"
                  target={"_blank"}
                  className="nav-link p-0 text-body-secondary"
                >
                  Careers at ASOS
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://www.asosplc.com/fashion-with-integrity/"
                  target={"_blank"}
                  className="nav-link p-0 text-body-secondary"
                >
                  Corporate responsibility
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://www.asosplc.com/"
                  target={"_blank"}
                  className="nav-link p-0 text-body-secondary"
                >
                  Investors' site
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3 mb-3">
            <h5>MORE FROM ASOS </h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="https://www.asos.com/discover/our-apps/"
                  target={"_blank"}
                  className="nav-link p-0 text-body-secondary"
                >
                  Mobile & ASOS apps
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://marketplace.asos.com/?ctaref=Global%20footer"
                  target={"_blank"}
                  className="nav-link p-0 text-body-secondary"
                >
                  ASOS Marketplace
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://www.asos.com/gift-vouchers/?ctaref=global%20footer|gift%20vouchers"
                  target={"_blank"}
                  className="nav-link p-0 text-body-secondary"
                >
                  Gift vouchers
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://www.asos.com/discover/black-friday-cyber-monday-deals/"
                  target={"_blank"}
                  className="nav-link p-0 text-body-secondary"
                >
                  Black Friday
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://thrift.plus/pages/get-started-asos"
                  target={"_blank"}
                  className="nav-link p-0 text-body-secondary"
                >
                  ASOS x Thrift+
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Discover the ASOS Credit Card
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3 mb-3">
            <h5> SHOPPING FROM: </h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  You're in India | CHANGE
                </a>
              </li>
              <li className="nav-item mb-2">
                <p className="nav-link p-0 text-body-secondary">
                  Some Of our International Sites :
                </p>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  🏳️‍🌈 🏳️‍⚧️ 🚩 🏴 🏳️ 🏳️‍⚧️ 🚩 🏳️‍⚧️ 🚩 🏴 🏳️‍🌈
                  <br />
                  🏳️‍🌈 🏳️‍⚧️ 🚩 🏴 🏳️‍🌈
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

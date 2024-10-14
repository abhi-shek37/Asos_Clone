import React from "react";
import "./home.css";
import Navbar1 from "../components/Navbar1";
import Navbar2 from "../components/Navbar2";
import Navbar3 from "../components/Navbar3";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const MenHome = () => {
  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <Navbar3 />
      <div>
        <video width="100%" height="100%" controls loop>
          <source src="/MEN.mp4" type="video/mp4" />
        </video>
        <center className="display-image">
          <Link to="/product">
            <div>
              <img src="https://content.asos-media.com/-/media/homepages/mw/2024/october/14-gbl-excl-uk-us-de-fr/mw_global_new_in_moment_870x1110.jpg" />
              <h4> NEW IN TODAY </h4>
              <p> Super-fresh finds </p>
            </div>
          </Link>

          <Link to="/product">
            <div>
              <img src="https://content.asos-media.com/-/media/homepages/mw/2024/october/14-gbl-excl-uk-us-de-fr/mw_global_asos_design_premium_moment_870x1110.jpg" />
              <h4> TERRACE TRAINERS </h4>
              <p> The OG ballers </p>
            </div>
          </Link>

          <Link to="/product">
            <div>
              <img src="https://content.asos-media.com/-/media/homepages/mw/2024/october/14-gbl-excl-uk-us-de-fr/mw_global_carhartt_moment_870x1110.jpg" />
              <h4> COTTON:ON </h4>
              <p> New-season staples </p>
            </div>
          </Link>

          <Link to="/product">
            <div>
              <img src="https://images.asos-media.com/products/topman-relaxed-fit-brushed-collared-cardigan-in-brown-marl/206556691-2?$n_480w$&wid=476&fit=constrain" />
              <h4> RELAXED TAILORING </h4>
              <p> ft. Bershka + ASOS DESIGN </p>
            </div>
          </Link>
        </center>

        <center className="Poster-image">
          <div>
            <img src="https://images.asos-media.com/products/topman-oversized-fit-full-zip-hoodie-in-black/206241033-1-black?$n_750w$&wid=750&fit=constrain" />
            <h1> TOPSHOP </h1>
            <h4> Top-Tier threads </h4>
            <Link to="/product">
              <button className="btn1">
                <h2> SHOP NOW </h2>
              </button>
            </Link>
          </div>

          <div>
            <img src="https://images.asos-media.com/products/topman-oversized-fit-full-zip-hoodie-in-black/206241033-1-black?$n_750w$&wid=750&fit=constrain" />
            <h1> SWIM ESSENTIALS </h1>
            <h4> Everything's just beachy </h4>
            <Link to="/product">
              <button className="btn1">
                <h2> SHOP NOW </h2>
              </button>
            </Link>
          </div>
        </center>

        <center className="app-section">
          <p> THE ASOS APP </p>
          <p>
            Fave piece sold out? <br />
            Get back-in-stock alerts on the app
          </p>
          <a
            href="https://www.asos.com/discover/our-apps/?ctaref=hp|unisex|banner|1|edit|appdownload&source_caller=ui&shortlink=f4jq8ws5&c=homepage_banner&pid=homepage_banner&deep_link_value=asos%3A%2F%2Fhome&af_xp=custom"
            target="_blank"
          >
            <p> DOWNLOAD NOW </p>
          </a>
        </center>

        <center>
          <h1> TRENDING BRANDS </h1>
        </center>
        <center className="brands">
          <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/tommy-hilfiger-hp-logos-256x256.jpg" />
          <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/north-face.png" />
          <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/adidas-hp-logos-256x256---v2.png" />
          <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/carhartt-hp-logos-256x256.jpg" />
          <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/ellesse-hp-logos-256x256.jpg" />
          <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/dr-martens-hp-logos-256x256.jpg" />
        </center>
      </div>
      <Footer />
    </>
  );
};

export default MenHome;

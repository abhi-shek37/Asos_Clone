import React from "react";
import './home.css';
import { Link } from "react-router-dom";

const WomenHome = () => {
  return (
    <div>
      <video width="100%" height="100%" controls loop>
        <source src="src\assets\WOMEN.mp4" type="video/mp4" />
      </video>
      <center className="display-image">
        <Link to="/product">
          <div>
            <img src="src\assets\ww_gbl_knitwear_moment_870x1110.jpg" />
            <h4> KNITWEAR </h4>
            <p> New Drops from huge brands </p>
          </div>
        </Link>

        <Link to="/product">
          <div>
            <img src="src\assets\ww_global_inkey_list_moment_870x1110.jpg" />
            <h4> GORPCORE GEAR </h4>
            <p> All-weather streatwear </p>
          </div>
        </Link>

        <Link to="/product">
          <div>
            <img src="src\assets\ww_global_natural_wakening_moment_870x1110.jpg" />
            <h4> NEW: THE INKEY LIST </h4>
            <p> Plumping lip balms in new shades</p>
          </div>
        </Link>

        <Link to="/product">
          <div>
            <img src="src\assets\ww_global_new_szn_fits_moment_870x1110.jpg" />
            <h4> NEW-SEASON DROPS </h4>
            <p> The freshest fits </p>
          </div>
        </Link>
      </center>

      <center className="Poster-image">
        <div>
          <img src="src\assets\d.jpg" />
          <h1> TOPSHOP </h1>
          <h4> Your autum go-to </h4>
          <Link to="/product">
            <button className="btn1">
              <h2> SHOP NOW </h2>
            </button>
          </Link>
        </div>

        <div>
          <img src="src\assets\e.jpg" />
          <h1> ROMANTIC ERA </h1>
          <h4> Ruffle details, incoming </h4>
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
        <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/monkl-hp-logos-256x256.jpg" />
        <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/never-fully-dressed-hp-logos-256x256.png" />
        <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/1x12x---test.png" />
        <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/reclaimed-vintage-hp-logos-256x256.jpg" />
        <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/collusion-hp-logos-256x256.jpg" />
        <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/weekday-hp-logos-256x256.jpg" />
      </center>
    </div>
  );
};

export default WomenHome;

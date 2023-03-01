import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <img src="./img/banner6.jpg" alt="" />
      <div className="banner-content">
        <h3>
          SEEK YOUR <span>SHOES</span>
        </h3>
        <div className="banner-subcontent">
          <p>
            This is a celebration of everything that moves you. For the power of
            choosing and the freedom of being.
            <br />
            Here's to the big, beautiful mess of movement and midfulness that
            simply makes you feel good.
          </p>
        </div>
        <button type="button" className="banner-btn">
          About
        </button>
      </div>
    </div>
  );
};

export default Banner;

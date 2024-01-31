import React from "react";
import "./Banner.scss";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="banner__wrapper">
      <img src="images/background1copy.TIFF" alt="" />
      <div className="banner__text">
        <h2>Welcome to MyGameHaven360</h2>
        <h1>
          <span>BROWSE</span> OUR POPULAR <br /> GAMES HERE
        </h1>
        <Link to='/browse'>
        <button >Browse Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner
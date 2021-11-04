import React from "react";

import google from "../../../assets/image/google-play-badge.svg";
import apple from "../../../assets/image/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917-1.svg";

import "./market.scss";


const Market = () => {

  return (
    <div className="header__market">
      <a href="https://play.google.com/store">
        <img className="header__google-apple-image" src={google} alt="Googleplay"/>
      </a>
      <a href="https://www.apple.com/store">
        <img className="header__google-apple-image" src={apple} alt="App Store"/>
      </a>
    </div>
  )

}

export default Market;
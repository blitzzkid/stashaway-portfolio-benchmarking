import React from "react";
import "./Header.css";
import stashawaylogo from "../../assets/stashaway-logo.png";

export const Header = () => {
  return (
    <div className="header__container">
      <div className="container__box">
        <img src={stashawaylogo} alt="stashaway-logo"></img>
        <div className="container__menu">
          <span>Home</span>
          <span>Manage deposits</span>
          <span>Refer a friend</span>
          <span>Support</span>
          <span>Oliver</span>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import logo from "../assets/logo.png";

const Header = () => (
  <header className="header" onClick={() => window.location.reload()}>
    <img className="header__img" src={logo} alt="Logo header"></img>
  </header>
);

export default Header;

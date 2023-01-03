import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";
import logo from "../../assets/logo.svg";

const Menu = () => {
  return (
    <ul>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#features">Features</a>
      </li>
      <li>
        <a href="#team">Team</a>
      </li>
      <li>
        <a href="#signup">Sign in</a>
      </li>
    </ul>
  );
};

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const openMenuHandler = () => {
    setIsVisible(true);
  };

  const closeMenuHandler = () => {
    setIsVisible(false);
  };

  return (
    <div className="fylo__navbar">
      <div className="fylo__navbar-logo">
        <img src={logo} alt="Fylo logo" />
      </div>

      <div className="fylo__navbar-nav">
        <Menu />
      </div>

      <div className="fylo__navbar-toggle">
        {isVisible && (
          <RiCloseLine color="#fff" size={33} onClick={closeMenuHandler} />
        )}
        {!isVisible && (
          <RiMenu3Line color="#fff" size={33} onClick={openMenuHandler} />
        )}
        {isVisible && (
          <div className="fylo__navbar-toggle_container scale-up-anim">
            <div className="fylo__navbar-toggle_container--links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

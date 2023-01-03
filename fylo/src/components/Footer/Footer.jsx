import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="fylo__footer">
      <div className="fylo__footer-container">
        <div className="fylo__footer-container_logo">
          <img src={logo} alt="Fylo logo" />
        </div>

        <div className="fylo__footer-container_info">
          <div className="fylo__footer-container_info--location">
            <i class="fa-solid fa-location-dot"></i>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>

          <div className="fylo__footer-container_info--contact">
            <p>
              <i class="fa-solid fa-phone"></i>+1-543-123-4567
            </p>
            <p>
              <i class="fa-solid fa-envelope"></i>example@fylo.com
            </p>
          </div>

          <div className="fylo__footer-container_info--nav">
            <p>About Us</p>
            <p>Jobs</p>
            <p>Press</p>
            <p>Blog</p>
          </div>

          <div className="fylo__footer-container_info--policy">
            <p>Contact Us</p>
            <p>Terms</p>
            <p>Privacy</p>
          </div>

          <div className="fylo__footer-container_info--socials">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

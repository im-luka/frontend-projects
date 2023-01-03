import React from "react";
import "./Productive.css";
import productiveImg from "../../assets/illustration-stay-productive.png";
import linkImg from "../../assets/icon-arrow.svg";

const Productive = () => {
  return (
    <div className="fylo__productive" id="team">
      <div className="fylo__productive-image">
        <img src={productiveImg} alt="productive team" />
      </div>

      <div className="fylo__productive-info">
        <h1>Stay productive, wherever you are</h1>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <div className="fylo__productive-info_link">
          <a href="#productive">See how Fylo works</a>
          <img src={linkImg} alt="see how fylo works" />
        </div>
      </div>
    </div>
  );
};

export default Productive;

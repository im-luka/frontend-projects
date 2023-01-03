import React from "react";
import "./Cover.css";
import coverImg from "../../assets/illustration-intro.png";

const Cover = () => {
  return (
    <div className="fylo__cover" id="home">
      <div className="fylo__cover_div">
        <div className="fylo__cover_div-image">
          <img src={coverImg} alt="cover" />
        </div>

        <div className="fylo__cover_div-info">
          <h1>All your files in one secure location, accessible anywhere.</h1>
          <p>
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
        </div>

        <div className="fylo__cover_div-btn">
          <button type="button">Get started</button>
        </div>
      </div>
    </div>
  );
};

export default Cover;

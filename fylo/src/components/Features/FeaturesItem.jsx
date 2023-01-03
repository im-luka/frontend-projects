import React from "react";
import "./FeaturesItem.css";

const FeaturesItem = (props) => {
  return (
    <div className="fylo__features-item">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default FeaturesItem;

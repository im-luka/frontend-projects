import React from "react";
import "./TeamItem.css";

const TeamItem = (props) => {
  return (
    <div className="fylo__team-item">
      <div
        className={
          props.id === 0 ? "fylo__team-item--first" : "fylo__team-item--reset"
        }
      ></div>
      <p>{props.description}</p>

      <div className="fylo__team-item_author">
        <img src={props.img} alt="user" />
        <div className="fylo__team-item_author--info">
          <h3>{props.author}</h3>
          <p>{props.title}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamItem;

import "./style.css";
import React from "react";

function Card(props) {
  return (
    <div className="card-main">
      {React.cloneElement(props.icon, { className: "card-icon" })}
      <p style={props.descriptionStyle}>{props.description}</p>
    </div>
  );
}

export default Card;

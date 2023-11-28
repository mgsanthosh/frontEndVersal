import React from "react"
import "./CustomCard.scss";

const CustomCard = (props) => {
  return (
    <div className="customCardContainer">
      {props.children}
    </div>
  )
};

export default CustomCard;

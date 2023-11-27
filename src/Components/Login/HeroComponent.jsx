import React from "react"
import "../../App.scss";

const HeroComponent = (props) => {
  return (
    <div className="heroComponentMainContainer">
      <div className="heroComponentSubText">Your one-stop shop for </div>
      <div className="heroComponentBoldText">Premium Payments</div>
      <div className="heroComponentDescription">
      Pay your premiums using your preferred method, whether it's credit card, debit card, or bank transfer. We offer flexible payment options to suit your needs.
      </div>
    </div>
  )
};

export default HeroComponent;

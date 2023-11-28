import React, {useEffect} from 'react';
import "../../App.scss";
import AOS from "aos";
import 'aos/dist/aos.css';

const HeroComponent = (props) => {
    useEffect(() => {
        AOS.init({
            // easing: "ease-out-cubic",
            once: true,
            offset: 50,
            duration: 1000
        });
    }, []);
    
  return (
    <div className="heroComponentMainContainer">
      <div className="heroComponentSubText" data-aos="fade-up">Your one-stop shop for </div>
      <div className="heroComponentBoldText" data-aos="fade-up" data-aos-delay="100">Premium Payments</div>
      <div className="heroComponentDescription" data-aos="fade-up" data-aos-delay="200">
      Pay your premiums using your preferred method, whether it's credit card, debit card, or bank transfer. We offer flexible payment options to suit your needs.
      </div>
    </div>
  )
};

export default HeroComponent;

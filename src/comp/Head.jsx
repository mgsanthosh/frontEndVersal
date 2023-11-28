import React, { useState, useEffect } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Button } from 'reactstrap';

import { NavLink, useNavigate } from 'react-router-dom';
import { useWContext } from '../helper/contextapi';
import "./Head.scss";
import AOS from "aos";
import 'aos/dist/aos.css';

const MyNavbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const { login_state } = useWContext();

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
        // easing: "ease-out-cubic",
        once: true,
        offset: 50,
        duration: 1000
    });
}, []);


  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="headerMainContainer">
          <div className="headerNavLinks">
            <div  data-aos="zoom-in" data-aos-delay="100" onClick={() => navigate("/")}>
              <img className="headerLogo" src="./img/logo.png"></img>
            </div>
            <div className="headerLinks"  data-aos="zoom-in" data-aos-delay="200" onClick={() => navigate("/about")}>Home</div>
            <div className="headerLinks"  data-aos="zoom-in" data-aos-delay="200" onClick={() => navigate("/about")}>About Us</div>
            <div></div>
          </div>
      </div>

    </>

  );
};

export default MyNavbar;

import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Button } from 'reactstrap';

import { NavLink } from 'react-router-dom';
import { useWContext } from '../helper/contextapi';

const MyNavbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const { login_state } = useWContext();


  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <Navbar  className='navbar-dark bg-dark' expand="lg">
      <div className="container-fluid">
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/deposit-premium" className="nav-link">Deposit Premium</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" className="nav-link">About</NavLink>
            </NavItem>
          </Nav>
          <NavLink to={login_state ? 'logout' : 'login'}>
            <Button style={{height:"30px",lineHeight:"10px"}} color="warning" outline>
              {login_state ? 'Logout' : 'Login'}
            </Button>
          </NavLink>
        </Collapse>
      </div>
    </Navbar>
    <div className='text-center mt-5'>
    <img style={{width:"10%"}} src="./img/logo.png"/>
    </div>
    </>

  );
};

export default MyNavbar;

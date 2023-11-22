import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Input,
  FormGroup,
  Label,
  Button,
} from 'reactstrap';
import { useWContext } from '../helper/contextapi';

function Logout() {

    const navigate = useNavigate();
    const { updateLog } = useWContext();


    // Redirect to another page when loout
    useEffect(() => {
        localStorage.removeItem("token")
        updateLog('logout')
        navigate('/login');
        
    }, [navigate]);


  return (
    <>
    </>
  );
}

export default Logout;

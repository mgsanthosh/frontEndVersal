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
  import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../Screens/Login/LoginScreen.scss";
const LoginForm = (props) => {

    const [username, setUsername] = useState('');
    const [isError, setError] = useState(false);
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
  return (
    <div className="loginFormMainContainer">
                <div className="authenticationHeading">Login</div>
                <div><img src="./img/loginPic.png" className="loginFormImage"></img></div>

        <div className="loginFormContainer">

      <FormGroup  floating>
                <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Label for="exampleEmail">
                    Email
                </Label>
                </FormGroup>
                {' '}
                <FormGroup floating>
                <Input
                    id="examplePassword"
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <Label for="examplePassword">
                    Password
                </Label>
                </FormGroup>
    </div>
    <div className="authenticationButton">LOGIN</div>
    <div className="authenticationChangeText">New User? Sign Up</div>


        </div>
    
  )
};

export default LoginForm;

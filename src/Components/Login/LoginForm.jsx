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
const LoginForm = ({handleLogin, handleSignup, handleAuthTypeChange}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const onLoginClick = () => {
      if(username === '' || password === '') {
        setError("Please check the fields")
      } else {
       const httpData = {
          "email": username,
          "password": password
       }
      
        handleLogin(httpData);
        console.log(httpData);

      }
    }

    useEffect(() => {
        setError('');
    }, [username, password])

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
    <div className='errorText'>{error}</div>
    <div className="authenticationButton" onClick={() => onLoginClick()}>LOGIN</div>
    <div className="authenticationChangeText" onClick={() => handleAuthTypeChange()}>New User? Sign Up</div>


        </div>
    
  )
};

export default LoginForm;

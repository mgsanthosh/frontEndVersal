import React from "react"
import "./LoginScreen.scss";
import LoginForm from "../../Components/Login/LoginForm";
import HeroComponent from "../../Components/Login/HeroComponent";

const LoginScreen = (props) => {


  return (
    <div className="loginMainContainer">
        <div>
            <HeroComponent></HeroComponent>
        </div>
        <div></div>
      <div className="authenticationFormCard"><LoginForm></LoginForm></div>
    </div>
  ) 
};

export default LoginScreen;

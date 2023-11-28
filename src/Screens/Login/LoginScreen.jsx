import React, {useEffect} from 'react';
import "./LoginScreen.scss";
import LoginForm from "../../Components/Login/LoginForm";
import HeroComponent from "../../Components/Login/HeroComponent";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

const LoginScreen = (props) => {
    useEffect(() => {
        AOS.init({
            once: true,
            offset: 50,
            duration: 1000
        });
    }, []);
    const navigate = useNavigate();

    const handleLogin = () => {
        console.log("Handle Login Clicked");
        navigate("/dashboard")
    }

    const handleSignUp = () => {
        console.log("Handle Signup Clicked")

    }

    const handleAuthTypeChange = () => {
        console.log("Auth Type Changes")
    }

  return (
    <div className="loginMainContainer">
        <div>
            <HeroComponent></HeroComponent>
        </div>
        <div className="dummyContainer"></div>
      <div data-aos="zoom-out" data-aos-delay="300" className="authenticationFormCard"><LoginForm handleLogin={handleLogin} handleSignUp={handleSignUp}
      handleAuthTypeChange={handleAuthTypeChange}></LoginForm></div>
    </div>
  ) 
};

export default LoginScreen;

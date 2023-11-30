import React, {useEffect, useState} from 'react';
import "./LoginScreen.scss";
import LoginForm from "../../Components/Login/LoginForm";
import HeroComponent from "../../Components/Login/HeroComponent";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import { useWContext } from "../../helper/contextapi"
import axiosInstance from '../../Utils/httpCalls';

const LoginScreen = (props) => {
    const { updateLog, loader, setLoader } = useWContext();
  
    const [username, setUsername] = useState('');
    const [isError, setError] = useState(false);
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        AOS.init({
            once: true,
            offset: 50,
            duration: 1000
        });
    }, []);

    const handleLogin = (httpData) => {
        console.log("Handle Login Clicked", httpData);

        setLoader(true);

        // const timeOut = setTimeout(() => {
        //     console.log("TIME OUT CALLED");
        //     setLoader(false);
        //     clearTimeout(timeOut);
        //            localStorage.setItem('token',"HHyvloJi0VZH32vCpOi6HkFVBHv23GEdX5r9hUm4aJKByZvOkhbBzOgcL81tbCQD")
        // navigate("/dashboard")
        // }, [3000])

        axiosInstance.post("users/token", httpData).then((response) => {
            console.log("The Token Response ", response);
            localStorage.setItem('userData', JSON.stringify(response['data']));
            navigate("/dashboard");
        }).catch((err) => {
            console.log("Bad Credentials");
            alert("Bad Credentials")
        }).finally(() => {
            setLoader(false);
        })
 
    }

    const handleSignUp = () => {
        console.log("Handle Signup Clicked")

    }

    const handleAuthTypeChange = () => {
        console.log("Auth Type Changes")
    }

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("userData"));
        if(userData) {
            navigate("/dashboard")
        }
    }, [])

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

import axios from "axios";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
    baseURL: ' http://35.154.145.125:8090/'
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if(token) {
            config.headers['Authorization'] = 'Bearer ' + token;
            
        }
        config.headers['Content-Type'] = 'application/json';
        config.headers['Access-Control-Allow-Origin'] = "*";
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const errorCode = error["response"]["status"];
        if(errorCode === 403) {
           window.location.href = "/"
        }
    }
)

export default axiosInstance;
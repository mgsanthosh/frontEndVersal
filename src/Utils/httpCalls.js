import axios from "axios";

const axiosInstance = axios.create({
    baseURL: '//35.154.145.125:8090/'
});

axiosInstance.interceptors.request.use(
    (config) => {
        try {
            const userData = JSON.parse(localStorage.getItem('userData'));
            const token = userData["token"];
            console.log("The Token is ", token);
            if(token) {
                config.headers['Authorization'] = 'Bearer ' + token;
            }
        } catch {
            console.log("No User Data Found")
        } finally {
            config.headers['Content-Type'] = 'application/json; charset=UTF-8';
            config.headers['Access-Control-Allow-Origin'] = '*';
            config.withCredentials = true;
        }
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
            const timeOut = setTimeout(() => {
                clearTimeout(timeOut);
                localStorage.removeItem("userData");
                window.location.href = "/"
            }, 3000)
    
        }
    }
)

export default axiosInstance;
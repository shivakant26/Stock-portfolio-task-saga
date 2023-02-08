import axios from "axios";


const instance = axios.create({
    baseURL : "http://localhost:5000"
})

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    document.getElementById("overlay").style.display = "block";
    return config;
  }, function (error) {
 
    return Promise.reject(error);
  });

instance.interceptors.response.use(function (response) {
    document.getElementById("overlay").style.display = "none";
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

export default instance;
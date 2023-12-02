
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import axios from "axios";


// Creating a custom Axios instance with a base URL
const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

// Custom hook for using the secure Axios instance
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();

    // Request interceptor to add the authorization header for every secure API call
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    // Response interceptor to handle 401 and 403 status codes
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;

        // For 401 or 403, log out the user and redirect to the login page
        if (status === 401 || status === 403) {
            await logOut();
            navigate('/login');
        }

        return Promise.reject(error);
    })

    // Return the configured axiosSecure instance
    return axiosSecure;
};

export default useAxiosSecure;

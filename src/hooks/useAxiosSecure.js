import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000"
});

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOutUser } = useAuth();

    // request interceptor
    axiosSecure.interceptors.request.use(config => {
        const token = localStorage.getItem("access_token");
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, err => Promise.reject(err));

    // response interceptor
    axiosSecure.interceptors.response.use(res => res,
        async (err) => {
            const statusCode = err.response?.status;
            if (statusCode === 401 || statusCode === 403) {
                await logOutUser();
                navigate("/login");
            }
            return Promise.reject(err);
        });

    return axiosSecure;
};

export default useAxiosSecure;

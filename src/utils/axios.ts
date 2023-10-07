import axios from "axios";
export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_DOMAIN!,
});

// Add an interceptor to modify the request before it is sent
axiosInstance.interceptors.request.use((config) => {
    // set API secret key in request headers
    config.headers.set("API_SECRET", process.env.NEXT_PUBLIC_API_SECRET!)
    return config;
});



import axios, { type AxiosRequestConfig } from "axios";
export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_DOMAIN!,
});

// Add an interceptor to modify the request before it is sent
axiosInstance.interceptors.request.use((config) => {
    // Extract the pathname from the URL
    const pathname = new URL(config.url!, axiosInstance.defaults.baseURL).pathname;

    // Add your API secret key as a query parameter
    config.params = {
        ...config.params, // Preserve existing query parameters if any
        [process.env.NEXT_PUBLIC_ASKN!]: process.env.NEXT_PUBLIC_API_SECRET!,
    };
    console.log("config:", config)
    return config;
});



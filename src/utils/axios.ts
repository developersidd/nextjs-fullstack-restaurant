import axios from "axios";
export const axiosHttp = axios.create({
    baseURL: process.env.NEXT_PUBLIC_DOMAIN!,
});
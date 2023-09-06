import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
console.log(process.env.DOMAIN!)
export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.DOMAIN!
    }),
    endpoints: (builder) => ({}),
    tagTypes: []
});
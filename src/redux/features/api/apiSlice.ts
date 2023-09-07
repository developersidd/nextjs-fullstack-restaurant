import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
console.log(process.env.NEXT_PUBLIC_DOMAIN!)
export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_DOMAIN!
    }),
    endpoints: (builder) => ({}),
    tagTypes: []
});
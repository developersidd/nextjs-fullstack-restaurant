import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseQuery = fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_DOMAIN!}`,
    prepareHeaders: async (headers, { getState, endpoint }) => {
        return headers;
    }
});

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: async (arg, api, extraOptions) => {
        let path = `${arg}${arg?.includes("?") ? `&` : "?"}${process.env.NEXT_PUBLIC_ASKN}=${process.env.NEXT_PUBLIC_API_SECRET}`;
        const result = await baseQuery(path, api, extraOptions);
        return result;
    },
    endpoints: (builder) => ({}),
    tagTypes: []
});
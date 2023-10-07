import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseQuery = fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_DOMAIN!}`,
    prepareHeaders: async (headers, { getState, endpoint }) => {
        headers.set("API_SECRET", process.env.NEXT_PUBLIC_API_SECRET!)
        const isAdmin = (getState() as any)?.user?.user?.isAdmin!
        if (isAdmin) {
            headers.set("IS_ADMIN", isAdmin)
        }
        return headers;
    }
});

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: async (arg, api, extraOptions) => {
        const path = `${(arg?.url || arg)?.includes("?") ? `&` : "?"}${process.env.NEXT_PUBLIC_ASKN}=${process.env.NEXT_PUBLIC_API_SECRET}`;
        const totalPath = typeof arg === "string" ? `${arg}${path}` : { ...arg, url: `${arg?.url}${path}` }
        const result = await baseQuery(totalPath, api, extraOptions);
        return result;
    },
    endpoints: (builder) => ({}),
    tagTypes: []
});
import { apiSlice } from "../api/apiSlice";

export const signInApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        signin: builder.mutation({
            query: (data) => ({
                url: "/signin",
                method: "POST",
                body: data
            })
        })
    }),
});

export const { useSigninMutation } = signInApi
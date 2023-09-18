import { apiSlice } from "../api/apiSlice";

export const signInApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        signin: builder.mutation({
            query: (data) => ({
                url: `/auth/signin?${process.env.NEXT_PUBLIC_ASKN}=${process.env.NEXT_PUBLIC_API_SECRET}`,
                method: "POST",
                body: data
            })
        })
    }),
});

export const { useSigninMutation } = signInApi
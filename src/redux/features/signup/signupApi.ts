import { apiSlice } from "../api/apiSlice";

export const signUpApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (data) => ({
                url: `/auth/signup?${process.env.NEXT_PUBLIC_ASKN}=${process.env.NEXT_PUBLIC_API_SECRET}`,
                method: "POST",
                body: data
            })
        })
    }),
});

export const { useSignupMutation } = signUpApi
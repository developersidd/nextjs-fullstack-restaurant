import { apiSlice } from "../api/apiSlice";

export const signUpApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (data) => ({
                url: "/api/auth/signup",
                method: "POST",
                body: data
            })
        })
    }),
});

export const { useSignupMutation } = signUpApi
import { apiSlice } from "../api/apiSlice";
import { setUser } from "../user/userSlice";

export const signInApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        signin: builder.mutation({
            query: (data) => ({
                url: `/auth/signin`,
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const res = await queryFulfilled;
                    const user = res?.data?.data?.user;
                    if (user?.email) {
                        dispatch(setUser(user));
                    }
                } catch (error: any) { }
            }
        })
    }),
});

export const { useSigninMutation } = signInApi
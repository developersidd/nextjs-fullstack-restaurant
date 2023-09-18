import { User } from "@/types";
import { apiSlice } from "../api/apiSlice";
import { setUser } from "./userSlice";

export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query<{ data: User }, null>({
            query: () => `/user?${process.env.NEXT_PUBLIC_ASKN}=${process.env.NEXT_PUBLIC_API_SECRET}`,
            async onQueryStarted(arg, { dispatch, queryFulfilled, }) {
                const res = await queryFulfilled;
                console.log("res:", JSON.stringify(res))
                const user = res?.data?.data;
                console.log("user:", user)
                if (user?.email) {
                    dispatch(setUser(user));
                }
            }
        }),
        logout: builder.query<null, null>({
            query: () => `/auth/logout?${process.env.NEXT_PUBLIC_ASKN}=${process.env.NEXT_PUBLIC_API_SECRET}`,
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const res = await queryFulfilled;
                console.log("res:", JSON.stringify(res))
                if (res?.data) {
                    dispatch(setUser({}));
                }
            }
        }),
    }),
})

export const { useGetUserQuery, useLogoutQuery } = userApi;
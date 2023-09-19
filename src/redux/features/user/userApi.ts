import type { QueryResponse, User } from "@/types";
import { apiSlice } from "../api/apiSlice";
import { setUser } from "./userSlice";

export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query<QueryResponse<User>, void>({
            query: () => `/user?${process.env.NEXT_PUBLIC_ASKN}=${process.env.NEXT_PUBLIC_API_SECRET}`,
            async onQueryStarted(arg, { dispatch, queryFulfilled, }) {
                const res = await queryFulfilled;
                const user = res?.data?.data;
                if (user?.email) {
                    dispatch(setUser(user));
                }
            }
        }),
        logout: builder.query<QueryResponse<string>, void>({
            query: () => `/auth/logout?${process.env.NEXT_PUBLIC_ASKN}=${process.env.NEXT_PUBLIC_API_SECRET}`,
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const res = await queryFulfilled;
                if (res?.data) {
                    dispatch(setUser({}));
                }
            }
        }),
    }),
})

export const { useGetUserQuery, useLogoutQuery } = userApi;
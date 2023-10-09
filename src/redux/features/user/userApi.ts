import type { QueryResponse, TypeUser } from "@/types";
import { apiSlice } from "../api/apiSlice";
import { setUser } from "./userSlice";

export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query<QueryResponse<TypeUser>, void>({
            query: () => `/user`,
            async onQueryStarted(arg, { dispatch, queryFulfilled, }) {
                try {
                    const res = await queryFulfilled;
                    const user = res?.data?.data;
                    if (user?.email) {
                        dispatch(setUser(user));
                    }
                } catch (error: any) {

                }
            }
        }),
        logout: builder.query<QueryResponse<string>, void>({
            query: () => `/auth/logout`,
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const res = await queryFulfilled;
                    if (res?.data) {
                        dispatch(setUser({}));
                    }
                } catch (error: any) { }
            }
        }),
    }),
})

export const { useGetUserQuery, useLogoutQuery } = userApi;
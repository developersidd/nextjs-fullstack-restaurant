import { User } from "@/types";
import { apiSlice } from "../api/apiSlice";
import { setUser } from "./userSlice";

export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query<{ data: User }, null>({
            query: () => `/user?${process.env.NEXT_PUBLIC_ASKN}=${process.env.NEXT_PUBLIC_API_SECRET}`,
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const res = await queryFulfilled;
                const user = res?.data?.data;
                if (user?.email) {
                    dispatch(setUser(user));
                }
            }
        })
    }),
})

export const { useGetUserQuery } = userApi;
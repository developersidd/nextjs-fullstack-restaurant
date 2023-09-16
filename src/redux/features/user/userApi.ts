import { FoodDocument } from "@/models/foodModel";
import { apiSlice } from "../api/apiSlice";
import { UserDocument } from "@/models/userModel";

export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getFoods: builder.query<{ data: UserDocument }, string>({
            query: (id: string) => `/user/${id}`,
        }),
    }),
});

export const { useGetFoodsQuery } = userApi;
import { FoodDocument } from "@/models/foodModel";
import { apiSlice } from "../api/apiSlice";

export const foodApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getFoods: builder.query<{ data: FoodDocument[] }, string>({
            query: (category: string) => `/food?category=${category}&${process.env.NEXT_PUBLIC_ASKN}=${process.env.NEXT_PUBLIC_API_SECRET}`,
        }),
    }),
});

export const { useGetFoodsQuery } = foodApi;
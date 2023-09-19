import type { Food } from "@/types";
import { apiSlice } from "../api/apiSlice";
import { QueryResponse } from "@/types";

export const foodApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
<<<<<<< HEAD
        getFoods: builder.query<QueryResponse<FoodDocument[]> , string>({
=======
        getFoods: builder.query<{ data: Food[] }, string>({
>>>>>>> 32715497d311fea6bf2356e9a7ad9094cb583d10
            query: (category: string) => `/food?category=${category}&${process.env.NEXT_PUBLIC_ASKN}=${process.env.NEXT_PUBLIC_API_SECRET}`,
        }),
        getFood: builder.query<{ data: Food }, string>({
            query: (id: string) => `/food/${id}?${process.env.NEXT_PUBLIC_ASKN}=${process.env.NEXT_PUBLIC_API_SECRET}`,
        }),
    }),
});

export const { useGetFoodsQuery, useGetFoodQuery } = foodApi;
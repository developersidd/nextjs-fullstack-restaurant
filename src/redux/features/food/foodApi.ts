import { FoodDocument } from "@/models/foodModel";
import type { TypeFood } from "@/types";
import { QueryResponse } from "@/types";
import { apiSlice } from "../api/apiSlice";

export const foodApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getFoods: builder.query<QueryResponse<FoodDocument[]>, string>({
            query: (category: string) => `/food?category=${category}`,
        }),
        getFood: builder.query<{ data: TypeFood }, string>({
            query: (id: string) => `/food/${id}`,
        }),
    }),
});

export const { useGetFoodsQuery, useGetFoodQuery } = foodApi;
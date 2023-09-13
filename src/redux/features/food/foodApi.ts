import { FoodDocument } from "@/models/foodModel";
import { apiSlice } from "../api/apiSlice";

export const foodApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getFoods: builder.query<{ data: FoodDocument[] }, null>({
            query: () => "/food",
        }),

    }),
});

export const { useGetFoodsQuery } = foodApi;
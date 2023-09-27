import { FoodDocument } from "@/models/foodModel";
import type { TypeFood } from "@/types";
import { QueryResponse } from "@/types";
import { apiSlice } from "../api/apiSlice";
import { setFood, setRelatedFoods } from "./foodSlice";

export const foodApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getFoods: builder.query<QueryResponse<FoodDocument[]>, string>({
            query: (category: string) => `/food?category=${category}`,
        }),
        getFood: builder.query<{ data: { food: TypeFood, relatedFoods: TypeFood[] } }, string>({
            query: (id: string) => `/food/${id}`,
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const res = await queryFulfilled;
                if (res?.data) {
                    console.log("res.data?.data?.relatedFoods:", JSON.stringify(res.data?.data?.relatedFoods))
                    dispatch(setFood(res.data?.data?.food));
                    dispatch(setRelatedFoods(res.data?.data?.relatedFoods));
                }
            }
        }),
    }),
});

export const { useGetFoodsQuery, useGetFoodQuery } = foodApi;
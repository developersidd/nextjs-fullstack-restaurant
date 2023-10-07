import type { TypeFood } from "@/types";
import { QueryResponse } from "@/types";
import { apiSlice } from "../api/apiSlice";
import { setFood, setRelatedFoods } from "./foodSlice";

export const foodApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getFoods: builder.query<QueryResponse<TypeFood[]>, string>({
            query: (category: string) => `/food?category=${category}`,
        }),
        getFood: builder.query<QueryResponse<{ food: TypeFood, relatedFoods: TypeFood[] }>, string>({
            query: (id: string) => `/food/${id}`,
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const res = await queryFulfilled;
                    if (res?.data) {
                        dispatch(setFood(res.data?.data?.food));
                        dispatch(setRelatedFoods(res.data?.data?.relatedFoods));
                    }
                } catch (error: any) {

                }
            }
        }),
    }),
});

export const { useGetFoodsQuery, useGetFoodQuery } = foodApi;
export const { getFood, getFoods } = foodApi.endpoints;
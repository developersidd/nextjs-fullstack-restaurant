import type { TypeReview } from "@/types";
import { QueryResponse } from "@/types";
import { apiSlice } from "../api/apiSlice";
//import { setFood, setRelatedFoods } from "./foodSlice";

export const reviewApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getReviews: builder.query<QueryResponse<TypeReview[]>, string>({
            query: (category: string) => `/reviews`,
        }),
        addReview: builder.mutation<void, Omit<Omit<TypeReview, 'id'>, 'createdAt'>>({
            query: (review) => {
                return {
                    url: "/review",
                    method: "POST",
                    body: review
                }
            }
        })
    }),
});

export const { useAddReviewMutation, useGetReviewsQuery } = reviewApi;
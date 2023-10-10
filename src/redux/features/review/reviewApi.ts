import type { TypeReview } from "@/types";
import { QueryResponse } from "@/types";
import { apiSlice } from "../api/apiSlice";
//import { setFood, setRelatedFoods } from "./foodSlice";

export const reviewApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getReviews: builder.query<QueryResponse<TypeReview[]>, void | string>({
            query: (id) => `/review?id=${id}`,
        }),
        addReview: builder.mutation<void, Omit<Omit<TypeReview, 'id'>, 'createdAt'>>({
            query: (review) => {
                return {
                    url: "/review",
                    method: "POST",
                    body: review
                }
            },
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const patchResult = dispatch(
                    apiSlice.util.updateQueryData('getReviews', arg.food.id, (draft) => {
                        ((draft as any)?.data as [])?.push(arg)
                    })
                )
                try {
                    await queryFulfilled;
                } catch {
                    patchResult.undo()
                }
            },
        })
    }),
});

export const { useAddReviewMutation, useGetReviewsQuery } = reviewApi;
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
            async onQueryStarted(review, { dispatch, queryFulfilled }) {

                try {
                    const data = await queryFulfilled;
                    console.log("data:", JSON.stringify(data.data));
                    if (data) {
                        const patchResult = dispatch(
                            reviewApi.util.updateQueryData('getReviews', review.food.id, (draft) => {
                                //draft?.data?.push(data)
                                //Object.assign(draft, review)
                                //return [...draft?.data, { ...arg }]
                            })
                        )
                    }
                } catch {
                    //patchResult.undo()
                }
            },
        })
    }),
});

export const { useAddReviewMutation, useGetReviewsQuery } = reviewApi;
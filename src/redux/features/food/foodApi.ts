import { apiSlice } from "../api/apiSlice";

export const foodApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getFoods: builder.query({
            query: () => "/food",
        })
    }),
});

export const { useGetFoodsQuery } = foodApi
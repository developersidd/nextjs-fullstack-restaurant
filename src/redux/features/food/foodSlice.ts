import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: "",
};

const foodSlice = createSlice({
    name: "food",
    initialState,
    reducers: {
        filterFoodByCategory: (state, action) => {
            state.category = action.payload
        },
    }
});

export const { filterFoodByCategory, } = foodSlice.actions;
export default foodSlice.reducer; 
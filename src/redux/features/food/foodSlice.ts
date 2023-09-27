import { TypeFood } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

type TypeInitialState = {
    category: string,
    food: TypeFood,
    relatedFoods: TypeFood[]
};

const initialState: TypeInitialState = {
    category: "burger",
    food: {
        _id: "",
        title: "",
        description: "",
        price: 0,
        image: "",
        weight: 0,
        dimension: "",
        category: "",
    },
    relatedFoods: []
};

const foodSlice = createSlice({
    name: "food",
    initialState,
    reducers: {
        filterFoodByCategory: (state, action) => {
            state.category = action.payload
        },
        setFood: (state, action) => {
            state.food = action.payload
        },
        setRelatedFoods: (state, action) => {
            state.relatedFoods = action.payload
        },
    }
});

export const { filterFoodByCategory, setFood, setRelatedFoods } = foodSlice.actions;
export default foodSlice.reducer; 
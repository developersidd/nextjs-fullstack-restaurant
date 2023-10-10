import { TypeFood } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

type TypeInitialState = {
    food: TypeFood,
    relatedFoods: TypeFood[]
};

const initialState: TypeInitialState = {
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
        setFood: (state, action) => {
            state.food = action.payload
        },
        setRelatedFoods: (state, action) => {
            state.relatedFoods = action.payload
        },
    }
});

export const { setFood, setRelatedFoods } = foodSlice.actions;
export default foodSlice.reducer; 
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import foodSlice from "../features/food/foodSlice";
import userSlice from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    api: apiSlice.reducer,
    food: foodSlice,
    user: userSlice
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (gDM) => gDM().concat(apiSlice.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

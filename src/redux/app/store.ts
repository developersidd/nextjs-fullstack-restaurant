import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import { signInApi } from "../features/signin/signinApi";
import { signUpApi } from "../features/signup/signupApi";

export const store = configureStore({
  reducer: {
    [signInApi.reducerPath]: signInApi.reducer,
    [signUpApi.reducerPath]: signUpApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (gDM) => gDM().concat(apiSlice.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { TypeUser } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    user: TypeUser,
    showConfetti: boolean
}

const initialState: InitialState = {
    user: {
        _id: "",
        email: '',
        password: '',
        username: '',
        picture: '',
        forgorPasswordToken: "",
        forgotPasswordTokenExpiry: undefined,
        verifyToken: "",
        verifyTokenExpiry: undefined,
        isVerified: false,
        isAdmin: false,
    },
    showConfetti: false
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        showConfetti: (state, action) => {
            state.showConfetti = action.payload;
        },
    }
});

export default userSlice.reducer;
export const { setUser, showConfetti } = userSlice.actions;
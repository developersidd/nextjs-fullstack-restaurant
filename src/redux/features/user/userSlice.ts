import { TypeUser } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    user: TypeUser
}

const initialState: InitialState = {
    user: {
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
    }
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
});

export default userSlice.reducer;
export const { setUser } = userSlice.actions;
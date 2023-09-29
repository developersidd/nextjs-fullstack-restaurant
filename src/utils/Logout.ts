import { useAppDispatch } from "@/redux/app/hooks";
import { setUser } from "@/redux/features/user/userSlice";
import { cookies } from "next/headers";

export const Logout = () => {
    const dispatch = useAppDispatch();
    const cookieStore = cookies();
    cookieStore.set("token", "", {
        httpOnly: true, expires: new Date(0)
    });
    dispatch(setUser({}));
}
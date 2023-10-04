"use client";
import { useAppDispatch } from '@/redux/app/hooks';
import { useGetUserQuery, userApi } from '@/redux/features/user/userApi';

const useGetUser = () => {
    const { isLoading, data, error } = useGetUserQuery()
    const dispatch = useAppDispatch();

    // logout automically if token expired
    if ((error as any)?.data?.error === "jwt expired") {
        dispatch(userApi.endpoints.logout.initiate())
    }

    return { isLoading, data }

}

export default useGetUser
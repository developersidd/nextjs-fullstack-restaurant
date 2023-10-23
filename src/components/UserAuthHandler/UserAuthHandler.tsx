"use client";
import { useAppDispatch } from "@/redux/app/hooks";
import { useGetUserQuery, userApi } from '@/redux/features/user/userApi';

const UserAuthHandler = () => {
    const { isLoading, error } = useGetUserQuery();
    const dispatch = useAppDispatch();

    // logout automically if token expired
    if ((error as any)?.data?.error === "jwt expired") {
        dispatch(userApi.endpoints.logout.initiate())
    }
    /*
        if (isLoading) {
            return <div id="page-loader" className="flex items-center justify-center h-screen flex-col">
                <Image width={250} height={250} className="w-[170px] lg:w-[220px] 2xl:w-[270px] mx-auto mb-5   object-contain" src={logo} alt="siddik-restaurant" />
                <Image src={loadingGear} width={150} height={150} className="w-[80px] md:w-[100px] lg:w-[130px] 2xl:w-[160px] block" alt="loading-gear" />
            </div>
        }
        */
    return null;

}

export default UserAuthHandler;
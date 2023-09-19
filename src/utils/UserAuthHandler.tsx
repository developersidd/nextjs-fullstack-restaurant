"use client";
import loadingGear from "@/assets/images/loading-gear.gif";
import { useAppDispatch } from "@/redux/app/hooks";
import { useGetUserQuery, userApi } from '@/redux/features/user/userApi';
import Image from 'next/image';
import React from 'react';

const UserAuthHandler = ({ children }: { children: React.ReactNode }) => {
    const { isLoading, data, error } = useGetUserQuery(null)
    const dispatch = useAppDispatch();

    // logout automically if token expired
    if ((error as any)?.data?.error === "jwt expired") {
            dispatch(userApi.endpoints.logout.initiate(null))   
    }
    if (isLoading) {
        return <div className="flex items-center justify-center h-screen flex-col">
            <Image src={loadingGear} className="w-[100px] md:w-[120px] lg:w-[150px] mb-5" alt="loading-gear" />
        </div>
    }

    return children;
}

export default UserAuthHandler
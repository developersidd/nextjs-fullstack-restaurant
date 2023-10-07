"use client";
import loadingGear from "@/assets/images/loading-gear.gif";
import logo from "@/assets/images/logo.png";
import { useAppDispatch } from "@/redux/app/hooks";
import { useGetUserQuery, userApi } from '@/redux/features/user/userApi';
import { hasCookie } from 'cookies-next';
import Image from 'next/image';
import React from 'react';

const UserAuthHandler = ({ children }: { children?: React.ReactNode }) => {
    const token = hasCookie("token", { httpOnly: true });
    console.log("token:", token)
    const { isLoading, error } = useGetUserQuery(null, {
        skip: process.env.NODE_ENV !== "production" ? false : !token
    });
    const dispatch = useAppDispatch();

    // logout automically if token expired
    if ((error as any)?.data?.error === "jwt expired") {
        dispatch(userApi.endpoints.logout.initiate())
    }

    if (isLoading) {
        return <div id="page-loader" className="flex items-center justify-center h-screen flex-col">
            <Image width={250} height={250} className="w-[170px] lg:w-[220px] 2xl:w-[270px] mx-auto mb-5   object-contain" src={logo} alt="siddik-restaurant" />
            <Image src={loadingGear} width={150} height={150} className="w-[80px] md:w-[100px] lg:w-[130px] 2xl:w-[160px] block" alt="loading-gear" />
        </div>
    }
    return children;
}

export default UserAuthHandler
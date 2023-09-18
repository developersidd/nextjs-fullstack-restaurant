"use client";
import loadingGear from "@/assets/images/loading-gear.gif";
import { useGetUserQuery, useLogoutQuery } from '@/redux/features/user/userApi';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import getDataFromToken from "./getDataFromToken";

const UserAuthHandler = ({ children }: { children: React.ReactNode }) => {
    const { isLoading, data, error } = useGetUserQuery(null)
    const [skipAction, setSkipAction] = useState(true);
    useLogoutQuery(null, { skip: skipAction });
    // logout automically if token expired
    if ((error as any)?.data?.error === "jwt expired") {
        setSkipAction(false);
    }
    if (isLoading) {
        return <div className="flex items-center justify-center h-screen flex-col">
            <Image src={loadingGear} className="w-[120px] md:w-[150px] lg:w-[200px] mb-5" alt="loading-gear" />
        </div>
    }

    return children;
}

export default UserAuthHandler
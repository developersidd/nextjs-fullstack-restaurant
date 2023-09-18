"use client";
import loadingGear from "@/assets/images/loading-gear.gif";
import { useGetUserQuery } from '@/redux/features/user/userApi';
import Image from 'next/image';
import React from 'react';

const UserAuthHandler = ({ children }: { children: React.ReactNode }) => {
    const { isLoading } = useGetUserQuery(null)

    /*  
        useEffect(() => {    
        }, []);
    */

    if (isLoading) {
        return <div className="flex items-center justify-center h-screen flex-col">
            <Image src={loadingGear} className="w-[120px] md:w-[150px] lg:w-[200px] mb-5" alt="loading-gear" />
        </div>
    }

    return children;
}

export default UserAuthHandler
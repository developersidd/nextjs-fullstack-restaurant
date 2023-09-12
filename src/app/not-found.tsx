"use client";
import smileyFace from "@/assets/images/smiley-face.png";
import { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Not Found - Siddik Restaurant',
}

const NotFound = () => {
    return (
        <div className="text-white flex items-center justify-center h-screen flex-col font-montserrat">
            <Image src={smileyFace} className="w-[40%] md:w-[35%] lg:w-[22%]" alt="smiley-face" />
            <h3 className="font-bold text-xl md:text-3xl xl:text-4xl mb-10 text-center"> The Page you want to access is currently unavailable <span className="text-red-600">!</span>   </h3>
            <button className='px-5 py-2 border-2 border-primary-yellow text-white font-medium font-helvatica'>
                <Link href="/" > Back to Homes </Link>
            </button>
        </div>
    )
}

export default NotFound;
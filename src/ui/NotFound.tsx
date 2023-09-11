"use client";
import smileyFace from "@/assets/images/smiley-face.png";
import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="text-white flex items-center justify-center h-screen flex-col">
            <Image src={smileyFace} className="w-[30%] md:w-[20%]" alt="smiley-face" />
            <h3 className="font-bold text-xl md:text-3xl xl:text-4xl mb-10"> The Page you want to access is currently unavailable!  </h3>
            <button className='px-5 py-2 border-2 border-primary-yellow text-white font-medium'>
                <Link href="/" > Back to Homes </Link>
            </button>
        </div>
    )
}

export default NotFound;
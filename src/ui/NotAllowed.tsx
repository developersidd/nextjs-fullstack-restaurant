import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import warning from "@/assets/images/warning.png"
const NotAllowed = () => {
    return (
        <div className="flex items-center justify-center h-screen flex-col">
            <Image src={warning} className="w-[30%] md:w-[25%] mb-5" alt="smiley-face" />
            <h1 className='text-red-600 font-bold text-xl md:text-3xl xl:text-4xl'> Your Are Not Allowed To Access this Page </h1>
            <Link href="/" className='border-2 border-primary-yellow text-white font-medium'> Back to Home </Link>
        </div>
    )
}

export default NotAllowed
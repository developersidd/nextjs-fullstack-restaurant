import Image from 'next/image'
import React from 'react'
import burger from "@/assets/images/burger.png";
import addToCart from "@/assets/images/add_to_cart.png";
import Link from 'next/link';

const FoodItem = () => {
    return (
        <div className='p-3 text-center z-[9999]'>
            <Link href={`/foods/${5}`} className='inline-block  rounded-full group/image relative w-[250px] h-[250px] mb-3'>
                <Image className='w-full h-full rounded-full' src={burger} alt='burger' />
                <div className='transition-opacity	 opacity-0 group-hover/image:opacity-100 absolute top-0 left-0 right-0 flex items-center justify-center gap-4 p-7 bg-primary-yellow/60 z-[] rounded-full w-ful h-full'>
                    <Link href="/cat" className="inline-block"> 
                <Image className='w-12 h-12' src={addToCart} alt='add_to_cart' />
                    </Link>
                </div>
            </Link>
            <div className='space-y-3 text-center text-gray-300'>
                <h4 className='uppercase text-lg md:text-xl transition-colors tracking-wider hover:text-primary-yellow font-medium'> <Link href="/" > VINCENT </Link>  </h4>
                <p className='text-gray-300'> Classic marinara sauce, authentic old-world pepperoni,... </p>
                <p className='text-xl md:text-2xl font-bold'> $ 2.60 </p>
            </div>
        </div>
    )
}

export default FoodItem
import { TypeFood } from '@/types';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';

const RelatedFood = ({ food }: { food: TypeFood }) => {
    const { image, description, _id, category, price, title } = food;
    return (
        <div className='py-6 lg:py-8 px-3 lg:px-5 text-center z-[999] bg-[#172125] group/cart max-lg:mb-20  last:mb-0'>
            <Link href={`/foods/${_id}`} className='inline-block -mt-28 transition-all group-hover/cart:ring-2 ring-sandy-brown rounded-full  relative w-[160px] h-[160px] mb-3'>
                <Image className='w-full h-full rounded-full' width={150} height={150} src={image} alt={category} />
            </Link>
            <div className='space-y-4 text-center text-gray-300'>
                <h4 className='uppercase text-lg md:text-xl transition-colors tracking-wider hover:text-sandy-brown font-medium'>
                    <Link href={`/foods/${_id}`} > {title} </Link>  </h4>
                <p className='text-gray-300'> {description?.slice(0, 80)}... </p>
                <p className='text-xl md:text-2xl font-bold mb-4'> <span className="text-sandy-brown">$</span> {price} </p>
                <button className="mx-auto transition-colors border-2 border-white hover:border-sandy-brown hover:text-sandy-brown px-3 lg:px-4 py-2 lg:py-[9px] gap-2 flex items-center text-base font-medium"> <ShoppingCartIcon className='w-6 h-6' /> Add To Cart </button>
            </div>
        </div>
    )
}

export default RelatedFood
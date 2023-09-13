import addToCartImage from "@/assets/images/add_to_cart.png";
import { FoodDocument } from '@/models/foodModel';
import Image from 'next/image';
import Link from 'next/link';

const FoodItem = ({ item: { title, description, price, category, image, _id } }: { item: FoodDocument }) => {
    return (
        <div className='p-3 text-center z-[999]'>
            <Link href={`/foods/${_id}`} className='inline-block  rounded-full group/image relative w-[250px] h-[250px] mb-3'>
                <Image className='w-full h-full rounded-full' width={250} height={250} src={image} alt={category} />
                <div className='transition-opacity	 opacity-0 group-hover/image:opacity-100 absolute top-0 left-0 right-0 flex items-center justify-center gap-4 p-7 bg-primary-yellow/60 rounded-full w-ful h-full'>
                    <Link href="/cat" className="inline-block">
                        <Image className='w-12 h-12' src={addToCartImage} alt='add_to_cart' />
                    </Link>
                </div>
            </Link>
            <div className='space-y-3 text-center text-gray-300'>
                <h4 className='uppercase text-lg md:text-xl transition-colors tracking-wider hover:text-primary-yellow font-medium'> <Link href="/" > {title} </Link>  </h4>
                <p className='text-gray-300'> {description.slice(0, 30)}... </p>
                <p className='text-xl md:text-2xl font-bold'> $ {price} </p>
            </div>
        </div>
    )
}

export default FoodItem
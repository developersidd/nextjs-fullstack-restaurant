"use client";
import loadingGear from "@/assets/images/loading-gear.gif";
import ImageMagnifier from "@/components/ImageMagnifier/ImageMagnifier";
import { useGetFoodQuery } from "@/redux/features/food/foodApi";
import Image from 'next/image';

const Food = ({ id }: { id: string }) => {
    const { isLoading, data: food } = useGetFoodQuery(id);
    const { image, description, price, title, reviews } = food?.data?.food || {};

    if (isLoading) {
        return <div className="flex items-center justify-center h-screen flex-col">
            <Image src={loadingGear} className="w-[100px] md:w-[120px] lg:w-[150px] mb-5" alt="loading-gear" />
        </div>
    }

    return (
        <div className='md:flex items-center justify-between gap-10 max-md:space-y-10 py-16'>
            <div className="w-[70%] mx-auto md:w-[40%] rounded-full">

                <ImageMagnifier style={{ borderRadius: "99999px", cursor: "zoom-in" }}>
                    <Image className='w-full h-full  mx-auto rounded-full' width={700} height={700} src={image || ""} alt={title || ""} />
                </ImageMagnifier>

            </div>
            <div className="w-full md:w-[55%]  space-y-3 md:space-y-5">
                <h3 className='text-white tracking-wider text-2xl md:text-3xl lg:text-3xl'> {title} </h3>
                <h4 className="text-sandy-brown text-2xl md:text-3xl lg:text-3xl font-bold"> $ {price} </h4>
                <p className="text-gray-400 max-sm:pb-5">  {description} </p>
                <div>
                    <input className="w-12 text-center  py-2 mr-5" defaultValue={1} type="number" name="" id="" />
                    <button className='px-6 py-2 border-2 border-sandy-brown uppercase font-medium text-white bg-sandy-brown transition-colors hover:bg-olive'> add to cart </button>
                </div>
            </div>
        </div>
    )
}

export default Food
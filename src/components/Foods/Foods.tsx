"use client";
import loadingGear from "@/assets/images/loading-gear.gif";
import { useAppSelector } from "@/redux/app/hooks";
import { useGetFoodsQuery } from "@/redux/features/food/foodApi";
import { selectFood } from "@/redux/features/food/foodSelector";
import Image from "next/image";
import FoodItem from '../FoodItem/FoodItem';

const Foods = () => {
    const { category } = useAppSelector(selectFood);
    const { isLoading, isFetching, error, data } = useGetFoodsQuery(category);
    const foods = data?.data;

    // decide what to render
    let content = null;
    if (isLoading || isFetching) {
        //  show loading
        content = (
            <div className="h-[80vh] flex items-center justify-center ">
                <Image className="w-[80px] lg:w-[130px] mx-auto" src={loadingGear} alt="loading-gear" />
            </div>
        )
    } else {
        // display data
        content = (
            <div className='lg:container mx-auto grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 px-6 md:px-10 py-20 font-montserrat'>
                {foods?.map((item) => {
                    return (
                        <FoodItem item={item} key={item._id} />
                    )
                })}
            </div>
        )
    }

    return content;
}

export default Foods;
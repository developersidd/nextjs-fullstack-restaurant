"use client";
import loadingGear from "@/assets/images/loading-gear.gif";
import { useGetFoodsQuery } from "@/redux/features/food/foodApi";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import FoodItem from '../FoodItem/FoodItem';

const Foods = () => {
    const searchParams = useSearchParams();
    const category = searchParams.get('category') || "burger";
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
            <div className='lg:container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 px-6 md:px-10 py-20 font-montserrat'>
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
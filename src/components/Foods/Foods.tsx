"use client";
import { useGetFoodsQuery } from "@/redux/features/food/foodApi";
import FoodItem from '../FoodItem/FoodItem';
const Foods = () => {
    const { isLoading, error, data } = useGetFoodsQuery(null);
    //console.log("data:", data)
    const foods = data?.data;
    console.log("error:", error)
    return (
        <div className='lg:container mx-auto grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 px-6 md:px-10 py-20'>
            {foods?.map((item) => {
                return (
                    <FoodItem item={item} key={item._id} />
                )
            })}
        </div>
    )
}

export default Foods;
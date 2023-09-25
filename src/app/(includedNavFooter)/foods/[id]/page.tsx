<<<<<<< HEAD
import loadingGear from "@/assets/images/loading-gear.gif";
import FoodDetails from '@/components/FoodDetails/FoodDetails';
import ImageMagnifier from "@/components/ImageMagnifier/ImageMagnifier";
import { useGetFoodQuery } from "@/redux/features/food/foodApi";
import Image from 'next/image';
export const generateMetadata = ({ params: { id } }: { params: { id: string } }) => {
    return {
        
    }
}
=======
import Food from "@/components/Food/Food";
import { NextPage } from "next";
>>>>>>> c56b112625726e03d3ce3dfa1d3de6de9d26b5d1

<<<<<<< HEAD
const FoodPage: NextPage<{ params: { id: string } }> = ({ params }) => {
    const id = params?.id;
=======
const FoodItemPage = ({ params }: { params: any }) => {
    const { isLoading, data: food } = useGetFoodQuery(params?.id);
    const { image, description, price, title } = food?.data || {};
    if (isLoading) {
        return <div className="flex items-center justify-center h-screen flex-col">
            <Image src={loadingGear} className="w-[100px] md:w-[120px] lg:w-[150px] mb-5" alt="loading-gear" />
        </div>
    }
<<<<<<< HEAD


=======
    
    
>>>>>>> 4283c75f40229d6daf2bc5241ae6ac68527db281
>>>>>>> c56b112625726e03d3ce3dfa1d3de6de9d26b5d1
    return (
        <>
            <Food id={id} />
        </>
    )
}

export default FoodPage;
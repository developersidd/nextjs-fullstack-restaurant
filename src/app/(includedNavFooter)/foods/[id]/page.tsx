import Food from "@/components/Food/Food";
import FoodDetails from "@/components/FoodDetails/FoodDetails";
import { axiosInstance } from "@/utils/axios";
import { NextPage } from "next";

export const generateMetadata = async ({ params: { id } }: { params: { id: string }, }) => {
    try {
        const data = await axiosInstance.get(`/food/${id}`)
        const { title, category } = data?.data?.data?.food || {};
        return {
            title: `Siddik Restaurant - ${category?.toUpperCase()} : ${title?.toUpperCase()} `
        }
    } catch (err: any) {
    }
}

const FoodPage: NextPage<{ params: { id: string }, searchParams: { [key: string]: string | string[] | undefined } }> = ({ params, searchParams }) => {
    const id = params?.id;
    return (
        <div className='lg:container mx-auto px-5 md:px-10 pt-14 md:py-24 lg:py-36'>
            <Food id={id} />
            {/*  food details */}
            <FoodDetails searchParams={searchParams} />
        </div>
    )
}

export default FoodPage;
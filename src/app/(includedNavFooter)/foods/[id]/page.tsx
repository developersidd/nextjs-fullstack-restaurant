import Food from "@/components/Food/Food";
import { axiosInstance } from "@/utils/axios";
import { NextPage } from "next";

export const generateMetadata = async ({ params: { id } }: { params: { id: string } }) => {
    try {
        const data = await axiosInstance.get(`/food/${id}`)
        const { title, category } = data?.data?.data?.food || {};
        return {
            title: `Siddik Restaurant - ${category?.toUpperCase()} : ${title?.toUpperCase()} `
        }
    } catch (err: any) {
    }
}

const FoodPage: NextPage<{ params: { id: string } }> = ({ params }) => {
    const id = params?.id;
    return (
        <div>
            <Food id={id} />
        </div>
    )
}

export default FoodPage;
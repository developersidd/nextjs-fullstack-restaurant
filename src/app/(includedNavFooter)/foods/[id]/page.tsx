import Food from "@/components/Food/Food";
import { axiosHttp } from "@/utils/axios";
import { NextPage } from "next";

export const generateMetadata =  async({ params: { id } }: { params: { id: string } }) => {
    try{
    const data = await axiosHttp.get(`/food/${id}?${process.env.NEXT_PUBLIC_ASKN}=${process.env.NEXT_PUBLIC_API_SECRET}`)
    const {title, category} =data?.data?.data || {};
    console.log("title:", title)
    return {
        title: `Siddik Restaurant - ${category?.toUpperCase()} : ${title?.toUpperCase()} `
    }
    }catch(err:any){
    }
}


const FoodPage: NextPage<{ params: { id: string } }> = ({ params }) => {
    const id = params?.id;
    return (
        <>
            <Food id={id} />
        </>
    )
}

export default FoodPage;
import Food from "@/components/Food/Food";
import { NextPage } from "next";

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
    
    
>>>>>>> 4283c75f40229d6daf2bc5241ae6ac68527db281
    return (
        <>
            <Food id={id} />
        </>
    )
}

export default FoodPage;
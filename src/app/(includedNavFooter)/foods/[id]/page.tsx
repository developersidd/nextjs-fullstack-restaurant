import Food from "@/components/Food/Food";
import { NextPage } from "next";

export const generateMetadata = ({ params: { id } }: { params: { id: string } }) => {
    //const data = 
    return {
        title: "" // here wil
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
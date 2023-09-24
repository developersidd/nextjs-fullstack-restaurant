import Food from "@/components/Food/Food";
import { NextPage } from "next";

const FoodPage: NextPage<{ params: { id: string } }> = ({ params }) => {
    const id = params?.id;
    return (
        <>
            <Food id={id} />
        </>
    )
}

export default FoodPage;
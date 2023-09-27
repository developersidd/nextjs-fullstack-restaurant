import connectDb from "@/dbConfig/connectDb";
import Food from "@/models/foodModel";
import { NextRequest, NextResponse } from "next/server";

connectDb();

type TokenType = {
    id: string;
    isAdmin: boolean;
    username: string;
}

export const GET = async (req: NextRequest, { params }: { params: any }) => {
    try {
        const foodId = params?.foodId;
        const food = await Food.findById(foodId);
        const foods = await Food.find({ category: food?.category });
        const relatedFoods = Array.from(foods)?.filter(f => f.title !== food?.title);
        const randomFoods = []
        for (let i = 1; i <= 3; i++) {
            const randomNumber = Math.floor(Math.random() * foods.length);
            randomFoods.push(relatedFoods[randomNumber]);
        }
        return NextResponse.json({ message: "Food got successfully", data: { food, relatedFoods: randomFoods }, success: true }, { status: 200 });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: error?.status || 500 });
    }
}
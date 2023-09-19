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
        console.log("params:", params)
        const foodId = params.slug;
        console.log("foodId:", foodId)
        const food = await Food.findById(foodId);

        return NextResponse.json({ message: "Food got successfully", data: food, success: true }, { status: 200 });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: error?.status || 500 });
    }
}
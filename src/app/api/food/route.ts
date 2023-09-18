import connectDb from "@/dbConfig/connectDb";
import Food from "@/models/foodModel";
import getDataFromToken from "@/utils/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";

connectDb();

type TokenType = {
    id: string;
    isAdmin: boolean;
    username: string;
}

export const GET = async (req: NextRequest, res: NextResponse) => {
    try {
        const category = req.nextUrl?.searchParams.get("category") || "";
        //const user = await getDataFromToken(req);
        //console.log("user:", user)
        let query;
        if (category?.length > 0) {
            query = { category }
        } else {
            query = {}
        }
        const foods = await Food.find(query);

        return NextResponse.json({ message: "Foods got successfully", data: foods }, { status: 200 });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: error?.status || 500 });
    }
}
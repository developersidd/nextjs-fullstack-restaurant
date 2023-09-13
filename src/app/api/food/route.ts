import connectDb from "@/dbConfig/connectDb";
import Food from "@/models/foodModel";
import { NextRequest, NextResponse } from "next/server";

connectDb();

export type TokenType = {
    id: string;
    email: string;
    username: string;
}

export const GET = async (req: NextRequest, res: NextResponse) => {
    try {
        /*const token = req.cookies.get('next-auth.session-token')?.value || req.cookies.get('token')?.value || "";
        const decodedToken = jwt.verify(token, process.env.NEXT_PUBLIC_TOKEN_SECRET!) as TokenType;
        if (decodedToken && decodedToken?.id) {
            } else {
                    return NextResponse.json({ error: "Sorry, You are not allowed to access this api!" }, { status: 400 });
                }*/
        const category = req.nextUrl?.searchParams.get("category") || "";
        console.log("category:", category)
        let query;
        if (category?.length > 0) {
            query = { category }
        } else {
            query = {}
        }
        const foods = await Food.find(query);
        console.log("foods:", foods)
        //console.log("foods:", foods)

        return NextResponse.json({ message: "Foods got successfully", data: foods }, { status: 200 });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: error?.status || 500 });
    }
}
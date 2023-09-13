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
        //const token = req.cookies.get('next-auth.session-token')?.value || req.cookies.get('token')?.value || "";
        //const decodedToken = jwt.verify(token, process.env.NEXT_PUBLIC_TOKEN_SECRET!) as TokenType;
        //if (decodedToken && decodedToken?.id) {
        const foods = await Food.find({});
        return NextResponse.json({ message: "Foods got successfully", data: foods }, { status: 200 });
        //} else {
        //    return NextResponse.json({ error: "Sorry, You are not allowed to access this api!" }, { status: 400 });
        //}

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: error?.status || 500 });
    }
}
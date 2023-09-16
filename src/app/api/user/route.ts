import connectDb from "@/dbConfig/connectDb";
import { NextRequest, NextResponse } from "next/server";

connectDb();

export const GET = async (req: NextRequest, res: NextResponse) => {
    try {
        //const userId = await req.json();
        const userId = req.nextUrl;
        console.log("userId:", userId)
        return NextResponse.json({
            message: "Hello",
            success: true
        }, { status: 200 });
    } catch (err: any) {

    };
};

export const POST = async (req: NextRequest, res: NextResponse) => {
    try {

        const reqBody = await req.json();
    } catch (err: any) {

    }
};
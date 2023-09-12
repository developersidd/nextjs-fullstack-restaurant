import connectDb from "@/dbConfig/connectDb";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connectDb();

export type TokenType = {
    id: string;
    email: string;
    username: string;
}
export const GET = async (req: NextRequest, res: NextResponse) => {
    try {
        const token = req.cookies.get('token')?.value || "";
        const decodedToken = jwt.verify(token, process.env.NEXT_PUBLIC_TOKEN_SECRET!) as TokenType;
        if (decodedToken && decodedToken?.id) {

        } else {

        }


    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: error?.status || 500 });
    }
}

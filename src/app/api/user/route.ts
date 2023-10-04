import connectDb from "@/dbConfig/connectDb";
import User from "@/models/userModel";
import getDataFromToken from "@/utils/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";

connectDb();

export const GET = async (req: NextRequest, res: NextResponse) => {
    try {
        const { id } = await getDataFromToken(req) || {};
        if (!id) {
            return null;
        }
        const user = await User.findById(id, { __v: 0, createdAt: 0, updatedAt: 0 });

        return NextResponse.json({
            message: "User got successfully",
            data: user,
            success: true
        }, { status: 200 });
    } catch (err: any) {
        return NextResponse.json({ error: err?.message || "There was an server site error!" }, { status: 500 });
    };
};

export const POST = async (req: NextRequest, res: NextResponse) => {
    try {
        const reqBody = await req.json();
    } catch (err: any) {

    }
};
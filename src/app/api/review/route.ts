import connectDb from "@/dbConfig/connectDb";
import Review from "@/models/reviewModel";
import checkAdmin from "@/utils/checkAdmin";
import getDataFromToken from "@/utils/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";

connectDb();

export const GET = async (req: NextRequest, res: NextResponse) => {
    const id = req.nextUrl.searchParams.get('id') || "";
    try {
        let reviews;
        // if trying to get all reviews & admin is true then 
        if (!id) {
            await checkAdmin(req);
            reviews = await Review.find({}, { __v: 0 });
        } else {
            reviews = await Review.find({
                $or: [{ 'user.id': id }, { 'food.id': id },]
            }, { __v: 0 });
        }
        return NextResponse.json({
            message: "Reviews got successfully",
            data: reviews,
            success: true
        }, { status: 200 });
    } catch (err: any) {
        return NextResponse.json({ error: err?.message || "There was an server site error!" }, { status: 500 });
    };
};

export const POST = async (req: NextRequest, res: NextResponse) => {
    try {
        const { id } = await getDataFromToken(req);
        const body = await req.json() || {};
        if (body?.message && body?.user && body?.food && id && body?.rating) {
            const review = new Review(body);
            await review.save();
            return NextResponse.json({
                message: "Reviews Added successfully",
                data: review,
                success: true
            }, { status: 200 });
        } else {
            return NextResponse.json({ error: "There was an server site errors!" }, { status: 500 });
        }
    } catch (err: any) {
        console.log("err:", err)
        return NextResponse.json({ error: "There was an server site error!" }, { status: 500 });
    }
};
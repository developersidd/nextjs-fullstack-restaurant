import connectDb from "@/dbConfig/connectDb";
import Food from "@/models/foodModel";
import Review from "@/models/reviewModel";
import checkAdmin from "@/utils/checkAdmin";
import getDataFromToken from "@/utils/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";

connectDb();

export const GET = async (req: NextRequest, res: NextResponse) => {
    try {
        await checkAdmin(req);
        const reviews = await Review.find({}, { __v: 0 });
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
        const { foodId, message, rating } = await req.json() || {};
        if (foodId && message && id && rating) {
            const review = new Review({ message, food: foodId, user: id, rating });
            console.log("review:", review)
            await review.save();
            await Food.updateOne({ _id: foodId }, { $push: { reviews: review._id } });
            return NextResponse.json({
                message: "Reviews Added successfully",
                data: review,
                success: true
            }, { status: 200 });
        } else {
            return NextResponse.json({ error: "There was an server site error!" }, { status: 500 });
        }
    } catch (err: any) {
        console.log("err:", err)
        return NextResponse.json({ error: "There was an server site error!" }, { status: 500 });
    }
};
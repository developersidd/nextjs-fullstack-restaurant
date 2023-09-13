import connectDb from "@/dbConfig/connectDb";
import User from "@/models/userModel";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
connectDb();

export const POST = async (req: NextRequest, res: NextResponse) => {
    try {

        const reqBody = await req.json();
        const { email, name, image } = reqBody;

        if (Array.from(reqBody).every((val: any) => Boolean(val?.length))) {
            const userData = { email, username: name, picture: image }
            const filter = { email };
            const updateDoc = { $set: userData }
            const options = { upsert: true, new: true };
            // add or update user data 
            const user = await User.findOneAndUpdate(filter, updateDoc, options);
            // generate token
            const tokenData = {
                id: user?._id,
                username: reqBody.name
            }

            const token = jwt.sign(tokenData, process.env.NEXT_PUBLIC_TOKEN_SECRET!, { expiresIn: "1d" });
            // set token user browser

            const response = NextResponse.json({
                message: "Logged In Successfully",
                success: true,
                token
            }, { status: 200 });

            response.cookies.set("token", token, {
                httpOnly: true
            });

            return response;
        } else {
            return NextResponse.json({ error: "Please provide user info!" }, { status: 400 });
        }
    } catch (error: any) {
        console.log("signup error:", error)
        return NextResponse.json({ error: error.message }, { status: error?.status || 500 });
    }
}

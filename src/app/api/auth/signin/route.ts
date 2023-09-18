import connectDb from "@/dbConfig/connectDb";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

connectDb();

export const POST = async (req: NextRequest, res: NextResponse) => {
    try {

        const reqBody = await req.json();
        const { email, password } = reqBody;

        if (Array.from(reqBody).every((val: any) => Boolean(val?.length))) {
            //  check if the user already exists ?
            const user = await User.findOne({ email });
            if (user?.email && user?.password) {

                // compare password
                const isValidPassword = await bcrypt.compare(password, user.password);
                if (isValidPassword) {
                    // generate token
                    const tokenData = {
                        id: user?._id,
                        username: user?.username,
                        admin: user?.isAdmin
                    }
                    const token = sign(tokenData, process.env.NEXT_PUBLIC_TOKEN_SECRET!, { expiresIn: "4min" });
                    // set token user browser
                    const response = NextResponse.json({
                        message: "Logged In Successfully",
                        success: true,
                        data: {
                            token,
                            user
                        },
                    }, { status: 200 });
                    response.cookies.set("token", token, {
                        httpOnly: true
                    });
                    return response;
                } else {
                    return NextResponse.json({ error: "Invalid Password!" }, { status: 500 });
                }
            } else {
                return NextResponse.json({ error: "User doesn't exists!" }, { status: 500 });
            }
        } else {
            return NextResponse.json({ error: "Please provide user info!" }, { status: 400 });
        }
    } catch (error: any) {
        console.log("signup error:", error)
        return NextResponse.json({ error: error.message }, { status: error?.status || 500 });
    }
}

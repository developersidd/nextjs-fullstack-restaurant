import connectDb from "@/dbConfig/connectDb";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

connectDb();

export const POST = async (req: NextRequest, res: NextResponse) => {
    try {

        const reqBody = await req.json();
        console.log("reqBody:", reqBody)
        const { username, email, password, picture } = reqBody;
        console.log("picture:", picture)

        if (Array.from(reqBody).every((val: any) => Boolean(val?.length))) {
            //  check if already exists ?
            const user = await User.findOne({ email });
            if (user?.email && user?.password) {
                return NextResponse.json({ error: "User already exists!" }, { status: 500 });
            } else {
                // hash password
                const hashedPass = await bcrypt.hash(password, 10);
                
                // save user to DB
                const newUser = new User({...reqBody, password: hashedPass});
                const savedUser = await newUser.save();
                // Return Response to user
                return NextResponse.json({
                    message: "User saved successfully",
                    success: true,
                    user: { ...savedUser },
                }, { status: 200 });
            }
        } else {
            return NextResponse.json({ error: "Please provide user info!" }, { status: 400 });
        }
    } catch (error: any) {
        console.log("signup error:", error)
        return NextResponse.json({ error: error.message }, { status: error?.status || 500 });
    }
}

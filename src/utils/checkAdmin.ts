import { NextRequest, NextResponse } from "next/server";
import getDataFromToken from "./getDataFromToken";

const checkAdmin = async (req: NextRequest) => {
    try {
        const { isAdmin } = await getDataFromToken(req);
        if (!isAdmin) {
            return NextResponse.json({ error: "You are not allowed!" }, { status: 403 });
        }
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export default checkAdmin;
import { verify } from "jsonwebtoken";
import { NextRequest } from "next/server";

const getDataFromToken = async (req: NextRequest) => {
    try {
        const token = req.cookies.get('token')?.value || "";
        const decodedToken = await verify(token, process.env.NEXT_PUBLIC_TOKEN_SECRET!);
        console.log("decodedToken:", decodedToken)
        return decodedToken
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export default getDataFromToken;
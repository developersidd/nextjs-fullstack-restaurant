import { useAppDispatch } from "@/redux/app/hooks";
import { verify } from "jsonwebtoken";
import { NextRequest } from "next/server";

export type TokenType = {
    id: string;
    isAdmin: boolean;
    username: string;
}
const getDataFromToken = async (req: NextRequest) => {
    try {
        const token = req.cookies.get('token')?.value || "";
        const decodedToken = verify(token, process.env.NEXT_PUBLIC_TOKEN_SECRET!) as TokenType;
        return decodedToken
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export default getDataFromToken;
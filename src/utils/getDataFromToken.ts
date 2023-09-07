import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

type TokenType = {
    id: string;
    email: string;
    username: string;
}
const getDataFromToken = (req: NextRequest) => {
    try {
        const token = req.cookies.get('token')?.value || "";
        const decodedToken = jwt.verify(token, process.env.NEXT_PUBLIC_TOKEN_SECRET!) as TokenType;
        return decodedToken.id
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export default getDataFromToken
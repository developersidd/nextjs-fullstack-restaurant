import jwt from 'jsonwebtoken';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { type TokenType } from './utils/getDataFromToken';

export function middleware(request: NextRequest) {
    
    const path = request.nextUrl.pathname;
    const adminSecret = request.nextUrl.searchParams.get("");
    const publicPaths = ["/signin", "/signup"];
    const isPublicPath = publicPaths.includes(path);
    const isAdminPath = path.includes("admin");
    const token = request.cookies.get("token")?.value || "";
    const decodedToken = jwt.verify(token, process.env.NEXT_PUBLIC_TOKEN_SECRET!) as TokenType;
    const isAdmin = decodedToken.isAdmin;


    if (isPublicPath && token) {
        return NextResponse.redirect(new URL("/", request.nextUrl));
    }

    if (isAdminPath &&  (!isAdmin || adminSecret !== process.env.NEXT_PUBLIC_ADMIN_SECRET)) {
        return NextResponse.redirect(new URL("/", request.nextUrl));
    }   

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL("/signin", request.nextUrl));
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)'
    ],
};
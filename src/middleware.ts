import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    // params
    const API_SECRET = request.headers?.get("api_secret");
    // paths
    const isApiPath = path.includes("/api/");

    const publicPaths = ["/signin", "/signup", "/admin/signin", "/admin/signup"];
    const isPublicPath = publicPaths.includes(path);
    const token = request.cookies.get("token")?.value || "";

    // if user logged in and try to login then redirect to home page
    if (isPublicPath && token) {
        return NextResponse.redirect(new URL("/", request.nextUrl));
    };

    // if user is not logged in but private route then redirect to home page
    if (!isPublicPath && !token && !isApiPath) {
        return NextResponse.redirect(new URL("/signin", request.nextUrl));
    }

    // protect api routes
    if (isApiPath && API_SECRET !== process.env.NEXT_PUBLIC_API_SECRET) {
        return NextResponse.json({ error: "You are not allowed to access this route" }, { status: 403 });
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        "/api/:path*",
        "/admin/:path*",
        "/dashboard/admin/:path*",
        "/admin/signin",
        "/signin",
        "/signup",
        "/admin/signup",
        "/cart"
    ],
};

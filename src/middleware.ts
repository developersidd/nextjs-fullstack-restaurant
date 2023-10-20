import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    // params
    const API_SECRET = request.headers?.get("api_secret");
    // paths
    const isApiPath = path.includes("/api/");

    const publicPaths = ["/signin", "/signup"];
    const isPublicPath = publicPaths.includes(path);
    const isAdminAuthPath = ["admin/signin", "admin/signup"].includes(path);
    console.log("isAdminAuthPath:", isAdminAuthPath)
    const token = request.cookies.get("token")?.value || "";
    //const isApiPath = path.includes("/api/");

    // if user logged in and try to login then redirect to home page
    if ((isPublicPath || isAdminAuthPath) && token) {
        return NextResponse.redirect(new URL("/", request.nextUrl));
    };

    // if user is not logged in but private route then redirect to home page
    if (!isPublicPath && !token && !isApiPath && !isAdminAuthPath) {
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
        "/signin",
        "/signup",
        "/dashboard/admin/:path*",
        "/admin/:path*",
        "/api/:path*",
        "/cart"
    ],
};
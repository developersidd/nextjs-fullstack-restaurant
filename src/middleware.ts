import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import getDataFromToken from './utils/getDataFromToken';

export function middleware(request: NextRequest) {

    const path = request.nextUrl.pathname;
    const adminParams = request.nextUrl.searchParams.get(process.env.NEXT_PUBLIC_ASN!);
    const publicPaths = ["/signin", "/signup"];
    const isPublicPath = publicPaths.includes(path);
    const isAdminPath = path.includes("admin");
    const isAdminAuthPath = path.startsWith("/admin/signin") || path.startsWith("/admin/signup");
    const token = request.cookies.get("token")?.value || "";
    const isAdmin = getDataFromToken(request)?.isAdmin;

    // if user logged in and try to login then redirect to home page
    if (isPublicPath && token) {
        return NextResponse.redirect(new URL("/", request.nextUrl));
    };

    // if user is not logged in but private route redirect to home page
    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL("/signin", request.nextUrl));
    }

    // if admin logged in return back to home page
    if (isAdminAuthPath && token && isAdmin) {
        return NextResponse.redirect(new URL("/", request.nextUrl));
    }
    // if path is admin but user is not admin redirect to home
    if (isAdminPath && (!isAdmin || adminParams !== process.env.NEXT_PUBLIC_ADMIN_SECRET)) {
        return NextResponse.redirect(new URL("/", request.nextUrl));
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        "/signin",
        "/signup",
        "/dashboard/admin/:path*",
        "/admin/:path*",
        "/cart",
    ],
};
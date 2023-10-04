import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
export async function middleware(request: NextRequest) {
    console.log("request:", request.headers?.get("is_admin"))
    const path = request.nextUrl.pathname;
    const searchParams = request.nextUrl.searchParams;
    const ADMIN_SECRET = searchParams.get(process.env.NEXT_PUBLIC_ASN!);
    const API_SECRET = request.headers?.get("api_secret");
    const publicPaths = ["/signin", "/signup"];
    const isPublicPath = publicPaths.includes(path);
    const isAdminPath = path.includes("admin");
    const isApiPath = path.includes("/api/");
    const isAdminAuthPath = path.startsWith("/admin/signin") || path.startsWith("/admin/signup");
    const token = request.cookies.get("token")?.value || "";
    const isAdmin = request.headers?.get("is_admin");

    // if user logged in and try to login then redirect to home page
    if (isPublicPath && token) {
        return NextResponse.redirect(new URL("/", request.nextUrl));
    };

    // if user is not logged in but private route then redirect to home page
    if (!isPublicPath && !token && !isApiPath && !isAdminAuthPath) {
        return NextResponse.redirect(new URL("/signin", request.nextUrl));
    }

    // if admin logged in return back to home page
    if ((isAdminAuthPath && token) || isAdmin) {
        return NextResponse.redirect(new URL("/", request.nextUrl));
    }

    // if path is admin but user is not admin redirect to home
    if (isAdminPath && ADMIN_SECRET !== process.env.NEXT_PUBLIC_ADMIN_SECRET) {
        return NextResponse.redirect(new URL("/", request.nextUrl));
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
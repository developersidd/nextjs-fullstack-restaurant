import { NextRequest, NextResponse } from 'next/server';

const protectUserRoutes = (request: NextRequest) => {
    const path = request.nextUrl.pathname;
    const publicPaths = ["/signin", "/signup"];
    const isPublicPath = publicPaths.includes(path);
    const isAdminAuthPath = path.startsWith("/admin/signin") || path.startsWith("/admin/signup");
    const token = request.cookies.get("token")?.value || "";
    const isApiPath = path.includes("/api/");
    const searchParams = request.nextUrl.searchParams;
    const ADMIN_SECRET = searchParams.get(process.env.NEXT_PUBLIC_ASN!);
    const isAdminPath = path.includes("admin");

    // if user logged in and try to login then redirect to home page
    if (isPublicPath && token) {
        return NextResponse.redirect(new URL("/", request.nextUrl));
    };

    // if user is not logged in but private route then redirect to home page
    if (!isPublicPath && !token && !isApiPath && !isAdminAuthPath) {
        return NextResponse.redirect(new URL("/signin", request.nextUrl));
    }


    // if admin logged in return back to home page
    if (isAdminAuthPath && token) {
        return NextResponse.redirect(new URL("/", request.nextUrl));
    }

    // if path is admin but user is not admin redirect to home
    if (isAdminPath && ADMIN_SECRET !== process.env.NEXT_PUBLIC_ADMIN_SECRET) {
        return NextResponse.redirect(new URL("/", request.nextUrl));
    }


}

export default protectUserRoutes
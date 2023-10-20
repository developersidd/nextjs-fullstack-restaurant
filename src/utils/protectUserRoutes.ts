import { NextRequest, NextResponse } from 'next/server';

const protectUserRoutes = (request: NextRequest) => {
    const path = request.nextUrl.pathname;
    console.log("path:", path)
    const publicPaths = ["/signin", "/signup"];
    const isPublicPath = publicPaths.includes(path);
    const isAdminAuthPath = ["admin/signin", "admin/signup"].includes(path);
    console.log("isAdminAuthPath:", isAdminAuthPath)
    const token = request.cookies.get("token")?.value || "";
    const isApiPath = path.includes("/api/");

    // if user logged in and try to login then redirect to home page
    if ((isPublicPath || isAdminAuthPath) && token) {
        return NextResponse.redirect(new URL("/", request.nextUrl));
    };

    // if user is not logged in but private route then redirect to home page
    if (!isPublicPath && !token && !isApiPath && !isAdminAuthPath) {
        return NextResponse.redirect(new URL("/signin", request.nextUrl));
    }

}

export default protectUserRoutes
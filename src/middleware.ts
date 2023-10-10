import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import protectUserRoutes from './utils/protectUserRoutes';
export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    // params
    const API_SECRET = request.headers?.get("api_secret");
    // paths
    const isApiPath = path.includes("/api/");

    protectUserRoutes(request);

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
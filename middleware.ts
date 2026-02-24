import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip login page and API routes
  if (pathname === "/admin/login" || pathname.startsWith("/api/admin")) {
    return NextResponse.next();
  }

  const session = request.cookies.get("admin_session")?.value;
  if (session !== "authenticated") {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};

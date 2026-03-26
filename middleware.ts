import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip login page and API routes (verify endpoint handles its own auth)
  if (pathname === "/admin/login" || pathname.startsWith("/api/admin")) {
    return NextResponse.next();
  }

  const token = request.cookies.get("admin_session")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  // Validate the token against the server-side session store
  const verifyUrl = new URL("/api/admin/verify", request.url);
  const verifyRes = await fetch(verifyUrl, {
    headers: { cookie: `admin_session=${token}` },
  });

  if (!verifyRes.ok) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};

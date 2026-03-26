import { NextRequest, NextResponse } from "next/server";
import { validateSession } from "@/lib/session-store";

export async function GET(request: NextRequest) {
  const token = request.cookies.get("admin_session")?.value;
  if (token && validateSession(token)) {
    return NextResponse.json({ valid: true });
  }
  return NextResponse.json({ valid: false }, { status: 401 });
}

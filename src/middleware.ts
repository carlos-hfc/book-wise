import { NextRequest, NextResponse } from "next/server"

export async function middleware(request: NextRequest) {
  const session = request.cookies.get("next-auth.session-token")

  const { pathname } = request.nextUrl

  if (session && pathname === "/") {
    return NextResponse.redirect(new URL("/home", request.url))
  }
}

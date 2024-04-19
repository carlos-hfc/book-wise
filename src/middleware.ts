import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

export async function middleware(request: NextRequest) {
  const authCookie = cookies().get("next-auth.session-token")

  const { pathname } = request.nextUrl

  if (authCookie && pathname === "/") {
    return NextResponse.redirect(new URL("/home", request.url))
  }
}

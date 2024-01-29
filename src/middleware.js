import { NextResponse } from "next/server";

export async function middleware(request) {
  const token = request.cookies.get("token");
  if (!token) {
    return NextResponse.redirect(new URL("/register", request.url));
  } else {
    return NextResponse.redirect(new URL(request.url));
  }
}

export const config = {
  matcher: "/add-property",
};

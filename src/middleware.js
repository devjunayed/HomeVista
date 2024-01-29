import { NextResponse } from "next/server";

export async function middleware(request) {
  const token = request.cookies.get("token");
  if (token && token.value) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/register", request.url));
  }
}

export const config = {
  matcher: ["/add-property", "/contact"],
};

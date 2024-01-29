import { NextResponse } from "next/server";

export async function middleware(request) {
  let token = request.cookies.get("token");
  console.log(token);
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  } else if (
    token &&
    token.value &&
    request.nextUrl.pathname === "/add-property"
  ) {
    return NextResponse.rewrite(new URL("/add-property", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/add-property",
};

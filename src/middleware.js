import { NextResponse } from "next/server";

export async function middleware(request) {
  const token = request.cookies.get("token");
  console.log(request);
  if (!token && !token?.value) {
    return NextResponse.redirect(new URL("/register", request.url));
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: "/add-property",
};

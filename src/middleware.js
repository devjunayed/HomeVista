import { NextResponse } from "next/server";
import auth from "../firebase.config";
import { onAuthStateChanged } from "firebase/auth";
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          // User is signed in
          resolve(NextResponse.redirect(new URL(request.url)));
        } else {
          // User is signed out
          resolve(NextResponse.redirect(new URL("/login", request.url)));
        }
      },
      reject,
    );
  });
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/add-property",
};

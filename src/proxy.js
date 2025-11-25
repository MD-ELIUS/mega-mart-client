import { NextResponse } from "next/server";
import { adminAuth } from "./firebase/admin";

export async function proxy(request) {
  const token = request.cookies.get("access-token")?.value;

  const currentPath = request.nextUrl.pathname;

  if (!token) {
    return NextResponse.redirect(new URL(`/login?redirect=${currentPath}`, request.url));
  }

  try {
    // Verify token using Firebase Admin
    await adminAuth.verifyIdToken(token);

    // Token valid → allow access
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL(`/login?redirect=${currentPath}`, request.url));
  }
}

export const config = {
  matcher: ["/add-product/:path*", "/manage-product/:path*"]
};

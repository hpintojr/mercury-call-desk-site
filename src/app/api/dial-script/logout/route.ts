import { NextResponse } from "next/server";
import { DIAL_SCRIPT_COOKIE, DIAL_SCRIPT_LOGIN } from "@/lib/dial-script-auth";

/** Clears the sales-team session cookie and returns to the login page. */
export async function GET(req: Request) {
  const res = NextResponse.redirect(new URL(DIAL_SCRIPT_LOGIN, req.url), 303);
  res.cookies.set({ name: DIAL_SCRIPT_COOKIE, value: "", path: "/", maxAge: 0 });
  return res;
}

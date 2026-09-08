import { NextResponse } from "next/server";
import {
  DIAL_SCRIPT_COOKIE,
  DIAL_SCRIPT_LOGIN,
  DIAL_SCRIPT_MAX_AGE,
  checkPassword,
  isConfigured,
  makeToken,
  safeNext,
} from "@/lib/dial-script-auth";

/** Handles the login form POST from /dial-script/login. */
export async function POST(req: Request) {
  const form = await req.formData();
  const password = String(form.get("password") ?? "");
  const next = safeNext(String(form.get("next") ?? ""));

  const back = new URL(DIAL_SCRIPT_LOGIN, req.url);
  back.searchParams.set("next", next);

  if (!isConfigured()) {
    back.searchParams.set("error", "config");
    return NextResponse.redirect(back, 303);
  }

  // Small fixed delay blunts brute-force guessing without hurting real agents.
  await new Promise((r) => setTimeout(r, 400));

  if (!checkPassword(password)) {
    back.searchParams.set("error", "1");
    return NextResponse.redirect(back, 303);
  }

  const token = await makeToken();
  const res = NextResponse.redirect(new URL(next, req.url), 303);
  res.cookies.set({
    name: DIAL_SCRIPT_COOKIE,
    value: token ?? "",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: DIAL_SCRIPT_MAX_AGE,
  });
  return res;
}

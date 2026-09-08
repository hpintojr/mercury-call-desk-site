import { NextResponse, type NextRequest } from "next/server";
import { DIAL_SCRIPT_COOKIE, DIAL_SCRIPT_LOGIN, verifyToken } from "@/lib/dial-script-auth";

/**
 * Guards the internal sales-team page. Everything under /dial-script (except the
 * login page itself) requires the session cookie set by /api/dial-script/login.
 */
export const config = {
  matcher: ["/dial-script/:path*"],
};

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname === DIAL_SCRIPT_LOGIN || pathname.startsWith(DIAL_SCRIPT_LOGIN + "/")) {
    return NextResponse.next();
  }

  const ok = await verifyToken(req.cookies.get(DIAL_SCRIPT_COOKIE)?.value);
  if (ok) {
    const res = NextResponse.next();
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
    return res;
  }

  const url = req.nextUrl.clone();
  url.pathname = DIAL_SCRIPT_LOGIN;
  url.search = "";
  url.searchParams.set("next", pathname);
  return NextResponse.redirect(url);
}

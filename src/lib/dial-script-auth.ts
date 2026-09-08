/**
 * Shared-password gate for /dial-script (internal sales-team page).
 *
 * - The password lives in the DIAL_SCRIPT_PASSWORD env var (Vercel → Settings →
 *   Environment Variables). Nothing is stored in the repo.
 * - A successful login sets an httpOnly cookie holding HMAC-SHA256("mcd-dial-script:v1", password).
 *   Changing the password therefore signs every agent out at once.
 * - Web Crypto only, so this runs in the Edge middleware as well as route handlers.
 * - If the env var is missing the gate fails CLOSED (nobody gets in).
 */

export const DIAL_SCRIPT_COOKIE = "mcd_dial_script";
export const DIAL_SCRIPT_MAX_AGE = 60 * 60 * 24 * 30; // 30 days
export const DIAL_SCRIPT_HOME = "/dial-script";
export const DIAL_SCRIPT_LOGIN = "/dial-script/login";

const TOKEN_MESSAGE = "mcd-dial-script:v1";

function getPassword(): string {
  return (process.env.DIAL_SCRIPT_PASSWORD ?? "").trim();
}

export function isConfigured(): boolean {
  return getPassword().length > 0;
}

async function hmacHex(secret: string, message: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(message));
  return Array.from(new Uint8Array(sig), (b) => b.toString(16).padStart(2, "0")).join("");
}

/** Constant-time string comparison (only the length can leak). */
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/** Does the submitted password match? */
export function checkPassword(input: string): boolean {
  const pw = getPassword();
  if (!pw) return false;
  return safeEqual(input.trim(), pw);
}

/** Cookie value for a logged-in agent, or null when the gate is not configured. */
export async function makeToken(): Promise<string | null> {
  const pw = getPassword();
  if (!pw) return null;
  return hmacHex(pw, TOKEN_MESSAGE);
}

/** Is this cookie value a valid session for the current password? */
export async function verifyToken(token: string | undefined | null): Promise<boolean> {
  const pw = getPassword();
  if (!pw || !token) return false;
  const expected = await hmacHex(pw, TOKEN_MESSAGE);
  return safeEqual(token, expected);
}

/** Only ever redirect back inside /dial-script (never to an external URL). */
export function safeNext(raw: string | null | undefined): string {
  const v = (raw ?? "").trim();
  if (!v.startsWith("/dial-script") || v.startsWith("//") || v.includes("\\")) return DIAL_SCRIPT_HOME;
  if (v.startsWith(DIAL_SCRIPT_LOGIN)) return DIAL_SCRIPT_HOME;
  return v;
}

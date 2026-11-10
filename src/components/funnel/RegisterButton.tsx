"use client";

import { useRegister } from "./RegisterProvider";

/** Primary funnel CTA. Opens the registration form. `pulse` adds the attention ring used under the video. */
export default function RegisterButton({
  children,
  placement,
  size = "lg",
  pulse = false,
  className = "",
}: {
  children: React.ReactNode;
  placement: string;
  size?: "sm" | "lg";
  pulse?: boolean;
  className?: string;
}) {
  const { open } = useRegister();
  const sizes = size === "sm" ? "px-4 py-2.5 text-xs sm:px-5 sm:text-sm" : "px-7 py-4 text-base sm:px-10 sm:py-5 sm:text-lg";
  return (
    <button
      type="button"
      onClick={() => open(placement)}
      className={`relative inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--f-primary)] to-[var(--f-secondary)] font-bold text-[var(--f-on-primary)] shadow-lg transition hover:brightness-110 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${sizes} ${pulse ? "funnel-pulse" : ""} ${className}`}
    >
      {children}
      {size === "lg" ? (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      ) : null}
    </button>
  );
}

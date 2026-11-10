"use client";

import { useEffect, useState } from "react";

/** Shows ", Name" after the registrant's first name is known (set by the register form). */
export default function FirstName({ prefix = ", " }: { prefix?: string }) {
  const [name, setName] = useState("");
  useEffect(() => {
    try { setName(sessionStorage.getItem("funnel_first_name") ?? ""); } catch { /* ignore */ }
  }, []);
  return name ? <>{prefix}{name}</> : null;
}

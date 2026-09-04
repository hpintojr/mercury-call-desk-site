"use client";

import { useEffect, useState } from "react";

export default function RotatingWords({ words, interval = 2200, className = "" }: { words: string[]; interval?: number; className?: string }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);
  return (
    <span className={`relative inline-block ${className}`} aria-live="polite">
      <span key={i} className="inline-block animate-word-in text-gradient">{words[i]}</span>
    </span>
  );
}

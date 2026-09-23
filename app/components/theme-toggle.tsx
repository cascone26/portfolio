"use client";

import { useEffect, useState } from "react";

type ThemeChoice = "light" | "dark" | "system";

function applyTheme(choice: ThemeChoice) {
  const root = document.documentElement;
  if (choice === "system") {
    root.removeAttribute("data-theme");
  } else {
    root.setAttribute("data-theme", choice);
  }
  try {
    localStorage.setItem("theme", choice);
  } catch {}
}

export default function ThemeToggle() {
  const [choice, setChoice] = useState<ThemeChoice>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem("theme") as ThemeChoice | null;
      if (stored === "light" || stored === "dark" || stored === "system") {
        setChoice(stored);
      }
    } catch {}
  }, []);

  function pick(next: ThemeChoice) {
    setChoice(next);
    applyTheme(next);
  }

  if (!mounted) {
    return <div className="theme-toggle w-[86px] h-[32px]" aria-hidden />;
  }

  return (
    <div className="theme-toggle" role="radiogroup" aria-label="Theme">
      <button
        type="button"
        role="radio"
        aria-checked={choice === "light"}
        aria-label="Light theme"
        data-active={choice === "light"}
        className="theme-toggle-btn"
        onClick={() => pick("light")}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
      </button>
      <button
        type="button"
        role="radio"
        aria-checked={choice === "system"}
        aria-label="System theme"
        data-active={choice === "system"}
        className="theme-toggle-btn"
        onClick={() => pick("system")}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
      </button>
      <button
        type="button"
        role="radio"
        aria-checked={choice === "dark"}
        aria-label="Dark theme"
        data-active={choice === "dark"}
        className="theme-toggle-btn"
        onClick={() => pick("dark")}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      </button>
    </div>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

export default function BlogEmailCapture() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("_subject", "New checklist download from BuiltSimple blog");

    try {
      const res = await fetch("https://formspree.io/f/xdalydzq", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="glass rounded-2xl p-8 text-center my-12">
        <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h3 className="text-lg font-bold mb-2">Check your inbox!</h3>
        <p className="text-muted text-sm leading-relaxed max-w-md mx-auto mb-4">
          The Website Planning Checklist is on its way. While you wait, check out the full guide:
        </p>
        <Link
          href="/resources/website-planning-checklist"
          className="text-accent-light text-sm hover:underline"
        >
          View the checklist online →
        </Link>
      </div>
    );
  }

  return (
    <div className="glass rounded-2xl p-8 my-12">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-light">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-light">Free Resource</span>
          </div>
          <h3 className="text-lg font-bold mb-2">Website Planning Checklist</h3>
          <p className="text-muted text-sm leading-relaxed">
            Everything you need before building or redesigning your business website —
            branding, content, SEO, and launch steps in one actionable checklist.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="w-full md:w-auto md:min-w-[280px] space-y-3">
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="w-full input-field rounded-xl px-4 py-2.5 text-foreground placeholder-muted/40 text-sm"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="w-full input-field rounded-xl px-4 py-2.5 text-foreground placeholder-muted/40 text-sm"
          />
          <input type="hidden" name="source" value="blog-checklist-cta" />
          {status === "error" && (
            <p className="text-red-400 text-xs">Something went wrong. Try again.</p>
          )}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full btn-gradient text-white font-semibold py-2.5 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? "Sending..." : "Get the free checklist"}
          </button>
        </form>
      </div>
    </div>
  );
}

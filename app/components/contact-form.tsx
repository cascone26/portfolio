"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

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
      <div className="glass rounded-2xl p-7 flex flex-col items-center justify-center text-center min-h-[380px]">
        <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mb-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h2 className="text-xl font-bold mb-2">Message sent!</h2>
        <p className="text-muted text-sm leading-relaxed max-w-xs">
          Got it — I&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-accent-light hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass rounded-2xl p-7 space-y-5"
    >
      <div>
        <label htmlFor="name" className="text-sm text-muted block mb-2">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          required
          placeholder="Your name"
          className="w-full input-field rounded-xl px-4 py-3 text-foreground placeholder-muted/40"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm text-muted block mb-2">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          className="w-full input-field rounded-xl px-4 py-3 text-foreground placeholder-muted/40"
        />
      </div>
      <div>
        <label htmlFor="business" className="text-sm text-muted block mb-2">
          Business & what you do
        </label>
        <input
          id="business"
          type="text"
          name="business"
          placeholder="e.g. Joe's Plumbing — residential plumbing in KC"
          className="w-full input-field rounded-xl px-4 py-3 text-foreground placeholder-muted/40"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm text-muted block mb-2">
          What do you need?
        </label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="New website, fix my existing site, show up on Google, automate something..."
          rows={4}
          className="w-full input-field rounded-xl px-4 py-3 text-foreground placeholder-muted/40 resize-none"
        />
      </div>
      {status === "error" && (
        <p className="text-red-400 text-sm">
          Something went wrong. Try again or email me directly.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full btn-gradient text-white font-semibold py-3.5 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}

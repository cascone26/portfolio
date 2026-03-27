"use client";

import { useState, type FormEvent } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgejqpwz";

export default function ReferralForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-green-400"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h2 className="text-xl font-bold mb-2">Referral submitted!</h2>
        <p className="text-muted text-sm leading-relaxed max-w-xs">
          Got it — I&apos;ll reach out to your referral within 24 hours. You&apos;ll hear from me
          when they sign.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-accent-light hover:underline"
        >
          Submit another referral
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-7 space-y-5">
      {/* Hidden field to identify this as a referral submission */}
      <input type="hidden" name="form_type" value="referral" />

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="your-name" className="text-sm text-muted block mb-2">
            Your Name
          </label>
          <input
            id="your-name"
            type="text"
            name="your_name"
            required
            placeholder="Jane Smith"
            className="w-full input-field rounded-xl px-4 py-3 text-foreground placeholder-muted/40"
          />
        </div>
        <div>
          <label htmlFor="your-email" className="text-sm text-muted block mb-2">
            Your Email
          </label>
          <input
            id="your-email"
            type="email"
            name="your_email"
            required
            placeholder="jane@example.com"
            className="w-full input-field rounded-xl px-4 py-3 text-foreground placeholder-muted/40"
          />
        </div>
      </div>

      <div>
        <label htmlFor="business-name" className="text-sm text-muted block mb-2">
          Business Name
        </label>
        <input
          id="business-name"
          type="text"
          name="business_name"
          required
          placeholder="e.g. Doe Plumbing"
          className="w-full input-field rounded-xl px-4 py-3 text-foreground placeholder-muted/40"
        />
      </div>

      <div>
        <label htmlFor="owner-name" className="text-sm text-muted block mb-2">
          Business Owner&apos;s Name
        </label>
        <input
          id="owner-name"
          type="text"
          name="owner_name"
          required
          placeholder="John Doe"
          className="w-full input-field rounded-xl px-4 py-3 text-foreground placeholder-muted/40"
        />
      </div>

      <div>
        <label htmlFor="business-contact" className="text-sm text-muted block mb-2">
          Business Phone or Email
        </label>
        <input
          id="business-contact"
          type="text"
          name="business_contact"
          required
          placeholder="816-555-0100 or john@doeplumbing.com"
          className="w-full input-field rounded-xl px-4 py-3 text-foreground placeholder-muted/40"
        />
      </div>

      <div>
        <label htmlFor="why-they-need-site" className="text-sm text-muted block mb-2">
          Why do you think they need a website?
        </label>
        <textarea
          id="why-they-need-site"
          name="why_they_need_site"
          required
          placeholder="e.g. They rely entirely on Facebook, their current site is broken, they just opened and have no web presence..."
          rows={4}
          className="w-full input-field rounded-xl px-4 py-3 text-foreground placeholder-muted/40 resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm">
          Something went wrong. Try again or email me at cobo.cascone@gmail.com.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full btn-gradient text-white font-semibold py-2.5 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Submitting..." : "Submit referral"}
      </button>
    </form>
  );
}

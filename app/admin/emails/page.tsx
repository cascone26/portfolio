"use client";

import { useState } from "react";
import AdminCard from "../components/admin-card";
import { emails } from "../data/emails";

export default function EmailsPage() {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState<"subject" | "body" | null>(null);

  async function copyText(text: string, type: "subject" | "body") {
    await navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  }

  const current = emails[active];

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground mb-2">Email Templates</h1>
      <p className="text-sm text-muted mb-6">Ready-to-send templates for every stage of a client project.</p>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {emails.map((e, i) => (
          <button
            key={e.slug}
            onClick={() => { setActive(i); setCopied(null); }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              active === i
                ? "bg-accent/15 text-accent-light border border-accent/30"
                : "text-muted border border-white/[0.06] hover:border-white/[0.12] hover:text-foreground"
            }`}
          >
            {e.title}
          </button>
        ))}
      </div>

      {/* Subject line */}
      <AdminCard className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-xs font-medium text-muted uppercase tracking-wider">Subject Line</p>
          <button
            onClick={() => copyText(current.subject, "subject")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-white/[0.06] hover:border-accent/30 hover:bg-accent/5 text-muted hover:text-accent-light transition-all"
          >
            {copied === "subject" ? (
              <>
                <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Copied
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy
              </>
            )}
          </button>
        </div>
        <p className="text-foreground text-sm font-medium">{current.subject}</p>
      </AdminCard>

      {/* Body */}
      <AdminCard>
        <div className="flex justify-between items-center mb-4">
          <p className="text-xs font-medium text-muted uppercase tracking-wider">Body</p>
          <button
            onClick={() => copyText(current.body, "body")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-white/[0.06] hover:border-accent/30 hover:bg-accent/5 text-muted hover:text-accent-light transition-all"
          >
            {copied === "body" ? (
              <>
                <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Copied
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 002 2z" />
                </svg>
                Copy
              </>
            )}
          </button>
        </div>
        <pre className="text-sm text-foreground/90 whitespace-pre-wrap font-sans leading-relaxed">{current.body}</pre>
      </AdminCard>
    </div>
  );
}

"use client";

import { useState } from "react";
import AdminCard from "../components/admin-card";
import { scripts } from "../data/scripts";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-white/[0.06] hover:border-accent/30 hover:bg-accent/5 text-muted hover:text-accent-light transition-all"
    >
      {copied ? (
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
  );
}

export default function ScriptsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground mb-6">Sales Scripts</h1>

      <div className="space-y-6">
        {scripts.map((script) => (
          <AdminCard key={script.slug}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base font-semibold text-foreground">{script.title}</h2>
              <CopyButton text={script.points.map((p, i) => `${i + 1}. ${p}`).join("\n")} />
            </div>
            <ol className="space-y-3">
              {script.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="text-accent-light font-medium shrink-0 mt-0.5">{i + 1}.</span>
                  <span className="text-foreground/90 leading-relaxed">{point}</span>
                </li>
              ))}
            </ol>
          </AdminCard>
        ))}
      </div>
    </div>
  );
}

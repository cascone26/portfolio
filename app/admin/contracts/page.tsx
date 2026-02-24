"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import AdminCard from "../components/admin-card";
import { contracts } from "../data/contracts";

export default function ContractsPage() {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(contracts[active].content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground mb-6">Contracts</h1>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {contracts.map((doc, i) => (
          <button
            key={doc.slug}
            onClick={() => { setActive(i); setCopied(false); }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              active === i
                ? "bg-accent/15 text-accent-light border border-accent/30"
                : "text-muted border border-white/[0.06] hover:border-white/[0.12] hover:text-foreground"
            }`}
          >
            {doc.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <AdminCard>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm font-semibold text-foreground">{contracts[active].title}</h2>
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
                Copy markdown
              </>
            )}
          </button>
        </div>
        <div className="admin-prose">
          <ReactMarkdown>{contracts[active].content}</ReactMarkdown>
        </div>
      </AdminCard>
    </div>
  );
}

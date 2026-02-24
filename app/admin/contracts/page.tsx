"use client";

import { useState, useRef, useCallback } from "react";
import ReactMarkdown from "react-markdown";
import AdminCard from "../components/admin-card";
import { contracts } from "../data/contracts";

export default function ContractsPage() {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const [editing, setEditing] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const editRef = useRef<HTMLDivElement>(null);
  const printRef = useRef<HTMLDivElement>(null);

  const reset = useCallback(() => {
    setEditing(false);
    setResetKey((k) => k + 1);
  }, []);

  async function handleCopy() {
    const el = editRef.current;
    if (!el) return;
    await navigator.clipboard.writeText(el.innerText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handlePrint() {
    const content = editRef.current;
    if (!content) return;
    const win = window.open("", "_blank");
    if (!win) return;
    win.document.write(`<!DOCTYPE html><html><head><title>${contracts[active].title} — BuiltSimple</title><style>
      body { font-family: system-ui, -apple-system, sans-serif; max-width: 700px; margin: 40px auto; padding: 0 20px; color: #1a1a1a; line-height: 1.6; font-size: 14px; }
      h1 { font-size: 22px; margin-bottom: 4px; }
      h2 { font-size: 16px; margin-top: 28px; margin-bottom: 8px; }
      h3 { font-size: 14px; margin-top: 20px; }
      hr { border: none; border-top: 1px solid #ddd; margin: 20px 0; }
      table { width: 100%; border-collapse: collapse; margin: 12px 0; }
      th, td { border: 1px solid #ddd; padding: 8px 12px; text-align: left; font-size: 13px; }
      th { background: #f5f5f5; }
      ul, ol { padding-left: 20px; }
      li { margin-bottom: 4px; }
      strong { font-weight: 600; }
      @media print { body { margin: 0; } }
    </style></head><body>${content.innerHTML}</body></html>`);
    win.document.close();
    setTimeout(() => { win.print(); }, 250);
    reset();
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground mb-6">Contracts</h1>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {contracts.map((doc, i) => (
          <button
            key={doc.slug}
            onClick={() => { setActive(i); setCopied(false); reset(); }}
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
          <div className="flex items-center gap-3">
            <h2 className="text-sm font-semibold text-foreground">{contracts[active].title}</h2>
            {editing && (
              <span className="text-[10px] uppercase tracking-wider text-emerald-400/80 bg-emerald-400/10 px-2 py-0.5 rounded">
                Editing — click anywhere to type
              </span>
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setEditing(!editing)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                editing
                  ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-400"
                  : "border-white/[0.06] hover:border-accent/30 hover:bg-accent/5 text-muted hover:text-accent-light"
              }`}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              {editing ? "Editing" : "Edit"}
            </button>
            {editing && (
              <button
                onClick={reset}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-white/[0.06] hover:border-red-400/30 hover:bg-red-400/5 text-muted hover:text-red-400 transition-all"
              >
                Reset
              </button>
            )}
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-white/[0.06] hover:border-accent/30 hover:bg-accent/5 text-muted hover:text-accent-light transition-all"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2M6 14h12v8H6v-8z" />
              </svg>
              Save as PDF
            </button>
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
          </div>
        </div>

        <div
          key={resetKey}
          ref={editRef}
          contentEditable={editing}
          suppressContentEditableWarning
          className={`admin-prose outline-none transition-all rounded-xl ${
            editing
              ? "ring-1 ring-emerald-400/20 bg-white/[0.02] p-5 cursor-text"
              : ""
          }`}
        >
          <ReactMarkdown>{contracts[active].content}</ReactMarkdown>
        </div>

        {/* Hidden print ref that mirrors edit content */}
        <div ref={printRef} className="hidden" />
      </AdminCard>
    </div>
  );
}

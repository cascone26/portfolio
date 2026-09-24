"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";

interface CheckResult {
  id: string;
  label: string;
  pass: boolean;
  detail: string;
}

interface AuditResult {
  url: string;
  score: number;
  loadMs: number;
  pageWeightKB: number;
  title: string | null;
  checks: CheckResult[];
}

function scoreColor(score: number) {
  if (score >= 80) return "#34d399";
  if (score >= 50) return "#fbbf24";
  return "#fb923c";
}

function ScoreNumber({ value }: { value: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, { duration: 1.1, ease: [0.21, 0.47, 0.32, 0.98] });
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return () => {
      controls.stop();
      unsub();
    };
  }, [value, count, rounded]);

  return <>{display}</>;
}

function ScoreRing({ score }: { score: number }) {
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const color = scoreColor(score);

  return (
    <div className="relative w-28 h-28 shrink-0">
      <svg width="112" height="112" viewBox="0 0 112 112">
        <circle
          cx="56"
          cy="56"
          r={radius}
          fill="none"
          stroke="rgba(148,163,184,0.12)"
          strokeWidth="8"
        />
        <motion.circle
          className="audit-score-ring"
          cx="56"
          cy="56"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          style={{ transformOrigin: "56px 56px" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold" style={{ color }}>
          <ScoreNumber value={score} />
        </span>
        <span className="text-[10px] text-muted/60 uppercase tracking-wider">score</span>
      </div>
    </div>
  );
}

export default function SiteAudit() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AuditResult | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  async function runAudit(e: React.FormEvent) {
    e.preventDefault();
    if (!url.trim() || loading) return;
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong running that audit.");
      } else {
        setResult(data);
        setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }), 100);
      }
    } catch {
      setError("Network error — couldn't run the audit. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="glow-border hud-corners rounded-2xl overflow-hidden">
      <div className="rounded-2xl p-8 md:p-10">
        <div className="flex items-center justify-between mb-3">
          <p className="eyebrow">Live audit — try it now</p>
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">
          See what&apos;s actually wrong with your site
        </h3>
        <p className="text-muted text-sm mb-7 leading-relaxed">
          Real checks, run live against your URL right now — not a canned demo. HTTPS, mobile
          readiness, SEO basics, load time, and more.
        </p>

        <form onSubmit={runAudit} className="flex flex-col sm:flex-row gap-2.5 mb-2">
          <input
            type="text"
            inputMode="url"
            aria-label="Website URL to audit"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="yourbusiness.com"
            className="input-field flex-1 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted/50"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !url.trim()}
            className={`btn-gradient text-white font-semibold px-7 py-2.5 rounded-lg text-sm whitespace-nowrap shrink-0 disabled:opacity-50 disabled:cursor-not-allowed ${!loading && !result ? "btn-pulse" : ""}`}
          >
            {loading ? "Scanning…" : "Run audit"}
          </button>
        </form>

        <AnimatePresence mode="wait">
          {loading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="audit-scanning rounded-lg mt-5 p-5 border border-[var(--border)] text-sm text-muted/70 font-mono"
            >
              <span className="text-accent-light">{">"}</span> fetching page…{" "}
              <span className="text-accent-light">{">"}</span> checking SEO, speed, mobile-readiness…
            </motion.div>
          )}

          {error && !loading && (
            <motion.p
              key="error"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-orange-400 mt-3"
            >
              {error}
            </motion.p>
          )}

          {result && !loading && (
            <motion.div
              key="result"
              ref={resultsRef}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-6 pt-6 border-t border-[var(--border)]"
            >
              <div className="flex items-center gap-5 mb-5">
                <ScoreRing score={result.score} />
                <div className="min-w-0">
                  <p className="font-semibold truncate">{result.title || result.url}</p>
                  <p className="text-xs text-muted/70 font-mono truncate">{result.url}</p>
                  <div className="flex gap-4 mt-2 text-xs text-muted/70">
                    <span>{result.loadMs}ms response</span>
                    <span>{result.pageWeightKB}KB scanned</span>
                  </div>
                </div>
              </div>

              <div className="space-y-0">
                {result.checks.map((c) => (
                  <div key={c.id} className="check-row">
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        c.pass ? "check-icon-pass" : "check-icon-fail"
                      }`}
                    >
                      {c.pass ? (
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      ) : (
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                      )}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium">{c.label}</p>
                      <p className="text-xs text-muted/60 leading-relaxed">{c.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {result.score < 90 && (
                <div className="mt-5 pt-5 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm text-muted">
                    I can fix all of this in a week or two.
                  </p>
                  <Link href="/contact" className="btn-gradient text-white font-semibold px-5 py-2 rounded-lg text-sm whitespace-nowrap">
                    Get a fix plan
                  </Link>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

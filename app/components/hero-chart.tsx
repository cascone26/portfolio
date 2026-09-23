"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const BASE = [35, 42, 38, 55, 48, 62, 58, 71, 65, 78, 85, 92];

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${Math.round(v)}${suffix}`);
  const [display, setDisplay] = useState(`0${suffix}`);

  useEffect(() => {
    const controls = animate(count, to, { duration: 1.4, ease: [0.21, 0.47, 0.32, 0.98] });
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return () => {
      controls.stop();
      unsub();
    };
  }, [to, count, rounded]);

  return <>{display}</>;
}

export default function HeroChart() {
  const [heights, setHeights] = useState(BASE);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setHeights((prev) =>
        prev.map((h) => {
          const next = h + (Math.random() - 0.5) * 10;
          return Math.min(96, Math.max(25, next));
        })
      );
    }, 1400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[var(--tint-04)] border border-[var(--border)] rounded-xl p-4 relative overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs font-medium text-muted/80">Visitors this month</p>
        <p className="text-xs font-semibold text-green-400">
          +<Counter to={34} suffix="%" />
        </p>
      </div>
      <div className="flex items-end gap-1.5 h-16">
        {heights.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-sm bg-gradient-to-t from-accent/40 to-accent-light/60"
            initial={{ height: "4%" }}
            animate={{ height: `${h}%` }}
            transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          />
        ))}
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function BackgroundFx() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 30, damping: 22 });
  const sy = useSpring(my, { stiffness: 30, damping: 22 });

  const orb1X = useTransform(sx, (v) => v * 40);
  const orb1Y = useTransform(sy, (v) => v * 30);
  const orb2X = useTransform(sx, (v) => v * -30);
  const orb2Y = useTransform(sy, (v) => v * 25);
  const orb3X = useTransform(sx, (v) => v * 20);
  const orb3Y = useTransform(sy, (v) => v * -20);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    function onMove(e: MouseEvent) {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    }
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 transition-colors duration-500" style={{ background: "var(--background)" }} />
      <div className="vignette absolute inset-0 transition-[background] duration-500" />

      <motion.div
        style={{ x: orb1X, y: orb1Y, background: "var(--glow-1)" }}
        className="glow-orb w-[600px] h-[600px] -top-[200px] -left-[200px] transition-colors duration-500"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: [0.37, 0, 0.63, 1] }}
      />
      <motion.div
        style={{ x: orb2X, y: orb2Y, background: "var(--glow-2)" }}
        className="glow-orb w-[500px] h-[500px] top-[40%] -right-[150px] transition-colors duration-500"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: [0.37, 0, 0.63, 1], delay: 1.5 }}
      />
      <motion.div
        style={{ x: orb3X, y: orb3Y, background: "var(--glow-3)" }}
        className="glow-orb w-[400px] h-[400px] bottom-[10%] left-[20%] transition-colors duration-500"
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: [0.37, 0, 0.63, 1], delay: 3 }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Film grain */}
      <div
        className="absolute inset-0 mix-blend-overlay transition-opacity duration-500"
        style={{
          opacity: "var(--grain-opacity)",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='90'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}

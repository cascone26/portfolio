"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

const offsets = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
};

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className,
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [forcedVisible, setForcedVisible] = useState(false);
  const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Safety net: if IntersectionObserver never fires for this element (browser
  // quirk, privacy extension, edge case), don't leave content permanently
  // invisible/offset — force it visible after a short delay regardless.
  useEffect(() => {
    if (isInView) return;
    const timer = setTimeout(() => setForcedVisible(true), 1200 + delay * 1000);
    return () => clearTimeout(timer);
  }, [isInView, delay]);

  const visible = isInView || forcedVisible;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={visible ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.7, delay, ease: [0.2, 0.8, 0.3, 1.05] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

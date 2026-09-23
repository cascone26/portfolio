"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
  { href: "/referral-program", label: "Refer & Earn" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      className="sticky top-0 z-50 w-full px-4"
      animate={{ paddingTop: scrolled ? 10 : 16 }}
      transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <motion.nav
        className="nav-pill max-w-5xl mx-auto rounded-2xl"
        animate={{
          boxShadow: scrolled
            ? "0 12px 40px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)"
            : "0 8px 30px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.03)",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-5 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="relative w-2 h-2 rounded-full bg-accent-cyan shrink-0">
              <span className="absolute inset-0 rounded-full bg-accent-cyan animate-ping opacity-60" />
            </span>
            <span className="font-bold text-[15px] text-foreground tracking-tight">
              Built<span className="text-accent-light">Simple</span>
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex gap-0.5 text-sm">
            {links.map((l) => {
              const isActive =
                l.href === "/"
                  ? pathname === "/"
                  : pathname === l.href || pathname.startsWith(l.href + "/");
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`px-3 py-1.5 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-accent-light bg-accent/10 font-medium"
                      : "text-muted hover:text-foreground hover:bg-white/[0.05]"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="btn-gradient text-white font-semibold px-4 py-1.5 rounded-lg text-sm"
            >
              Get a quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-muted hover:text-foreground transition-colors p-1"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-white/[0.06] px-3 py-3 space-y-1">
            {links.map((l) => {
              const isActive =
                l.href === "/"
                  ? pathname === "/"
                  : pathname === l.href || pathname.startsWith(l.href + "/");
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm transition-all ${
                    isActive
                      ? "text-accent-light bg-accent/10 font-medium"
                      : "text-muted hover:text-foreground hover:bg-white/[0.05]"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-gradient text-white font-semibold px-3 py-2 rounded-lg text-sm block text-center mt-2"
            >
              Get a quote
            </Link>
          </div>
        )}
      </motion.nav>
    </motion.div>
  );
}

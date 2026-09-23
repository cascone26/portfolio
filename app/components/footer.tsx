import Link from "next/link";

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
  { href: "/resources/website-planning-checklist", label: "Free Checklist" },
  { href: "/referral-program", label: "Refer & Earn $200" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] pt-16 pb-8 px-6 overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-accent-cyan/40 to-transparent" />
      <div className="signal-grid absolute inset-x-0 top-0 h-64 pointer-events-none opacity-40" />

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 relative">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-accent-cyan shrink-0" />
            <p className="font-bold text-lg text-foreground tracking-tight">
              Built<span className="text-accent-light">Simple</span>
            </p>
          </div>
          <p className="text-muted text-sm leading-relaxed">
            Web & AI solutions for small businesses in Kansas City.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <p className="font-semibold text-xs uppercase tracking-wider text-muted mb-4">
            Pages
          </p>
          <div className="grid grid-cols-2 gap-2">
            {quickLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-muted text-sm hover:text-accent-light transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="font-semibold text-xs uppercase tracking-wider text-muted mb-4">
            Contact
          </p>
          <div className="space-y-2 text-sm text-muted">
            <p>
              <a
                href="tel:816-520-5652"
                className="hover:text-accent-light transition-colors"
              >
                816-520-5652
              </a>
            </p>
            <p>
              <a
                href="mailto:cobo.cascone@gmail.com"
                className="hover:text-accent-light transition-colors"
              >
                cobo.cascone@gmail.com
              </a>
            </p>
            <p>Mission, KS</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-12 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-2 text-center text-muted text-xs relative">
        <span>&copy; {new Date().getFullYear()} BuiltSimple</span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Built and run by one person — no agency layers
        </span>
      </div>
    </footer>
  );
}

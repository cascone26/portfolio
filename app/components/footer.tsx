import Link from "next/link";

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <p className="font-bold text-lg text-foreground mb-2">Jacob Cascone</p>
          <p className="text-muted text-sm">
            Web & AI solutions for small businesses in Kansas City.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <p className="font-semibold text-sm text-foreground mb-3">Pages</p>
          <div className="grid grid-cols-2 gap-2">
            {quickLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-muted text-sm hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="font-semibold text-sm text-foreground mb-3">Contact</p>
          <div className="space-y-2 text-sm text-muted">
            <p>
              <a href="tel:816-520-5652" className="hover:text-foreground transition-colors">
                816-520-5652
              </a>
            </p>
            <p>
              <a
                href="mailto:cobo.cascone@gmail.com"
                className="hover:text-foreground transition-colors"
              >
                cobo.cascone@gmail.com
              </a>
            </p>
            <p>Mission, KS</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-border flex justify-between items-center text-muted text-xs">
        <span>&copy; {new Date().getFullYear()} Jacob Cascone</span>
        <span>Mission, KS</span>
      </div>
    </footer>
  );
}

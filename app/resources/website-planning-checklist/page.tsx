import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../../components/fade-in";
import BlogEmailCapture from "../../components/blog-email-capture";

export const metadata: Metadata = {
  title: "Website Planning Checklist for Small Businesses | BuiltSimple",
  description:
    "Free website planning checklist — branding, content, SEO, and launch steps to get your small business website right the first time.",
  openGraph: {
    title: "Website Planning Checklist for Small Businesses",
    description:
      "Free checklist — everything you need before building or redesigning your business website.",
    url: "https://builtsimple.dev/resources/website-planning-checklist",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Planning Checklist for Small Businesses",
    description:
      "Free checklist — everything you need before building or redesigning your business website.",
  },
  alternates: {
    canonical: "https://builtsimple.dev/resources/website-planning-checklist",
  },
};

const sections = [
  {
    title: "1. Brand & Identity",
    items: [
      "Logo file in PNG and SVG format (high resolution)",
      "Brand colors — primary, secondary, and accent (hex codes)",
      "Fonts — 1-2 fonts for headings and body text",
      "Tagline or slogan (if you have one)",
      "Brand voice — formal, casual, friendly, authoritative?",
    ],
  },
  {
    title: "2. Business Basics",
    items: [
      "Business name, address, phone number (NAP — must match Google Business Profile)",
      "Hours of operation",
      "Service area or delivery radius",
      "Professional email address (yourname@yourdomain.com)",
      "Social media links (Instagram, Facebook, LinkedIn, etc.)",
    ],
  },
  {
    title: "3. Content Prep",
    items: [
      "Homepage headline — what you do, who you help, in one sentence",
      "About page — your story, mission, team bios",
      "Services or products — names, descriptions, pricing (if public)",
      "10-20 high-quality photos (team, workspace, products, completed work)",
      "Customer testimonials or reviews (with permission to use)",
      "FAQ — 5-10 common questions your customers ask",
    ],
  },
  {
    title: "4. Pages to Plan",
    items: [
      "Home — hero, services overview, social proof, CTA",
      "About — story, team, mission",
      "Services / Products — what you offer with clear descriptions",
      "Contact — form, phone, email, map, hours",
      "Blog (optional but recommended for SEO)",
      "Portfolio / Gallery (if visual work)",
      "Pricing (if transparent pricing fits your business)",
    ],
  },
  {
    title: "5. SEO Foundations",
    items: [
      "Target keywords — 5-10 phrases your customers search for",
      "Google Business Profile claimed and verified",
      "Page titles and meta descriptions for each page",
      "Alt text planned for all images",
      "Local keywords in content (city, neighborhood, service area)",
      "Sitemap and robots.txt (your developer handles this)",
    ],
  },
  {
    title: "6. Technical Setup",
    items: [
      "Domain name purchased (or know what you want)",
      "Hosting decided (Vercel, Netlify, or traditional host)",
      "SSL certificate (HTTPS — most hosts include this free)",
      "Google Analytics or Vercel Analytics installed",
      "Contact form connected to your email",
      "Mobile responsive design confirmed",
    ],
  },
  {
    title: "7. Legal & Compliance",
    items: [
      "Privacy policy page",
      "Terms of service (if applicable)",
      "Cookie consent banner (if using analytics/tracking)",
      "ADA accessibility basics (alt text, contrast, keyboard nav)",
    ],
  },
  {
    title: "8. Launch Checklist",
    items: [
      "Test all forms — do they actually send?",
      "Test on mobile, tablet, and desktop",
      "Check all links — no 404s",
      "Verify Google Business Profile links to new site",
      "Submit sitemap to Google Search Console",
      "Set up redirects from old URLs (if redesign)",
      "Announce the launch — email, social, in-store signage",
    ],
  },
  {
    title: "9. Post-Launch",
    items: [
      "Monitor Google Search Console for crawl errors",
      "Ask 3-5 customers to leave Google reviews",
      "Publish first blog post within 2 weeks",
      "Set up monthly check-in — update content, add new photos",
      "Review analytics after 30 days — what pages get traffic?",
    ],
  },
];

export default function WebsitePlanningChecklist() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Website Planning Checklist for Small Businesses",
            description:
              "Free website planning checklist covering branding, content, SEO, and launch steps.",
            author: { "@type": "Person", name: "Jacob Cascone" },
            publisher: { "@type": "Organization", name: "BuiltSimple" },
            url: "https://builtsimple.dev/resources/website-planning-checklist",
          }),
        }}
      />

      <section className="relative pt-12 pb-8 px-6">
        <div className="absolute top-0 left-1/3 w-[500px] h-[300px] rounded-full bg-blue-500/[0.05] blur-[100px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-accent/10 text-accent-light text-xs px-2.5 py-1 rounded-lg font-medium">
                Free Resource
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight leading-tight">
              Website Planning Checklist for Small Businesses
            </h1>
            <p className="text-muted leading-relaxed max-w-2xl">
              Everything you need to prepare before building or redesigning your
              business website. Work through each section so nothing gets missed.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-8 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.1}>
            <BlogEmailCapture />
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto space-y-10">
          {sections.map((section, si) => (
            <FadeIn key={si} delay={0.05 * si}>
              <div className="glass rounded-2xl p-6">
                <h2 className="text-lg font-bold mb-4 tracking-tight">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.items.map((item, ii) => (
                    <li
                      key={ii}
                      className="flex gap-3 text-muted text-sm leading-relaxed"
                    >
                      <span className="shrink-0 mt-0.5 w-5 h-5 rounded border border-white/10 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white/20"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="glass rounded-2xl p-8 text-center">
              <h2 className="text-xl font-bold mb-3">
                Need help with your website?
              </h2>
              <p className="text-muted text-sm leading-relaxed max-w-md mx-auto mb-6">
                I build fast, modern websites for small businesses in Kansas
                City. If you have questions about any of these items, I am happy to
                help.
              </p>
              <Link
                href="/contact"
                className="btn-gradient text-white font-semibold py-2.5 px-6 rounded-lg text-sm inline-block"
              >
                Get a free consultation
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="border-t border-white/[0.06] pt-10">
              <h2 className="text-lg font-bold mb-4">Related Blog Posts</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Link
                  href="/blog/how-much-does-a-small-business-website-cost-in-kansas-city-2026-guide"
                  className="group glass rounded-2xl p-5 block"
                >
                  <h3 className="font-semibold text-sm group-hover:text-accent-light transition-colors leading-snug">
                    How Much Does a Small Business Website Cost in Kansas City?
                  </h3>
                  <p className="text-muted text-xs mt-2 leading-relaxed">
                    Real pricing breakdowns for agencies, freelancers, and DIY
                    options.
                  </p>
                </Link>
                <Link
                  href="/blog/best-type-of-website-for-restaurants-salons-and-contractors-2026"
                  className="group glass rounded-2xl p-5 block"
                >
                  <h3 className="font-semibold text-sm group-hover:text-accent-light transition-colors leading-snug">
                    The Best Type of Website for Restaurants, Salons, and
                    Contractors
                  </h3>
                  <p className="text-muted text-xs mt-2 leading-relaxed">
                    Industry-specific must-haves and what you can skip.
                  </p>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Videographers in Kansas City",
  description:
    "Custom websites for wedding, commercial, and event videographers in the Kansas City area. Showcase your reel, packages, and booking process to win more clients.",
  alternates: {
    canonical: "https://builtsimple.dev/for/videographers",
  },
};

export default function VideoGraphersPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Videographers in Kansas City",
    description: "Custom websites for wedding and commercial videographers in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Videographers",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Couples and businesses hiring a videographer make their decision in the first 60 seconds of watching your reel. A website that puts your best work front and center, explains your packages clearly, and makes booking easy wins the date. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Videographers in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Videographers</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Whether you film weddings, corporate events, brand
              videos, or documentary-style content, clients choose
              you by watching your work. They open several
              videographers&apos; websites in tabs, start the
              reels, and close the ones that don&apos;t feel right
              within seconds. The ones who make the shortlist are
              the ones whose site loads fast, whose reel plays
              immediately, and whose packages and process are
              clearly explained so there are no surprises. A
              videographer website designed around your best
              footage, with clean package options and a
              frictionless inquiry form, converts browsers into
              booked clients.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What clients consider when choosing a videographer
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Reel and sample films — full wedding films, highlight reels, commercial spots, brand videos",
                  "Style — cinematic, documentary, editorial, aerial — clients want to match your look to their vision",
                  "Packages — what each tier includes, hours of coverage, number of cameras, second shooter",
                  "Deliverables — turnaround time, file format, platform (private link, USB, streaming)",
                  "Booking process — how far in advance to book, deposit amount, contract and payment schedule",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-accent-light mt-0.5 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What your videographer website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Featured reel — full-screen autoplay hero reel or embedded highlight film on the homepage",
                  "Portfolio — sample films by category (wedding, commercial, event, brand) with context",
                  "Packages — tiered pricing with hours, cameras, add-ons, turnaround time per tier",
                  "Style guide — your aesthetic explained, what makes your work distinct, mood board or stills",
                  "Process — inquiry to delivery, what the shoot day looks like, editing timeline, how files are delivered",
                  "Inquiry form with event type, date, location, guest count, vision, and budget range",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-accent-light mt-0.5 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.28}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">What clients say</h2>
              <blockquote className="text-muted text-sm leading-relaxed italic border-l-2 border-accent/40 pl-4">
                &ldquo;I had great work and no website that
                showed it well. My reel was buried behind
                navigation, my packages were vague, and
                couples were ghosting after the first email.
                The new site with the reel front and center,
                clear package tiers, and an inquiry form that
                asked the right questions changed everything.
                I started getting inquiries from couples who
                already loved my style and just needed
                to confirm availability.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — M. Okafor, videographer, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A videographer site with reel, packages, and
                inquiry form starts at $275. A full site with
                portfolio by category, style guide, and process
                page is $525–$1,050. One booked wedding
                covers the cost. No contracts, no monthly fees.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Ready to get started?</h2>
              <p className="text-muted text-sm leading-relaxed mb-2">
                Get a free mockup — no obligation. Fill out the form below, or
                give me a call.
              </p>
              <p className="mb-6">
                <a href="tel:8165205652" className="text-accent-light text-lg font-semibold hover:underline">
                  (816) 520-5652
                </a>
              </p>
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

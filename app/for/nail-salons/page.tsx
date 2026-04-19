import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Nail Salons in Kansas City",
  description:
    "Custom websites for nail salons and nail technicians in the Kansas City area. Show your work, simplify booking, and build the loyal clientele that fills your chair every 2 weeks.",
  alternates: {
    canonical: "https://builtsimple.dev/for/nail-salons",
  },
};

export default function NailSalonsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Nail Salons in Kansas City",
    description: "Custom websites for nail salons and nail technicians in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Nail Salons",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Nail clients choose with their eyes. Your portfolio on a searchable site converts more new clients than any social post. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Nail Salons in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Nail Salons</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Nail salon clients choose based on portfolio first, convenience
              second. Most nail businesses show their work on Instagram where it
              gets buried and doesn&apos;t rank on Google. A website with your
              best nail art, a clear service menu, and easy online booking makes
              you visible to every new client searching in your area.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What clients check before booking a nail appointment
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Portfolio — gel sets, nail art, acrylics, dip powder, natural nail care",
                  "Services offered and whether they do nail art or just basic manicures",
                  "Pricing by service — gel manicure, full set, fills, pedicures",
                  "How to book — can they request their preferred tech?",
                  "Hours and whether walk-ins are accepted or appointments required",
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
                What your nail salon website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Portfolio gallery organized by style — nail art, gel, acrylic, dip, natural, seasonal",
                  "Services and pricing menu — clearly broken out with service time included",
                  "Online booking button — linked to your existing scheduler (Vagaro, StyleSeat, etc.)",
                  "Tech profiles — if clients have a preferred tech, show who's available",
                  "Salon policies — cancellation, late arrivals, walk-in availability",
                  "Reviews that mention the specific tech, service, and how long the color lasted",
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
                &ldquo;All my clients came from Instagram referrals and I had no
                Google presence at all. After the website went up with my nail art
                gallery, I started getting new clients who found me searching for
                nail art specifically in our neighborhood — people who had never
                heard of me and booked based on the portfolio alone.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — V. Tran, nail technician, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A nail salon site with portfolio, services, and booking link
                starts at $200. A full site with style categories, tech profiles,
                and booking integration is $400–700. Five new regular clients
                covers the cost in the first few months. No contracts, no monthly
                fees.
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

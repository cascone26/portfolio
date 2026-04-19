import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Tree Trimming and Arborist Companies in Kansas City",
  description:
    "Custom websites for tree trimming, pruning, and arborist companies in the Kansas City area. Show your ISA certifications, insurance coverage, and service range to win residential and commercial tree care contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/tree-trimming",
  },
};

export default function TreeTrimmingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Tree Trimming and Arborist Companies in Kansas City",
    description: "Custom websites for tree trimming and arborist companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Tree Trimming Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners with a large tree near their house want ISA certification and liability insurance confirmed before anyone climbs. Property managers want an arborist who can assess hazards, provide a written report, and handle large commercial canopy work. A website that addresses both earns the call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Tree Trimming in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Tree Trimming</span> &amp; Arborist Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Tree service customers fall into two
              groups with very different concerns.
              Homeowners with a large mature tree
              near their house are primarily concerned
              with safety and liability: they want
              to confirm you carry general liability
              and workers compensation insurance
              before anyone sets foot on their
              property, and they want to know whether
              you have ISA (International Society
              of Arboriculture) certified arborists
              on staff who can assess whether a
              tree is hazardous or can be preserved
              with proper pruning. Commercial property
              managers and HOAs want a vendor who
              can handle large-scale canopy work,
              provide written hazard assessments,
              and operate efficiently across multiple
              properties. Both groups also want to
              understand the difference between
              trimming, pruning, crown reduction,
              and deadwooding — and whether their
              tree needs removal or can be preserved.
              A tree service website that leads with
              insurance and ISA credentials, explains
              what different pruning services involve,
              and shows your equipment and work quality
              earns the quote request from customers
              who want to hire a professional,
              not the cheapest bid.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners and property managers check before hiring a tree service
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Insurance — general liability and workers comp, coverage amounts, certificate on request",
                  "ISA certification — International Society of Arboriculture — the primary professional credential",
                  "Service types — trimming, pruning, crown reduction, deadwooding, hazard removal, stump grinding",
                  "Tree health assessment — disease diagnosis, structural issues, preservation vs. removal recommendation",
                  "Equipment — bucket trucks, cranes, climbing capability, chipper size, large tree capability",
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
                What your tree trimming website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Credentials — ISA certification numbers, years in business, insurance carrier and coverage",
                  "Service guide — pruning, crown reduction, deadwooding, removal — what each involves and when needed",
                  "Tree health — common KC tree diseases, storm damage assessment, preservation options",
                  "Equipment — bucket truck, crane, climbing gear, chipper — what large job capability you have",
                  "Commercial services — HOA and property management, multi-property contracts, storm response",
                  "Quote form with tree species if known, size, location, service needed, urgency level",
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
                &ldquo;We were competing mostly on
                price because homeowners couldn&apos;t
                evaluate us against unlicensed guys
                with a chainsaw. Our ISA certification
                and our million-dollar liability policy
                are real differentiators but we had
                nowhere to show them. The new site
                with our credentials front and center,
                our service guide explaining what
                crown reduction actually means,
                and our equipment section showing
                we can handle large jobs changed
                the quality of quotes entirely.
                We stopped losing bids to guys
                with no insurance and started
                winning the customers who actually
                care about doing the job right.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — J. Olawale, ISA-certified arborist, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A tree service site with credentials,
                services, and quote form starts at $225.
                A full site with service guide, commercial
                section, and equipment detail is $425–$850.
                One commercial property contract covers
                the cost. No contracts, no monthly fees.
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

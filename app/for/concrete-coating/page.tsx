import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Concrete Coating and Epoxy Floor Companies in Kansas City",
  description:
    "Custom websites for concrete coating, epoxy floor, and polyaspartic coating companies in the Kansas City area. Show your portfolio, coating systems, and process to win garage floor and commercial projects.",
  alternates: {
    canonical: "https://builtsimple.dev/for/concrete-coating",
  },
};

export default function ConcreteCoatingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Concrete Coating and Epoxy Floor Companies in Kansas City",
    description: "Custom websites for concrete coating companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Concrete Coating Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners considering a garage floor coating want to see before-and-after photos of actual garages, understand the difference between epoxy and polyaspartic, and know whether the coating will hold up to Kansas City winters and hot tires. A portfolio that answers those questions converts research into quotes. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Concrete Coating in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Concrete Coating</span> &amp; Epoxy Floor Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Homeowners and business owners researching
              concrete coatings are trying to solve a
              specific problem: they want a floor that
              looks good, holds up to use, and justifies
              the investment over doing nothing. Before
              they request a quote, they want to understand
              the difference between water-based epoxy,
              100% solids epoxy, and polyaspartic coatings
              — and why the system matters more than
              the brand name. They want to see before-and-after
              photos of residential garages, commercial
              floors, and industrial spaces that look
              similar to theirs. They want to know how
              you prepare the concrete — diamond grinding
              versus acid etching — because they have
              read enough to know that surface prep
              determines whether a coating bonds or
              peels. A concrete coating website that
              educates homeowners on system options,
              shows real job photos with honest context,
              and explains your prep process earns
              the quote request from the homeowner
              who has been researching for a month
              and is ready to commit.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before requesting a concrete coating quote
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Coating systems — water-based epoxy vs. 100% solids epoxy vs. polyaspartic — what each means",
                  "Surface prep — diamond grinding vs. acid etching, why prep quality determines bond life",
                  "Before and after photos — same floor types and conditions as theirs, with honest context",
                  "Durability — hot tire pickup resistance, UV stability, chemical resistance, winter performance",
                  "Flake and color options — chip sizes, flake blends, solid colors, metallic finishes",
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
                What your concrete coating website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Portfolio — residential garages, commercial floors, patios, basements with before/after pairs",
                  "Coating systems — epoxy options, polyaspartic, Penntek/ArmorPoxy/similar brands you use",
                  "Prep process — diamond grinding equipment, moisture testing, crack repair, why it matters",
                  "Color and flake guide — chip blends, solid color options, metallic, topcoat sheen levels",
                  "Commercial work — warehouses, retail, showrooms, restaurants — industrial application examples",
                  "Quote form with floor type, square footage, condition, timeline, what they have now",
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
                &ldquo;Most of our calls came from
                Facebook ads but the leads were low
                quality — people who had no idea
                what a proper coating costs and
                were shocked by the quote. The new
                site with our coating systems
                explained, our prep process shown
                with photos, and our portfolio
                organized by floor type changed
                the quality of inbound leads
                completely. People who find us
                through the website already
                understand what diamond grinding
                means and why polyaspartic
                costs more than a big box store
                kit. Those conversations close
                faster and at better margin.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — W. Fontenot, concrete coating contractor, Lenexa, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A concrete coating site with portfolio,
                coating systems, and quote form starts
                at $225. A full site with prep process
                detail, color guide, and commercial work
                section is $425–$850. One garage job
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

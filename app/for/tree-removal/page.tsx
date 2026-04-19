import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Tree Removal Companies in Kansas City",
  description:
    "Custom websites for tree removal, tree trimming, and stump grinding companies in the Kansas City area. Show your equipment, ISA certifications, and emergency storm response to win residential and commercial tree removal contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/tree-removal",
  },
};

export default function TreeRemovalPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Tree Removal Companies in Kansas City",
    description: "Custom websites for tree removal companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Tree Removal Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners with a hazardous tree or storm damage want to know you are insured, ISA certified, and can respond fast. A website with your credentials, equipment, and real job photos earns the call before they dial three competitors. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Tree Removal in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Tree Removal</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Tree removal customers in Kansas
              City search in two distinct
              situations: emergency storm
              response when a tree is
              on the house, blocking the
              driveway, or threatening
              a structure — and planned
              removal for a dead, diseased,
              or hazardous tree that
              needs to come down before
              the next storm. The emergency
              market moves fast — whoever
              shows up in Google first
              after a KC windstorm or
              ice event gets the calls.
              The planned market involves
              more research: homeowners
              want ISA Certified Arborist
              credentials because the
              certification signals
              training and knowledge,
              they want proof of liability
              insurance and workers&apos;
              compensation coverage
              because tree work near
              structures is high-risk,
              and they want to see
              equipment — a company
              with a bucket truck,
              chipper, and stump grinder
              is set up to handle
              the job safely and
              completely. Service
              range matters: full-service
              tree companies offer
              removal, trimming, crown
              reduction, cabling and
              bracing for leaning trees,
              stump grinding, and
              sometimes land clearing.
              The wood and chip question
              comes up — some customers
              want firewood left behind,
              others want everything
              hauled away. Kansas City&apos;s
              mature tree canopy —
              particularly in Brookside,
              Waldo, Westwood, and
              older Johnson County
              neighborhoods — means
              significant tree work
              demand year-round.
              A tree removal website
              that leads with insurance
              and credentials, shows
              the equipment, has a
              storm damage emergency
              call section, and displays
              real job photos earns
              the homeowner who is
              choosing between three
              Google results on
              a Sunday morning.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners look for before hiring a tree service
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Insurance and credentials — liability insurance, workers' comp, ISA Certified Arborist on crew",
                  "Equipment — bucket truck, chipper, stump grinder — signals a professional operation vs. day laborers",
                  "Storm response — emergency availability, how fast they can respond, temporary tarping if structure is hit",
                  "Full service vs. removal only — trimming, crown reduction, cabling, stump grinding, land clearing",
                  "Wood and debris — whether firewood is left, chips available for mulch, or full clean removal and haul",
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
                What your tree removal website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Credentials front and center — ISA certification, liability and workers' comp insurance, years in KC",
                  "Equipment gallery — bucket truck, chipper, stump grinder, rigging — what a professional operation looks like",
                  "Storm damage emergency — 24/7 availability, response time, structure protection until full removal",
                  "Full service menu — removal, trimming, crown reduction, cabling, stump grinding, land clearing",
                  "Job photo gallery — large removals, near-structure work, stump grinding before/after, clean job sites",
                  "Quote form with tree size, location (near structure or power lines), service type, emergency or planned",
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
                &ldquo;After a bad storm in KC
                the phone rings non-stop —
                but only if you show up
                when people search. I had
                no website and was getting
                zero of those calls. The
                guys who answered were
                whoever was first in
                Google Maps. The new site
                with our ISA cert, our
                insurance statement, our
                equipment photos, and
                the emergency section
                put us on the first
                page for storm damage
                searches. First major
                storm after launch
                we had more calls
                than we could handle
                in a week. The
                credentials on the
                site also meant better
                customers — people
                who were not just
                shopping on price.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — J. Whitfield, ISA Certified Arborist, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A tree removal site with credentials,
                equipment photos, and quote form
                starts at $225. A full site with
                storm emergency section, full service
                menu, and job gallery is $425–$850.
                One large removal covers the cost
                many times over. No contracts,
                no monthly fees.
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

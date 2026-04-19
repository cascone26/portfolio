import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Exterior Door Replacement Companies in Kansas City",
  description:
    "Custom websites for exterior door replacement, entry door installation, and door frame repair companies in the Kansas City area. Show your door core types, weatherstripping, and frame rot assessment to win door replacement contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/exterior-door-replacement",
  },
};

export default function ExteriorDoorReplacementPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Exterior Door Replacement Companies in Kansas City",
    description: "Custom websites for exterior door replacement and installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Exterior Door Replacement Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a drafty door needs adjustment or full replacement, what fiberglass vs. steel vs. wood exterior doors actually offer long-term, and how to tell if the frame is rotted before buying a new door. A website that explains door core types and frame assessment earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Door Replacement in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Exterior Door Replacement</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Exterior door replacement
              customers are homeowners
              with a drafty
              entry door that
              cannot be adjusted
              back to a good
              seal, a door
              that has warped
              or swollen and
              no longer operates
              smoothly, visible
              rot at the door
              sill or frame,
              or an original
              builder-grade
              hollow-core door
              they want to
              upgrade for security
              and energy performance.
              The central education
              is door core
              types and what
              they mean for
              longevity, energy
              performance, and
              maintenance: solid
              wood doors (pine,
              mahogany, fir)
              look premium but
              expand and contract
              with KC's humidity
              swings — a wood
              door that seals
              perfectly in
              winter may bind
              in summer and
              gap in winter;
              they require
              painting or staining
              every 3–5 years
              or the end grain
              absorbs moisture
              and the door
              warps. Steel
              doors (16 or
              18-gauge steel
              skins over a
              polyurethane
              foam core): R-5
              to R-6 insulation
              value, dent-resistant,
              paintable, maintain
              dimensional stability —
              the most common
              replacement choice
              for energy performance
              and security at
              moderate cost;
              steel skin can
              rust if the paint
              is compromised
              and moisture reaches
              bare metal. Fiberglass
              doors (Therma-Tru,
              Masonite Belleville):
              wood-grain texture
              that accepts stain
              or paint, dimensional
              stability in
              KC humidity, R-5
              to R-6 insulation
              value comparable
              to steel, no
              rust risk —
              the highest-durability
              exterior door
              for KC's combination
              of humidity, temperature
              swing, and UV
              exposure; higher
              initial cost
              than steel. Frame
              assessment: a
              slab replacement
              (door slab only,
              into existing
              frame) costs
              less but requires
              the existing
              frame to be
              square and rot-free;
              a prehung unit
              (new slab + new
              frame + new sill)
              is required when
              the frame is
              twisted, rotted,
              or out of square
              more than 1/4".
              Weatherstripping
              (Q-Lon compression
              foam, magnetic
              weatherstrip):
              a door that is
              drafty but structurally
              sound often needs
              weatherstrip replacement
              rather than a
              new door —
              Q-Lon foam compresses
              to seal against
              the door stop
              and lasts 10–15
              years before
              losing compression.
              A door replacement
              website that
              explains fiberglass
              vs. steel vs.
              wood in KC's
              climate, when
              slab replacement
              is appropriate
              vs. full prehung
              installation,
              and what weatherstrip
              replacement can
              address without
              full replacement
              earns the homeowner
              who feels the
              draft every winter
              and does not
              know whether
              to adjust, strip,
              or replace.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before replacing an exterior door
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Door core comparison — solid wood vs. steel vs. fiberglass, R-value, moisture stability, maintenance",
                  "Wood door KC humidity — why wood doors swell and gap in humidity swings, maintenance requirement",
                  "Slab vs. prehung — when frame condition allows slab replacement vs. when full prehung is required",
                  "Frame rot assessment — what to check, how out-of-square indicates frame has moved",
                  "Weatherstrip — when draft is a weatherstrip problem not a door problem, product lifespan",
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
                What your door replacement website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Door material guide — wood vs. steel vs. fiberglass in KC climate, R-value, maintenance, longevity",
                  "Fiberglass section — why dimensional stability matters in KC humidity, stain vs. paint finish options",
                  "Frame assessment guide — what rot and out-of-square look like, slab vs. prehung decision tree",
                  "Weatherstrip section — compression foam types, when replacement fixes draft without new door",
                  "Security section — core density, deadbolt reinforcement plate, strike box upgrade options",
                  "Quote form with door dimensions, current material, draft or operation issue, frame condition",
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
                &ldquo;Customers kept comparing
                my fiberglass door quotes
                to the $300 steel slab
                at the home center. The
                website section on KC humidity
                and wood door swelling —
                and why fiberglass holds
                its shape year-round —
                changed that comparison
                before the estimate. The
                frame assessment section
                also led to customers checking
                their own frames before
                I arrived, which meant
                the ones with rotted frames
                called expecting a full
                prehung job instead of
                being surprised by the
                scope increase on site.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Eaton, door and window installation, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A door replacement site with material comparison,
                slab vs. prehung guide, and quote form starts
                at $200. A full site with frame assessment
                section, weatherstrip guide, and security
                content is $425–$750. One fiberglass door
                installation covers the cost. No contracts,
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

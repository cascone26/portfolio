import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Weather Stripping Installation Companies in Kansas City",
  description:
    "Custom websites for weather stripping installation, door seal, and draft prevention companies in the Kansas City area. Show your seal type selection by door gap, compression standard, and KC winter draft diagnosis to win weather stripping contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/weather-stripping-installation",
  },
};

export default function WeatherStrippingInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Weather Stripping Installation Companies in Kansas City",
    description: "Custom websites for weather stripping installation and door seal companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Weather Stripping Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know what type of weather stripping works for their specific door gap, how to tell if the seal is worn out vs. the door is out of alignment, and whether foam tape from the hardware store actually works in KC winters. A website that explains weather stripping earns the call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Weather Stripping Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Weather Stripping Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Weather stripping installation
              customers are KC homeowners
              feeling cold air at the
              sides and top of their
              exterior doors in January,
              homeowners who replaced
              the foam tape themselves
              and it failed in one winter,
              or homeowners who have
              a door that has settled
              and the existing weather
              stripping only contacts
              the door on one side of
              the frame. The central
              education is seal type
              by application, the compression
              requirement that makes
              a seal actually work,
              and how to diagnose whether
              the problem is the seal
              or the door alignment —
              three things that determine
              whether weather stripping
              lasts one KC winter or
              ten.
              Seal types: foam tape
              (adhesive-backed open-cell
              or closed-cell foam) is
              the least durable type —
              it compresses and loses
              its spring-back within
              one to two years; it is
              appropriate for gaps up
              to 1/4 inch on low-traffic
              doors (basement doors,
              storm doors, attic hatches)
              but not for primary exterior
              doors that are used daily;
              V-strip (tension seal,
              spring bronze or plastic
              folded strip) is installed
              in the door stop channel
              and opens against the door
              face as the door closes —
              it is more durable than
              foam, handles gaps from
              1/16 to 3/8 inch, and
              is the standard for the
              side jambs and head of
              exterior doors in KC;
              compression weatherstrip
              (D-profile or bulb profile
              EPDM rubber or silicone)
              is mounted on the door
              stop face and compresses
              as the door contacts it —
              silicone performs better
              than EPDM in KC&apos;s temperature
              range (silicone stays
              flexible at -20°F, EPDM
              stiffens and cracks); door
              sweeps (flat flap or brush
              seal) mount on the interior
              or exterior door bottom
              face — they should not
              be confused with thresholds.
              Compression requirement:
              weather stripping only
              works when the door compresses
              the seal enough to close
              the gap — a seal that contacts
              the door lightly without
              deformation does not prevent
              air infiltration; the correct
              compression is 20–30% of
              the seal&apos;s uncompressed
              height; a 3/8-inch bulb
              seal should be compressed
              to approximately 1/4 inch
              when the door is closed;
              measuring the gap between
              the door and stop when
              the door is shut and comparing
              to the seal height shows
              whether the installed seal
              is actually compressing;
              in KC homes where the door
              has settled and contacts
              the stop on one side only,
              weather stripping provides
              no seal benefit on the
              non-contact side — the
              door alignment must be
              corrected first.
              Door alignment check:
              a door that drafts only
              on one side is usually
              a door alignment problem,
              not a seal problem — the
              door has sagged or the
              frame has racked and the
              door latch side or the
              hinge side is no longer
              parallel to the stop;
              testing with a dollar bill
              (insert between door and
              stop, close, pull — if
              it slides out easily there
              is no compression) across
              four points around the
              door perimeter identifies
              exactly where the gap
              is. A weather stripping
              website that explains
              why foam tape fails in
              KC, what compression is
              required for an effective
              seal, and how door alignment
              affects seal performance
              earns the homeowner who
              has replaced weather stripping
              themselves twice and still
              has a draft.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before weather stripping installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Seal types — foam tape vs. V-strip vs. compression seal, application by gap size, door stop location",
                  "Material durability — EPDM vs. silicone in KC cold, foam tape lifespan, spring bronze longevity",
                  "Compression requirement — 20-30% compression standard, dollar bill test, non-contact side diagnosis",
                  "Door alignment — one-side draft cause, hinge sag vs. frame rack, when alignment must be fixed first",
                  "Door sweep vs. threshold — which seals the bottom, installation difference, combined seal approach",
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
                What your weather stripping installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Seal type section — foam vs. V-strip vs. compression by gap size and door type, KC temperature rating",
                  "Compression guide — 20-30% standard, how to measure existing seal compression, dollar bill test method",
                  "Alignment diagnosis — one-side draft test, hinge vs. frame cause, when alignment fix is needed first",
                  "Material section — silicone vs. EPDM in KC cold, foam tape failure cause, spring bronze longevity",
                  "Door sweep section — bottom seal vs. threshold function, installation side, combined approach",
                  "Quote form with door type, draft location, existing seal type, door age, timeline",
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
                &ldquo;The alignment diagnosis section
                is the one that saves me
                from jobs that would go
                nowhere. Before, I&apos;d get
                calls from customers who
                had replaced weather stripping
                twice and still had a draft.
                The answer was always the
                door alignment — the seal
                wasn&apos;t compressing on the
                latch side because the hinge
                side had sagged. After the
                dollar bill test section
                went up explaining how to
                find where the compression
                is missing, customers started
                calling me with the test
                results already done. &apos;It
                slides out on the top and
                latch side, tight on the
                hinge side.&apos; That&apos;s a sagged
                hinge, not a seal problem.
                Better diagnosis before the
                first call means better jobs
                and no frustrated customers
                who expected a $40 fix.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — G. Tanner, door service and weatherization, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A weather stripping site with seal type section, compression
                guide, and quote form starts at $200. A full site with
                alignment diagnosis, material comparison, and door sweep
                content is $425–$750. One exterior door weatherization
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

import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Garage Door Spring Repair Companies in Kansas City",
  description:
    "Custom websites for garage door spring repair, opener installation, and garage door service companies in the Kansas City area. Show your same-day availability, spring types, and service range to win emergency and scheduled repair calls.",
  alternates: {
    canonical: "https://builtsimple.dev/for/garage-door-spring-repair",
  },
};

export default function GarageDoorSpringRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Garage Door Spring Repair Companies in Kansas City",
    description: "Custom websites for garage door spring repair companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Garage Door Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          A broken garage door spring is an emergency — the car is trapped and the homeowner needs someone today. A website with same-day availability front and center, your service area, and a phone number converts the panicked search into a booked call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Garage Door Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Garage Door Spring Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Garage door spring repair is primarily
              an emergency service. When a torsion
              spring snaps — almost always in
              the cold of winter when metal fatigue
              peaks — the door will not open,
              the car is trapped in the garage,
              and the homeowner needs someone
              there today. The first filter they
              apply is same-day availability and
              service area: are you taking calls
              right now, can you be there in
              two hours. The second filter is
              whether they trust you on pricing —
              spring replacement is a job where
              the fly-by-night operators show up
              and quote $400 for a $150 part,
              so homeowners are researching what
              a fair price is before anyone comes
              out. Beyond emergency spring work,
              garage door companies also do opener
              replacement (LiftMaster, Chamberlain,
              Genie), panel replacement on dented
              or damaged sections, cable and roller
              repair, and new door installation.
              Customers who are not in emergency
              mode and are shopping for a new
              door want to see door styles and
              insulation ratings. Commercial
              customers need high-cycle springs
              rated for heavy use, commercial
              operators, and dock leveler service.
              A garage door website that leads
              with same-day availability and
              service area, communicates pricing
              transparency, and shows your
              full service range earns both
              the emergency call and the
              scheduled replacement job.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners check when their garage door spring breaks
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Same-day availability — are you taking calls now, can you come today, what is the response window",
                  "Service area — what cities and zip codes you cover, whether they are in range",
                  "Spring types — torsion vs. extension, single vs. double spring, cycle rating and longevity",
                  "Pricing transparency — fair price range for spring replacement, what a typical job costs",
                  "Opener brands — LiftMaster, Chamberlain, Genie, Craftsman — whether you service and install them",
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
                What your garage door repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Same-day service — hours, response time, emergency line, whether you take after-hours calls",
                  "Spring repair — torsion vs. extension, cycle life, double-spring upgrade, why both should be replaced",
                  "Opener installation — LiftMaster, Chamberlain, Genie — belt vs. chain vs. screw drive, smart features",
                  "Cable, roller, and panel repair — what each involves, when repair beats replacement",
                  "New door installation — steel, wood, carriage style, insulation R-value options, brand lines",
                  "Service request form with door brand, issue description, opener type, address, time preference",
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
                &ldquo;Spring calls are pure
                emergency work — when someone&apos;s
                spring breaks at 7am on a Tuesday,
                they are calling whoever comes
                up first and can get there fast.
                Without a website, I was invisible
                in those searches. The new site
                with same-day service front and
                center, my service area listed,
                and an explanation of why both
                springs should be replaced at
                once changed everything. I rank
                now for the emergency searches
                and customers call already
                understanding the double-spring
                recommendation — no more
                convincing them on the phone.
                The commercial section brought
                in a property management company
                that puts me on all their buildings.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — R. Okonkwo, garage door technician, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A garage door site with services,
                availability, and contact form starts
                at $200. A full site with spring guide,
                opener brands, and new door section
                is $425–$750. One opener replacement
                job covers the cost. No contracts,
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

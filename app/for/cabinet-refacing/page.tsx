import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Cabinet Refacing Companies in Kansas City",
  description:
    "Custom websites for cabinet refacing, door replacement, and kitchen cabinet update companies in the Kansas City area. Show your door styles, wood species options, and before-and-after transformations to win cabinet refacing contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/cabinet-refacing",
  },
};

export default function CabinetRefacingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Cabinet Refacing Companies in Kansas City",
    description: "Custom websites for cabinet refacing companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Cabinet Refacing Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to understand what refacing actually is versus replacement, whether their cabinet boxes are candidates, and what the finished result looks like. A website with before-and-after photos and door style options earns the in-home estimate. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Cabinet Refacing in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Cabinet Refacing</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Cabinet refacing customers are
              homeowners who are tired
              of their kitchen&apos;s look
              but find full cabinet
              replacement pricing — $15,000
              to $50,000 or more —
              out of reach or
              unnecessary when the
              existing cabinet boxes
              are still structurally
              sound. Refacing replaces
              only the visible surfaces:
              all doors and drawer
              fronts are replaced
              with new units in
              the chosen style and
              species, and the
              exposed face frames
              and cabinet sides
              are covered with
              matching veneer or
              rigid thermofoil —
              the interior boxes
              stay in place.
              The result is a
              kitchen that looks
              like new cabinets
              at roughly 40–60%
              of the replacement
              cost. Door style
              options drive most
              of the decision:
              shaker (recessed
              center panel, flat
              rail and stile —
              the dominant style
              in KC remodels),
              raised panel (traditional,
              cathedral arch or
              square raise), flat
              slab (full overlay,
              modern), and beadboard
              insert. Material
              choices: solid wood
              (maple, cherry, oak,
              hickory, alder),
              MDF with paint-grade
              finish (very stable,
              no grain variation),
              and thermofoil (vinyl
              film over MDF —
              durable, easy clean,
              lower cost). Hardware
              replacement — hinges,
              pulls, and soft-close
              upgrades — is part
              of every refacing
              job and dramatically
              changes the functional
              feel. Box candidacy
              matters: boxes must
              be solid (no water
              damage, no delaminating
              plywood, no pest
              damage). A refacing
              website that shows
              door style options,
              explains the process,
              and has strong
              before-and-after photos
              earns the homeowner
              who is considering
              a kitchen update
              but not a full
              gut renovation.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before choosing cabinet refacing
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Refacing vs. replacement — what stays, what changes, why refacing makes sense when boxes are sound",
                  "Door styles — shaker vs. raised panel vs. slab, what each looks like, current KC kitchen trends",
                  "Material options — solid wood vs. MDF paint grade vs. thermofoil — durability, cost, appearance trade-offs",
                  "Box candidacy — what makes a cabinet box refaceable vs. needing replacement",
                  "Cost comparison — refacing at 40–60% of replacement cost, what the savings actually amount to",
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
                What your cabinet refacing website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Process walkthrough — what refacing includes, how long it takes, how the kitchen is protected during work",
                  "Door style gallery — shaker, raised panel, slab, beadboard — photos of each in KC kitchens",
                  "Material guide — solid wood species, MDF paint grade, thermofoil — what each is best for",
                  "Before and after photos — same kitchen before refacing and after, showing the transformation",
                  "Box assessment — what we look for in an in-home evaluation to confirm candidacy",
                  "Quote form with cabinet count, current door style, target style, timeline, box condition notes",
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
                &ldquo;Most of my customers have
                already gotten a quote
                for full replacement and
                come to me in sticker
                shock. They need to
                understand that their
                boxes are fine and
                that what they actually
                hate is the door
                style and the finish.
                The website explaining
                what refacing changes,
                showing the shaker
                door options, and
                laying out the before-and-after
                photos let customers
                arrive at the estimate
                already sold on the
                idea. I stopped spending
                the first half of every
                call convincing people
                that refacing is a
                real option.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — C. Morales, cabinet refacing specialist, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A cabinet refacing site with door
                style gallery, process walkthrough,
                and quote form starts at $200. A
                full site with before-and-after
                photos, material guide, and box
                assessment section is $425–$750.
                One average refacing job covers
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

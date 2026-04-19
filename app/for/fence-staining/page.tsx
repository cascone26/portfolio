import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Fence Staining Companies in Kansas City",
  description:
    "Custom websites for fence staining, deck and fence sealing, and wood fence restoration companies in the Kansas City area. Show your stain colors, preparation process, and before-and-after results to win fence staining contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/fence-staining",
  },
};

export default function FenceStainingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Fence Staining Companies in Kansas City",
    description: "Custom websites for fence staining and wood fence restoration companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Fence Staining Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether their fence is too far gone to stain, what the prep process looks like, and whether a solid stain or semi-transparent is better for their wood. A website with color options and before-and-after photos earns the quote call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Fence Staining in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Fence Staining</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Fence staining customers are
              homeowners with a wood
              privacy fence — typically
              cedar or pressure-treated
              pine — that has grayed,
              cracked, or lost its
              original color and
              needs restoration before
              it deteriorates further.
              The education challenge
              is stain type selection:
              semi-transparent stain
              penetrates the wood
              and allows grain
              visibility — it enhances
              the natural look but
              requires the wood
              to be in relatively
              good condition; once
              wood is heavily weathered,
              gray, or has heavy
              mildew staining,
              semi-transparent does
              not cover well. Solid
              stain (opaque, paint-like
              coverage) hides weathering,
              covers gray and staining,
              and can restore a
              fence that looks
              past saving — but
              it requires reapplication
              more frequently because
              it sits on the surface
              rather than penetrating.
              Semi-solid stain
              is the middle option:
              more penetration
              than solid but better
              coverage than semi-transparent.
              Brands: Armstrong Clark,
              Defy, TWP (Total
              Wood Preservative),
              Cabot, and Ready
              Seal are professional-grade
              choices. Preparation
              is everything: pressure
              washing the fence
              to remove dirt, mildew,
              and gray oxidation
              is required before
              any stain application.
              A wood brightener
              (oxalic acid-based)
              after washing opens
              the wood grain and
              neutralizes the
              gray. Old paint or
              film-forming stain
              must be stripped —
              penetrating stains
              cannot penetrate
              a surface that already
              has a film coating.
              Application method:
              airless sprayer is
              fastest for picket
              fences; back-brushing
              or rolling ensures
              penetration. A fence
              staining website
              that explains the
              prep requirement,
              shows stain type
              options, and has
              before-and-after
              photos earns the
              homeowner who has
              been putting off
              the project for
              two years.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before hiring a fence staining company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Stain types — semi-transparent vs. semi-solid vs. solid — coverage, penetration, when each is right",
                  "Prep process — pressure washing, wood brightener, why cleaning matters as much as the stain itself",
                  "Can it be saved — whether heavily grayed or weathered wood can be restored vs. needs replacement",
                  "Color options — natural cedar tones vs. gray tones vs. redwood vs. brown — what looks good on a fence",
                  "How long it lasts — re-stain frequency for each stain type, how to tell when it is time again",
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
                What your fence staining website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Stain type guide — semi-transparent, semi-solid, solid — what each covers, when each is the right choice",
                  "Preparation process — pressure wash, brightener application, dry time, why prep determines the result",
                  "Color gallery — stain color options on cedar and pressure-treated pine, photos on actual KC fences",
                  "Before and after photos — gray weathered fences restored to finished color with stain",
                  "Candidacy assessment — what we look for in a fence evaluation: wood condition, old coatings, rot",
                  "Quote form with fence length, wood type, current condition, last stain if any, color preference",
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
                &ldquo;The most common call I
                get is someone whose
                fence has gone completely
                gray and they are
                not sure whether it
                can even be stained
                anymore or whether
                they need to replace
                it. The website with
                the before photos
                of completely weathered
                cedar fences and
                the afters with solid
                stain answered that
                question before they
                called. The stain type
                guide and the prep
                section also meant
                customers understood
                why washing matters —
                I stopped having
                to justify the cleaning
                charge on every quote.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — N. Walsh, fence staining specialist, Shawnee, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A fence staining site with stain
                type guide, color options, and
                quote form starts at $200. A full
                site with before-and-after gallery,
                prep process, and candidacy section
                is $425–$750. One fence staining
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

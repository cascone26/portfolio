import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Grout Recoloring and Restoration Companies in Kansas City",
  description:
    "Custom websites for grout recoloring, grout staining, and tile restoration companies in the Kansas City area. Show your color options, color-seal process, and before-and-after transformations to win residential grout restoration contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/grout-recoloring-restoration",
  },
};

export default function GroutRecoloringRestorationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Grout Recoloring and Restoration Companies in Kansas City",
    description: "Custom websites for grout recoloring and restoration companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Grout Recoloring Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners with stained or discolored grout want to know if color-sealing can restore or change the grout color without regrouting. A website with a color swatch gallery and real before-and-after photos earns the restoration call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Grout Recoloring in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Grout Recoloring &amp; Restoration</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Grout recoloring customers have
              typically exhausted cleaning
              options — bleach, steam, professional
              cleaning — and still have grout
              that looks permanently stained,
              blotchy, or a color they no longer
              like. They have discovered that
              grout color sealing or staining
              can address all three problems:
              it covers permanent staining,
              creates a uniform sealed surface
              that resists future staining,
              and can change the grout color
              entirely — a homeowner with
              dated tan grout on white tile
              can have it recolored charcoal
              or white without regrouting.
              The process involves deep cleaning
              the existing grout to remove
              all oils, cleaners, and surface
              contamination, then applying
              a color seal or grout stain
              that penetrates and adheres.
              Products like TileLab SurfaceGard,
              Aqua Mix, and Custom Building
              Products color sealers are
              designed specifically for this
              application and last three
              to five years with normal
              cleaning. The color options
              matter enormously to the customer —
              they want to see a full swatch
              palette and ideally photos
              of what common colors look
              like on real floors. Shower
              grout recoloring is a specialty
              application because of constant
              moisture exposure, and requires
              products rated for wet areas.
              A grout recoloring website
              that shows the color palette,
              explains the process and
              longevity, and has dramatic
              before-and-afters earns
              the homeowner who is about
              to spend thousands on
              retiling when recoloring
              would achieve what they want.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before choosing grout recoloring
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Color options — full palette of available colors, can they go lighter or darker, can they match new tile",
                  "Process — cleaning prep, application method, dry time, when the floor is usable again",
                  "Longevity — how long it lasts, what cleaning products are safe, when to reapply",
                  "Recoloring vs. regrouting — cost comparison, when each is the right choice, limitations of recoloring",
                  "Shower application — wet area products, mold resistance, how it holds up in constant moisture",
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
                What your grout recoloring website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Color gallery — full swatch palette with real floor photos showing each color on tile",
                  "Before and after — floors, showers, backsplashes — dramatic grout color transformations",
                  "Process — deep clean, prep, application, dry time, first cleaning instructions",
                  "Recoloring vs. regrouting — honest comparison, when each is appropriate, cost difference",
                  "Shower and wet area — products rated for moisture, mold resistance, application process",
                  "Quote form with tile color, current grout color, desired new color, surface area, shower or floor",
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
                &ldquo;Grout recoloring saves homeowners
                from a tile replacement they
                do not need — but most customers
                do not know it exists until
                they find us. Without a website
                with the before-and-afters
                and the color gallery, I could
                not explain what the service
                does well enough over the phone.
                People would say they wanted
                their grout to look like it
                did when it was new — and I
                needed to show them it could
                look even better, in whatever
                color they wanted. The website
                turned grout recoloring from
                a word-of-mouth job into a
                searchable service that brings
                in customers who specifically
                want this instead of retiling.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — L. Osei, grout restoration specialist, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A grout recoloring site with color
                gallery, before-and-afters, and
                quote form starts at $200. A full
                site with process guide, shower
                section, and regrouting comparison
                is $425–$750. One whole-floor
                recoloring covers the cost.
                No contracts, no monthly fees.
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

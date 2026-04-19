import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Hardwood Floor Refinishing Companies in Kansas City",
  description:
    "Custom websites for hardwood floor refinishing, sanding, and staining companies in the Kansas City area. Show your stain color options, dustless sanding process, and before-and-after transformations to win residential hardwood refinishing contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/hardwood-floor-refinishing",
  },
};

export default function HardwoodFloorRefinishingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Hardwood Floor Refinishing Companies in Kansas City",
    description: "Custom websites for hardwood floor refinishing companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Hardwood Floor Refinishing Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners refinishing hardwood floors want to see stain color options on real floors, understand dustless sanding, and know how many times their floors can be sanded before refinishing is no longer possible. A website with a stain gallery and real before-and-afters earns the quote call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Hardwood Refinishing in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Hardwood Floor Refinishing</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Hardwood floor refinishing customers
              are homeowners whose floors
              have significant scratches,
              worn finish, or stain they
              want to change — or buyers
              of older homes with original
              hardwood that has never
              been refinished. Kansas City&apos;s
              older housing stock in
              Brookside, Waldo, Westwood,
              and Mission Hills has
              enormous amounts of original
              red oak, white oak, and
              maple hardwood that is
              a generation overdue
              for refinishing. The
              stain color decision
              is the most research-intensive
              part of the process —
              customers want to see
              colors like Minwax
              Early American, Dark
              Walnut, Classic Gray,
              Provincial, and
              Jacobean on real red
              oak and white oak
              floors, not on a color
              chip. Dustless sanding
              systems — Bona, Lagler,
              and similar containment
              equipment — are a
              significant selling point
              because traditional
              drum sanders create
              enormous amounts of
              dust that infiltrates
              the whole house for
              weeks. The finish
              choice matters too:
              oil-based polyurethane
              is the traditional
              durable finish that
              ambersover time,
              while water-based
              polyurethane dries
              faster and stays
              clearer. Hard wax
              oil finishes like
              Rubio Monocoat are
              a premium natural
              option that penetrates
              rather than sitting
              on top of the wood.
              The number of times
              a floor can be sanded
              depends on the thickness
              of the wear layer —
              engineered hardwood
              can typically only
              be sanded once or
              twice, while solid
              hardwood can be
              sanded multiple times.
              A hardwood refinishing
              website with a stain
              gallery on real floors,
              dustless process
              explanation, and
              dramatic before-and-afters
              earns the homeowner
              who is about to
              replace floors that
              could be refinished
              for a fraction of the cost.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before refinishing hardwood floors
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Stain colors on real floors — Early American, Dark Walnut, Classic Gray, Jacobean on oak and maple",
                  "Dustless sanding — how containment equipment works, whether it is truly dust-free, whole-house disruption",
                  "Finish options — oil-based vs. water-based polyurethane, hard wax oil, sheen levels, dry time differences",
                  "Engineered vs. solid — how many times each can be refinished, wear layer thickness assessment",
                  "Timeline and disruption — days off the floor, furniture moving, pets, whole-house ventilation needs",
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
                What your hardwood refinishing website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Stain gallery — popular colors on real red oak, white oak, maple floors — photos on actual KC homes",
                  "Before and after — scratched, worn, dated stain transformed — dramatic floor transformations",
                  "Dustless sanding — how our containment system works, what genuine dustless sanding looks like",
                  "Finish guide — oil-based vs. water-based vs. hard wax oil — durability, appearance, dry time comparison",
                  "Solid vs. engineered — wear layer assessment, how we determine if floors can be refinished",
                  "Quote form with floor species, approximate square footage, current stain color, desired finish/sheen",
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
                &ldquo;The stain color decision is
                what stops people from calling —
                they want to see Dark Walnut
                on red oak floors before they
                commit. Without a website
                with a real color gallery
                I was doing the whole education
                on a walk-through, and half
                the time they left still
                unsure. The new site with
                our stain photos on actual
                KC floors, the before-and-afters,
                and the dustless process
                explanation meant customers
                arrived for the quote
                already having picked
                their stain. Close rate
                went way up because
                the decision was already
                halfway made.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — F. Kowalczyk, hardwood floor refinisher, Prairie Village, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A hardwood refinishing site with
                stain gallery, before-and-afters,
                and quote form starts at $200.
                A full site with finish guide,
                dustless sanding section, and
                engineered vs. solid page
                is $425–$750. One whole-floor
                refinishing job covers the cost.
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

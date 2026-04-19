import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Landscape Edging Companies in Kansas City",
  description:
    "Custom websites for landscape edging, bed edging, and hardscape border companies in the Kansas City area. Show your steel vs. plastic vs. concrete edging options, trench depth requirements, and bed maintenance benefits to win edging contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/landscape-edging",
  },
};

export default function LandscapeEdgingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Landscape Edging Companies in Kansas City",
    description: "Custom websites for landscape edging and bed border companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Landscape Edging Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether steel or concrete edging is worth the cost over plastic, why their existing edging keeps shifting, and whether a trench-cut edge lasts without any border at all. A website that explains root barrier depth and material longevity earns the edging call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Edging in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Landscape Edging</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Landscape edging customers
              are homeowners whose
              grass has crept
              into the mulch
              beds, whose plastic
              edging has buckled
              and heaved after
              one KC winter,
              or who are installing
              new beds and want
              a clean border
              that holds. The
              central education
              is the difference
              between edging
              materials and why
              cheap plastic fails:
              standard corrugated
              black plastic edging
              (the most common
              DIY option) is
              thin-walled and
              held in place by
              stakes — in KC
              clay soil, freeze-thaw
              cycles heave the
              stakes and buckle
              the plastic within
              1–2 winters. The
              trench-cut edge
              (an edger or flat
              spade cutting a
              clean vertical
              trench 3–4" deep
              at the bed boundary)
              requires no material
              but needs re-cutting
              every season as
              grass stolons cross
              the gap. Steel
              edging (Ryobi,
              Master Mark Pro-Sep,
              16-gauge or heavier
              steel): sits in
              a narrow trench
              flush with the
              soil surface, held
              by steel stakes
              driven every 24–30"
              — the weight and
              rigidity resist
              heaving and the
              flush profile does
              not create a mowing
              obstacle. Cor-Ten
              (weathering steel)
              develops a rust
              patina that seals
              the surface —
              lifespan 20+ years.
              Aluminum edging
              is lighter and
              easier to curve
              but has less rigidity
              than 16-gauge steel
              on long straight
              runs. Concrete
              mow strip: a poured
              or mortared 4"
              wide x 4" deep
              concrete strip
              at the bed boundary
              is the most permanent
              border — it creates
              a mowing surface
              so the wheel of
              the mower rides
              on the concrete,
              eliminating string
              trimming along
              the bed. Paver
              edging: soldier-course
              pavers set in a
              trench with compacted
              base creates a
              decorative border
              that sits flush —
              proper base prevents
              settling but KC
              clay requires adequate
              base depth (4"
              compacted gravel).
              Bed depth and mulch
              depth: edging is
              most effective
              when the bed surface
              is 2–3" below
              the top of the
              edging — mulch
              piled against edging
              that sits flush
              with the lawn
              will wash over
              the border in
              rain events. A
              landscape edging
              website that explains
              why plastic heaves,
              what steel and
              concrete options
              cost over time,
              and how bed depth
              affects mulch
              retention earns
              the homeowner who
              has replaced the
              same plastic edging
              twice already.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before installing landscape edging
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Why plastic fails — freeze-thaw heaving in KC clay, stake failure, 1–2 winter lifespan reality",
                  "Steel vs. aluminum vs. concrete — rigidity, longevity, cost per linear foot, mowing interaction",
                  "Concrete mow strip — how it eliminates string trimming, depth and width requirements, permanence",
                  "Trench-cut edge — what it does and how long it holds without material, re-cut frequency",
                  "Bed depth and mulch retention — how edging height relative to lawn surface affects mulch washout",
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
                What your landscape edging website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Why plastic fails section — KC freeze-thaw cycle, stake heaving, why thin-wall corrugated buckles",
                  "Material comparison — steel, aluminum, concrete mow strip, paver border — cost, longevity, mowing clearance",
                  "Steel edging guide — gauge options, stake spacing, flush installation, Cor-Ten patina and lifespan",
                  "Concrete mow strip section — dimensions, base requirement, how it eliminates trimming labor",
                  "Bed depth guide — how bed surface height relative to edging affects mulch retention in heavy rain",
                  "Quote form with linear footage estimate, existing edging material, bed condition, material preference",
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
                my steel edging to the
                $0.30/ft plastic at the
                hardware store — they
                did not understand what
                they were comparing. The
                website section explaining
                KC freeze-thaw and why
                cheap plastic heaves
                changed that conversation
                before I got to the estimate.
                The concrete mow strip
                section also opened a
                whole category of upgrades
                I was not selling before —
                customers who read about
                eliminating trimming labor
                called specifically asking
                for the concrete option.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — J. Morales, landscape contractor, Prairie Village, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An edging site with material comparison,
                why-plastic-fails section, and quote
                form starts at $200. A full site with
                concrete mow strip guide, bed depth
                section, and before-and-after gallery
                is $425–$750. One steel edging install
                covers the cost. No contracts,
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

import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Fence Repair Companies in Kansas City",
  description:
    "Custom websites for fence repair, fence panel replacement, and post repair companies in the Kansas City area. Show your fence materials, repair process, and before-and-after photos to win residential and commercial fence repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/fence-repair",
  },
};

export default function FenceRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Fence Repair Companies in Kansas City",
    description: "Custom websites for fence repair companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Fence Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners with a leaning, damaged, or rotting fence want to know if repair is worth it versus full replacement, and what caused the failure in the first place. A website with honest repair-vs-replace guidance and real before-and-after photos earns the repair call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Fence Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Fence Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Fence repair customers typically
              discover the problem after a
              KC windstorm drops panels,
              after noticing a post leaning
              at the property line, or
              when wood rot reaches the
              point where the fence no
              longer functions. The first
              question is always repair
              vs. replace: a few leaning
              posts can be reset in
              concrete and last another
              decade, while a fence
              where the posts have
              rotted at grade level
              throughout needs full
              replacement. Kansas City&apos;s
              clay soil is hard on fence
              posts — clay retains moisture
              at the base of posts and
              accelerates rot in untreated
              wood. The most common
              repair scenarios are
              post reset or replacement
              (a leaning post pulled,
              new concrete poured,
              reset plumb), picket
              or panel replacement
              (matching existing style
              and height), gate repair
              (sag, broken hinges,
              latch alignment), and
              storm damage repairs
              where multiple panels
              or sections came down.
              Wood privacy fence is
              the most common residential
              material in KC —
              cedar and pressure-treated
              pine are the standard
              options. Chain link
              repairs involve post
              replacement, tension
              wire, and mesh patching.
              Vinyl fence repair
              requires color and style
              matching — original
              manufacturer panels
              are preferred but
              compatible aftermarket
              parts exist for common
              profiles. A fence repair
              website that explains
              the repair vs. replace
              decision honestly,
              shows material options
              for replacement sections,
              and has storm damage
              response prominently
              featured earns the
              homeowner who is
              calling the day
              after the storm.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners look for in a fence repair company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Repair vs. replace — honest assessment of when repair makes sense vs. full replacement being the right call",
                  "Post failure — why posts lean or rot at grade, what KC clay soil does to untreated wood posts",
                  "Storm damage — same-day or next-day response, temporary fixes, insurance documentation if needed",
                  "Material matching — wood, vinyl, chain link — whether repair sections will match the existing fence",
                  "Gate repair — sag correction, hinge replacement, latch adjustment, self-closing hardware options",
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
                What your fence repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Repair vs. replace guide — what makes a fence repairable vs. when full replacement is the right answer",
                  "Common repairs — post reset, panel replacement, gate sag, storm damage — process and what to expect",
                  "Material expertise — wood (cedar, pressure-treated), vinyl, chain link — how we handle each",
                  "Storm damage response — fast turnaround, temporary fencing if needed, insurance photo documentation",
                  "Before and after — repaired fences, storm damage recovered, gate straightening, post replacements",
                  "Quote form with fence material, length of damage, repair type, storm damage or planned, timeline",
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
                &ldquo;After a bad storm KC gets a
                wave of fence calls and the
                first contractor people find
                online is the one who gets
                the work. Without a website
                I was getting nothing from
                search — referrals only,
                and those dry up fast after
                a big event. The new site
                with our storm damage
                section, our before-and-after
                photos, and our honest
                repair vs. replace guide
                meant we showed up when
                people were searching
                the morning after. First
                storm season with the
                site was the busiest
                we had ever had.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Ramos, fence repair contractor, Raytown, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A fence repair site with before-and-afters,
                repair vs. replace guide, and quote
                form starts at $200. A full site
                with storm damage section, material
                guide, and gate repair page
                is $425–$750. One storm response
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

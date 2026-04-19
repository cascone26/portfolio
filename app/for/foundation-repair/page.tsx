import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Foundation Repair Companies in Kansas City",
  description:
    "Custom websites for foundation repair and basement waterproofing companies in the Kansas City area. Explain your repair methods, warranties, and soil conditions to earn inspection requests from worried homeowners.",
  alternates: {
    canonical: "https://builtsimple.dev/for/foundation-repair",
  },
};

export default function FoundationRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Foundation Repair Companies in Kansas City",
    description: "Custom websites for foundation repair companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Foundation Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners who see foundation cracks or bowing walls are scared and doing research before they let anyone in their home. A website that explains KC soil conditions, your repair methods, and your warranty earns the inspection call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Foundation Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Foundation Repair</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Foundation repair is one of the highest-stakes home
              service purchases a homeowner will ever make. Kansas City
              homeowners deal with expansive clay soils that put
              unique pressure on foundations — they have specific
              concerns, and they know enough to be scared. A
              foundation repair website that explains KC-specific
              soil conditions, demonstrates your repair methods
              with before-and-after photos, and backs everything
              with a transferable warranty builds the trust needed
              to earn the inspection appointment.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What KC homeowners research when they notice foundation problems
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Warning signs — what cracks, bowing walls, and sticking doors mean and when to worry",
                  "KC soil — how clay soil expansion and contraction specifically affects KC foundations",
                  "Repair methods — piers (push, helical), wall anchors, carbon fiber straps, waterproofing",
                  "Warranty — whether the repair warranty transfers to a new buyer when the home is sold",
                  "Inspection process — what happens during a free inspection, who does it, what report looks like",
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
                What your foundation repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Warning signs guide — photos of cracks, bowing walls, water intrusion — what each means",
                  "KC soil context — clay soil expansion, drought effects, how KC weather cycles affect foundations",
                  "Repair methods — push piers, helical piers, carbon fiber, wall anchors — how each works",
                  "Basement waterproofing — interior drain tile, sump pump, vapor barrier, exterior options",
                  "Warranty details — what is covered, transferability to new homeowner, how to use warranty",
                  "Free inspection form with problem type, home age, square footage, urgency level",
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
                &ldquo;Homeowners were scared and calling three
                companies before deciding. Our old site gave them
                nothing to trust us over the others. The new site
                with the KC clay soil explainer, photos of our
                helical pier installations, and our transferable
                warranty made homeowners feel like we understood
                their specific problem. We went from competing on
                price to getting called first and chosen most of
                the time because we looked like the experts.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — H. Garrett, foundation repair, Lee&apos;s Summit, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A foundation repair site with services, warning signs,
                and inspection form starts at $275. A full site with
                repair method pages, KC soil guide, and warranty
                detail is $525–$1,050. One pier installation
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

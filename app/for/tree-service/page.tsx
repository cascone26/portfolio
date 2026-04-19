import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Tree Service Companies in Kansas City",
  description:
    "Custom websites for tree removal, trimming, and stump grinding companies in the Kansas City area. Show your certifications, equipment, and project photos to win more residential and commercial tree jobs.",
  alternates: {
    canonical: "https://builtsimple.dev/for/tree-service",
  },
};

export default function TreeServicePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Tree Service Companies in Kansas City",
    description: "Custom websites for tree removal and trimming companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Tree Service Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners hiring a tree service company want to see proof of insurance, ISA arborist credentials, and photos of your crew handling difficult removals before they let anyone near their property. A website that shows all of that earns the estimate call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Tree Service Companies in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Tree Service</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Tree work is one of the highest-trust home services
              a property owner will hire. A large removal near
              the house, power lines overhead, or a tree leaning
              toward the fence — homeowners need to be confident
              before they hand the job to anyone. They are
              checking whether you are insured, whether your
              crew is ISA-certified, and whether you have
              experience with the specific situation they are
              dealing with. A tree service website that shows
              your certifications, insurance, photos of complex
              removals your crew has completed, and your storm
              damage response capabilities earns the estimate
              call that a competitor with just a truck lettering
              and a Facebook page will not.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners verify before hiring a tree service
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Insurance — general liability and worker's comp — non-negotiable for any reputable homeowner",
                  "ISA certification — International Society of Arboriculture credentials signal real training",
                  "Equipment — bucket trucks, cranes, chippers — tells them you can handle large-scale work",
                  "Services — removal, trimming, stump grinding, emergency storm response, cabling",
                  "Project photos — tight spaces, near structures, large removals — proof you can handle complexity",
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
                What your tree service website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Credentials — ISA arborist cert numbers, insurance carrier and coverage amounts, licensing",
                  "Project gallery — removals near structures, power line clearance, large tree work, storm cleanup",
                  "Services — tree removal, crown trimming, dead-wooding, stump grinding, emergency response",
                  "Equipment — bucket truck specs, crane capability, chipper size, what each piece of equipment enables",
                  "Storm response — 24/7 emergency availability, priority scheduling for insurance claims, debris removal",
                  "Estimate form with tree type, size estimate, location (near structure or lines), urgency",
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
                &ldquo;We were getting ghosted on estimate
                requests because homeowners could not find
                our insurance or certifications anywhere
                online. The new site with our ISA certs,
                insurance info, and a photo gallery showing
                the kind of tight removals near houses and
                fences we do every week changed the
                conversion completely. Homeowners started
                calling saying they specifically wanted us
                because they could see we were certified
                and insured.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — G. Petersen, ISA Certified Arborist, Lee&apos;s Summit, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A tree service site with credentials, gallery,
                and estimate form starts at $250. A full site
                with service pages, equipment section, and
                storm response page is $475–$950. One
                large removal covers the cost.
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

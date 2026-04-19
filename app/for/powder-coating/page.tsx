import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Powder Coating Shops in Kansas City",
  description:
    "Custom websites for powder coating shops and industrial finishing companies in the Kansas City area. Show your color options, substrate capabilities, and turnaround process to win automotive, architectural, and industrial coating jobs.",
  alternates: {
    canonical: "https://builtsimple.dev/for/powder-coating",
  },
};

export default function PowderCoatingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Powder Coating Shops in Kansas City",
    description: "Custom websites for powder coating shops in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Powder Coating Shops",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Customers bringing in wheels, frames, parts, or architectural metalwork want to know your color options, oven size limits, substrate capability, and typical turnaround before they drop off. A website with a clear color gallery and process overview gets you the work. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Powder Coating in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Powder Coating Shops</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Powder coating customers include automotive
              enthusiasts bringing in wheels, calipers,
              and suspension parts; custom fabricators
              finishing frames, roll cages, and chassis;
              architectural and commercial clients
              powder coating railings, gates, and
              aluminum extrusions; and industrial
              customers needing durable functional
              coatings on equipment and components.
              Each group evaluates a powder coating
              shop differently, but all of them
              need the same basic information upfront:
              what substrates you can coat (steel,
              aluminum, cast iron, stainless),
              your largest oven dimensions for
              oversized parts, your color and
              finish library (gloss, matte, satin,
              texture, metallic, candy, chrome look),
              your media blasting and prep capability,
              and your typical turnaround time.
              A powder coating website that shows
              your color and finish options visually,
              communicates your oven size and
              substrate capability clearly, and
              makes dropping off a part or requesting
              a quote simple earns both the weekend
              enthusiast and the commercial fabricator
              who needs a reliable finishing partner.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What customers evaluate when choosing a powder coating shop
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Color and finish options — gloss, matte, texture, metallic, candy, chrome look, custom match",
                  "Oven dimensions — maximum part size that fits your oven, weight limits",
                  "Substrate capability — steel, aluminum, cast iron, stainless, MDF, other materials",
                  "Prep services — media blasting, chemical strip, sandblasting — what you offer in-house",
                  "Turnaround — standard lead time, rush availability, drop-off and pickup process",
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
                What your powder coating website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Color gallery — finish samples organized by type: gloss, matte, texture, metallic, specialty",
                  "Oven specs — maximum dimensions and weight, what fits and what doesn't",
                  "Substrates — steel, aluminum, cast iron, MDF — prep requirements for each",
                  "Prep services — media blasting, chemical strip, sandblast — in-house or outsourced",
                  "Project gallery — automotive wheels, architectural railings, frames, industrial parts",
                  "Quote form with part description, substrate, color preference, dimensions, quantity, timeline",
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
                &ldquo;We were getting work from
                word of mouth in the car community
                but we had no way to reach commercial
                fabricators or architectural clients
                who needed volume finishing work.
                Our color options and our oven
                size are real advantages — we can
                fit parts that most shops in the
                area can&apos;t — but without a
                website showing our capabilities,
                nobody knew. The new site with
                our color gallery, our oven specs
                clear, and our project gallery
                organized by type opened doors
                to fabricators and a metal art
                studio that now sends us work
                every month.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — L. Pryor, powder coating shop owner, Kansas City, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A powder coating site with color gallery,
                oven specs, and quote form starts at $225.
                A full site with substrate guide, project
                gallery, and commercial section is $425–$850.
                One commercial job covers the cost.
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

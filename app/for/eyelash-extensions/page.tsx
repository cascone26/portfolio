import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Eyelash Extension Studios in Kansas City",
  description:
    "Custom websites for eyelash extension and lash artists in the Kansas City area. Show your lash styles, before-and-after work, and booking process to build a full client schedule.",
  alternates: {
    canonical: "https://builtsimple.dev/for/eyelash-extensions",
  },
};

export default function EyelashExtensionsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Eyelash Extension Studios in Kansas City",
    description: "Custom websites for eyelash extension studios and lash artists in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Eyelash Extension Studios",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Clients searching for a lash artist judge your work visually before anything else. A website with clear before-and-after photos organized by lash style, your certification and training, and an easy booking link converts browsers into booked appointments. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Lash Extensions in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Eyelash Extension</span> Studios in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Clients looking for a lash artist make
              their decision almost entirely based on
              the work they see — your portfolio is
              your first impression, your credential,
              and your sales pitch at the same time.
              They want to see examples of classic,
              hybrid, and volume sets on different
              eye shapes to know whether you can
              achieve the look they want. They also
              want to know your training and
              certifications, the lash brands you
              use, your aftercare process, and how
              easy it is to book. Clients who find
              a lash artist they love become monthly
              recurring clients for fills — an eyelash
              extension website that showcases your
              work beautifully, explains your process
              and training, and makes booking seamless
              builds the recurring client base that
              keeps your schedule consistently full.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What clients look for when choosing a lash artist
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Portfolio — before-and-after photos by style (classic, hybrid, volume, mega volume, wispy)",
                  "Training and certifications — lash school, brand certifications (Borboleta, Lash Stuff, etc.)",
                  "Lash brands used — quality of adhesive, lash material (silk, mink, synthetic), retention rate",
                  "Services and pricing — full set vs. fill, style options, removal, lash lift and tint",
                  "Booking — how to get an appointment, cancellation policy, patch test requirements for new clients",
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
                What your eyelash extension website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Portfolio gallery — before-and-after by style, eye shape, length, and curl type",
                  "Services menu — classic, hybrid, volume, mega volume, wispy, lash lift, lash tint, removal",
                  "Pricing — full set and fill pricing by style, appointment length, what fills include",
                  "Training and certifications — lash education, brand certifications, continuing training",
                  "Products used — adhesive brand, lash material, why you chose them, retention expectations",
                  "Booking form or link with service type, preferred date/time, new vs. returning client, eye shape notes",
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
                &ldquo;I was relying entirely on
                Instagram and word of mouth, which
                meant my schedule was inconsistent.
                New clients had no way to find me
                or vet my work without scrolling
                through hundreds of posts. The new
                site with my portfolio organized
                by style, my certifications, my
                pricing, and a booking link changed
                everything. I started getting calls
                from people who had already decided
                they wanted to book — they just
                needed to see if I had an opening.
                My schedule has been full for
                three months straight.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — K. Nguyen, lash artist, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An eyelash extension site with
                portfolio, services, and booking
                form starts at $200. A full site
                with style galleries, pricing guide,
                and aftercare section is $375–$750.
                Two full sets cover the cost.
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

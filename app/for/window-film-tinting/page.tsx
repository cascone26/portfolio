import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Window Film and Tinting Companies in Kansas City",
  description:
    "Custom websites for window film installation, residential tinting, and commercial solar film companies in the Kansas City area. Show your film brands, heat rejection specs, and warranty to win residential and commercial window film contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/window-film-tinting",
  },
};

export default function WindowFilmTintingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Window Film and Tinting Companies in Kansas City",
    description: "Custom websites for window film and tinting companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Window Film Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners with west-facing rooms that overheat in summer or furniture fading from UV exposure want to know heat rejection percentages, visible light transmission, and whether the film will affect their view. A website with film specs and sample photos earns the quote call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Window Film in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Window Film &amp; Tinting</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Window film customers are motivated
              by one of three problems: rooms
              that overheat in the Kansas City
              summer despite the AC running
              constantly, furniture and flooring
              fading from UV exposure through
              large windows, or glare making
              screens and televisions unusable
              in certain rooms during parts
              of the day. The product decision
              involves understanding a few
              key specs: total solar energy
              rejected (TSER) measures how
              much heat the film blocks and
              ranges from 30% on light films
              to 80% on darker ceramic options,
              visible light transmission (VLT)
              tells the customer how much their
              view and natural light will change,
              and UV rejection — most quality
              films reject 99% of UV regardless
              of the tint level, which is
              what prevents fading. Film brands
              that customers research include
              3M, LLumar, Vista, Huper Optik,
              and Solar Gard — the ceramic
              and nano-ceramic technology
              films from these brands offer
              high heat rejection with lighter
              appearance and no signal interference.
              Decorative and privacy films
              are a separate category for
              bathrooms and entry glass.
              Commercial window film for
              offices and storefronts involves
              larger scope, potential utility
              rebates, and requires a commercial
              liability insurance certificate.
              Security film that holds glass
              together on impact is a growing
              residential and commercial
              category. A window film website
              that explains the spec numbers,
              shows the brands you carry,
              and includes before-and-after
              room temperature comparisons
              earns the homeowner who has
              been living with a hot room
              for three summers.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before choosing window film
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Heat rejection — TSER percentage, what it means for room temperature, how ceramic differs from dyed film",
                  "Visible light — VLT percentage, how dark the tint looks from inside and outside, view impact",
                  "UV blocking — 99% UV rejection regardless of shade, what it prevents, fading protection for furniture",
                  "Film brands — 3M, LLumar, Vista, Huper Optik — nano-ceramic vs. dyed vs. metalized technology",
                  "Warranty — manufacturer warranty vs. installer warranty, bubble and delamination coverage",
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
                What your window film website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Film specs explained — TSER, VLT, UV rejection — what each number means for your home",
                  "Brand lineup — 3M, LLumar, Vista — ceramic and nano-ceramic products, performance tiers",
                  "Residential applications — heat control, UV protection, glare reduction, privacy film, decorative",
                  "Commercial film — office buildings, storefronts, utility rebate eligibility, insurance documentation",
                  "Security film — glass retention on impact, applications, thickness options",
                  "Quote form with window count, problem to solve (heat/glare/UV/privacy), preferred darkness, timeline",
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
                &ldquo;Window film is a spec product —
                customers research TSER percentages
                and brand comparisons before
                they ever call anyone. I was
                losing those customers to bigger
                companies because I had no
                online presence to be part
                of the research phase. The
                new site explaining what the
                spec numbers actually mean,
                showing our 3M and LLumar
                lineup, and including a before-and-after
                of a west-facing room temperature
                brought in better leads immediately.
                Customers arrived already knowing
                what film they wanted and asking
                for a quote on ceramic, not just
                the cheapest tint.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — A. Bergmann, window film installer, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A window film site with film specs,
                brands, and quote form starts at
                $200. A full site with commercial
                section, security film, and
                application guide is $425–$850.
                One whole-house residential job
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

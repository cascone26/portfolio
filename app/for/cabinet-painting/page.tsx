import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Cabinet Painting and Refinishing Companies in Kansas City",
  description:
    "Custom websites for cabinet painting, refinishing, and refacing companies in the Kansas City area. Show your prep process, finish quality, and color options to win kitchen and bathroom cabinet transformation jobs.",
  alternates: {
    canonical: "https://builtsimple.dev/for/cabinet-painting",
  },
};

export default function CabinetPaintingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Cabinet Painting and Refinishing Companies in Kansas City",
    description: "Custom websites for cabinet painting and refinishing companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Cabinet Painting Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners considering cabinet painting want to see your prep process and finish durability before they commit — they know a bad paint job peels within a year. A website with real before-and-afters and a clear process overview earns the call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Cabinet Painting in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Cabinet Painting</span> &amp; Refinishing in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Cabinet painting customers are making
              a smart financial decision — transform
              the kitchen for $2,000 to $6,000
              instead of replacing cabinets for
              $15,000 to $40,000 — but they have
              been burned by bad cabinet paint jobs
              before or they have seen them at a
              friend&apos;s house. The biggest
              concerns are durability and finish
              quality: they want to know whether
              you use a professional spray system
              or a brush and roller, what primer
              and topcoat products you use, how
              long the cure time is before the
              doors can be used normally, and
              whether the finish will chip or
              yellow within a year. They also
              want to understand the prep process
              — whether you degrease, sand, and
              fill grain on MDF faces, whether
              doors are removed and sprayed off-site
              in a controlled environment, and
              whether hardware replacement is
              included or separate. Color selection
              matters too: do you offer Benjamin
              Moore or Sherwin-Williams color
              matching, do you have a gallery of
              popular finishes, and can they see
              how white, greige, navy, and two-tone
              color combinations look on real
              kitchens. A cabinet painting website
              that shows your prep and spray process,
              documents your finish quality with
              real before-and-afters, and makes
              scheduling a kitchen consultation
              easy earns the homeowner who is
              serious about a renovation.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before hiring a cabinet painter
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Finish durability — spray vs. brush/roller, topcoat product, cure time, chip and yellow resistance",
                  "Prep process — degreasing, sanding, grain filling on MDF, how surfaces are prepared before paint",
                  "Door handling — removed and sprayed off-site vs. painted in-kitchen, controlled spray environment",
                  "Color options — Benjamin Moore, Sherwin-Williams, popular finishes, two-tone examples, white vs greige",
                  "Timeline — how long the project takes, how long kitchen is out of use, when doors go back on",
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
                What your cabinet painting website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Process walkthrough — prep, prime, spray, cure — what each step involves and why it matters",
                  "Before and after gallery — kitchen and bathroom transformations organized by color and style",
                  "Color guide — popular whites, greiges, navies, two-tone options, brand palettes you work with",
                  "Products used — primer brand, topcoat product, cure time, durability specs — no vague claims",
                  "Bathroom and laundry cabinets — other applications beyond kitchens, scope of work",
                  "Quote form with cabinet count, material (wood vs. MDF), current color, target color, timeline",
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
                &ldquo;Every homeowner I talked to
                had either seen a bad cabinet paint
                job or was afraid of getting one.
                The conversation always started
                with whether it would peel or chip.
                Without a website, I had to answer
                those questions from scratch on
                every call. The new site with my
                prep process explained step by
                step, my product specs listed,
                and my before and after gallery
                showing real kitchens changed
                everything. Customers come in
                already trusting the process.
                The consultation is about color
                selection now, not convincing
                them the finish will hold.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — S. Adeyemi, cabinet painting specialist, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A cabinet painting site with gallery,
                process, and quote form starts at $225.
                A full site with color guide, product
                specs, and bathroom cabinet section
                is $425–$850. One kitchen job covers
                the cost many times over.
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

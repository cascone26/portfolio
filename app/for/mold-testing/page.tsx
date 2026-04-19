import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Mold Testing and Inspection Companies in Kansas City",
  description:
    "Custom websites for mold testing, mold inspection, and indoor air quality companies in the Kansas City area. Show your testing methods, certifications, and remediation referral process to win residential and commercial inspection contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/mold-testing",
  },
};

export default function MoldTestingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Mold Testing and Inspection Companies in Kansas City",
    description: "Custom websites for mold testing and inspection companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Mold Testing Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners who smell mold or find visible growth want an independent inspector — not the same company that will do the remediation. A website that makes your independence, certifications, and testing methods clear earns the inspection call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Mold Testing in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Mold Testing</span> &amp; Inspection Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Mold inspection customers are in a
              high-anxiety situation. A home buyer
              has a home inspector who noted
              a musty smell and is trying to
              determine whether to proceed with
              the purchase. A homeowner found
              black discoloration in the bathroom
              or basement and is worried about
              health effects. A landlord has a
              tenant complaint and needs documentation.
              All of them want the same thing:
              an independent professional who
              tests only — and does not also
              do remediation — so there is
              no financial incentive to find
              a problem. Certifications matter
              here: CMRS (Certified Mold Remediation
              Supervisor), CMI (Certified Mold
              Inspector), IICRC, and IAC2 are
              the credentials customers look for.
              They also want to understand
              the difference between surface
              sampling (tape lift, swab) and
              air sampling (spore trap, ERMI),
              what the lab analysis includes,
              and how long it takes to get
              results. Real estate transactions
              have tight timelines — agents
              and buyers need a company that
              can schedule within 24 hours and
              turn around a written report before
              the inspection contingency expires.
              A mold testing website that leads
              with independence, certifications,
              and testing method earns the call
              from the customer who does not
              want to be sold remediation services
              by the same company doing the test.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What customers check before hiring a mold inspector
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Independence — testing only, no remediation conflict of interest, no financial incentive to find problems",
                  "Certifications — CMRS, CMI, IAC2, IICRC — what each means and which inspectors on staff hold them",
                  "Testing methods — air sampling, surface swab, tape lift, ERMI — what each shows and when used",
                  "Turnaround — how quickly you can schedule, how fast lab results come back, report format",
                  "Real estate timing — whether you can schedule same-day or next-day for contingency deadlines",
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
                What your mold testing website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Independence statement — testing only, no remediation, why this matters for unbiased results",
                  "Certifications — inspector credentials with numbers if applicable, what each certification means",
                  "Testing methods — air sampling, surface sampling, ERMI — what each involves, when it is appropriate",
                  "Report samples — what the written report includes, lab analysis format, remediation recommendations",
                  "Real estate services — pre-listing, buyer inspection, contingency timing, agent coordination",
                  "Scheduling form with property type, area of concern, urgency, square footage, preferred date",
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
                &ldquo;The trust issue in mold
                testing is real — customers know
                that a company offering both testing
                and remediation has a reason to
                find problems. Our independence
                is our biggest selling point but
                we had no way to communicate it
                before someone called. The new
                site with our independence statement
                front and center, our certifications
                listed, and our testing methods
                explained in plain language built
                that trust before the first call.
                Real estate agents now refer us
                specifically because of the
                real estate section explaining
                our contingency timeline. That
                referral network changed how
                we get business entirely.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — C. Bergstrom, certified mold inspector, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A mold testing site with services,
                certifications, and scheduling form
                starts at $225. A full site with
                testing methods, real estate section,
                and report samples is $425–$850.
                One real estate inspection referral
                network pays for the site in a week.
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

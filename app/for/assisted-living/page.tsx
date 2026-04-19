import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Assisted Living Communities in Kansas City",
  description:
    "Custom websites for assisted living facilities and memory care communities in the Kansas City area. Help families understand your care levels, amenities, and admissions process to get more tours scheduled.",
  alternates: {
    canonical: "https://builtsimple.dev/for/assisted-living",
  },
};

export default function AssistedLivingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Assisted Living Communities in Kansas City",
    description: "Custom websites for assisted living facilities and memory care communities in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Assisted Living Communities",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Families researching assisted living for a parent are under enormous stress. The community that helps them understand care levels, costs, and what to expect at a tour earns their trust before they ever visit. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Assisted Living in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Assisted Living</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Choosing an assisted living community is one of the most
              emotionally difficult decisions a family makes. Adult children
              searching for a community for their parent are overwhelmed,
              often guilt-ridden, and comparing every option carefully.
              They need to understand the difference between independent
              living, assisted living, and memory care; what daily life
              looks like; what the staff-to-resident ratio is; and what
              the cost structure involves. The community that answers
              all of this clearly earns the tour appointment.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What families research when choosing assisted living
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Care levels — independent living, assisted living, memory care — what each includes",
                  "Daily life — activities, dining, transportation, social programming, outdoor spaces",
                  "Staff — ratio, training, turnover, how care plans are developed and adjusted",
                  "Costs — monthly fee structure, what is included, what costs extra, Medicaid acceptance",
                  "Admissions — who qualifies, assessment process, how quickly a resident can move in",
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
                What your assisted living website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Care levels — clear explanation of independent, assisted, and memory care with what each provides",
                  "Life at the community — activities calendar, dining approach, amenities, sample day",
                  "Staff and care — staffing ratios, credentials, care planning process, family communication",
                  "Costs and financing — monthly pricing structure, what is included, VA benefits, Medicaid",
                  "Virtual tour or photo gallery — rooms, common areas, outdoor spaces, dining room",
                  "Schedule a tour form — level of care needed, timeline, current living situation",
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
                &ldquo;Families used to call us confused about what level
                of care their parent needed. The new site with our care
                level comparison, sample day, and honest cost overview
                means families arrive at tours much more prepared and
                emotionally ready to make a decision. Our tour-to-move-in
                rate has improved significantly.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — M. Lindstrom, assisted living community, Prairie Village, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An assisted living site with care levels, amenities, and
                tour request form starts at $300. A full site with daily
                life content, staff bios, cost overview, and photo gallery
                is $550–$1,100. One new resident covers many months of
                the full site investment. No contracts, no monthly fees.
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

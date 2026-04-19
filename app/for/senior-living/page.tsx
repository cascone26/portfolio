import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Senior Living Communities in Kansas City",
  description:
    "Custom websites for senior living communities, assisted living, and memory care facilities in the Kansas City area. Help families understand your care levels, amenities, and admissions process.",
  alternates: {
    canonical: "https://builtsimple.dev/for/senior-living",
  },
};

export default function SeniorLivingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Senior Living Communities in Kansas City",
    description: "Custom websites for senior living communities and assisted living facilities in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Senior Living Communities",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Adult children researching senior living for a parent are making one of the most difficult decisions of their lives and visit multiple websites before touring anywhere. A site that explains your care levels, amenities, and what move-in involves earns the tour. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Senior Living in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Senior Living</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Adult children searching for senior living for a parent
              are doing extensive research online before they visit
              anywhere. They are trying to understand the difference
              between independent living, assisted living, and memory
              care — and which level is right for their parent right
              now. They want to see the community, understand the
              staffing model, know what the cost looks like, and
              feel confident that their parent will be safe and well
              cared for. A senior living website that addresses all
              of this earns the tour inquiry.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What families research when choosing senior living
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Care levels — independent living, assisted living, memory care — what each includes and who it is for",
                  "Staffing — nurse-to-resident ratios, 24/7 staffing, staff credentials, turnover",
                  "Amenities — dining program, activities, transportation, outdoor spaces, room options",
                  "Memory care — secured environment, dementia care approach, family communication",
                  "Cost — what is included in monthly fee, what costs extra, Medicaid acceptance",
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
                What your senior living website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Care levels explained — independent, assisted, memory care — differences, who transitions between",
                  "Community photo gallery — dining room, common areas, resident rooms, outdoor spaces, activities",
                  "Staffing overview — nurse coverage, caregiver ratios, what staff training includes",
                  "Amenities — dining (sample menu), activities calendar, transportation, wellness programs",
                  "Pricing overview — starting monthly rates, what is included, what triggers additional cost",
                  "Tour request form with care level interest, timeline, current living situation",
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
                &ldquo;Families were coming to tours with almost
                no knowledge of our community because our old site
                showed almost nothing. The new site with room photos,
                the dining page, our memory care approach explained,
                and a staffing overview meant families arrived already
                knowing our community and excited about what they saw.
                Our tour-to-move-in conversion improved and families
                were more confident about the decision they were making.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — N. Whitfield, community director, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A senior living site with care levels, amenities,
                and tour request form starts at $325. A full site
                with care level pages, photo gallery, memory care
                section, and pricing guide is $625–$1,250. One
                new resident covers the cost.
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

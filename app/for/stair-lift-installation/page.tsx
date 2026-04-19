import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Stair Lift Installation Companies in Kansas City",
  description:
    "Custom websites for stair lift installation, chairlift, and home accessibility companies in the Kansas City area. Show your stair lift brands, straight and curved track options, and installation process to win residential stair lift contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/stair-lift-installation",
  },
};

export default function StairLiftInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Stair Lift Installation Companies in Kansas City",
    description: "Custom websites for stair lift installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Stair Lift Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Families helping aging parents stay in a two-story home want to understand the difference between straight and curved track stair lifts, what brands are reliable, and what the installation involves. A website that builds that confidence earns the home assessment visit. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Stair Lifts in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Stair Lift Installation</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Stair lift customers are typically
              adult children researching options
              for aging parents who want to
              stay in a two-story home, or
              individuals who have experienced
              a mobility change from surgery,
              injury, or a progressive condition.
              The primary decision is track
              type: straight stair lifts
              are significantly less expensive —
              typically $3,000 to $5,000 installed —
              because the track is a standard
              length that is cut to fit.
              Curved stair lifts require a
              custom track manufactured to
              the specific staircase geometry
              and cost $8,000 to $15,000
              or more. Brands that customers
              research include Bruno, Stannah,
              Acorn, Harmar, and Handicare —
              weight capacity, seat width,
              folding armrest and footrest
              design, and battery backup
              that allows operation during
              a power outage are key decision
              factors. Rental and used stair
              lifts are options for customers
              recovering from a temporary
              condition, and some companies
              offer both. The Medicare
              question comes up often —
              stair lifts are generally
              not covered by Medicare or
              most insurance, but some
              Medicaid waiver programs
              in Missouri and Kansas
              do cover them for eligible
              individuals. Veterans Aid
              and Attendance benefits
              are a potential funding
              source. A stair lift website
              that explains straight vs.
              curved with honest pricing
              ranges, names the brands
              you carry, addresses the
              insurance question directly,
              and makes scheduling a
              free home assessment easy
              earns the family who is
              trying to make a decision
              for a parent.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What families research before choosing a stair lift
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Straight vs. curved — price difference, what makes a stair qualify as straight, custom curved pricing",
                  "Brand comparison — Bruno, Stannah, Acorn, Harmar — weight capacity, features, warranty, reliability",
                  "Rental options — short-term recovery situations, cost vs. purchase, availability of used units",
                  "Insurance and benefits — Medicare coverage question, VA benefits, Medicaid waiver programs",
                  "Installation — what the visit involves, whether staircase modifications are needed, timeline",
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
                What your stair lift website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Straight vs. curved guide — price ranges, what determines track type, custom curved process",
                  "Brand lineup — Bruno, Stannah, Acorn — seat options, weight limits, features, why we carry these",
                  "Purchase vs. rental — when to buy, when to rent, used lift availability, trade-in options",
                  "Funding sources — Medicare clarification, VA Aid and Attendance, Missouri and Kansas Medicaid waivers",
                  "Installation — home assessment visit, what we measure, installation time, what to expect",
                  "Consultation form with stair type, number of steps, weight capacity needed, straight or curved, timeline",
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
                &ldquo;Stair lift customers are usually
                in an emotional situation —
                they are trying to help a
                parent stay in their home
                and they have never thought
                about this before. They do
                not know straight from curved,
                Bruno from Stannah, or whether
                Medicare might cover anything.
                Without a website, every
                consultation started from
                zero. The new site with
                our straight vs. curved
                comparison, our brand guide,
                and an honest answer to the
                Medicare question meant
                customers arrived to the
                home assessment already
                understanding the basics
                and ready to decide.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — S. Andersen, stair lift installer, Prairie Village, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A stair lift site with brand lineup,
                straight vs. curved guide, and
                consultation form starts at $225.
                A full site with funding sources,
                rental options, and installation
                walkthrough is $425–$850. One
                straight-track installation covers
                the cost. No contracts, no monthly fees.
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

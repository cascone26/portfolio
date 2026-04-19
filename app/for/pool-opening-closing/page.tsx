import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Pool Opening and Closing Companies in Kansas City",
  description:
    "Custom websites for pool opening, closing, and maintenance companies in the Kansas City area. Show your seasonal service packages, water chemistry process, and equipment expertise to win recurring pool service contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/pool-opening-closing",
  },
};

export default function PoolOpeningClosingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Pool Opening and Closing Companies in Kansas City",
    description: "Custom websites for pool opening and closing companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Pool Service Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Pool owners who have struggled through an opening or closing themselves know it is worth paying someone who does it right. A website with clear service packages, scheduling windows, and what is included earns the annual contract. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Pool Service in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Pool Opening &amp; Closing</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Pool service customers in Kansas City
              face a compressed seasonal window:
              openings in May and early June,
              closings in September and October,
              and a short swim season between
              them. The homeowners who call for
              opening service want to know what
              is included — does the opening
              service include removing and storing
              the cover, reconnecting the pump
              and filter, balancing the water
              chemistry, checking for winterization
              damage, and getting the pool swim-ready
              in one visit, or is it piecemeal.
              Closing customers want to know
              whether your blowout process
              prevents freeze damage to lines,
              whether you handle the cover
              installation, and whether you
              add the closing chemicals properly.
              Pool owners who want weekly or
              biweekly maintenance throughout
              the season want to know your service
              route area, what water chemistry
              service includes, and whether
              you handle equipment repairs when
              something breaks. New pool owners
              are often confused about the full
              service menu — they do not know
              what acid washing, green pool
              recovery, or filter media replacement
              costs or involves. A pool service
              website that lays out the seasonal
              package clearly, communicates
              your service area, and makes
              scheduling in advance easy
              earns the recurring customer
              who books you every spring
              before you fill up.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What pool owners want to know before booking service
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Opening package — what is included in one visit to get the pool swim-ready from winter close",
                  "Closing package — blowout process, cover installation, closing chemicals, winterizing equipment",
                  "Weekly maintenance — what each visit includes, chemicals tested and added, brushing and vacuuming",
                  "Service area — what zip codes and neighborhoods are on your route, availability windows",
                  "Equipment repairs — pump, filter, heater, salt cell, automation — whether you handle repairs",
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
                What your pool service website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Opening package — step-by-step what the visit includes, typical time to swim-ready, pricing",
                  "Closing package — blowout method, cover type handling, closing chemical set, winterization checklist",
                  "Weekly service — chemistry testing and balancing, brushing, vacuuming, equipment check",
                  "Specialty services — green pool recovery, acid wash, filter media replacement, salt cell cleaning",
                  "Equipment repair — pump, filter, heater, automation, salt system — brands serviced",
                  "Booking form with pool type, size, service needed, current condition, preferred schedule",
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
                &ldquo;Pool openings book out fast
                in KC — most customers want
                to be in by Memorial Day and
                there are only so many crews.
                Without a website, I had no
                way to reach people who were
                planning ahead or to show
                them exactly what was included
                so they could compare fairly.
                The new site with our opening
                and closing packages laid out
                clearly, our service area shown,
                and an advance booking form
                brought in customers who
                signed up for both openings
                and closings in the same visit.
                That recurring contract revenue
                made the whole business more
                predictable.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — W. Thornton, pool service owner, Shawnee, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A pool service site with packages,
                service area, and booking form starts
                at $200. A full site with equipment
                repair, specialty services, and
                weekly maintenance detail is $425–$850.
                One season of weekly service contracts
                covers the cost in the first month.
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

import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Horse Boarding Facilities in Kansas City",
  description:
    "Custom websites for horse boarding farms and equestrian facilities in the Kansas City area. Show your facility, care standards, boarding options, and amenities to attract quality boarders.",
  alternates: {
    canonical: "https://builtsimple.dev/for/horse-boarding",
  },
};

export default function HorseBoardingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Horse Boarding Facilities in Kansas City",
    description: "Custom websites for horse boarding facilities in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Horse Boarding Facilities",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Horse owners considering a new boarding facility want to see your stalls, pastures, footing, and daily care routine before they make a visit. Photos of your facility and a clear explanation of what&apos;s included in each board type earns the barn tour. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Horse Boarding in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Horse Boarding</span> Facilities in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Horse owners selecting a boarding
              facility are making a deeply personal
              decision — they are trusting someone
              else with an animal they love and
              a significant financial investment.
              Before they schedule a visit, they
              research your facility extensively:
              stall size and condition, pasture
              acreage and fencing, daily feeding
              routine and hay quality, what is
              included in each board type, arena
              and riding facility, veterinary
              and farrier access, and whether
              the facility culture fits their
              horses and their riding goals.
              A horse boarding website that shows
              your facility honestly with good
              photos, explains exactly what daily
              care looks like for each board
              option, and conveys the environment
              and community of your barn earns
              the barn tour that turns into a
              long-term boarding agreement.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What horse owners research before choosing a boarding facility
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Facility — stall size, barn condition, pasture acreage, fencing type, shelter, footing",
                  "Daily care — feeding schedule, hay type and quantity, grain, turnout hours, who cares for horses",
                  "Board types — full board, partial board, pasture board — what each includes and the price difference",
                  "Riding facilities — indoor/outdoor arena, ring footing, jump availability, trail access",
                  "Services — farrier and vet access, blanketing, fly spray, extra feeding, training availability",
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
                What your horse boarding website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Facility photos — stalls, barn aisle, pastures, arena, paddocks, water and shelter",
                  "Board options — full, partial, pasture board — exactly what each includes, feeding schedule, turnout",
                  "Daily care routine — feeding times, hay type, grain program, turnout schedule, who checks horses",
                  "Riding facilities — arena dimensions, footing, jumps, ring lights, trail access from property",
                  "Add-on services — blanketing, fly spray, extra feeding, vet/farrier coordination, training",
                  "Inquiry form with number of horses, discipline, current board situation, questions, visit request",
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
                &ldquo;Horse owners were driving by
                and looking, but without a website
                they had no way to evaluate us
                before making the trip. We&apos;d
                get calls from people who had
                no idea what we offered or what
                our board included. The new site
                with facility photos, our daily
                care routine explained, and
                our board options laid out clearly
                changed everything. People arrive
                for tours already familiar with
                our program — they&apos;re there
                to confirm what they&apos;ve
                already decided, not to ask
                the basics.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — S. Andersen, barn owner, Louisburg, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A horse boarding site with facility
                photos, board options, and inquiry
                form starts at $250. A full site
                with daily care detail, arena section,
                and services add-on list is $475–$950.
                One new boarder covers the cost in
                the first month. No contracts,
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

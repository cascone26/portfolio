import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Mobile Pet Groomers in Kansas City",
  description:
    "Custom websites for mobile pet groomers in the Kansas City area. Show your service area, booking process, grooming packages, and the stress-free mobile experience to grow a loyal client base.",
  alternates: {
    canonical: "https://builtsimple.dev/for/pet-grooming-mobile",
  },
};

export default function PetGroomingMobilePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Mobile Pet Groomers in Kansas City",
    description: "Custom websites for mobile pet groomers in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Mobile Pet Groomers",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Pet owners considering mobile grooming want to know your service area, what&apos;s included in each package, how the van is set up, and how to book a recurring appointment. A website that answers those questions and shows before-and-after grooms converts first-time visitors into regulars. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Mobile Pet Grooming in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Mobile Pet Groomers</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Pet owners who seek out mobile grooming
              are already sold on the concept — they
              want the convenience, their dog&apos;s
              anxiety is reduced without a shop waiting
              room, and they are willing to pay a
              premium for door-to-door service. What
              they need from your website is confirmation
              of specifics: whether you serve their
              neighborhood, what the grooming van
              contains (self-contained water, dryer,
              table, whether it uses household water
              or is fully independent), exactly what
              each grooming package includes, how to
              book a recurring appointment, and whether
              you work with their breed. Groomers
              who specialize in doodles, double-coated
              breeds, senior dogs, or anxious dogs
              that don&apos;t do well in shop environments
              should say so explicitly — that specificity
              attracts the exact clients who need you
              most and are willing to stay long-term.
              A mobile grooming website that shows
              your van setup, communicates your
              breed experience, and makes booking
              easy earns the loyal recurring clients
              that fill a full schedule on repeat.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What pet owners want to know before booking mobile grooming
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Service area — which neighborhoods and zip codes you cover, how far you travel",
                  "Van setup — self-contained water and dryer, whether they need to provide hookup or water",
                  "Package inclusions — bath, blow dry, trim, nail grind, ear cleaning, what each level includes",
                  "Breed experience — doodles, double-coated, small breeds, senior dogs, anxious or reactive dogs",
                  "Booking process — how far out you book, how to set up recurring appointments, cancellation policy",
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
                What your mobile grooming website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Service area map — neighborhoods and zip codes covered, mileage limits, travel fee policy",
                  "Van tour — photos of the grooming setup, self-contained water system, equipment, dryer type",
                  "Grooming packages — basic, full groom, breed-specific styling — exact inclusions and pricing",
                  "Before and after gallery — photos organized by breed showing quality and style capability",
                  "Breed specialties — doodles, double-coated breeds, small breeds, senior and anxious dog experience",
                  "Booking form with pet name, breed, weight, last groom date, service wanted, neighborhood",
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
                &ldquo;My schedule was mostly referrals
                and Facebook group posts, and I was
                always getting calls from people
                outside my service area or asking
                questions I&apos;d have to answer
                from scratch every time. The new
                site with my service area map,
                my van setup explained, my breed
                specialty in doodles front and
                center, and a booking form that
                asks the right questions upfront
                changed how I spend my time.
                People who book now are already
                the right fit — they know what
                to expect, they&apos;re in my area,
                and they&apos;re ready to become
                regulars.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — F. Delgado, mobile groomer, Prairie Village, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A mobile grooming site with service area,
                packages, and booking form starts at $200.
                A full site with van tour, breed gallery,
                and before-and-after photos is $375–$750.
                Four recurring clients cover the cost in
                the first month. No contracts, no monthly fees.
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

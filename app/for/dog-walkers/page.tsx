import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Dog Walkers in Kansas City",
  description:
    "Custom websites for professional dog walkers and pet sitters in the Kansas City area. Show your experience, insurance coverage, and service area to earn bookings from pet owners who need reliable care.",
  alternates: {
    canonical: "https://builtsimple.dev/for/dog-walkers",
  },
};

export default function DogWalkersPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Dog Walkers in Kansas City",
    description: "Custom websites for professional dog walkers and pet sitters in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Dog Walkers",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Pet owners searching for a dog walker are trusting someone with access to their home and their pet — they want to see your experience, insurance, and service area before they reach out. A website that answers those questions builds the trust that earns the booking. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Dog Walkers in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Dog Walkers</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Hiring a dog walker means handing over a
              key and trusting someone with your dog
              every day while you are at work. Pet owners
              take this seriously — they want to know
              who they are hiring, whether that person
              is bonded and insured, how walks are
              documented, what happens in an emergency,
              and which neighborhoods they service. Apps
              like Rover have made it easy to find
              walkers, but pet owners who want someone
              consistent and professional still look for
              an independent walker with a real presence.
              A dog walker website that introduces you
              as a person, explains your experience and
              insurance, shows your service area, and
              makes booking a meet-and-greet simple
              earns the regular clients who stick with
              you for years.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What pet owners look for when hiring a dog walker
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Insurance and bonding — liability coverage, pet first aid certification, background check",
                  "Experience — how long walking professionally, breeds experience, emergency protocol",
                  "Service area — specific KC neighborhoods and suburbs covered, whether they come to you",
                  "Walk documentation — GPS tracking, photo updates, report cards after each walk",
                  "Services — solo walks, group walks, drop-in visits, pet sitting, overnight stays",
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
                What your dog walking website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "About section — your background with dogs, why you walk professionally, certifications",
                  "Insurance and credentials — bonded, insured, pet first aid certified, background checked",
                  "Services — 30/60-minute walks, group vs. solo, drop-in visits, pet sitting, overnight",
                  "Service area — KC neighborhoods and suburbs covered, how far you travel",
                  "Walk updates — GPS tracking, photo updates, report cards — how clients stay informed",
                  "Booking form with dog breed, size, any special needs, neighborhood, desired service",
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
                &ldquo;I was getting clients through Rover
                but the app takes a cut and I wanted to
                build my own base of repeat clients. The
                website with my background explained, my
                insurance info, my service area, and a
                simple booking form changed how people
                found me. I started getting direct
                inquiries from neighborhoods I targeted,
                and those clients became weekly regulars
                who refer their neighbors. Now I barely
                use the app at all.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — A. Brennan, professional dog walker, Prairie Village, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A dog walking site with services, about,
                and booking form starts at $200. A full
                site with service area map, credentials,
                and client testimonials is $375–$750.
                One regular weekly client covers the
                cost in a month. No contracts, no monthly fees.
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

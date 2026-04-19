import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Dog Boarding Facilities in Kansas City",
  description:
    "Custom websites for dog boarding, doggy daycare, and pet boarding facilities in the Kansas City area. Show your facility, staff credentials, and daily routines to earn trust and bookings from pet owners.",
  alternates: {
    canonical: "https://builtsimple.dev/for/dog-boarding",
  },
};

export default function DogBoardingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Dog Boarding Facilities in Kansas City",
    description: "Custom websites for dog boarding and doggy daycare facilities in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Dog Boarding Facilities",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Pet owners leaving their dog overnight want to see your facility, understand your daily routine, and know your staff credentials before they trust you with their pet. A website that shows all of that fills your boarding calendar. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Dog Boarding in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Dog Boarding</span> Facilities in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Pet owners searching for boarding are making an
              emotional decision — they are leaving their dog
              with a stranger and they need to feel confident
              that the animal will be safe, comfortable, and
              well cared for. Before they call or book, they
              are evaluating your facility photos, reading about
              your daily routine, checking your staff-to-dog
              ratios, and looking for signs that this is a place
              run by people who genuinely care about dogs. A dog
              boarding website that shows your actual facility,
              explains your daily schedule, describes your
              staff qualifications, and makes it easy to check
              availability and reserve a spot converts pet
              owners from searchers into loyal recurring clients.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What pet owners evaluate before choosing a boarding facility
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Facility photos — sleeping areas, play yards, indoor/outdoor spaces — clean and well-maintained",
                  "Daily routine — feeding schedule, play time, rest time, overnight supervision policy",
                  "Staff credentials — pet first aid certification, staff-to-dog ratio, overnight supervision",
                  "Services — overnight boarding, daycare, grooming, training add-ons, pickup and drop-off",
                  "Requirements — vaccination requirements, temperament evaluation, breed policies",
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
                What your dog boarding website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Facility tour — photos and description of sleeping suites, play areas, outdoor space, overnight setup",
                  "Daily schedule — when dogs eat, play, rest, and are supervised throughout the day and night",
                  "Staff page — credentials, certifications, years of experience, pet first aid training",
                  "Services — boarding, daycare, grooming, training, pickup and delivery",
                  "Requirements — vaccination records needed, temperament evaluation process, policies",
                  "Reservation form with dog name, breed, size, dates, services needed, vaccination status",
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
                &ldquo;People were nervous to leave their dogs
                with us even though our facility is really
                nice and our staff genuinely loves dogs. We
                had no photos and no way to show what our
                days actually looked like. The new site with
                real photos of our play yard, our daily
                schedule written out, and our staff bios
                with certifications changed the calls we
                were getting. Pet owners started coming in
                relaxed and confident instead of anxious
                and skeptical.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — L. Hensley, dog boarding owner, Lenexa, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A dog boarding site with facility photos,
                services, and reservation form starts at
                $250. A full site with daily schedule,
                staff page, and service add-ons is $475–$950.
                Three boarding reservations cover the cost.
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

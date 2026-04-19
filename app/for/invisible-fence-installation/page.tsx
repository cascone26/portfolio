import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Invisible Fence Installation Companies in Kansas City",
  description:
    "Custom websites for invisible fence, underground dog fence, and wireless pet containment companies in the Kansas City area. Show your containment systems, training process, and multi-pet options to win residential invisible fence contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/invisible-fence-installation",
  },
};

export default function InvisibleFenceInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Invisible Fence Installation Companies in Kansas City",
    description: "Custom websites for invisible fence installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Invisible Fence Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Pet owners comparing in-ground wire systems versus wireless containment want to know how the training works, what happens when the power goes out, and whether the system works for their dog&apos;s size and temperament. A website that answers those questions earns the installation call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Invisible Fences in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Invisible Fence Installation</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Invisible fence customers are
              pet owners who want to give
              their dog yard freedom without
              a physical fence — either
              because their HOA prohibits
              privacy fencing, because
              a traditional fence would
              obstruct a view or landscaping,
              or because the cost of
              fencing a large property
              is prohibitive. The system
              choice comes first: in-ground
              wire systems are the
              professional standard —
              a wire is buried around
              the perimeter of the
              containment area and
              a receiver collar delivers
              a warning tone followed
              by a static correction
              if the dog approaches
              the boundary. Brands like
              Invisible Fence Brand
              (the premium branded option),
              PetSafe, SportDOG, and
              Perimeter Technologies
              each have different collar
              options, correction levels,
              and warranty terms. Wireless
              systems like PetSafe
              Wireless create a circular
              containment area around
              a transmitter — no wire
              installation required,
              but the circular boundary
              is a significant limitation
              for yards that are not
              square or where specific
              areas need to be excluded.
              Training is what separates
              professional installation
              from DIY: the flag training
              protocol — flags placed
              at the boundary while
              the dog learns where
              the correction zone is —
              takes multiple sessions
              over one to two weeks
              and is included in
              professional installations.
              Multi-dog households
              need additional collars
              and sometimes system
              upgrades. Collar fit
              and contact point
              placement are critical
              for smaller dogs and
              thick-coated breeds.
              Battery replacement
              and collar maintenance
              are ongoing considerations.
              A website that explains
              in-ground vs. wireless,
              shows the training
              process, and addresses
              the multi-pet and
              breed-specific questions
              earns the pet owner
              who is ready to
              give their dog yard freedom.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What pet owners research before choosing invisible fence
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "In-ground vs. wireless — boundary shape options, wire installation, circular wireless limitations",
                  "System brands — Invisible Fence Brand, PetSafe, SportDOG — collar options, correction levels, warranty",
                  "Training process — how the flag protocol works, how long it takes, what professional training includes",
                  "Multi-pet — whether additional collars work on the same system, collar sizing for different dog sizes",
                  "Breed considerations — thick-coated breeds, stubborn dogs, very small dogs — contact and correction settings",
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
                What your invisible fence website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "In-ground vs. wireless — how each works, when wireless is and is not appropriate, yard shape considerations",
                  "System options — brands and collar models we install, correction settings, waterproof ratings, battery life",
                  "Training walkthrough — the flag protocol, what professional training sessions look like, expected timeline",
                  "Multi-pet and multi-zone — adding pets to existing systems, separate zones for yard areas to exclude",
                  "Collar maintenance — battery replacement schedule, contact point care, what to watch for as collar ages",
                  "Quote form with yard size, number of pets, dog breed and weight, wireless or in-ground preference, timeline",
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
                &ldquo;The biggest question people
                have is whether the training
                actually works — they do not
                want to shock their dog for
                no reason, and they want to
                know the system is humane
                and effective. Without a
                website I had to explain
                this over the phone every
                single time, and some
                customers hung up before
                I got there. The site with
                our training walkthrough,
                our before-and-after of
                dogs living freely in
                their yards, and the honest
                explanation of how the
                correction works brought
                in customers who were
                already convinced and
                just needed to choose
                a provider.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — H. Nakamura, invisible fence installer, Olathe, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                An invisible fence site with system
                options, training walkthrough, and
                quote form starts at $200. A full
                site with in-ground vs. wireless
                guide, multi-pet section, and collar
                maintenance page is $425–$750.
                One installation covers the cost
                many times over. No contracts,
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

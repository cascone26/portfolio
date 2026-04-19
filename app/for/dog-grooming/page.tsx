import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Dog Groomers in Kansas City",
  description:
    "Custom websites for dog grooming businesses in the Kansas City area. Show your work, fill your appointment book, and build the client loyalty that keeps dogs coming back every 6 weeks.",
  alternates: {
    canonical: "https://builtsimple.dev/for/dog-grooming",
  },
};

export default function DogGroomingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Dog Groomers in Kansas City",
    description: "Custom websites for dog grooming businesses in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Dog Groomers",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Dog owners are loyal — but they have to find you first. Get found for breed-specific grooming searches and fill your book with regular clients. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Dog Groomers in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Dog Groomers</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Dog grooming clients are incredibly loyal — once they find a groomer
              their dog is comfortable with, they book every 4–8 weeks for years.
              The challenge is getting that first booking. A website with photos
              of your work, clear breed experience, and easy online booking turns
              a Google search into a long-term client.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What dog owners check before trying a new groomer
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Photos of finished grooms — especially for their specific breed",
                  "Whether you have experience with anxious dogs, senior dogs, or large breeds",
                  "Services and pricing by dog size and coat type",
                  "How you handle first-time dogs and nervous clients",
                  "Booking availability — can they get an appointment within a week or two?",
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
                What your dog grooming website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Photo gallery organized by breed — doodles, setters, terriers, bulldogs, shepherds",
                  "Services menu with full groom, bath and brush, nail trim, add-ons, and pricing by size",
                  "Online booking linked to your scheduling software (MoeGo, Gingr, Square, etc.)",
                  "First visit info — what to expect, what to bring, how to prepare an anxious dog",
                  "Breed experience callout — especially doodles and double-coated breeds (the most searched)",
                  "Client reviews with the dog's breed and specific service mentioned",
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
                &ldquo;I had a two-week waitlist but no way for new clients to find
                me except word of mouth. Once I had a website showing my doodle
                work specifically — which is what I do most — I started getting
                inquiries from goldendoodle and labradoodle owners who found me
                by searching for that exact thing. My waitlist grew another month
                out within the first 60 days.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — M. Chen, dog groomer, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A dog grooming site with gallery, service menu, and booking link
                starts at $200. A full site with breed-specific portfolio sections,
                online booking integration, and new client onboarding info is
                $400–750. Three new regular clients covers the cost in the first
                three months. No contracts, no monthly fees.
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

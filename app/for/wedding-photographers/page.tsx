import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Wedding Photographers in Kansas City",
  description:
    "Custom websites for wedding photographers in the Kansas City area. Showcase your portfolio, packages, and availability to book more couples planning their wedding day.",
  alternates: {
    canonical: "https://builtsimple.dev/for/wedding-photographers",
  },
};

export default function WeddingPhotographersPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Wedding Photographers in Kansas City",
    description: "Custom websites for wedding photographers in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Wedding Photographers",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Couples planning their wedding evaluate several photographers and book based almost entirely on portfolio and personality fit — both have to come through before they reach out. A website that shows your best work and your approach earns the inquiry. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Wedding Photographers in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Wedding Photographers</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Couples searching for a wedding photographer
              spend hours looking at galleries before they
              reach out to anyone. They are evaluating
              your editing style, your ability to capture
              candid emotion, whether you have experience
              with their venue, and whether your personality
              seems like a good fit for spending twelve
              hours with them on their wedding day. They
              also want to understand your packages, know
              what is included, and feel confident about
              what happens if something goes wrong. A
              wedding photography website that leads with
              a curated gallery by venue and style, explains
              your process and packages clearly, and gives
              couples a direct way to check your availability
              books more of the weddings you actually want.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What couples look for when booking a wedding photographer
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Portfolio by style and venue — romantic, documentary, editorial — full wedding galleries",
                  "Packages — hours covered, second shooter, engagement session, album, digital delivery timeline",
                  "Process — how you work on the day, timeline management, getting-ready through reception",
                  "Venue experience — galleries from KC-area venues they are considering or have booked",
                  "Availability — how to check their date and what the booking and contract process looks like",
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
                What your wedding photography website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Portfolio gallery — curated full wedding galleries organized by venue and style",
                  "About section — your story, shooting philosophy, what couples say about working with you",
                  "Packages — coverage hours, second shooter, engagement session, albums, delivery timeline",
                  "Venue gallery — photos from KC-area venues (The Terrace on Grand, Loose Mansion, Meadow Event Park, etc.)",
                  "Process — pre-wedding consultation, timeline planning, day-of approach, delivery",
                  "Inquiry form with wedding date, venue, guest count, package interest, how they found you",
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
                &ldquo;I had a strong portfolio on Instagram
                but couples couldn't see full wedding stories
                or find my packages without emailing me first.
                The new site with organized full-wedding
                galleries by venue, my packages clearly laid
                out, and a simple availability inquiry form
                changed how couples came to me. They arrived
                at the consultation having already seen my
                work at their venue, knowing my prices,
                and ready to book instead of still
                shopping.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — E. Callahan, wedding photographer, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A wedding photography site with portfolio,
                packages, and inquiry form starts at $275.
                A full site with venue galleries, engagement
                session section, and client area is $525–$1,050.
                One booking covers the cost.
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

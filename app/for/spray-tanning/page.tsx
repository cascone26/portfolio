import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Spray Tan Studios and Mobile Spray Tanning in Kansas City",
  description:
    "Custom websites for spray tan studios and mobile spray tanning services in the Kansas City area. Show your solution options, prep instructions, and booking process to keep your schedule consistently full.",
  alternates: {
    canonical: "https://builtsimple.dev/for/spray-tanning",
  },
};

export default function SprayTanningPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Spray Tan Studios in Kansas City",
    description: "Custom websites for spray tan studios and mobile spray tanning in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Spray Tan Studios",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          First-time spray tan clients want to know what shade to choose, how to prep, what the session looks like, and how long it lasts. A website that answers all of this with real before-and-after photos converts the curious into booked appointments. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Spray Tanning in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Spray Tanning</span> Studios in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Spray tan clients — especially first-timers
              — have a lot of questions before they
              book, and most of those questions are
              about results and process. Will the
              color look natural on my skin tone?
              How dark is each shade level? How do
              I prep so the tan applies evenly? How
              long does it last and how do I make
              it last longer? What solution do you
              use and is it safe for my skin? For
              brides, prom clients, and event tanners,
              timing is also a major concern —
              how many days before the event should
              they tan, and what is the development
              window? A spray tan website that answers
              these questions with real before-and-after
              photos, a shade guide, prep and aftercare
              instructions, and a simple booking
              link converts the research phase into
              a booked appointment and turns one-time
              clients into regular customers before
              every event on their calendar.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What clients want to know before booking a spray tan
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Shade options — light, medium, dark, ultra dark — what each looks like on different skin tones",
                  "Solution — brand used, DHA percentage, organic/natural options, ingredients for sensitive skin",
                  "Prep instructions — exfoliating, shaving, no moisturizer — what to do and when",
                  "Development time — rapid rinse vs. overnight, how dark it gets by 24 hours",
                  "Longevity — how many days it lasts, what helps it last longer, touch-up options",
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
                What your spray tan website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Before-and-after gallery — results by shade level, skin tone, and occasion (bridal, prom, everyday)",
                  "Shade guide — light through ultra dark with photos on real clients, what to expect for each tone",
                  "Solutions used — brand, DHA levels, organic/vegan options, sensitive skin formula",
                  "Prep and aftercare guide — exactly what to do before, what to avoid after, how to extend wear",
                  "Mobile service — if offered: service area, what to prepare at home, pricing vs. studio",
                  "Booking form with shade preference, skin tone, event date if applicable, mobile vs. studio",
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
                &ldquo;So many first-time clients
                would message me the same questions
                before booking — what shade, how
                to prep, what to expect. I was
                spending hours answering DMs that
                should have been answered on a
                website. The new site with my
                shade guide showing real results
                on different skin tones, my prep
                instructions, and my solution
                details cut those messages almost
                completely. Clients come in knowing
                exactly what they want and my
                bookings went up because the
                barrier to just clicking &apos;book&apos;
                got so much lower.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — T. Vaughan, spray tan artist, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A spray tan site with shade guide,
                services, and booking form starts
                at $200. A full site with before-and-after
                gallery, solution detail, prep and
                aftercare guide, and mobile service
                section is $375–$750. Five bookings
                cover the cost. No contracts,
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

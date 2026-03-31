import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Photographers in Kansas City",
  description:
    "Custom websites for portrait, wedding, and family photographers in the Kansas City area. Showcase your portfolio, get found on Google, and turn visitors into booked sessions.",
  alternates: {
    canonical: "https://builtsimple.dev/for/photographers",
  },
};

export default function PhotographersPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Photographers in Kansas City",
    description:
      "Custom websites for portrait, wedding, and family photographers in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Photographers",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {/* Limited-time offer banner */}
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          March special: Free site mockup for your photography business — no cost, no commitment. Just reply to see what your site could look like.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Photographers in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Photographers</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Your work is visual — your website needs to be too. Couples and
              families are finding photographers on Instagram and Google every
              day. You need a place to send them that shows your style, answers
              their questions, and closes the booking before they move on to
              someone else.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What clients look for when booking a photographer
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Portfolio organized by category — weddings, families, seniors, newborns, portraits",
                  "Pricing packages — people want a ballpark before they reach out",
                  "Availability and how to book — the easier this is, the more bookings you get",
                  "Reviews from real couples and families they can relate to",
                  "Your personality and shooting style — clients want to feel like they know you before the session",
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
                What your photography website would include
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-4">
                Every site is built around your specific work and client base,
                but here&apos;s what most KC photographers need:
              </p>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Gallery with category filters — weddings, families, seniors, newborns, commercial",
                  "Pricing page with package breakdowns and what&apos;s included",
                  "Booking or inquiry form that works great on mobile",
                  "Client testimonial section with names and session types",
                  "Blog or recent work section to keep the site fresh and help with SEO",
                  "Instagram feed integration so your latest work is always on the site",
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
                &ldquo;I was relying entirely on Instagram and word-of-mouth.
                After launching my site, I started getting wedding inquiries
                from Google — couples I never would have reached otherwise. My
                bookings went up noticeably within the first few months and I
                finally have somewhere professional to send people.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — A. Bukowski, photographer, Lee&apos;s Summit, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A starter site with your gallery and contact form starts at
                $300. A full site with booking integration, pricing page, blog,
                and Instagram feed is $700-1,300. No contracts, no monthly fees.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                Ready to get started?
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-2">
                Get a free mockup — no obligation. Fill out the form below, or
                give me a call.
              </p>
              <p className="mb-6">
                <a
                  href="tel:8165205652"
                  className="text-accent-light text-lg font-semibold hover:underline"
                >
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

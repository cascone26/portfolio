import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Auto Repair Shops in Kansas City",
  description:
    "Custom websites for auto repair shops and mechanics in the Kansas City area. Get found when drivers need a shop they can trust, and turn searches into appointments.",
  alternates: {
    canonical: "https://builtsimple.dev/for/auto-repair",
  },
};

export default function AutoRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Auto Repair Shops in Kansas City",
    description: "Custom websites for auto repair shops and mechanics in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Auto Repair Shops",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {/* Limited-time offer banner */}
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          March special: Free site mockup for your auto shop — no cost, no commitment. Just reply to see what your site could look like.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Auto Repair Shops in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Auto Repair Shops</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Trust is everything in auto repair. People aren&apos;t just
              Googling &ldquo;mechanic near me&rdquo; — they&apos;re looking for
              a shop they feel confident in. A professional website is how you
              make that first impression before they ever pull into your lot.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What drivers look for before choosing a shop
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "What services you offer — oil changes, brakes, AC, engine work",
                  "Certifications like ASE or AAA-approved shop status",
                  "Reviews — this is the biggest trust signal in auto repair",
                  "Hours and whether you're open on weekends",
                  "An easy way to schedule an appointment or get an estimate",
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
                What your auto shop website would include
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-4">
                Every site I build is custom, but here&apos;s what most repair
                shops need:
              </p>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Full services list — general repair, diagnostics, tires, fleet, whatever you do",
                  "Certifications and warranty info displayed where people can see them",
                  "Appointment request or estimate form — easy to fill out on a phone",
                  "Photos of the shop and team to build familiarity and trust",
                  "Customer reviews front and center — Google, Yelp, or your own testimonials",
                  "Hours, address, and a map so people can find you fast",
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
              {/* TODO: Replace with real testimonial from an auto repair shop client */}
              <blockquote className="text-muted text-sm leading-relaxed italic border-l-2 border-accent/40 pl-4">
                &ldquo;We were invisible online before. Now we show up when
                people search for mechanics in our area and we get a handful of
                new customers every month who found us that way. The site looks
                great and it actually works.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — D. Morales, shop owner, Lee&apos;s Summit, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A starter site with your services, hours, and contact info
                starts at $250. A full site with service pages, photo gallery,
                appointment scheduling, and review integration is $600-1,200.
                No contracts, no monthly fees.
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

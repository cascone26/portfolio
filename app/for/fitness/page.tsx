import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Websites for Gyms & Fitness Studios in Kansas City",
  description:
    "Custom websites for gyms, personal trainers, yoga studios, and fitness businesses in the Kansas City area. Help people find you and sign up online.",
};

export default function FitnessPage() {
  return (
    <>
      {/* Limited-time offer banner */}
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          March special: Free site mockup for your gym or studio — no cost, no commitment. Just reply to see what your site could look like.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Fitness Businesses in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Websites for{" "}
              <span className="gradient-text">Gyms & Fitness Studios</span> in
              Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              81% of people research a gym or studio online before their first
              visit. They want to see your classes, pricing, and vibe. If they
              can&apos;t find that on a website, they move on to the next option.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What people look for before they join
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Class schedules and descriptions",
                  "Membership pricing and options",
                  "Photos of the space and equipment",
                  "Trainer bios and certifications",
                  "A way to sign up or book a trial class",
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
                What your fitness site would include
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-4">
                Every fitness site I build is custom, but here&apos;s what most
                gyms and studios need:
              </p>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Class schedule — easy to scan, always up to date",
                  "Membership tiers with pricing and sign-up",
                  "Trainer and instructor bios with photos and specialties",
                  "Photo gallery of the space, classes, and community",
                  "Trial class or free pass sign-up form",
                  "Mobile-first design — because people check schedules on the go",
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

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                Simple pricing
              </h2>
              <p className="text-muted text-sm leading-relaxed">
                A starter site with your classes, pricing, and contact info
                starts at $250. A full site with scheduling, trainer profiles,
                and membership sign-up is $600-1,200. No contracts, no monthly
                fees.
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

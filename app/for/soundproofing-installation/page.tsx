import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Soundproofing Installation Companies in Kansas City",
  description:
    "Custom websites for soundproofing, acoustic treatment, and noise control installation companies in the Kansas City area. Show your decoupling methods, mass-loaded vinyl, and home theater or home office applications to win residential soundproofing contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/soundproofing-installation",
  },
};

export default function SoundproofingInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Soundproofing Installation Companies in Kansas City",
    description: "Custom websites for soundproofing installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Soundproofing Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners building a home theater, home office, or trying to isolate a music room want to understand the difference between acoustic treatment and true soundproofing, and what the STC rating of a wall actually means. A website that explains the science and shows real applications earns the consultation. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Soundproofing in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Soundproofing Installation</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Soundproofing customers are typically
              homeowners building a dedicated
              home theater, creating a practice
              or recording space for a musician,
              trying to isolate a home office
              from household noise, or dealing
              with noise transfer between
              floors or between shared walls
              in a townhome or condo. The
              first education required
              is the distinction between
              acoustic treatment and
              soundproofing: acoustic
              panels, foam, and bass
              traps improve the sound
              quality inside a room
              by controlling reflections
              and standing waves —
              they do almost nothing
              to stop sound from
              traveling through walls.
              True soundproofing requires
              addressing four principles:
              mass (heavy materials resist
              sound transmission —
              multiple layers of drywall,
              mass-loaded vinyl),
              decoupling (separating
              the wall structure so
              vibration cannot travel
              through the framing —
              resilient channel, staggered
              stud walls, room-within-a-room
              construction), absorption
              (insulation in the cavity
              to kill airborne sound
              inside the wall), and
              sealing (acoustic caulk
              on every gap, outlet
              covers, door sweeps —
              sound travels through
              any opening). STC
              (Sound Transmission Class)
              ratings give a measurable
              benchmark: a standard
              interior wall is STC 33,
              a professional treatment
              can reach STC 50-60+.
              Applications include
              home theater (low-frequency
              bass isolation is the
              hardest problem), home
              office privacy (speech
              isolation between rooms),
              music practice rooms
              (full-spectrum isolation),
              and between-floor noise
              (impact noise from footsteps
              requires different treatment
              than airborne sound).
              A soundproofing website
              that explains the four
              principles clearly,
              distinguishes acoustic
              treatment from true
              soundproofing, and
              shows application-specific
              solutions earns the
              homeowner who is
              planning a serious
              project.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before soundproofing a room
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Acoustic treatment vs. soundproofing — what foam panels do vs. what stops sound from leaving a room",
                  "The four principles — mass, decoupling, absorption, sealing — what each contributes to STC rating",
                  "STC ratings — what standard walls are rated, what a professional treatment achieves, real-world results",
                  "Bass frequency isolation — why low frequencies are the hardest problem in home theaters",
                  "Application-specific solutions — home theater vs. music room vs. office vs. floor-to-floor impact noise",
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
                What your soundproofing website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "The four principles — mass, decoupling, absorption, sealing — clear explanation of what each does",
                  "Acoustic vs. soundproofing — honest distinction, when each is the right solution",
                  "Application guide — home theater, music room, home office, floor isolation — different approaches for each",
                  "Materials explained — resilient channel, mass-loaded vinyl, Green Glue, acoustic insulation, acoustic caulk",
                  "STC ratings — what we achieve, how to measure before and after, real-world comparisons",
                  "Consultation form with room use, room dimensions, noise source, target isolation level, budget",
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
                &ldquo;Soundproofing customers have
                often wasted money on acoustic
                foam and are frustrated that
                the room still bleeds sound.
                They need to understand the
                actual science before they
                invest in real soundproofing.
                Without a website I could
                not explain mass and decoupling
                and sealing in a way that
                stuck — it took an hour
                on-site to build that
                understanding. The website
                with our four-principle
                guide and the acoustic vs.
                soundproofing distinction
                meant customers arrived
                to consultations already
                understanding what they
                actually needed and
                ready to move forward.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — W. Cho, soundproofing contractor, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A soundproofing site with the four
                principles, application guide, and
                consultation form starts at $225.
                A full site with STC rating guide,
                materials section, and acoustic vs.
                soundproofing page is $425–$850.
                One room soundproofing project covers
                the cost. No contracts, no monthly fees.
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

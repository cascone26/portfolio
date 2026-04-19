import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Water Main Repair Companies in Kansas City",
  description:
    "Custom websites for water main repair, water service line replacement, and underground plumbing companies in the Kansas City area. Show your KC clay soil pipe corrosion, trenchless repair options, and water meter pit access to win water main contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/water-main-repair",
  },
};

export default function WaterMainRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Water Main Repair Companies in Kansas City",
    description: "Custom websites for water main repair and water service line replacement companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Water Main Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a wet spot in their yard is a water main break or a drain issue, who is responsible for the line from the meter to the house, and whether trenchless replacement means they keep their driveway. A website that explains service line responsibility and trenchless options earns the emergency call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Water Main Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Water Main Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Water main repair
              customers are KC homeowners
              who notice a wet
              spot in their yard
              that does not dry
              after rain, a significant
              drop in water pressure
              throughout the house,
              an unexplained spike
              in the water bill,
              or an audible hissing
              or rushing sound
              near the water meter
              pit — all of which
              indicate a leak in
              the water service
              line running from
              the city water main
              at the street to
              the house. The central
              education is service
              line responsibility:
              Kansas City Water
              is responsible for
              the city main under
              the street and for
              the meter itself;
              the homeowner is
              responsible for
              the service line
              from the meter
              pit at or near
              the property line
              to the point of
              entry into the
              house — typically
              forty to one hundred
              feet of pipe depending
              on lot size and
              setback; if the
              meter is leaking,
              the city will repair
              it; if the line
              between the meter
              and the house is
              leaking, it is
              the homeowner&apos;s
              responsibility and
              their expense. Pipe
              material and failure:
              KC homes built
              before the 1980s
              often have galvanized
              steel or copper
              service lines;
              galvanized steel
              corrodes from the
              inside as the zinc
              coating depletes —
              the interior bore
              narrows progressively,
              reducing pressure
              and eventually
              developing pinhole
              leaks at the weakest
              sections; copper
              service lines
              in KC clay soil
              are subject to
              corrosion from
              soil contact and
              stray electrical
              current from grounding;
              homes built in
              the 1970s and early
              1980s may have
              polybutylene (PB)
              pipe — gray plastic
              that degrades at
              fittings and was
              the subject of
              a class action
              settlement; modern
              installations use
              cross-linked polyethylene
              (PEX) or copper.
              Trenchless repair
              options: for a
              service line that
              runs under a concrete
              driveway or mature
              landscaping, pipe
              bursting — pulling
              a new PEX or HDPE
              pipe through the
              old pipe while
              fragmenting the
              old pipe into
              the surrounding
              soil — replaces
              the line from
              meter pit to
              house entry point
              with minimal surface
              disruption; pipe
              lining (CIPP) can
              rehabilitate a
              structurally sound
              but leaking line
              with an epoxy
              liner pulled through
              the existing pipe.
              A KC water main
              website that explains
              who owns what
              line, why galvanized
              pipe fails, and
              when trenchless
              options preserve
              the driveway earns
              the homeowner calling
              from a wet yard.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before water main repair
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Service line responsibility — where city responsibility ends and homeowner responsibility begins in KC",
                  "Leak signs — wet yard without rain, pressure drop, high water bill, meter spinning with all fixtures off",
                  "Pipe material failure — galvanized corrosion timeline, polybutylene fitting failure, copper soil corrosion in KC clay",
                  "Trenchless replacement — pipe bursting vs. open trench, when driveway crossing makes trenchless worth the cost",
                  "Permit requirement — water service line work permit in KC, licensed plumber requirement, inspection",
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
                What your water main repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Service line responsibility section — meter pit location, homeowner vs. city water responsibility map for KC",
                  "Pipe material section — galvanized failure signs, polybutylene identification, copper vs. PEX for KC soil",
                  "Trenchless options section — pipe bursting for under-driveway runs, CIPP lining for structurally sound pipes",
                  "Leak detection section — how to confirm service line leak vs. irrigation issue vs. drain backup",
                  "Permit and timeline section — KC permit process, inspection requirements, typical repair timeline",
                  "Quote form with home age, current pipe material if known, wet spot location, driveway in path",
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
                &ldquo;The responsibility section
                is the first thing every
                KC homeowner needs to
                read. They call the city,
                the city tells them to
                call a plumber, and they
                don&apos;t know why they
                own a pipe in their yard
                they&apos;ve never seen.
                After the section explaining
                the meter pit line, they
                come to me already knowing
                the repair is theirs and
                asking about options instead
                of demanding the city fix
                it. The trenchless section
                is what closes jobs with
                driveways — KC homeowners
                with a forty-year-old
                galvanized line running
                under a concrete driveway
                hear &apos;pipe bursting&apos;
                and understand immediately
                why it costs more but
                is worth it to keep
                the driveway intact.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — F. Nakamura, water line repair and replacement, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A water main repair site with service line responsibility section,
                pipe material guide, and quote form starts at $200. A full site
                with trenchless options, leak detection guide, and permit section
                is $425–$750. One service line replacement covers the cost.
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

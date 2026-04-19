import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Door Knob and Deadbolt Replacement Companies in Kansas City",
  description:
    "Custom websites for door knob replacement, deadbolt installation, and lockset upgrade companies in the Kansas City area. Show your backset measurement, bore hole sizing, and grade selection by door use to win lockset replacement contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/door-knob-deadbolt-replacement",
  },
};

export default function DoorKnobDeadboltReplacementPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Door Knob and Deadbolt Replacement Companies in Kansas City",
    description: "Custom websites for door knob replacement and deadbolt installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Door Knob and Deadbolt Replacement Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether a new deadbolt will fit the existing bore hole, what backset means and how to measure it, and what the difference is between a Grade 1 and Grade 2 deadbolt for a primary exterior door. A website that explains lockset replacement earns the security call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Door Knob and Deadbolt Replacement in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Door Knob and Deadbolt Replacement</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Door knob and deadbolt
              replacement customers
              are KC homeowners moving
              into a previously owned
              home and re-keying
              or replacing all exterior
              locksets for security,
              homeowners whose deadbolt
              has become stiff and
              difficult to throw
              after years of door
              movement from KC&apos;s
              seasonal temperature
              swings, or homeowners
              upgrading a hollow-core
              interior door knob
              to a lever handle set
              after a family member
              with limited grip strength
              moves in. The central
              education is backset
              and bore hole measurement,
              ANSI grade selection
              by door use, and strike
              plate reinforcement —
              three things that determine
              whether a replacement
              lockset is a direct
              swap or requires additional
              boring and frame work.
              Backset and bore: the
              backset is the distance
              from the door edge
              to the center of the
              bore hole — the standard
              residential backset
              is 2-3/8 inches (standard)
              or 2-3/4 inches (backset
              common on older KC
              exterior doors from
              before 1990); a replacement
              lockset must match
              the existing backset
              or the latch will
              not align with the
              strike plate; most
              locksets sold today
              are adjustable for
              both backsets; the
              bore hole diameter
              is standard at 2-1/8
              inches for all residential
              knobs, levers, and
              deadbolts — a new
              lockset will fit any
              standard bore; in
              older KC homes with
              mortise locksets (a
              rectangular pocket
              in the door edge rather
              than a round bore),
              a cylindrical replacement
              requires a bore hole
              to be cut where none
              exists — this is a
              full bore-and-install
              job, not a direct
              swap. ANSI grade: the
              ANSI/BHMA grading system
              rates deadbolts Grade
              1 (commercial, highest
              security), Grade 2
              (residential heavy-duty),
              and Grade 3 (light
              residential); a Grade
              3 deadbolt has a 1/2-inch
              throw bolt made of
              zinc and fails under
              kick-in force after
              one impact in testing;
              a Grade 1 deadbolt
              has a 1-inch hardened
              steel throw bolt and
              withstands 10 strike
              impacts in testing;
              for a primary exterior
              door in KC, Grade
              1 or Grade 2 is the
              appropriate specification;
              the hardware store
              price difference between
              a Grade 3 and a Grade
              1 deadbolt is $30–$60.
              Strike plate reinforcement:
              the weakest point of
              a deadbolt installation
              is not the lock itself
              but the strike plate
              and the jamb behind
              it — the standard
              strike plate uses
              3/4-inch screws into
              the door stop and
              jamb wood; under kick
              force, the jamb splits
              at the strike plate
              location regardless
              of the deadbolt grade;
              an extended strike
              plate (3 inches vs.
              the standard 1-inch)
              with 3-inch screws
              that reach the door
              frame stud is the
              correct reinforcement —
              it spreads the kick
              load across the full
              frame rather than
              concentrating it at
              the jamb. A lockset
              website that explains
              backset measurement,
              ANSI grade by door
              use, and why strike
              plate reinforcement
              matters earns the
              homeowner who wants
              security done right.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before door knob and deadbolt replacement
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Backset measurement — 2-3/8 vs. 2-3/4 inch standard, how to measure, adjustable lockset compatibility",
                  "Mortise vs. cylindrical — older KC mortise identification, bore hole requirement for cylindrical replacement",
                  "ANSI grade — Grade 1 vs. 2 vs. 3, throw bolt length and material, kick resistance by grade",
                  "Strike plate reinforcement — 3-inch extended plate, 3-inch screw into stud, jamb split prevention",
                  "Re-key vs. replace — when re-keying is sufficient, when full lockset replacement is better",
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
                What your door knob and deadbolt replacement website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Backset section — 2-3/8 vs. 2-3/4, measurement guide, adjustable lockset explanation",
                  "Mortise identification — older KC home mortise lock recognition, bore hole requirement for cylindrical swap",
                  "ANSI grade section — Grade 1/2/3 comparison, throw bolt specs, when Grade 1 is required",
                  "Strike plate guide — extended plate benefit, 3-inch screw into stud, jamb reinforcement method",
                  "Re-key vs. replace section — when each is appropriate, cost comparison, security context",
                  "Quote form with door location, existing backset, lock type, grade preference, timeline",
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
                &ldquo;The strike plate section
                is the one that turns a
                $80 deadbolt job into a
                $150 job — and customers
                approve it every time once
                they understand why. The
                section explaining that
                the jamb splits under kick
                force regardless of the
                deadbolt grade, and that
                the $12 extended strike
                plate with 3-inch screws
                is the actual security upgrade,
                changes what customers ask
                for. Before, I&apos;d install
                a Grade 1 deadbolt in the
                existing strike plate and
                leave a jamb that would
                split in two kicks. Now
                customers ask for the reinforced
                strike as part of the job.
                The ANSI grade section also
                helps — customers in Midtown
                and Westport stopped buying
                the cheap Grade 3 deadbolts
                from the end cap and started
                asking what I recommend.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — H. Taggart, door hardware and security installation, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A lockset replacement site with backset section, ANSI grade guide,
                and quote form starts at $200. A full site with strike plate
                reinforcement, mortise conversion, and re-key vs. replace content
                is $425–$750. One exterior door lockset covers the cost.
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

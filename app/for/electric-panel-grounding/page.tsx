import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Electric Panel Grounding Companies in Kansas City",
  description:
    "Custom websites for electrical grounding, panel grounding electrode installation, and grounding system upgrade companies in the Kansas City area. Show your KC grounding electrode system requirements, ground rod vs. Ufer ground, and GFCI interaction with grounding to win panel grounding contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/electric-panel-grounding",
  },
};

export default function ElectricPanelGroundingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Electric Panel Grounding Companies in Kansas City",
    description: "Custom websites for electrical grounding and panel grounding electrode installation companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Electric Panel Grounding Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why their home inspector flagged missing grounding, what a ground rod does that the neutral wire doesn&apos;t, and why an older KC home may have a two-wire system with no ground. A website that explains grounding electrode systems and GFCI interaction earns the upgrade call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Electrical Grounding in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Electric Panel Grounding</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Electrical grounding
              customers are KC homeowners
              whose home inspection
              flagged an inadequate
              or missing grounding
              electrode system —
              typically in homes
              built before 1960
              when ground rods
              and grounding electrode
              conductors were
              not consistently
              required — or homeowners
              adding a new panel
              or subpanel who
              need a proper grounding
              electrode system
              installed to current
              NEC requirements.
              The central education
              is what grounding
              actually does and
              why it is different
              from the neutral
              conductor: the
              neutral wire returns
              current to the
              utility transformer
              under normal operating
              conditions — it
              is a current-carrying
              conductor; the
              equipment grounding
              conductor connects
              the metal enclosures
              of appliances,
              outlets, and the
              panel to earth
              — it carries no
              current under
              normal conditions;
              its purpose is
              to provide a low-resistance
              path to earth
              that causes a
              fault current
              to trip the overcurrent
              protective device
              (breaker) before
              the voltage on
              the metal case
              of an appliance
              can cause a fatal
              shock; the grounding
              electrode system —
              ground rods, Ufer
              ground (concrete-encased
              electrode), or
              water pipe bond —
              connects the panel
              ground bus to
              the earth itself,
              stabilizing the
              panel voltage
              reference during
              lightning transients
              and utility events.
              NEC grounding electrode
              requirements: the
              2020 NEC (adopted
              in KC) requires
              a grounding electrode
              system that typically
              includes at least
              two ground rods
              driven to a depth
              of eight feet
              each and spaced
              at least six feet
              apart — or a single
              rod if a resistance
              test confirms
              twenty-five ohms
              or less to earth;
              homes built before
              1960 in Kansas
              City may have
              only a water pipe
              bond, which no
              longer meets code
              as the sole grounding
              electrode because
              plastic water
              service line segments
              interrupt the
              continuity to
              earth. GFCI interaction:
              a common misunderstanding
              is that adding
              GFCI protection
              to ungrounded two-wire
              circuits makes
              them safe; GFCI
              protection detects
              ground fault current
              and trips the
              circuit — it does
              protect against
              shock in most
              scenarios — but
              it does not provide
              an equipment ground;
              appliances with
              three-prong plugs
              installed on GFCI-protected
              two-wire circuits
              may not have
              their metal cases
              bonded to earth;
              the NEC allows
              GFCI-protected
              outlets to be
              labeled &ldquo;No Equipment
              Ground&rdquo; and used
              as a code-compliant
              replacement for
              ungrounded circuits —
              but this is not
              the same as actually
              grounding the
              circuit.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before electrical grounding upgrades
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Ground vs. neutral — why they are separate conductors, what each does, why bonding them is dangerous",
                  "Grounding electrode system — ground rod requirements, Ufer ground, water pipe bond limitation in KC",
                  "Home inspection grounding flags — common defects in KC pre-1960 homes, what needs to be added",
                  "GFCI vs. grounding — what GFCI protects against, what it doesn't replace, no-equipment-ground labeling",
                  "Panel ground bus — where the grounding electrode connects, ground-neutral bonding rule at service entrance",
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
                What your electrical grounding website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Ground vs. neutral section — current-carrying vs. fault path, why bonding them at subpanels is a code violation",
                  "Grounding electrode section — NEC two-rod requirement, Ufer ground for new construction, water pipe bond limitation",
                  "KC pre-1960 home section — common defects, water service pipe plastic interruption, what upgrade involves",
                  "GFCI interaction section — shock protection vs. equipment ground, no-equipment-ground outlet labeling",
                  "Home sale section — inspection defect language, what remediation actually involves for KC buyers and sellers",
                  "Quote form with home age, current grounding electrode presence, panel age, inspection report available",
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
                &ldquo;The GFCI section is
                what stops homeowners
                from thinking they&apos;ve
                solved a grounding problem
                with a GFCI outlet.
                KC home inspectors sometimes
                recommend adding GFCI
                protection to ungrounded
                outlets as a code-compliant
                fix — which it is —
                but homeowners think
                that means their three-prong
                outlets are now grounded.
                After the section explaining
                the difference, customers
                who care about the distinction
                (usually because they
                have sensitive electronics
                or a home theater) ask
                for actual grounding
                rather than GFCI labeling.
                The water pipe bond section
                also converts a lot of
                KC home sale grounding
                repairs — sellers find
                out at inspection that
                their 1952 water pipe
                bond no longer meets
                code because of a plastic
                service line segment
                installed in the nineties.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — R. Sorenson, electrical panel and grounding work, Prairie Village, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A panel grounding site with grounding electrode section, GFCI
                interaction guide, and quote form starts at $200. A full site
                with pre-1960 KC home section, home sale repair guide, and NEC
                requirements explanation is $425–$750. One grounding electrode
                system installation covers the cost. No contracts, no monthly fees.
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

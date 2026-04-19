import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Kitchen Cabinet Painting Companies in Kansas City",
  description:
    "Custom websites for kitchen cabinet painting, cabinet refinishing, and cabinet spray painting companies in the Kansas City area. Show your KC humidity cure time for cabinet paint, proper degreasing before painting kitchen cabinets, and spray vs. brush application for KC homes to win kitchen cabinet painting contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/kitchen-cabinet-painting",
  },
};

export default function KitchenCabinetPaintingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Kitchen Cabinet Painting Companies in Kansas City",
    description: "Custom websites for kitchen cabinet painting and cabinet refinishing companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Kitchen Cabinet Painting Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether painted cabinets will last, how to avoid brush marks and peeling at the door edges, and what preparation is required to make the paint bond to surfaces that have twenty years of cooking grease. A website that explains proper cabinet painting prep earns the call before a homeowner attempts it with a foam roller and watches it peel in six months. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Kitchen Cabinet Painting in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Kitchen Cabinet Painting</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Kitchen cabinet painting
              customers are KC homeowners
              whose oak, maple,
              or MDF cabinets
              are dated in color —
              golden oak stain
              from nineteen-ninety
              or almond-painted
              original builders'
              grade from two thousand —
              and who want a
              white, off-white,
              or gray finish
              without the cost
              of replacement;
              homeowners who
              attempted to paint
              their own cabinets
              using a foam
              roller and standard
              latex wall paint
              and got brush marks,
              runs, or peeling
              at the door edges
              within six to
              twelve months;
              or homeowners
              who received quotes
              for new cabinets
              in the six to
              fifteen thousand
              dollar range
              and want to understand
              whether cabinet
              painting at one
              thousand five hundred
              to four thousand
              dollars produces
              a result that
              will last. The
              central education
              is degreasing
              as the step
              that determines
              whether paint
              bonds to kitchen
              cabinet surfaces —
              a kitchen cabinet
              surface accumulates
              polymerized cooking
              oil over years
              of use; polymerized
              oil is a plastic-like
              film that standard
              TSP or dish soap
              does not fully
              remove; paint
              applied over
              polymerized oil
              bonds to the
              oil film, not
              to the wood or
              MDF substrate,
              and peels at
              the door edges
              within one to
              two years when
              the oil film
              releases; the
              correct degreasing
              agent for KC
              kitchen cabinets
              is a degreaser
              rated for polymerized
              grease — Krud Kutter
              Kitchen Degreaser,
              Zinsser's BIN
              or a similar
              product — applied
              with a scrub
              pad and followed
              by a water rinse
              and dry before
              any sanding or
              primer is applied;
              sanding after
              degreasing as
              the adhesion
              step — scuff
              sanding with
              one-hundred-twenty
              to one-hundred-fifty
              grit creates
              mechanical adhesion
              for the primer;
              on MDF cabinet
              doors, sanding
              the face is
              sufficient but
              the MDF edge
              is highly porous —
              a coat of shellac-based
              primer seals
              the MDF edge
              before topcoat
              application to
              prevent swelling
              and grain raise
              on the exposed
              edge under humidity;
              spray versus
              brush-and-roll
              application for
              KC kitchens —
              a high-volume
              low-pressure
              spray system
              produces zero
              brush marks on
              flat cabinet
              door faces;
              the overspray
              requires masking
              the entire kitchen —
              countertops, appliances,
              floors, and ceiling
              edges —
              adding two to
              four hours of
              setup to every
              job but eliminating
              the texture that
              even a fine-finish
              foam roller leaves
              in the topcoat;
              cure time for
              cabinet paint
              in KC humidity —
              alkyd or waterborne
              alkyd cabinet
              paint requires
              twenty-one to
              thirty days to
              reach full hardness;
              in KC spring
              at sixty to
              seventy percent
              relative humidity,
              full cure extends
              to the longer
              end of the range;
              cabinets closed
              or loaded with
              dishes before
              full cure will
              have the paint
              stick together
              at the door-to-face-frame
              interface —
              the door paint
              pulls off on
              the face frame
              when opened;
              the cure window
              must be communicated
              to KC homeowners
              before the job
              is completed.
              A kitchen cabinet
              painting website
              that explains
              polymerized grease
              degreasing as
              the adhesion
              prerequisite,
              MDF edge priming
              with shellac,
              spray application
              versus brush-and-roll,
              and alkyd cure
              time in KC
              humidity earns
              the KC homeowner
              who wants cabinets
              that will last
              ten years and
              not the ones
              who tried it
              with foam rollers.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before kitchen cabinet painting
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Degreasing requirement — polymerized cooking oil film, why dish soap fails, rated degreaser + scrub + rinse process",
                  "MDF edge priming — porous MDF edge swelling under humidity, shellac primer seal before topcoat",
                  "Spray vs. brush-and-roll — texture difference, overspray masking setup time, why spray is standard for cabinet doors",
                  "Alkyd cure time — 21-30 days to full hardness, KC humidity extension, door sticking before full cure",
                  "Paint vs. replace decision — cost comparison, what painting cannot fix (damaged boxes, bad layout, poor function)",
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
                What your kitchen cabinet painting website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Degreasing section — polymerized oil chemistry, rated degreaser brands, scrub-rinse-dry sequence before sanding",
                  "Surface prep section — scuff sand grit for adhesion, MDF edge shellac primer, wood grain raise prevention",
                  "Application section — HVLP spray process, masking scope, brush-and-roll texture and when it's acceptable",
                  "Cure section — alkyd vs. latex for cabinets, 21-30 day cure window, door sticking warning for homeowners",
                  "Cost vs. replace — when painting makes sense (sound boxes, good layout), what painting cannot resolve",
                  "Quote form with cabinet material (wood/MDF/plywood), door style, current finish, color change required, home age",
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
                &ldquo;The degreasing
                section is the
                most important
                thing on the
                page. KC homeowners
                who tried to
                paint their own
                cabinets always
                cleaned them
                first — they
                wiped them down
                with dish soap
                or TSP and thought
                they were ready.
                After the section
                went up explaining
                that polymerized
                cooking oil
                is chemically
                different from
                surface grease
                and that standard
                cleaners do not
                remove it, customers
                understood why
                their DIY job
                peeled at the
                edges in under
                a year and why
                the professional
                process takes
                twice as long
                on the prep.
                The cure section
                also prevents
                call-backs —
                I explain the
                twenty-one-day
                cure window
                before I leave
                and now customers
                actually wait.
                The sticking
                complaint dropped
                to almost zero
                after the section
                went up.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — B. Hartley, kitchen cabinet painting and refinishing, Leawood, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A kitchen cabinet painting site with degreasing section, spray
                application guide, and quote form starts at $200. A full site with
                MDF edge priming, cure time warning, and paint vs. replace
                comparison is $425–$750. One full kitchen cabinet job covers the
                cost. No contracts, no monthly fees.
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

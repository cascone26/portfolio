import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Fence Gate Repair Companies in Kansas City",
  description:
    "Custom websites for fence gate repair, gate sag repair, and gate latch replacement companies in the Kansas City area. Show your gate sag diagonal brace method, KC clay soil post heave, and latch alignment after post movement to win fence gate repair contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/fence-gate-repair",
  },
};

export default function FenceGateRepairPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Fence Gate Repair Companies in Kansas City",
    description: "Custom websites for fence gate repair and gate sag correction companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Fence Gate Repair Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know why their gate sags even after they replace the hinges, whether a turnbuckle cable actually fixes gate sag permanently, and why their gate post is leaning more every spring. A website that explains fence gate repair earns the sag and latch call before they assume the whole fence needs to go. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Fence Gate Repair in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Fence Gate Repair</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Fence gate repair customers
              are KC homeowners whose
              wood or vinyl gate sags
              at the latch corner
              so it drags the ground
              or fails to latch —
              homeowners who replaced
              the hinges and the gate
              sagged again within
              a year because the
              hinge replacement did
              not address the underlying
              diagonal racking of
              the gate frame, or
              homeowners whose gate
              post has moved from
              its original plumb
              position due to KC
              clay soil heave over
              winter freeze-thaw cycles,
              pulling the latch hardware
              out of alignment regardless
              of hinge condition.
              The central education
              is gate sag cause and
              structural fix, KC clay
              soil post movement,
              and latch hardware alignment
              after post correction —
              three things that determine
              whether a gate repair
              holds for years or requires
              annual hinge replacement.
              Gate sag cause: a wood
              gate sags when the frame
              loses its square geometry —
              the hinge side stays
              fixed to the post while
              the latch corner drops
              under the gate weight
              and the weight of pickets;
              the gate frame racks
              into a parallelogram
              shape; replacing hinges
              does not restore the
              gate frame to square
              and the new hinges carry
              the same racking force
              as the old ones; the
              structural fix is a
              diagonal compression
              brace or a turnbuckle-and-cable
              anti-sag kit — a turnbuckle
              cable runs from the
              top hinge corner to
              the bottom latch corner
              of the gate frame and
              is tensioned to pull
              the latch corner back
              up into square; this
              transfers gate weight
              through the diagonal
              tension member rather
              than through hinge racking
              force; properly installed,
              a turnbuckle anti-sag
              kit on a wood gate
              restores plumb and holds
              for five or more years;
              a gate without a diagonal
              brace of any kind will
              always sag under its
              own weight over time.
              KC clay soil post heave:
              KC sits on expansive
              clay soil that absorbs
              water from spring rains
              and swells, then dries
              and shrinks in summer;
              a gate post set in
              concrete in KC clay
              experiences vertical
              and lateral force from
              soil expansion every
              spring — a post set
              without a concrete footing
              below the frost line
              (approximately thirty
              inches in KC) will
              heave upward or lean
              laterally as the soil
              expands; a leaning gate
              post misaligns the gate
              frame relative to the
              latch post regardless
              of how well the gate
              itself is built; the
              repair sequence for
              a leaning gate post
              is to excavate, plumb,
              and reset the post
              in a deeper concrete
              footing that extends
              below frost depth; until
              the post is plumb, latch
              and hinge repairs are
              temporary. Latch alignment:
              after post movement,
              the latch strike plate
              and bolt are no longer
              at the same height —
              the gate latches above
              or below the strike
              or misses entirely;
              heavy-duty adjustable
              gate latches (Snug Cottage
              or equivalent) have
              vertical and horizontal
              adjustment range that
              accommodates minor post
              movement without resetting
              the post; significant
              post lean requires post
              correction before latch
              replacement. A fence
              gate repair website
              that explains the sag
              structural fix, KC post
              heave mechanics, and
              latch alignment sequence
              earns the homeowner
              who has replaced hinges
              twice and still has
              a dragging gate.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before fence gate repair
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Gate sag cause — frame racking vs. hinge failure, why new hinges don't fix sag, diagonal force mechanics",
                  "Turnbuckle anti-sag kit — cable routing from hinge to latch corner, tensioning method, lifespan",
                  "KC post heave — clay soil expansion, frost line depth (30 inches KC), concrete footing requirement",
                  "Leaning post repair — excavation and reset vs. bracing, when post replacement is needed",
                  "Latch alignment — adjustable latch types, vertical adjustment range, when latch replacement is appropriate",
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
                What your fence gate repair website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Sag cause section — frame racking explanation, why hinge replacement fails, diagonal brace mechanics",
                  "Anti-sag kit guide — turnbuckle cable installation, corner attachment points, tensioning to plumb",
                  "KC clay section — soil expansion cycle, frost line depth, what happens to posts set above frost",
                  "Post repair section — leaning post diagnosis, excavation and reset process, footing depth requirement",
                  "Latch section — alignment after post movement, adjustable latch options, strike plate adjustment",
                  "Quote form with gate material, sag amount, post lean status, latch function, number of gates, timeline",
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
                &ldquo;The anti-sag kit section
                is what stopped the
                hinge replacement callbacks.
                Customers in Overland
                Park would call every
                spring about a sagging
                gate. I&apos;d go out and
                replace the hinges,
                and twelve months later
                they&apos;d call again. After
                the section went up
                explaining that hinge
                replacement doesn&apos;t
                address the frame racking
                and only an anti-sag
                cable fixes the structural
                cause, customers started
                asking for the diagonal
                brace at the initial
                call. The KC clay post
                section also changed
                how customers describe
                their problem — homeowners
                started calling and
                saying &apos;I think my post
                heaved&apos; instead of just
                &apos;my gate doesn&apos;t latch.&apos;
                It made the diagnosis
                faster and the repair
                scope clearer before
                I even showed up.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — B. Larkin, fence repair and gate service, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A fence gate repair site with sag cause section, anti-sag kit
                guide, and quote form starts at $200. A full site with KC clay
                post heave content, post repair guide, and latch alignment section
                is $425–$750. One gate repair call covers the cost. No contracts,
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

import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Countertop Installation Companies in Kansas City",
  description:
    "Custom websites for countertop installation, granite countertops, and quartz countertop companies in the Kansas City area. Show your seam placement, overhang support requirements, and templating process to win countertop installation contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/countertop-installation",
  },
};

export default function CountertopInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Countertop Installation Companies in Kansas City",
    description: "Custom websites for countertop installation and granite or quartz countertop companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Countertop Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether granite or quartz holds up better around the sink, where seams will be visible in their kitchen layout, and what support is required for an overhang that cantilevers past the cabinet face. A website that explains countertop selection and installation earns the kitchen call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Countertop Installation in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Countertop Installation</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Countertop installation
              customers are KC homeowners
              replacing laminate
              with stone as part
              of a kitchen update,
              homeowners building
              a new kitchen and
              choosing between
              materials for the
              first time, or
              homeowners replacing
              a damaged countertop
              after a crack or
              chip in an existing
              stone surface.
              The central education
              is material differences,
              seam placement,
              and overhang support —
              three things that
              are visible and
              permanent once
              the installation
              is done.
              Granite vs. quartz:
              granite is a natural
              stone — each slab
              is unique; it
              is harder than
              quartz (Mohs 6–7)
              and resistant
              to heat directly
              from pots and
              pans; granite
              is porous and
              must be sealed
              annually with
              a penetrating
              sealer to prevent
              staining from
              oils and red
              wine; granite
              near the sink
              cutout is the
              highest-risk area
              for staining if
              sealing lapses;
              quartz is an
              engineered product —
              90–95% crushed
              quartz bound with
              polymer resin;
              quartz is non-porous
              and requires no
              sealing; quartz
              is not heat-resistant —
              hot pots placed
              directly on quartz
              can crack the
              resin or cause
              discoloration;
              quartz is more
              consistent in
              color and pattern
              (useful for matching
              across seams);
              both materials
              are fabricated
              at 3/4-inch or
              1.25-inch thickness
              (3cm is the standard
              for kitchen countertops).
              Seam placement:
              stone slabs are
              typically 60–65
              inches wide —
              most KC kitchen
              runs longer than
              this and require
              at least one seam;
              seams are placed
              at corners whenever
              possible, or in
              a location away
              from the primary
              workspace; seams
              should never be
              placed across
              the sink cutout;
              the seam gap
              is filled with
              color-matched epoxy
              and polished flush —
              a well-placed
              and well-filled
              seam is nearly
              invisible in granite
              with movement;
              a quartz seam
              is more visible
              because the material
              pattern is consistent
              and the seam interrupts
              the uniformity.
              Overhang support:
              a standard countertop
              overhang over
              base cabinets
              is 1–1.5 inches;
              island or peninsula
              overhangs for
              seating are typically
              12–15 inches;
              stone countertops
              over 6 inches
              of unsupported
              overhang require
              corbels or steel
              support brackets —
              the standard is
              that unsupported
              cantilever should
              not exceed 1/3
              of the total countertop
              depth; a 25-inch
              deep countertop
              can cantilever
              8 inches without
              support; beyond
              8 inches, steel
              brackets (3/16-inch
              plate, minimum
              18 inches long
              anchored into
              cabinet framing)
              are required.
              Templating process:
              countertop fabricators
              do not install
              off a set of dimensions —
              a physical template
              (1/4-inch plywood
              strips or digital
              laser template)
              is made of the
              exact cabinet layout
              before fabrication;
              templating happens
              after cabinets
              are set and leveled,
              before the sink
              is dropped in;
              changes to cabinet
              layout after templating
              require re-templating.
              A countertop website
              that explains why
              granite needs sealing
              near the sink,
              how seam placement
              is decided, and
              what support is
              required for a
              seating overhang
              earns the homeowner
              who wants to make
              an informed material
              choice, not just
              pick what looks
              good at the showroom.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before countertop installation
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Granite vs. quartz — porosity and sealing requirement, heat resistance difference, seam visibility by material",
                  "Seam placement — slab width limitation, corner seam preference, seam across sink cutout prohibition",
                  "Overhang support — 1/3 depth rule, seating overhang bracket requirement, steel bracket sizing",
                  "Templating process — when templating happens, digital vs. physical template, re-template after layout change",
                  "Backsplash gap — standard 1/8-inch gap between countertop and wall, caulk vs. grout for gap material",
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
                What your countertop installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Material comparison section — granite porosity and sealing, quartz resin heat risk, thickness options",
                  "Seam placement guide — slab width limit, where seams go in common KC kitchen layouts, seam quality",
                  "Overhang section — standard overhang, 1/3 rule, seating overhang bracket requirement and sizing",
                  "Templating section — when to template, what changes require re-template, digital vs. plywood template",
                  "Backsplash section — gap standard, caulk vs. grout material choice, color matching to countertop edge",
                  "Quote form with kitchen layout description, material preference, seating overhang needed, timeline",
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
                &ldquo;The seam placement section
                saved me from the most
                common complaint I get —
                customers upset about where
                the seam ended up. Before
                the website, I&apos;d explain
                seam location at the estimate
                and they&apos;d forget by installation
                day. After the section went
                up with diagrams showing
                why seams land where they
                do based on slab width,
                customers came to the template
                visit already knowing we
                needed a corner seam and
                why. The overhang section
                also prevented one job from
                going badly — a customer
                with a 14-inch island overhang
                had talked to another installer
                who said no brackets were
                needed. They read the section,
                asked about brackets, and
                we installed them. Two years
                later that stone is still
                flat.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — N. Petrov, stone countertop fabrication and installation, Blue Springs, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A countertop site with material comparison section,
                seam placement guide, and quote form starts at $200.
                A full site with overhang support, templating process,
                and backsplash content is $425–$750. One kitchen
                countertop installation covers the cost. No contracts, no monthly fees.
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

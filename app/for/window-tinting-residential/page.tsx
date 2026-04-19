import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Residential Window Tinting Companies in Kansas City",
  description:
    "Custom websites for home window tinting, residential solar film, and privacy film companies in the Kansas City area. Show your film types, heat rejection specs, and before-and-after results to win residential window tinting contracts.",
  alternates: {
    canonical: "https://builtsimple.dev/for/window-tinting-residential",
  },
};

export default function WindowTintingResidentialPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Residential Window Tinting Companies in Kansas City",
    description: "Custom websites for residential window tinting companies in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Window Tinting Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Homeowners want to know whether window film will make their rooms look dark, whether it will void their window warranty, and how much heat it actually blocks from south and west-facing glass in a KC summer. A website with heat rejection data and before-and-after light comparisons earns the quote call. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Window Tinting in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Residential Window Tinting</span> Companies in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Residential window tinting customers
              are homeowners dealing with
              excessive heat from south
              or west-facing glass,
              UV damage to hardwood
              floors and furniture,
              glare on television screens
              and computer monitors,
              or privacy needs on
              street-facing rooms.
              The most important
              education is the
              darkness misconception:
              many homeowners believe
              window film will
              make their rooms
              dark, the way automotive
              tint darkens car windows.
              Residential solar control
              film is designed for
              visible light transmission —
              quality films (3M,
              Llumar, Huper Optik,
              Solar Gard, Vista)
              can reject 50–80%
              of solar heat while
              maintaining 40–70%
              visible light transmission,
              and the interior view
              from the room is
              largely unchanged.
              The key metrics are
              TSER (Total Solar
              Energy Rejected),
              VLT (Visible Light
              Transmission), and
              UVRS (UV Rejection —
              quality films reject
              99% of UV, which
              protects floors and
              furniture from fading).
              Film categories:
              solar control (heat
              and glare reduction,
              clear to lightly
              tinted appearance),
              privacy film (frosted,
              decorative, or reflective
              — one-way daytime
              privacy but not
              nighttime), security
              film (holds glass
              together on impact —
              burglary and storm
              protection), and
              decorative film
              (patterns, frosted
              designs for bathrooms
              and office glass).
              Warranty concerns
              are real — some window
              manufacturers void
              warranties if film
              is applied to certain
              low-e glass units —
              a professional installer
              checks the window
              type and film compatibility
              before installation.
              A window tinting website
              that addresses the
              darkness concern,
              explains the heat
              rejection specs,
              and covers warranty
              compatibility earns
              the homeowner whose
              AC struggles every
              August afternoon.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners research before choosing a window tinting company
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Will it look dark — visible light transmission numbers, before-and-after interior view photos",
                  "Heat rejection specs — TSER percentage, how much cooling load reduction on south and west windows",
                  "UV protection — UV rejection percentage, how it protects floors and furniture from fading",
                  "Film types — solar control vs. privacy vs. security vs. decorative — what each type does",
                  "Window warranty — whether applying film voids the glass manufacturer warranty on low-e units",
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
                What your window tinting website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Film comparison — solar control, privacy, security, decorative — specs, appearance, applications",
                  "Heat rejection data — TSER percentages for our film lines, estimated cooling impact on KC homes",
                  "Light transmission photos — interior before-and-after showing how little rooms darken with quality film",
                  "UV protection — 99% UV rejection, what that means for hardwood floors, furniture, and artwork",
                  "Warranty guide — low-e glass compatibility check process, what we verify before installation",
                  "Quote form with window count, problem areas, film type interest, window type, timeline",
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
                &ldquo;Every homeowner asks the
                same two questions: will
                it look dark, and will
                it void my warranty.
                Before the website I
                was answering those
                on every call before
                we even got to
                talking about the
                job. The site with
                our before-and-after
                light transmission
                photos, the TSER
                numbers, and our
                warranty compatibility
                process meant customers
                called with those
                questions already
                answered. The average
                call went from twenty
                minutes to five,
                and close rates
                went up because
                leads had already
                self-qualified.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — J. Fitzgerald, window film specialist, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A window tinting site with film
                types, heat rejection data, and
                quote form starts at $200. A full
                site with light comparison photos,
                UV protection section, and warranty
                guide is $425–$750. One full-home
                solar film installation covers the
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

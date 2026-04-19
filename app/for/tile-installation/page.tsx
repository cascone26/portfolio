import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Tile Installation Companies in Kansas City",
  description:
    "Custom websites for tile installation and flooring contractors in the Kansas City area. Show your tile work portfolio, explain your installation process, and get more kitchen, bathroom, and floor tile project quotes.",
  alternates: {
    canonical: "https://builtsimple.dev/for/tile-installation",
  },
};

export default function TileInstallationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Tile Installation Companies in Kansas City",
    description: "Custom websites for tile installation and flooring contractors in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Tile Installation Companies",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          Tile work is one of the most visual trades — homeowners choose their installer based on photos of completed work. A portfolio-first website with your best kitchen, bathroom, and shower installs earns more project quotes. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Tile Installers in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Tile Installation</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Tile work sells itself when homeowners can see it. The challenge
              is getting your portfolio in front of them before they call
              someone else. A tile installer website built around project
              photos — organized by room type, tile style, and application —
              gives homeowners the inspiration and proof they need, then makes
              it easy to request a quote for their own project.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What homeowners look for in a tile installer
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Portfolio photos — bathrooms, showers, kitchens, backsplashes, floors, outdoor tile",
                  "Tile types — ceramic, porcelain, natural stone, glass, mosaic, large format",
                  "Applications — floor, shower, backsplash, fireplace surround, outdoor patio",
                  "Waterproofing methods — how showers are waterproofed, what systems are used",
                  "Grout and installation quality — rectified tile, lippage standards, pattern layouts",
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
                What your tile installation website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Project gallery — bathrooms, showers, kitchens, floors, backsplashes — organized and searchable",
                  "Services page — floor tile, shower tile, backsplash, fireplace, outdoor, commercial",
                  "Tile types — ceramic, porcelain, stone, glass with application guidance",
                  "Installation process — demo, waterproofing, layout, installation, grouting, sealing",
                  "Waterproofing explanation — why it matters, what systems you use, warranty",
                  "Quote form with project type, room size, tile style preferences, timeline",
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
                &ldquo;I had 12 years of photos on my phone that nobody
                could see. The new site organized my best work by room
                type and customers started coming in having already picked
                layouts from my gallery. The quality of leads went up
                immediately because people could see exactly what I could
                do for them.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — F. Morales, tile installer, Overland Park, KS
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A tile installer site with portfolio, services, and quote
                form starts at $225. A full site with organized gallery,
                tile types, installation process, and waterproofing content
                is $425–$875. One bathroom remodel covers the cost. No
                contracts, no monthly fees.
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

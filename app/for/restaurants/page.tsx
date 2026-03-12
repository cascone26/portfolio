import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../../components/fade-in";

export const metadata: Metadata = {
  title: "Websites for Restaurants in Kansas City",
  description:
    "Custom websites for restaurants, cafes, and food businesses in the Kansas City area. Menus, hours, online ordering — everything your customers are looking for.",
};

export default function RestaurantsPage() {
  return (
    <>
      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Restaurants in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Websites for{" "}
              <span className="gradient-text">Restaurants</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              97% of consumers search online for local businesses — and for
              restaurants, the first thing people look for is your menu, hours,
              and location. If they can&apos;t find that in a few seconds, they
              go somewhere else.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What your customers want to find online
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Your menu — with prices, photos, and specials",
                  "Hours and location with a map",
                  "A way to call or reserve a table",
                  "Photos of your food and space",
                  "Online ordering or a link to your delivery apps",
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
                Here&apos;s an example
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-4">
                I built this demo site for a local restaurant to show what a
                clean, fast, mobile-friendly site looks like. Menu, hours,
                location, contact — everything a customer needs.
              </p>
              <a
                href="https://restaurant-beta-roan.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient inline-flex items-center gap-2 text-white font-semibold px-5 py-2.5 rounded-lg text-sm"
              >
                View demo site
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                Simple pricing
              </h2>
              <p className="text-muted text-sm leading-relaxed">
                A starter site with your menu, hours, and contact info starts at
                $250. A full multi-page site with online ordering or
                reservations is $600-1,200. No contracts, no monthly fees unless
                you want ongoing support.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="glass rounded-2xl p-8">
              <h2 className="font-semibold text-xl mb-4">
                Let&apos;s talk
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-4">
                I&apos;m Jacob — I build websites for local businesses around KC.
                Just me, not an agency. I live in Mission.
              </p>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Email me at{" "}
                <a
                  href="mailto:cobo.cascone@gmail.com"
                  className="text-accent-light hover:underline"
                >
                  cobo.cascone@gmail.com
                </a>{" "}
                or just reply to my email. I&apos;ll get back to you within 24
                hours.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:cobo.cascone@gmail.com"
                  className="btn-gradient inline-flex items-center gap-2 text-white font-semibold px-5 py-2.5 rounded-lg text-sm"
                >
                  Send me an email
                </a>
                <Link
                  href="/services"
                  className="btn-outline text-white font-semibold px-5 py-2.5 rounded-lg text-sm"
                >
                  See all services
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Web Design for Food Trucks in Kansas City",
  description:
    "Custom websites for food trucks in the Kansas City area. Show your menu, location schedule, and booking availability to grow your following and book more private events.",
  alternates: {
    canonical: "https://builtsimple.dev/for/food-trucks",
  },
};

export default function FoodTrucksPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for Food Trucks in Kansas City",
    description: "Custom websites for food trucks in the Kansas City area.",
    provider: { "@type": "LocalBusiness", name: "BuiltSimple", url: "https://builtsimple.dev" },
    areaServed: { "@type": "City", name: "Kansas City" },
    serviceType: "Web Development for Food Trucks",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-accent/10 border-b border-accent/20 py-3 px-6 text-center">
        <p className="text-sm text-accent-light font-medium">
          People searching for food trucks want to know your menu, where you'll be this week, and whether you do private events — all in under 30 seconds. A website that delivers that information instantly builds your following and fills your booking calendar. Free mockup, no commitment.
        </p>
      </section>

      <section className="relative pt-16 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              For Food Trucks in KC
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Web Design for{" "}
              <span className="gradient-text">Food Trucks</span> in Kansas City
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Food truck customers are loyal once they
              find you — but first they have to find you.
              Someone who tries your food at a festival
              wants to know where you will be next week.
              A company planning their office lunch wants
              to see your menu and pricing before they
              book you. An event planner wants to know
              your minimum headcount, service setup, and
              whether you can accommodate dietary restrictions.
              A food truck website that shows your menu
              with photos, posts your weekly location
              schedule, and makes private event booking
              easy turns one-time customers into regulars
              and event leads into booked dates.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">
                What people look for on a food truck website
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Menu with photos — full menu items, prices, dietary options (vegan, gluten-free, allergens)",
                  "Location schedule — where you'll be this week, recurring stops, festival appearances",
                  "Private events — corporate lunches, weddings, parties — minimum headcount, service setup",
                  "Ordering — online ordering, pre-order options, catering packages",
                  "Story — who you are, what inspired the truck, what makes your food different",
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
                What your food truck website would include
              </h2>
              <ul className="space-y-3 text-muted text-sm">
                {[
                  "Menu page — items with photos, prices, dietary labels, seasonal specials",
                  "Location schedule — weekly calendar, recurring locations, upcoming events and festivals",
                  "Private events — catering packages, minimum headcount, service style, what's included",
                  "Photo gallery — truck photos, food close-ups, events and crowds",
                  "About section — your story, cuisine inspiration, what makes the food worth seeking out",
                  "Booking form with event type, date, guest count, location, dietary needs, budget range",
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
                &ldquo;We had a big Instagram following
                but no real way to show our menu, post
                our schedule, or take event inquiries.
                People would DM us for everything and
                it was hard to manage. The new site with
                a full menu with photos, a weekly schedule
                page, and a catering form changed our
                operation completely. We went from chasing
                event leads to getting organized inquiries
                with all the information we needed to give
                a quote in one reply.&rdquo;
              </blockquote>
              <p className="text-xs text-muted mt-3">
                — M. Torres, food truck owner, Kansas City, MO
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-xl mb-4">Simple pricing</h2>
              <p className="text-muted text-sm leading-relaxed">
                A food truck site with menu, schedule, and
                contact form starts at $225. A full site
                with gallery, catering packages, and private
                event booking form is $425–$850.
                One private event covers the cost.
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

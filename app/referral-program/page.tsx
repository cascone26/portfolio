import type { Metadata } from "next";
import FadeIn from "../components/fade-in";
import ReferralForm from "./referral-form";

export const metadata: Metadata = {
  title: "Referral Program — Earn $200 Per Client",
  description:
    "Refer a small business to BuiltSimple and earn $200 when they sign a website contract. KC-based, real contracts, no fine print.",
  alternates: {
    canonical: "https://builtsimple.dev/referral-program",
  },
  openGraph: {
    title: "Refer a Client, Earn $200 — BuiltSimple",
    description:
      "Know a small business that needs a website? Refer them to BuiltSimple and earn $200 when they sign. No limits, no expiry.",
    url: "https://builtsimple.dev/referral-program",
    siteName: "BuiltSimple",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refer a Client, Earn $200 — BuiltSimple",
    description:
      "Know a small business that needs a website? Refer them and earn $200 when they sign a contract with BuiltSimple.",
  },
};

const steps = [
  {
    number: "01",
    title: "Fill out the form below with their contact info",
    description:
      "Give us your info and the business you're referring — name, contact, and why you think they need a website.",
  },
  {
    number: "02",
    title: "We reach out and give them a quote",
    description:
      "I'll contact the business directly, give them a free honest assessment, and handle everything from there.",
  },
  {
    number: "03",
    title: "If they hire us, you get $200",
    description:
      "As soon as your referral signs a website contract with BuiltSimple, I'll send you $200 via PayPal or Venmo.",
  },
];

const whoToRefer = [
  "Local businesses without a website",
  "Businesses with outdated or broken sites",
  "Restaurants and food & drink spots",
  "Salons, spas, and beauty businesses",
  "Contractors and home service providers",
  "Fitness studios, gyms, and trainers",
];

const faqs = [
  {
    q: "How do I get paid?",
    a: "Via PayPal or Venmo — your choice. Just include your preferred handle when you submit the form, or I'll ask when the time comes.",
  },
  {
    q: "Is there a limit on referrals?",
    a: "No limit at all. Refer as many businesses as you want. Every one that signs a contract earns you $200.",
  },
  {
    q: "When do I get paid?",
    a: "As soon as your referral signs a website contract with BuiltSimple. Not when the site launches — when they sign.",
  },
  {
    q: "What if they already contacted you?",
    a: "If the business is already in my pipeline or has contacted me directly, the referral bonus won't apply. First contact wins.",
  },
];

export default function ReferralProgramPage() {
  const referralSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Referral Program — BuiltSimple",
    description:
      "Refer a client to BuiltSimple and earn $200 when they sign a website contract. KC-based web developer, real contracts, no fine print.",
    url: "https://builtsimple.dev/referral-program",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "BuiltSimple",
      url: "https://builtsimple.dev",
      telephone: "816-520-5652",
      email: "cobo.cascone@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mission",
        addressRegion: "KS",
        addressCountry: "US",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(referralSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-12 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-blue-500/[0.05] blur-[100px] pointer-events-none" />
        <div className="absolute top-10 right-[10%] w-[350px] h-[250px] rounded-full bg-purple-500/[0.04] blur-[100px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-accent-light bg-accent/10 border border-accent/20 rounded-full px-3 py-1 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-light inline-block" />
              Referral Program
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Refer a Business,{" "}
              <span className="gradient-text-blue">Earn $200</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-muted text-lg leading-relaxed max-w-xl mb-7">
              Know a business that needs a website? Refer them to BuiltSimple. If they become a
              client, you get <strong className="text-foreground">$200</strong>. Simple.
            </p>
            <a
              href="#referral-form"
              className="inline-flex items-center gap-2 btn-gradient text-white font-semibold px-5 py-2.5 rounded-lg text-sm"
            >
              Refer a Business →
            </a>
          </FadeIn>
        </div>
      </section>

      {/* How it works */}
      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-bold mb-8 tracking-tight">How it works</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-4">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.08}>
                <div className="glass rounded-2xl p-6 h-full">
                  <p className="text-3xl font-bold gradient-text-blue mb-3 leading-none">
                    {step.number}
                  </p>
                  <h3 className="font-semibold mb-2 text-sm leading-snug">{step.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Who to refer */}
      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-bold mb-6 tracking-tight">Who to refer</h2>
            <div className="glass rounded-2xl p-6">
              <div className="grid sm:grid-cols-2 gap-3">
                {whoToRefer.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-light mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Form + trust signals */}
      <section id="referral-form" className="pb-16 px-6">
        <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6">
          <FadeIn className="md:col-span-2">
            <div>
              <h2 className="text-xl font-bold mb-5">Submit a referral</h2>
              <ReferralForm />
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="space-y-5">
              <div className="glass rounded-2xl p-6">
                <h2 className="font-semibold mb-4 text-sm">Why it works</h2>
                <div className="space-y-4">
                  {[
                    { label: "KC-based", detail: "Local business, real accountability" },
                    { label: "Real contracts", detail: "Signed agreements, not handshake deals" },
                    { label: "No fine print", detail: "$200 paid when they sign — period" },
                    { label: "No cap", detail: "Refer as many clients as you want" },
                  ].map((signal) => (
                    <div key={signal.label}>
                      <p className="text-foreground text-sm font-medium">{signal.label}</p>
                      <p className="text-muted text-xs leading-relaxed mt-0.5">{signal.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <h2 className="font-semibold mb-2 text-sm">Questions?</h2>
                <p className="text-muted text-sm leading-relaxed">
                  Email me at{" "}
                  <a
                    href="mailto:cobo.cascone@gmail.com"
                    className="text-accent-light link-underline"
                  >
                    cobo.cascone@gmail.com
                  </a>{" "}
                  or call{" "}
                  <a href="tel:816-520-5652" className="text-accent-light link-underline">
                    816-520-5652
                  </a>
                  .
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-bold mb-8 tracking-tight">FAQ</h2>
          </FadeIn>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FadeIn key={faq.q} delay={i * 0.07}>
                <div className="glass rounded-2xl p-6">
                  <h3 className="font-semibold mb-2 text-sm">{faq.q}</h3>
                  <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

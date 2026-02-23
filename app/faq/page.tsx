import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about working with Jacob Cascone — pricing, timelines, process, and what to expect.",
};

const faqs = [
  {
    q: "I'm not tech-savvy — is that okay?",
    a: "That's exactly who I work with. I handle everything technical and explain things in plain English. You don't need to know anything about code or hosting.",
  },
  {
    q: "How long does a website take?",
    a: "Usually 1-2 weeks from when we agree on the plan. Simple sites can be done faster. I'll give you a clear timeline before we start.",
  },
  {
    q: "What if I already have a website?",
    a: "I can work with what you have — refresh it, fix it, or add features like a chatbot or contact form. That's what the Website Refresh service is for.",
  },
  {
    q: "Do I need to sign a long contract?",
    a: "Nope. One-time projects are simple agreements. No long-term commitments unless you choose the monthly retainer.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Just a conversation about your business — what you do, who your customers are, and what you need. I'll handle the rest. If you have logos, photos, or content you want used, that helps too.",
  },
  {
    q: "Can you help me show up on Google?",
    a: "Yes. I can set up and optimize your Google Business Profile, which is the single most important thing for local search visibility. I also build all websites with SEO basics included.",
  },
  {
    q: "What if I need changes after the site is done?",
    a: "Small tweaks within the first week are included. After that, you can either make changes yourself (I'll show you how) or hop on the monthly retainer for ongoing support.",
  },
  {
    q: "How do payments work?",
    a: "50% upfront, 50% on completion for one-time projects. Monthly retainers are billed monthly. No surprise fees.",
  },
  {
    q: "Do you work with businesses outside Kansas City?",
    a: "Absolutely. Everything I do is remote-friendly. KC businesses get priority, but I work with clients anywhere.",
  },
  {
    q: "What makes you different from an agency?",
    a: "You talk directly to the person building your site — me. No account managers, no layers. Faster communication, lower overhead, lower prices, and I actually care about your project.",
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="pt-20 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">FAQ</h1>
          <p className="text-muted text-lg">
            Common questions about working together.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto space-y-1">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="border-b border-border py-6"
            >
              <h2 className="font-semibold text-lg mb-2">{faq.q}</h2>
              <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-16 bg-card border border-border rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Still have questions?</h2>
          <p className="text-muted mb-6">
            I&apos;m happy to chat — no commitment required.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}

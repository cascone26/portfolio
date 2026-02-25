import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../components/fade-in";
import Accordion from "../components/accordion";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about working with BuiltSimple — pricing, timelines, process, and what to expect.",
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
      <section className="relative pt-12 pb-12 px-6">
        <div className="absolute top-0 right-1/3 w-[500px] h-[300px] rounded-full bg-blue-500/[0.05] blur-[100px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              <span className="gradient-text-blue">FAQ</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-muted text-lg leading-relaxed">
              Common questions about working together.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <Accordion items={faqs} />
          </FadeIn>

          <FadeIn>
            <div className="relative mt-16 glass rounded-2xl p-10 text-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[150px] rounded-full bg-accent/[0.06] blur-[60px] pointer-events-none" />
              <h2 className="text-2xl font-bold mb-3 tracking-tight relative">
                Still have questions?
              </h2>
              <p className="text-muted mb-6 relative">
                I&apos;m happy to chat — no commitment required.
              </p>
              <Link
                href="/contact"
                className="btn-gradient inline-block text-white font-semibold px-6 py-2.5 rounded-lg text-sm relative"
              >
                Get in touch
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

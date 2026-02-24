import type { Metadata } from "next";
import FadeIn from "../components/fade-in";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Jacob Cascone for a free website audit, AI automation consultation, or any web development project.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-12 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-blue-500/[0.05] blur-[100px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Let&apos;s <span className="gradient-text-blue">talk.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-muted text-lg leading-relaxed">
              Tell me about your business and I&apos;ll give you a free honest
              assessment — no pitch, no pressure.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6">
          <FadeIn className="md:col-span-2">
            <form
              action="https://formspree.io/f/xdalydzq"
              method="POST"
              className="glass rounded-2xl p-7 space-y-5"
            >
              <div>
                <label htmlFor="name" className="text-sm text-muted block mb-2">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full input-field rounded-xl px-4 py-3 text-foreground placeholder-muted/40"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-muted block mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full input-field rounded-xl px-4 py-3 text-foreground placeholder-muted/40"
                />
              </div>
              <div>
                <label htmlFor="business" className="text-sm text-muted block mb-2">
                  Business & what you do
                </label>
                <input
                  id="business"
                  type="text"
                  name="business"
                  placeholder="e.g. Joe's Plumbing — residential plumbing in KC"
                  className="w-full input-field rounded-xl px-4 py-3 text-foreground placeholder-muted/40"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm text-muted block mb-2">
                  What do you need?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="New website, fix my existing site, show up on Google, automate something..."
                  rows={4}
                  className="w-full input-field rounded-xl px-4 py-3 text-foreground placeholder-muted/40 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full btn-gradient text-white font-semibold py-3.5 rounded-xl"
              >
                Send message
              </button>
            </form>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="space-y-5">
              <div className="glass rounded-2xl p-6">
                <h2 className="font-semibold mb-5">Contact Info</h2>
                <div className="space-y-5 text-sm">
                  <div>
                    <p className="text-muted text-xs uppercase tracking-wider mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:816-520-5652"
                      className="text-foreground hover:text-accent-light transition-colors"
                    >
                      816-520-5652
                    </a>
                  </div>
                  <div>
                    <p className="text-muted text-xs uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:cobo.cascone@gmail.com"
                      className="text-foreground hover:text-accent-light transition-colors"
                    >
                      cobo.cascone@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-muted text-xs uppercase tracking-wider mb-1">
                      Location
                    </p>
                    <p className="text-foreground">Mission, KS</p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <h2 className="font-semibold mb-2">Prefer email?</h2>
                <p className="text-muted text-sm leading-relaxed">
                  Send me an email directly at{" "}
                  <a
                    href="mailto:cobo.cascone@gmail.com"
                    className="text-accent-light link-underline"
                  >
                    cobo.cascone@gmail.com
                  </a>{" "}
                  and I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

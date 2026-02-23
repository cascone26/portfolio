import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Jacob Cascone for a free website audit, AI automation consultation, or any web development project.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-20 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s talk.
          </h1>
          <p className="text-muted text-lg">
            Tell me about your business and I&apos;ll give you a free honest
            assessment — no pitch, no pressure.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Contact form */}
          <div className="md:col-span-2">
            <form
              action="https://formspree.io/f/cobo.cascone@gmail.com"
              method="POST"
              className="bg-card border border-border rounded-xl p-6 space-y-4"
            >
              <div>
                <label className="text-sm text-muted block mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted/50 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-muted block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted/50 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-muted block mb-2">
                  Business & what you do
                </label>
                <input
                  type="text"
                  name="business"
                  placeholder="e.g. Joe's Plumbing — residential plumbing in KC"
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted/50 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-muted block mb-2">
                  What do you need?
                </label>
                <textarea
                  name="message"
                  required
                  placeholder="New website, fix my existing site, show up on Google, automate something..."
                  rows={4}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted/50 focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-dark text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Send message
              </button>
            </form>
          </div>

          {/* Contact info sidebar */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="font-semibold mb-4">Contact Info</h2>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-muted mb-1">Phone</p>
                  <a
                    href="tel:816-520-5652"
                    className="text-foreground hover:text-accent transition-colors"
                  >
                    816-520-5652
                  </a>
                </div>
                <div>
                  <p className="text-muted mb-1">Email</p>
                  <a
                    href="mailto:cobo.cascone@gmail.com"
                    className="text-foreground hover:text-accent transition-colors"
                  >
                    cobo.cascone@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-muted mb-1">Location</p>
                  <p className="text-foreground">Mission, KS</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="font-semibold mb-2">Prefer email?</h2>
              <p className="text-muted text-sm">
                Send me an email directly at{" "}
                <a
                  href="mailto:cobo.cascone@gmail.com"
                  className="text-accent hover:underline"
                >
                  cobo.cascone@gmail.com
                </a>{" "}
                and I&apos;ll get back to you within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

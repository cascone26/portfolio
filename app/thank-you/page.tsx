import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../components/fade-in";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your purchase was successful. Your product is on its way.",
};

export default function ThankYouPage() {
  return (
    <section className="relative pt-20 pb-32 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-blue-500/[0.07] blur-[120px] pointer-events-none" />
      <div className="max-w-2xl mx-auto relative text-center">
        <FadeIn>
          <div className="w-16 h-16 rounded-2xl bg-green-500/15 flex items-center justify-center mx-auto mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-400"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Thank you for your purchase!
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-muted text-lg leading-relaxed mb-3">
            Your product will be delivered to your email within 5 minutes.
          </p>
          <p className="text-muted text-sm leading-relaxed mb-10">
            If you don&apos;t see it, check your spam folder. Still nothing?{" "}
            <a href="/contact" className="text-accent-light hover:underline">
              Contact me
            </a>{" "}
            and I&apos;ll get it to you right away.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <Link
            href="/products"
            className="btn-outline text-foreground font-medium px-6 py-2.5 rounded-lg text-sm"
          >
            Browse more products
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
